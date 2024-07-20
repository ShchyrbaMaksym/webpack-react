import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './ThemeContext';
import './i18n';
import './styles/main.scss';

const domNode = document.getElementById('root');

const root = createRoot(domNode);

root.render(
    <ThemeProvider>
        <App />
    </ThemeProvider>
);
