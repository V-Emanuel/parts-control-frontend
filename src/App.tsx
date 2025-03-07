import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import { useEffect, useState } from 'react';
import UserContext from './Contexts/UserContext';
import { UserContextType } from './types/user';
import ProtectedRoute from './components/ProtectedRoute';
function App() {
  const tokenLS: string | null = localStorage.getItem('token');
  const nameLS: string | null = localStorage.getItem('name');
  const [token, setToken] = useState<string | null>(tokenLS);
  const [name, setName] = useState<string | null>(nameLS);

  useEffect(() => {
    if (tokenLS) setTokenLS(tokenLS);
  }, []);

  function setTokenLS(t: string) {
    setToken(t);
    localStorage.setItem('token', t);
  }

  function setNameLS(n: string) {
    setName(n);
    localStorage.setItem('name', n);
  }

  const userContextValue: UserContextType = {
    token,
    setTokenLS,
    name,
    setNameLS,
  };

  return (
    <Body>
      <GlobalStyle />
      <UserContext.Provider value={userContextValue}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/dashboard" element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </Body>
  );
}

export default App;

const Body = styled.div`
  width: 100vw;
  background-color: #fff;
  position: relative;
  z-index: 1;

  * {
    font-family: 'Montserrat', sans-serif;
  }
`;
