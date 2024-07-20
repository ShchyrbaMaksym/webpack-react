import React from 'react';
import { useTranslation } from 'react-i18next';
import './blog.scss';

const Blog = () => {
  const { t } = useTranslation();

  return (
    <div className="content">
      <h1>{t('blog.welcome')}</h1>
    </div>
  );
};

export default Blog;
