import React, { useState } from 'react';
import ViewerNavigation from './components/ViewerNavigation/ViewerNavigation';
import UserNavigation from './components/UserNavigation/UserNavigation';
import BurgerMenu from './components/BurgerMenu/BurgerMenu';
import Logo from '../../../components/Logo/Logo';
import './Header.css';

const Header = ({ isViewer, className }) => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className={`section header__content ${className}`}>
          <Logo />
          <nav className="header__menu">
            {
              isViewer
                ?
                <ViewerNavigation isBurgerOpen={isBurgerOpen} setIsBurgerOpen={setIsBurgerOpen} />
                :
                <UserNavigation />
            }
          </nav>
        </div>
      </header >
      <BurgerMenu isBurgerOpen={isBurgerOpen} setIsBurgerOpen={setIsBurgerOpen} />
    </>
  );
};

export default Header;
