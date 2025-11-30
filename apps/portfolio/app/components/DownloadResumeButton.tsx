'use client';

import PFLButton from './PFLButton';

export default function DownloadResumeButton() {
  const downloadResume = () => {
    const URL = '/resume_updated_swe_Nov_25_black.pdf';
    window.open(URL, '_blank');
  };
  return <PFLButton onClick={downloadResume}> Download Resume</PFLButton>;
}
