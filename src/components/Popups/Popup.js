import React, { useEffect } from 'react';
import './Popup.css';

const Popup = ({ children, isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;
    const handleEscapeClose = (evt) => {
      if (evt.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscapeClose);
    return () => {
      document.removeEventListener("keydown", handleEscapeClose);
    };
  }, [isOpen, onClose]);

  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`} onMouseDown={() => onClose()}>
      <div className="popup__container" onMouseDown={e => e.stopPropagation()}>
        {children}
        <button
          onClick={() => onClose()}
          className="link popup__button-close"
          type="button"
          aria-label="Закрыть форму"
        />
      </div>
    </div>
  );
};

export default Popup;
