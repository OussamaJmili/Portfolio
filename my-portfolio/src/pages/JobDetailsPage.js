import React from 'react';
import { useParams } from 'react-router-dom';
import jobs from '../data/jobData';

const JobDetailsPage = () => {
  const { jobId } = useParams();
  const job = jobs.find((job) => job.id === parseInt(jobId));

  if (!job) {
    return <div>Job not found</div>;
  }

  return (
    <div className="job-details-page">
      <h2>{job.title}</h2>
      <p>Company: {job.company}</p>
      <p>Date: {job.dates}</p>
      <p>Description:</p>
      <p>{job.description}</p>
    </div>
  );
};

export default JobDetailsPage;