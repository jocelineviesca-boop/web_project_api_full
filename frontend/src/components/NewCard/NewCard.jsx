import React, { useState } from 'react';
import Popup from '../Popup/Popup.jsx';

export default function NewCard({ isOpen, onClose, onAddPlaceSubmit }) {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlaceSubmit({ name, link });
    setName('');
    setLink('');
  }

  if (!isOpen) return null;

  return (
    <Popup onClose={onClose} title="Nuevo lugar">
      <form className="popup__form" name="card-form" id="new-card-form" onSubmit={handleSubmit}>
        <label className="popup__field">
          <input
            className="popup__input popup__input_type_card-name"
            id="card-name"
            maxLength="30"
            minLength="1"
            name="card-name"
            placeholder="Título"
            required
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <span className="popup__error" id="card-name-error"></span>
        </label>
        <label className="popup__field">
          <input
            className="popup__input popup__input_type_url"
            id="card-link"
            name="link"
            placeholder="Enlace a la imagen"
            required
            type="url"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
          <span className="popup__error" id="card-link-error"></span>
        </label>
        <button className="button popup__button" type="submit">Guardar</button>
      </form>
    </Popup>
  );
}