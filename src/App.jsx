import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './i18n';
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import Services from "./pages/Services/Services";
import Partner from "./pages/Partner/Partner";
import Blog from "./pages/Blog/Blog";
import Contacts from "./pages/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import "./styles/main.scss";

const App = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };

  return (
    <>
    <Router>
       <div className="wrapper">
       <Header changeLanguage={changeLanguage} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/partner-program" element={<Partner />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
       </div>
      </Router>
    </>
  );
};

export default App;
