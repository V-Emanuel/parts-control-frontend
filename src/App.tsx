import { useEffect, useState } from 'react';
import axios from 'axios';
import UserContext from './Contexts/UserContext';
import DataContext from './Contexts/DataContext';
import { UserContextType } from './types/user';
import GlobalStyle from './styles/GlobalStyles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';
import OrderRegister from './pages/OrderRegister';
import styled from 'styled-components';
import theme from './styles/theme';
import Oss from './pages/Oss';

function App() {
  const tokenLS = localStorage.getItem('token');
  const nameLS = localStorage.getItem('name');
  const companySelectLS = localStorage.getItem('company');
  const [token, setToken] = useState<string | null>(tokenLS);
  const [name, setName] = useState<string | null>(nameLS);
  const [companySelect, setCompanySelecy] = useState<string | null>(
    companySelectLS,
  );

  const [mergedData, setMergedData] = useState<any[]>([]);
  const [statuses, setStatuses] = useState<any[]>([]);
  const [types, setTypes] = useState<any[]>([]);
  const [users, setUsers] = useState<any[]>([]);
  const [companies, setCompanies] = useState<any[]>([]);

  function setTokenLS(t: string) {
    setToken(t);
    localStorage.setItem('token', t);
  }

  function setNameLS(n: string) {
    setName(n);
    localStorage.setItem('name', n);
  }

  function setCompanySelectLS(n: string) {
    setCompanySelecy(n);
    localStorage.setItem('company', n);
  }

  useEffect(() => {
    if (tokenLS) setTokenLS(tokenLS);
  }, []);

  useEffect(() => {
    if (!token) return;

    const urls = {
      orderData: 'http://localhost:1234/orderdata',
      orderControl: 'http://localhost:1234/ordercontrol',
      stockControl: 'http://localhost:1234/stockcontrol',
      clientRelationship: 'http://localhost:1234/clientrelationship',
      usersnames: 'http://localhost:1234/usersnames',
      statusesUrl: 'http://localhost:1234/statuses',
      typesUrl: 'http://localhost:1234/types',
      companiesUrl: 'http://localhost:1234/company',
    };

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    Promise.all([
      axios.get(urls.orderData, config),
      axios.get(urls.orderControl, config),
      axios.get(urls.stockControl, config),
      axios.get(urls.clientRelationship, config),
      axios.get(urls.usersnames, config),
      axios.get(urls.statusesUrl, config),
      axios.get(urls.typesUrl, config),
      axios.get(urls.companiesUrl, config),
    ])
      .then(
        ([
          orderRes,
          controlRes,
          stockRes,
          clientRes,
          usersRes,
          statusesRes,
          typesRes,
          companiesRes,
        ]) => {
          const orderData = orderRes.data;
          const orderControl = controlRes.data;
          const stockControl = stockRes.data;
          const clientRelationship = clientRes.data;
          const usersData = usersRes.data;
          const statusesData = statusesRes.data;
          const typesData = typesRes.data;
          const companiesData = companiesRes.data;

          const combinedData = orderData.map((order: any) => ({
            ...order,
            orderControl:
              orderControl.find((oc: any) => oc.orderDataId === order.id) || {},
            stockControl:
              stockControl.find((sc: any) => sc.orderDataId === order.id) || {},
            clientRelationship:
              clientRelationship.find(
                (cr: any) => cr.orderDataId === order.id,
              ) || {},
          }));

          setMergedData(combinedData);
          setUsers(usersData);
          setStatuses(statusesData);
          setTypes(typesData);
          setCompanies(companiesData);
          setCompanySelectLS(companiesData[0].name);
        },
      )
      .catch((err) => console.log(err));
  }, [token]);

  const userContextValue: UserContextType = {
    token,
    setTokenLS,
    name,
    setNameLS,
    companySelect,
    setCompanySelectLS,
  };

  const dataContextValue = {
    mergedData,
    users,
    statuses,
    types,
    companies,
  };

  return (
    <Body>
      <GlobalStyle />
      <UserContext.Provider value={userContextValue}>
        <DataContext.Provider value={dataContextValue}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route element={<ProtectedRoute />}>
                <Route path="/dashboard" element={<Home />} />
                <Route path="/novo-registro" element={<OrderRegister />} />
                <Route path="/sempedidos" element={<Oss />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </DataContext.Provider>
      </UserContext.Provider>
    </Body>
  );
}

export default App;

const Body = styled.div`
  width: 100vw;
  background-color: ${theme.colors.primary};
  position: relative;
  z-index: 1;

  * {
    font-family: 'Montserrat', sans-serif;
  }
`;
