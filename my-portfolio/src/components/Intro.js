import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Typed from 'typed.js';
import '../styles/Intro.css';

const Intro = () => {
  const { t } = useTranslation();

  const introPart1 = t('intro.part1');
  const introPart2 = t('intro.part2');
  const introPart3 = t('intro.part3');
  const tooltipText = t('tooltip.lion');
  const helloText = t('intro.hello');
  const nameText = t('intro.name');

  useEffect(() => {
    if (!introPart1) return;

    const options = {
      strings: [introPart1],
      typeSpeed: 40,
      startDelay: 500,
      backSpeed: 40,
      backDelay: 1000,
      loop: true,
    };

    const typed = new Typed('.typed-text', options);

    return () => {
      typed.destroy();
    };
  }, [introPart1]);

  return (
    <section className="intro">
      <div className="container">
        <h1>
          {helloText}{' '}
          <span className="name-tooltip">
            {nameText}
            <i className="fas fa-question-circle"></i>
            <div className="tooltip">
              <div className="tooltip-arrow"></div>
              {tooltipText}
            </div>
          </span> !
        </h1>
        <p className="typed-text"></p>
        <p>
          {introPart2}
        </p>
        <p>
          {introPart3}
        </p>
      </div>
    </section>
  );
};

export default Intro;