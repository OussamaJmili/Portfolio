import React from 'react';
import { useTranslation } from 'react-i18next';
import JobCard from './JobCard';
import '../styles/JobList.css';

const JobList = () => {
  const { t } = useTranslation();
  const jobs = t('jobs', { returnObjects: true });

  return (
    <section className="job-list">
      <div className="container">
        <h2 className="job-list-title">{t('previousJobs')}</h2>
        <div className="job-card-container">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobList;