import React from 'react';
import './PopupTrailer.css';
import Popup from '../Popup';

const PopupTrailer = ({ isOpen, onClose, card }) => {
  if (card.trailerLink) {
    const youtubeID = card.trailerLink.substring((card.trailerLink.indexOf('?v=') + 3));

    return (
      <Popup isOpen={isOpen} onClose={onClose}>
        <iframe
          className='popup__trailer'
          title='Youtube player'
          width="720"
  height="405"
          src={`https://youtube.com/embed/${youtubeID}`}
          allowFullScreen
        />
      </Popup>
    );
  }
};

export default PopupTrailer;
