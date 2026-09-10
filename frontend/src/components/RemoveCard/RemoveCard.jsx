import React from 'react';

export default function RemoveCard() {
  return (
    <form className="popup__form" name="confirm-delete" noValidate>
      <button className="button popup__button" type="submit">
        Sí
      </button>
    </form>
  );
}