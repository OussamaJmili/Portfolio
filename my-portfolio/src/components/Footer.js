import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import '../styles/Footer.css';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container">
        <p>
          {t('footer.copyright', { year: new Date().getFullYear() })}
        </p>
        {/* Add your social media links as needed */}
        <ul className="social-list">
          <li>
            <a href="https://www.linkedin.com/in/oussama-jmili/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin /> {t('footer.linkedin')}
            </a>
          </li>
          <li>
            <a href="https://github.com/OussamaJmili" target="_blank" rel="noopener noreferrer">
              <FaGithub /> {t('footer.github')}
            </a>
          </li>
          <li>
            <a href="mailto:oussamajmili16@gmail.com" target="_blank" rel="noopener noreferrer">
              <FaEnvelope /> {t('footer.email')}
            </a>
          </li>
          {/* <li>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </li> */}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;