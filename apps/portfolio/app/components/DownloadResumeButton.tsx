'use client'

import PFLButton from "./PFLButton"

export default function DownloadResumeButton(){
    const downloadResume = ()=>{
        const URL ="/April_2025_updated_resume_without_project.pdf"
        window.open(URL, "_blank")
      }
    return <PFLButton onClick={downloadResume}> Download Resume</PFLButton>
}