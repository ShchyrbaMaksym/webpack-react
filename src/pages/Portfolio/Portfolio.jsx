import React from 'react';
import { useTranslation } from 'react-i18next';
import './portfolio.scss';

const Portfolio = () => {
  const { t } = useTranslation();

  return (
    <div className="content">
    <h1>{t('portfolio.welcome')}</h1>
  </div>
  );
};

export default Portfolio;
