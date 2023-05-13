import React from 'react';
import '../styles/ProjectCard.css';
import { useTranslation } from 'react-i18next';

const ProjectCard = ({ project }) => {
  const { t } = useTranslation();

  return (
    <div className="project">
      <div className="project-content">
        <span className="project-icon">{project.icon}</span>
        <h3 className="project-title">{project.title}</h3>
      </div>
      <p className="project-description">{project.description}</p>
      <p className="project-time">{t('completed')}: {project.time}</p>
      <p className='project-link'>{t('github')}: <a target='_blank' rel='noreferrer' href={project.projectLink} >{project.projectLink}</a> </p>
      <div className="project-skills">
        <strong>{t('skills')}:</strong>
        <ul>
          {project.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;