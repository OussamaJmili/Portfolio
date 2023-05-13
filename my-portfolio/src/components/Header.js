import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBriefcase, faFile, faProjectDiagram, faBars } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import '../styles/Header.css';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  const NavLinks = () => (
    <>
      <NavLink to="/" exact className="nav-link" activeClassName="active" onClick={closeMenu}>
        <FontAwesomeIcon icon={faHome} className="nav-icon" /> {t('header.home')}
      </NavLink>
      <NavLink to="/jobs" className="nav-link" activeClassName="active" onClick={closeMenu}>
        <FontAwesomeIcon icon={faBriefcase} className="nav-icon" /> {t('header.jobs')}
      </NavLink>
      <NavLink to="/resume" className="nav-link" activeClassName="active" onClick={closeMenu}>
        <FontAwesomeIcon icon={faFile} className="nav-icon" /> {t('header.resume')}
      </NavLink>
      {/* <NavLink to="/projects" className="nav-link" activeClassName="active" onClick={closeMenu}>
        <FontAwesomeIcon icon={faProjectDiagram} className="nav-icon" /> {t('header.projects')}
      </NavLink> */}
      <LanguageSwitcher />
    </>
  );

  return (
    <header className="header">
      <Link to="/" className="logo-link">
        <div className="logo">Oussama Jmili</div>
      </Link>
      <nav className="nav desktop-nav">
        <NavLinks />
      </nav>
      <nav className={`nav mobile-nav ${menuOpen ? 'open' : ''}`}>
        <div className="menu-container">
          <NavLinks />
        </div>
      </nav>
      <button className={`burger-button`} onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      {menuOpen && <div className="overlay" onClick={closeMenu}></div>}
    </header>
  );
};

export default Header;