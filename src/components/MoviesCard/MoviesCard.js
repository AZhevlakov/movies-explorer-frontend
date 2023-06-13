import './MoviesCard.css';
import React, { useState } from 'react';
import movieImage from '../../assets/images/temp-image.jpg';

const MoviesCard = ({ card, isSaved=false }) => {
  const [isLiked, setIsLiked] = useState(false);
  const cardLikeButtonClassName = (
    `link ${!isSaved ? ('card__like' + (isLiked ? ' card__like_active' : '')) : 'card__dislike'}`
  );

  return (
    <li className="card">
      <h2 className="card__name">
        33 слова о дизайне
        {/* {card.name} */}
      </h2>
      <p className="card__duration">
        1ч 47м
        {/* {card.duration} */}
      </p>
      <button
        className={cardLikeButtonClassName}
        onClick={() => setIsLiked(!isLiked)}
        type="button"
        aria-label="Избранное"
      />
      <img
        className="card__image"
        src={movieImage}
        // src={card.link}
        alt="33 слова о дизайне"
      // alt={card.name}
      />
    </li>
  );
};

export default MoviesCard;
