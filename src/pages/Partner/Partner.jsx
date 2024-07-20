import React from 'react';
import { useTranslation } from 'react-i18next';
import './partner.scss';

const Partner = () => {
  const { t } = useTranslation();

  return (
    <div className="content">
    <h1>{t('partner.welcome')}</h1>
  </div>
  );
};

export default Partner;
