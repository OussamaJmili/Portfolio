import React from 'react';
import Intro from '../components/Intro';
import JobList from '../components/JobList';
import Projects from '../components/Projects';
import Education from '../components/Education';

const HomePage = () => {
  return (
    <main>
      <Intro />
      <JobList />
      <Projects />
      <Education />
    </main>
  );
};

export default HomePage;