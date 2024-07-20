import React from 'react';
import { useTranslation } from 'react-i18next';
import './home.scss';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="content">
    <h1>{t('home.welcome')}</h1>
  </div>
  );
};

export default Home;
