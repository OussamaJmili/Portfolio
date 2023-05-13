import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/JobsPage.css';

const JobsPage = () => {
  const { t } = useTranslation();
  const jobs = t('jobs', { returnObjects: true });

  return (
    <section className="jobs-page">
      <div className="container">
        <h2 className="jobs-page-title">{t('previousJobs')}</h2>
        {jobs.map((job) => (
          <div key={job.id} className="job-details">
            <h3 className="job-title">{job.title}</h3>
            <div className="job-company">
              <img src={job.logo} alt={`${job.company} logo`} className="company-logo" />
              <p><a href={job.companyLink} target='_blank'>{job.company}</a></p>
            </div>
            <p className="job-dates">{job.dates}</p>
            <div className="job-description">
              {job.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            {job.jobSkills && (
              <div className="job-skills">
                <h4 className="skills-title">{t('Job Skills')}</h4>
                <ul className="skills-list">
                  {job.jobSkills.map((skill, index) => (
                    <li key={index} className="skill-item">{skill}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default JobsPage;