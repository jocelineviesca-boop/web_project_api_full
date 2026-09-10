import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/logo.svg';

function Header({ isLoggedIn, email, onSignOut }) {
  const location = useLocation();

  return (
    <header className="header">
      <img src={logo} alt="Logo Alrededor de los EE. UU." className="header__logo" />
      <div className="header__user-info">
        {isLoggedIn ? (
          <>
            <span className="header__email">{email}</span>
            <button onClick={onSignOut} className="header__link header__button">
              Cerrar sesión
            </button>
          </>
        ) : (
          <Link
            to={location.pathname === '/signin' ? '/signup' : '/signin'}
            className="header__link"
          >
            {location.pathname === '/signin' ? 'Regístrate' : 'Iniciar sesión'}
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;