import React, { useContext, useEffect, useState } from 'react';
import { LoginStyles } from '../styles/LoginStyles';
import UserContext from '../Contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import loadingGif from '../assets/imgs/loading.gif';

export default function Login() {
  const userContext = useContext(UserContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [usage, setUsage] = useState(false);
  const { token, setNameLS, setTokenLS } = userContext;
  const [closedDiv, setClosedDiv] = useState('loading-close');
  const [invalidLogin, setInvalidLogin] = useState('text-close');

  if (!userContext) {
    throw new Error('UserContext não encontrado. Verifique o Provider!');
  }

  useEffect(() => {
    if (token) {
      navigate(`/dashboard`);
    }
  }, []);

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setClosedDiv('loading-open');
    const URL = 'http://localhost:1234/login';
    const body = { email, password };
    setUsage(true);
    const promise = axios.post(URL, body);
    promise.then((res) => {
      setTokenLS(res.data.data.token);
      setNameLS(res.data.fullName);
      setClosedDiv('loading-close');
      setInvalidLogin('text-close');
      navigate('/dashboard');
    });
    promise.catch(() => {
      setUsage(false);
      setClosedDiv('loading-close');
      setInvalidLogin('open');
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
          <div className={`${closedDiv} loading`}>
            <img src={loadingGif} />
          </div>
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
          <div className={`${invalidLogin} failed-login`}>
            Login os Senha inválidos!
          </div>
          <button type="submit">ENTRAR</button>
        </form>
      </div>
    </LoginStyles>
  );
}
