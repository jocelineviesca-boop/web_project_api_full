import React, { useState, useContext, useEffect } from 'react';
import Popup from '../Popup/Popup.jsx';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

export default function EditProfile({ isOpen, onClose, onUpdateUser }) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    setName(currentUser.name || '');
    setDescription(currentUser.about || '');
  }, [currentUser, isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({ name, about: description });
  }

  if (!isOpen) return null;

  return (
    <Popup onClose={onClose} title="Editar perfil">
      <form className="popup__form" id="edit-profile-form" onSubmit={handleSubmit}>
        <label className="popup__field">
          <input
            className="popup__input popup__input_type_name"
            id="name"
            name="name"
            placeholder="Nombre"
            type="text"
            minLength="2"
            maxLength="40"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <span className="popup__error" id="name-error"></span>
        </label>
        <label className="popup__field">
          <input
            className="popup__input popup__input_type_description"
            id="description"
            name="description"
            placeholder="Acerca de mí"
            type="text"
            minLength="2"
            maxLength="200"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <span className="popup__error" id="description-error"></span>
        </label>
        <button className="button popup__button" type="submit">Guardar</button>
      </form>
    </Popup>
  );
}