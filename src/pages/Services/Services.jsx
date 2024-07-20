import React from 'react';
import { useTranslation } from 'react-i18next';
import './services.scss';

const Services = () => {
  const { t } = useTranslation();

  return (
    <div className="content">
    <h1>{t('services.welcome')}</h1>
  </div>
  );
};

export default Services;
