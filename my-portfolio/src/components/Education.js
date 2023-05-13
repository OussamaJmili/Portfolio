import React from 'react';
import EducationCard from '../components/EducationCard';
import { useTranslation } from 'react-i18next';
import '../styles/Education.css';

const Education = () => {
  const [isFlipped, setIsFlipped] = React.useState({});
  const { t } = useTranslation();

  const handleClick = (id) => {
    setIsFlipped((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const educationData = t('education.data', { returnObjects: true });

  return (
    <section className="education">
      <div className="container">
        <h2>{t('education.title')}</h2>
        <div className="card-container">
          {educationData.map((education) => (
            <EducationCard
              key={education.id}
              institution={education.institution}
              degree={education.degree}
              dates={education.dates}
              onClick={() => handleClick(education.id)}
              isFlipped={isFlipped[education.id]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;