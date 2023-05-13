import React from 'react';
import '../styles/Projects.css';
import projectData from '../data/projectData';
import ProjectCard from './ProjectCard';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation();
  const translatedProjectData = t('projects', { returnObjects: true });

  return (
    <section className="projects">
      <div className="container">
        <h2>{t('featuredProjects')}</h2>
        <div className="project-list">
          {translatedProjectData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;