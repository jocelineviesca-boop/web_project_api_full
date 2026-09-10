import React, { useContext } from 'react';
import Card from '../Card/Card.jsx';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

export default function Main({
  onEditProfileClick,
  onAddPlaceClick,
  onEditAvatarClick,
  onCardClick,
  cards,
  onCardLike,
  onCardDelete,
}) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile page__section">
        <div className="profile__image-container">
          <img className="profile__image" src={currentUser.avatar} alt="Avatar del usuario" />
          <button 
            className="profile__avatar-edit-button" 
            type="button" 
            aria-label="Editar avatar"
            onClick={onEditAvatarClick}
          />
        </div>
        <div className="profile__info">
          <h1 className="profile__title">{currentUser.name}</h1>
          <button
            aria-label="Editar perfil"
            className="profile__edit-button"
            type="button"
            onClick={onEditProfileClick}
          />
          <p className="profile__description">{currentUser.about}</p>
        </div>
        <button
          aria-label="Add card"
          className="profile__add-button"
          type="button"
          onClick={onAddPlaceClick}
        />
      </section>

      <section className="cards page__section">
        <ul className="cards__list">
          {cards.map((card) => (
            <Card 
              key={card._id} 
              card={card} 
              onCardClick={onCardClick}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}