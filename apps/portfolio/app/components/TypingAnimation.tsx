'use client';
import React, { useEffect, useState } from 'react';

interface TypingAnimationProps {
  text: string;
  speed?: number;
  className?: string;
  cursorClassName?: string;
  onComplete?: () => void;
  restartInterval?: number;
  cursor?: boolean;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({
  text,
  speed = 100,
  className = '',
  cursorClassName = 'inline-block w-[2px] h-[1em] bg-current animate-[blink_1s_infinite]',
  onComplete,
  restartInterval,
  cursor = true,
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const resetAnimation = () => {
    setDisplayText('');
    setCurrentIndex(0);
  };

  useEffect(() => {
    // Initial animation
    resetAnimation();

    // Set up interval to restart animation if restartInterval is provided
    let interval: NodeJS.Timeout | undefined;
    if (restartInterval) {
      interval = setInterval(() => {
        resetAnimation();
      }, restartInterval);
    }

    // Cleanup interval on component unmount
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [restartInterval]);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, text, speed, onComplete]);

  return (
    <span className={className}>
      {displayText}
      {cursor && currentIndex < text.length && (
        <span className={cursorClassName}></span>
      )}
    </span>
  );
};

export default TypingAnimation; 