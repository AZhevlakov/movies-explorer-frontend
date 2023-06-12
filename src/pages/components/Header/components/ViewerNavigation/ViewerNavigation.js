import './ViewerNavigation.css';
import React from 'react';
import MediaQuery from 'react-responsive';
import Navigation from '../Navigation/Navigation';

const ViewerNavigation = ({ isBurgerOpen, setIsBurgerOpen }) => {
  return (
    <>
      <MediaQuery minWidth={769}>
        <Navigation />
      </MediaQuery>
      <MediaQuery maxWidth={768}>
        <button
          className="link header__button-burger-menu"
          onClick={() => setIsBurgerOpen(!isBurgerOpen)}
        />
      </MediaQuery>
    </>
  );
};

export default ViewerNavigation;
