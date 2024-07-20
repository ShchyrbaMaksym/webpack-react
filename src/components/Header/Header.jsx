import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../ThemeContext';
import './header.scss';

const Header = ({ changeLanguage }) => {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <div className="header__logo logo">
            <Link to="/">{t('header.logo')}</Link>
          </div>
          <button onClick={toggleMenu} className="header__mobile-menu-toggle">
            ☰
          </button>
        
          <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          <button onClick={toggleTheme} className="header__theme-toggle">
               {theme === 'light' ? t('header.dark') : t('header.light')}
            </button>
            <ul className="header__nav_list">
              <li className="header__nav_item">
                <Link className="header__nav_link" to="/services">{t('header.services')}</Link>
              </li>
              <li className="header__nav_item">
                <Link className="header__nav_link" to="/portfolio">{t('header.portfolio')}</Link>
              </li>
              <li className="header__nav_item">
                <Link className="header__nav_link" to="/partner-program">{t('header.partner-program')}</Link>
              </li>
              <li className="header__nav_item">
                <Link className="header__nav_link" to="/blog">{t('header.blog')}</Link>
              </li>
              <li className="header__nav_item">
                <Link className="header__nav_link" to="/contacts">{t('header.contacts')}</Link>
              </li>
            </ul>
            <div className="header__lang">
              <button onClick={() => changeLanguage('en')}>eng</button>
              <button onClick={() => changeLanguage('uk')}>укр</button>
            </div>
            <div className="header__contact">
              <a href="#">{t('header.contactus')}</a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
