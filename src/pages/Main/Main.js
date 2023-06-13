import React from 'react';
import PageLayout from '../components/PageLayout/PageLayout';
import Promo from './components/Promo/Promo';
import AboutProject from './components/AboutProject/AboutProject';
import Techs from './components/Techs/Techs';
import AboutMe from './components/AboutMe/AboutMe';
import './Main.css';

const Main = () => {
  return (
    <PageLayout headerClassName="landing-header">
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
    </PageLayout>
  );
};

export default Main;
