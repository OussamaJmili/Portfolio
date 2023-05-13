import React from 'react';
import ReactCardFlip from 'react-card-flip';
import '../styles/EducationCard.css';

const EducationCard = ({ institution, degree, dates, onClick, isFlipped }) => {
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div className="card-front" onClick={onClick}>
        <h3>{institution}</h3>
        <p>{degree}</p>
      </div>
      <div className="card-back" onClick={onClick}>
        <p>{degree}</p>
        <p>{dates}</p>
      </div>
    </ReactCardFlip>
  );
};

export default EducationCard;