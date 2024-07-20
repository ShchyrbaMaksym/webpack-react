import React from 'react';
import { useTranslation } from 'react-i18next';
import './contact.scss';

const Contacts = () => {
  const { t } = useTranslation();

  return (
    <div className="content">
    <h1>{t('contact.welcome')}</h1>
  </div>
  );
};

export default Contacts;
