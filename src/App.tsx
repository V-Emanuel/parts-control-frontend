import { useEffect, useState } from 'react';
import axios from 'axios';
import UserContext from './Contexts/UserContext';
import DataContext from './Contexts/DataContext';
import { Company, UserContextType } from './types/user';
import GlobalStyle from './styles/GlobalStyles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';
import OrderRegister from './pages/Data Registers/OrderRegister';
import styled from 'styled-components';
import theme from './styles/theme';
import Oss from './pages/SideBar Options/Oss';
import Order from './pages/Order';
import InTransit from './pages/SideBar Options/InTransit';
import WithoutAppointment from './pages/SideBar Options/WithoutAppointment';
import UnusedParts from './pages/SideBar Options/UnusedParts';
import OrderControlRegister from './pages/Data Registers/OrderControlRegister';
import StockControlRegister from './pages/Data Registers/StockControlRegister';
import ClientRelationshipRegister from './pages/Data Registers/ClientRelationshipRegister';
import { api_url } from './assets/consts/url';
import OrderControlUpdate from './pages/Data Update/OrderControlUpdate';
import StockControlUpdate from './pages/Data Update/StockControlUpdate';
import ClientRelationshipUpdate from './pages/Data Update/ClientRelationshipUpdate';
import Users from './pages/SideBar Options/Users';
import NotInvoiced from './pages/SideBar Options/NotInvoiced';
import User from './pages/User';

function App() {
  const tokenLS = localStorage.getItem('token');
  const nameLS = localStorage.getItem('name');
  const userIdLS = localStorage.getItem('userId');
  const userAdminLS = JSON.parse(localStorage.getItem('userAdmin') as any);
  const companySelectLS =
    JSON.parse(localStorage.getItem('companySelect') as any) || [];

  const [userAdmin, setUserAdmin] = useState<boolean | null>(userAdminLS);
  const [token, setToken] = useState<string | null>(tokenLS);
  const [name, setName] = useState<string | null>(nameLS);
  const [userId, setUserId] = useState<string | null>(userIdLS);
  const [companySelect, setCompanySelect] = useState<Company | null>(
    companySelectLS,
  );

  const [categories, setCategories] = useState<any[]>([]);
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

  function setUserIdLS(id: string) {
    setUserId(id);
    localStorage.setItem('userId', id);
  }

  function setCompanySelectLS(company: Company) {
    setCompanySelect(company);
    localStorage.setItem('companySelect', JSON.stringify(company));
  }

  function setUserAdminLS(admin: boolean) {
    setUserAdmin(admin);
    localStorage.setItem('userAdmin', JSON.stringify(admin));
  }

  useEffect(() => {
    if (tokenLS) setTokenLS(tokenLS);
  }, []);

  useEffect(() => {
    if (!token) return;

    const urls = {
      orderData: `${api_url}/orderdata`,
      orderControl: `${api_url}/ordercontrol`,
      stockControl: `${api_url}/stockcontrol`,
      clientRelationship: `${api_url}/clientrelationship`,
      usersnames: `${api_url}/users`,
      statusesUrl: `${api_url}/statuses`,
      typesUrl: `${api_url}/types`,
      companiesUrl: `${api_url}/user-companies`,
      categoriesUrl: `${api_url}/user-categories`,
    };

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    Promise.all([
      axios.get(urls.orderData, config),
      axios.get(urls.orderControl, config),
      axios.get(urls.stockControl, config),
      axios.get(urls.clientRelationship, config),
      userAdmin
        ? axios.get(urls.usersnames, config)
        : Promise.resolve({ data: [] }),
      axios.get(urls.statusesUrl, config),
      axios.get(urls.typesUrl, config),
      axios.get(urls.companiesUrl, config),
      axios.get(urls.categoriesUrl, config),
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
          categoriesRes,
        ]) => {
          const orderData = orderRes.data;
          const orderControl = controlRes.data;
          const stockControl = stockRes.data;
          const clientRelationship = clientRes.data;
          const usersData = usersRes.data;
          const statusesData = statusesRes.data;
          const typesData = typesRes.data;
          const companiesData = companiesRes.data;
          const categoriesData = categoriesRes.data;

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
          setCategories(categoriesData);

          if (
            !companySelectLS ||
            (Array.isArray(companySelectLS) && companySelectLS.length === 0)
          ) {
            setCompanySelect(companiesData[0]);
            localStorage.setItem(
              'companySelect',
              JSON.stringify(companiesData[0]),
            );
          }
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
    userId,
    userAdmin,
    setUserAdminLS,
    setUserIdLS,
    categories,
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
                <Route path="/sempedidos" element={<Oss />} />
                <Route path="/transito" element={<InTransit />} />
                <Route path="/nao-faturados" element={<NotInvoiced />} />
                <Route
                  path="/sem-agendamento"
                  element={<WithoutAppointment />}
                />
                <Route path="/nao-aplicadas" element={<UnusedParts />} />
                <Route path="/pedido/:id" element={<Order />} />

                {Array.isArray(categories) &&
                  categories.some(
                    (cat) => cat.name === 'Consultor Técnico',
                  ) && (
                    <Route path="/novo-registro" element={<OrderRegister />} />
                  )}

                {Array.isArray(categories) &&
                  categories.some((cat) => cat.name === 'Estoquista') && (
                    <>
                      <Route
                        path="/controle-pedido/:orderid"
                        element={<OrderControlRegister />}
                      />
                      <Route
                        path="/controle-estoque/:orderid"
                        element={<StockControlRegister />}
                      />
                      <Route
                        path="/controle-pedido-update/:orderid"
                        element={<OrderControlUpdate />}
                      />
                      <Route
                        path="/controle-estoque-update/:orderid"
                        element={<StockControlUpdate />}
                      />
                    </>
                  )}

                {Array.isArray(categories) &&
                  categories.some((cat) => cat.name === 'CRM') && (
                    <>
                      <Route
                        path="/relacionamento-cliente/:orderid"
                        element={<ClientRelationshipRegister />}
                      />
                      <Route
                        path="/relacionamento-cliente-update/:orderid"
                        element={<ClientRelationshipUpdate />}
                      />
                    </>
                  )}

                {userAdmin && (
                  <>
                    <Route path="/usuarios" element={<Users />} />
                    <Route path="/usuarios/:id" element={<User />} />
                  </>
                )}
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
