import React, { useState } from 'react';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <div className="auth-form">
      <h2 className="auth-form__title">Inicia sesión</h2>
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
        <button type="submit" className="auth-form__button">Inicia sesión</button>
      </form>
    </div>
  );
}

export default Login;