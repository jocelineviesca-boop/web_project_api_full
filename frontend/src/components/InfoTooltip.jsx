import React from 'react';
import successIcon from '../images/success.svg';
import errorIcon from '../images/error.svg';

function InfoTooltip({ isOpen, onClose, status }) {
  const isSuccess = status === 'success';

  if (!isOpen) return null;

  return (
    <div 
      className={`popup ${isOpen ? 'popup_opened' : ''}`} 
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="popup__container popup__container_type_tooltip">
        <button type="button" className="popup__close" onClick={onClose} />
        <img
          src={isSuccess ? successIcon : errorIcon}
          alt="Estado de registro"
          className="popup__tooltip-icon"
        />
        <p className="popup__tooltip-text">
          {isSuccess
            ? '¡Correcto! Ya estás registrado.'
            : 'Uy, algo salió mal. Por favor, inténtalo de nuevo.'}
        </p>
      </div>
    </div>
  );
}

export default InfoTooltip;