import React, { useContext, useEffect, useState } from 'react';
import { LoginStyles } from '../styles/LoginStyles';
import UserContext from '../Contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function Login() {
  const userContext = useContext(UserContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [usage, setUsage] = useState(false);
  const { token, setNameLS, setTokenLS } = userContext;

  if (!userContext) {
    throw new Error('UserContext não encontrado. Verifique o Provider!');
  }

  useEffect(() => {
    if (token) {
      navigate(`/dashboard`);
    }
  }, []);

  // function handleLogout() {
  //   localStorage.removeItem("token");
  //   userContext.setTokenLS("");
  //   navigate("/");
  // }

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    const URL = 'http://localhost:1234/login';
    const body = { email, password };
    setUsage(true);
    const promise = axios.post(URL, body);
    promise.then((res) => {
      setTokenLS(res.data.data.token);
      setNameLS(res.data.fullName);
      navigate('/dashboard');
    });
    promise.catch((err) => {
      setUsage(false);
      console.log('jorge', err);
      alert('dados incorretos');
    });
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
            disabled={usage}
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
            disabled={usage}
            required
          />
          <button type="submit">ENTRAR</button>
        </form>
      </div>
    </LoginStyles>
  );
}
