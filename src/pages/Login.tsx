import React, { useContext, useState } from 'react';
import { LoginStyles } from '../styles/LoginStyles';
import UserContext from '../Contexts/UserContext';
export default function Login() {
  const userContext = useContext(UserContext);

  if (!userContext) {
    throw new Error('UserContext não encontrado. Verifique o Provider!');
  }

  const { setTokenLS, setNameLS } = userContext;

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setNameLS('jorgre');
    setTokenLS('carlos');
  }

  return (
    <LoginStyles>
      <div className="login-content">
        <div className="left-content">
          <h1>
            Controle <br /> Pedido de Peças
          </h1>
        </div>
        <form className="login-form" onSubmit={handleLogin}>
          <p>Login</p>
          <label>
            Email: <strong>*</strong>
          </label>
          <input
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>
            Senha: <strong>*</strong>
          </label>
          <input
            type="password"
            placeholder={`Digite sua senha`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">ENTRAR</button>
        </form>
      </div>
    </LoginStyles>
  );
}
