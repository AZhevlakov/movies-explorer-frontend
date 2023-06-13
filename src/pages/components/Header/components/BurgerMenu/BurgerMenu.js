import Navigation from '../Navigation/Navigation';
import './BurgerMenu.css';
import React, { useEffect } from 'react';

const BurgerMenu = ({ isBurgerOpen, setIsBurgerOpen }) => {
  useEffect(() => {
    if (!isBurgerOpen) return;
    const handleEscapeClose = (evt) => {
      if (evt.key === "Escape") setIsBurgerOpen(false);
    };
    document.addEventListener("keydown", handleEscapeClose);
    return () => {
      document.removeEventListener("keydown", handleEscapeClose);
    };
  }, [isBurgerOpen, setIsBurgerOpen]);
  return (
    <div className={`burger-menu ${isBurgerOpen ? "burger-menu_active" : ""}`} onMouseDown={() => setIsBurgerOpen(false)}>
      <div className={`burger-menu__container ${isBurgerOpen ? "burger-menu__container_active" : ""}`} onMouseDown={e => e.stopPropagation()}>
        <button
          onClick={() => setIsBurgerOpen(false)}
          className="link burger-menu__button-close"
          type="button"
          aria-label="Закрыть форму"
        />
        <Navigation isBurgerOpen={isBurgerOpen} />
      </div>
    </div>
  );
};

export default BurgerMenu;
