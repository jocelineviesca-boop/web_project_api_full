import React from 'react';
import Popup from '../Popup/Popup.jsx';

export default function ImagePopup({ card, onClose }) {
  if (!card) return null;

  return (
    <Popup onClose={onClose} title="">
      <img alt={card.name} className="popup__image" src={card.link} />
      <p className="popup__caption">{card.name}</p>
    </Popup>
  );
}