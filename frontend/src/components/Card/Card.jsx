import React, { useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

export default function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = (card.owner._id || card.owner) === currentUser._id;
  const isLiked = card.likes?.some((i) => (i._id || i) === currentUser._id);

  const cardLikeButtonClassName = `card__like-button ${isLiked ? 'card__like-button_is-active' : ''}`;

  return (
    <li className="card">
      <img 
        className="card__image" 
        src={card.link} 
        alt={card.name} 
        onClick={() => onCardClick(card)}
      />
      {isOwn && (
        <button
          aria-label="Delete card"
          className="card__delete-button"
          type="button"
          onClick={() => onCardDelete(card)}
        />
      )}
      <div className="card__description">
        <h2 className="card__title">{card.name}</h2>
        <button
          aria-label="Like card"
          type="button"
          className={cardLikeButtonClassName}
          onClick={() => onCardLike(card)}
        />
      </div>
    </li>
  );
}