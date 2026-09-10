import React, { useRef } from 'react';
import Popup from '../Popup/Popup.jsx';

export default function EditAvatar({ isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({ avatar: avatarRef.current.value });
  }

  if (!isOpen) return null;

  return (
    <Popup onClose={onClose} title="Cambiar foto de perfil">
      <form className="popup__form" id="avatar-form" onSubmit={handleSubmit}>
        <label className="popup__field">
          <input
            ref={avatarRef}
            id="avatar-url"
            className="popup__input"
            name="avatar"
            placeholder="Enlace a la imagen de perfil"
            required
            type="url"
          />
          <span className="popup__error" id="avatar-url-error"></span>
        </label>
        <button className="button popup__button" type="submit">Guardar</button>
      </form>
    </Popup>
  );
}