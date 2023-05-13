import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/JobCard.css';

const JobCard = ({ job }) => {
  return (
    <Link to={`/jobs#${job.id}`} className="job-card-link">
      <div className="job-card">
        <h3 className="job-title">{job.title}</h3>
        <p className="job-company">{job.company}</p>
        <p className="job-dates">{job.dates}</p>
      </div>
    </Link>
  );
};

export default JobCard;