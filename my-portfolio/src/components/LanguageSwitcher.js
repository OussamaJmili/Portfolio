import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import "../styles/LanguageSwitcher.css";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const storedLanguage = localStorage.getItem('language') || i18n.language;
  const [isFrench, setIsFrench] = useState(storedLanguage === 'fr');

  useEffect(() => {
    const updateLanguage = () => {
      i18n.changeLanguage(storedLanguage);
    };

    if (i18n.language !== storedLanguage) {
      updateLanguage();
    }
  }, [i18n, storedLanguage]);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem('language', language);
  };

  const handleChange = (e) => {
    const newLanguage = e.target.checked ? 'fr' : 'en';
    changeLanguage(newLanguage);
    setIsFrench(newLanguage === 'fr');
  };

  return (
    <div className="language-switcher">
      <label className="switch">
        <input
          type="checkbox"
          onChange={handleChange}
          checked={isFrench}
        />
        <span className="slider round">
          <span className="slider-text en">EN</span>
          <span className="slider-text fr">FR</span>
        </span>
      </label>
    </div>
  );
};

export default LanguageSwitcher;