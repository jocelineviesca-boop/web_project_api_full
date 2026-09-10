import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Register({ onRegister }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(email, password);
  };

  return (
    <div className="auth-form">
      <h2 className="auth-form__title">Regístrate</h2>
      <form onSubmit={handleSubmit} className="auth-form__form">
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="auth-form__input"
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="auth-form__input"
        />
        <button type="submit" className="auth-form__button">Regístrate</button>
      </form>
      <p className="auth-form__footer">
        ¿Ya eres miembro? <Link to="/signin" className="auth-form__link">Inicia sesión aquí</Link>
      </p>
    </div>
  );
}

export default Register;