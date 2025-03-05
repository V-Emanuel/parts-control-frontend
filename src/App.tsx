import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
function App() {
  return (
    <Body>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
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
