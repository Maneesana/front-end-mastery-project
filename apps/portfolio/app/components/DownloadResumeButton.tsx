'use client';

import PFLButton from './PFLButton';

export default function DownloadResumeButton() {
  const downloadResume = () => {
    const URL = '/DotNet_FullStack_Resume_Updated.pdf';
    window.open(URL, '_blank');
  };
  return <PFLButton onClick={downloadResume}> Download Resume</PFLButton>;
}
