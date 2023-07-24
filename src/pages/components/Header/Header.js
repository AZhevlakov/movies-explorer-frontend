import React, { useContext, useState } from 'react';
import ViewerNavigation from './components/ViewerNavigation/ViewerNavigation';
import UserNavigation from './components/UserNavigation/UserNavigation';
import BurgerMenu from './components/BurgerMenu/BurgerMenu';
import Logo from '../../../components/Logo/Logo';
import './Header.css';
import { AuthContext } from '../../../contexts/AuthContext';

const Header = ({ className }) => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const { currentUser } = useContext(AuthContext);

  return (
    <>
      <header className="header">
        <div className={`section header__content ${className}`}>
          <Logo />
          <nav className="header__menu">
            {
              currentUser
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
