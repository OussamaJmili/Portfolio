import React from 'react';
import '../styles/ResumePage.css'; 
import { FaEnvelope, FaPhone, FaGlobe, FaLinkedin, FaDownload, FaGithub } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const ReactPage = () => {
  const { t } = useTranslation();
  return (
  <div className="resume">
    <a href="../Resume.pdf" download className="download-button">
      <FaDownload /> <span>{t('resume.downloadResume')}</span>
    </a>
<div className="resume-header">
      <div className="header-left">
        <h1 className="name">Oussama Jmili</h1>
        <h2 className="title">{t('resume.title')}</h2>
      </div>
      <div className="header-right">
        <p className="contact"><FaEnvelope /> <a href="mailto:oussamajmili16@gmail.com">oussamajmili16@gmail.com</a></p>
        <p className="contact"><FaPhone /> +1 438 508 46 15</p>
        <p className="contact"><FaGlobe /> <a href="https://www.oussamajmili.com" target='_blank'>oussamajmili.com</a></p>
        <p className="contact"><FaLinkedin /> <a href="https://www.linkedin.com/in/oussama-jmili" target='_blank'>oussama-jmili</a></p>
        <p className="contact"><FaGithub /> <a href="https://github.com/OussamaJmili" target='_blank'>Oussama Jmili</a></p>
      </div>
    </div>
    <p className="resume-intro">{t('resume.intro')}</p>
    <div className="section">
        <h2 className="section-title">{t('resume.skillsTitle')}</h2>
        <div className="section-content">
        <ul>
          {t('resume.skills', { returnObjects: true }).map((skill, index) => (
            <li key={index} className="bullet-point">{skill}</li>
          ))}
        </ul>
        </div>
    </div>

    <div class="education-section">
        <div class="section-title">{t('resume.educationTitle')}</div>
        <div class="section-content">
            <div class="degree-date">
            <div class="degree">{t('resume.education.degree')}<span class="university-location">{t('resume.education.university')}</span></div>
            <div class="section-date">2020 - 2024</div>
            </div>
            <div class="courses">
                <div class="course-label">{t('resume.education.coursesLabel')}</div>
                <div className="course-list">
                  {t('resume.education.coursesList', { returnObjects: true }).map((course, index) => (
                    <div key={index}>{course}</div>
                  ))}
                </div>
            </div>
        </div>
        
    </div>

    <div className="work-section">
        <h2 className="section-title">{t('resume.workTitle')}</h2>
        <div className="section-content">
        <div class="degree-date">
            <div class="degree">{t('resume.work.role')}<span class="university-location"><span className='company-name'>{t('resume.work.company')}</span>{t('resume.work.location')}</span></div>
            <div class="section-date">{t('resume.work.dates')}</div>
        </div>
            <ul>
              {t('resume.work.tasks', { returnObjects: true }).map((task, index) => 
                  (<li className="bullet-point" key={index}>{task}</li>)
              )}
            </ul>
            <p class="job-skills"><span class="job-skills-span">{t('skills')}</span> {t('resume.work.skills', { returnObjects: true }).map((skill) => (
              skill + ", "
            ))}</p>
        </div>
    </div>
<div className="project-section">
  <h2 className="section-title">{t('resume.projectsTitle')}</h2>
  <div className="section-content">
    {t('resume.projects', { returnObjects: true }).map((project) => (
      <div key={project.id}>
        <div className="project-date">
          <div className="project-name">
            {project.name},{' '}
            <span className="project-location">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                {t('resume.githubLink')}
              </a>
            </span>
          </div>
          <div className="section-date">{project.date}</div>
        </div>
        <p>{project.description}</p>
        <ul>
          {project.tasks.map((task, index) => (
            <li className="bullet-point" key={index}>{task}</li>
          ))}
        </ul>
        <p class="job-skills"><span class="job-skills-span">{t('skills')}</span> {project.skills.map(skill => (
          skill + ", "
        )) }</p>
      </div>
    ))}
  </div>
</div>
    </div>

    
); }
export default ReactPage;