import React from 'react';
import '../styles/ResumePage.css'; 
import { FaEnvelope, FaPhone, FaGlobe, FaLinkedin, FaDownload, FaGithub } from 'react-icons/fa';


const ReactPage = () => (
  <div className="resume">
    <a href="../Resume.pdf" download className="download-button">
      <FaDownload /> <span>Download Resume</span>
    </a>
<div className="resume-header">
      <div className="header-left">
        <h1 className="name">Oussama Jmili</h1>
        <h2 className="title">Software Engineering Student</h2>
      </div>
      <div className="header-right">
        <p className="contact"><FaEnvelope /> <a href="mailto:oussamajmili16@gmail.com">oussamajmili16@gmail.com</a></p>
        <p className="contact"><FaPhone /> +1 438 508 46 15</p>
        <p className="contact"><FaGlobe /> <a href="https://www.oussamajmili.com" target='_blank'>oussamajmili.com</a></p>
        <p className="contact"><FaLinkedin /> <a href="https://www.linkedin.com/in/oussama-jmili" target='_blank'>oussama-jmili</a></p>
        <p className="contact"><FaGithub /> <a href="https://github.com/OussamaJmili" target='_blank'>Oussama Jmili</a></p>
      </div>
    </div>
    <p className="resume-intro">A highly motivated and eager third-year software engineering student seeking opportunities to learn and gain hands-on experience in the field.</p>
    <div className="section">
        <h2 className="section-title">SUMMARY OF SKILLS AND QUALIFICATIONS</h2>
        <div className="section-content">
            <ul>
                <li className="bullet-point">Operating Systems: Windows, Linux, Android</li>
                <li className="bullet-point">Applications: Word, Excel, PPT, Eclipse, Adobe, Visual Studio Code</li>
                <li className="bullet-point">Programming: Java, Html, CSS, C, C#, JavaScript, Python, React, Lisp, Prolog, GitHub, Git, Agile</li>
                <li className="bullet-point">Languages: French, English, Arabic (Standard & Moroccan), Japanese</li>
                <li className="bullet-point">Licenses & Certifications: Valid driving permit, Public Speaking certificate</li>
            </ul>
        </div>
    </div>

    <div class="education-section">
        <div class="section-title">Education</div>
        <div class="section-content">
            <div class="degree-date">
            <div class="degree">Bachelor of Software Engineering(Co-op) <span class="university-location">Concordia University, Montreal, QC</span></div>
            <div class="section-date">2020 - 2024</div>
            </div>
            <div class="courses">
                <div class="course-label">Relevant Courses:</div>
                <div class="course-list">
                    <div>COMP 248-249 | OOP- Programming</div>
                    <div>COMP 352 | Data Structures & Algorithms</div>
                </div>
            </div>
        </div>
        
    </div>

    <div className="work-section">
        <h2 className="section-title">Work Experience</h2>
        <div className="section-content">
        <div class="degree-date">
            <div class="degree">Intern, Software Engineer, <span class="university-location"><span className='company-name'>GoodFood</span>, Montreal, QC, CA</span></div>
            <div class="section-date"> May 2022 - August 2022</div>
        </div>
            <ul>
                <li className="bullet-point">Built a web app to track protein planning and get statistical data for future forecasts using Google Apps Scripts with HTML/CSS/JS.</li>
                <li className="bullet-point">Built Slack bots to automate facility reports and machine maintenance/cleaning using Slack Apps and JS.</li>
                <li className="bullet-point">Wrote scripts for the inspection department to track machine maintenance weekly and report back in Google Sheet automatically.</li>
                <li className="bullet-point">Built a web app to find loss in material planning and display errors to the director of automation.</li>
                <li className="bullet-point">Reviewed and fixed old code to include more functionality and take less time/memory.</li>
            </ul>
            <p class="job-skills"><span class="job-skills-span">Skills</span> JavaScript, Web Application Development, Google Apps Script, API Integrations, Data Visualization, Slack Bot Integration, Google Sheets, Problem Solving, Communication, Google Sheets Automation, HTML5, Inventory Management</p>
        </div>
    </div>
    <div className="project-section">
  <h2 className="section-title">Projects</h2>
  <div className="section-content">
    <div className="project-date">
      <div className="project-name">Professional Networking Platform, <span className="project-location"><a href="https://github.com/OussamaJmili/Professional-Networking-Platform" target='_blank'>GitHub Link</a></span></div>
      <div className="section-date">April 2023</div>
    </div>
    <p>A LinkedIn-inspired platform for professional connections and collaboration.</p>
    <ul>
      <li className="bullet-point">Developed a networking platform leveraging ReactJS, Redux, and Firebase to connect professionals and promote collaboration.</li>
    </ul>
    <p class="job-skills"><span class="job-skills-span">Skills</span> ReactJS, Redux, Firebase, Firestore, Responsive Design, Scalable Architecture</p>
    <div className="project-date">
      <div className="project-name">ShopBright, <span className="project-location"><a href="https://github.com/OussamaJmili/ShopBright" target='_blank'>GitHub Link</a></span></div>
      <div className="section-date">April 2022</div>
    </div>
    <p>An Amazon-like e-commerce website for seamless, convenient, and safe online shopping.</p>
    <ul>
      <li className="bullet-point">Developed a comprehensive e-commerce website using ReactJS and Firebase, facilitating seamless browsing and purchasing experience.</li>
    </ul>
    <p class="job-skills"><span class="job-skills-span">Skills</span> ReactJS, Bootstrap, Firebase, HTML, CSS, JavaScript</p>
  </div>
</div>
    </div>
);
export default ReactPage;