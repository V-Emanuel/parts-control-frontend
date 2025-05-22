import SideBar from '../components/SideBar/SideBar';
import Header from '../components/Header/Header';
import { HomeStyles } from '../styles/HomeStyles';
import DashBoard from '../components/Tables/components/Dashboard';
import Data from '../components/Tables/components/Data';
import { useContext, useEffect, useState } from 'react';
import DataContext from '../Contexts/DataContext';
import UserContext from '../Contexts/UserContext';
import { MergedData } from '../types/user';
import OrderControl from '../components/Tables/components/OrderControl';
import EntryControl from '../components/Tables/components/EntryControl';
import CustomerService from '../components/Tables/components/CustomerService';

export default function Home() {
  const { mergedData, users, statuses, types, companies } =
    useContext(DataContext);
  const { companySelect } = useContext(UserContext);

  const filter = mergedData.filter(
    (data) => data.companyId === (companySelect?.id ?? companies[0].id),
  );

  const [filterData, setFilterData] = useState<MergedData | any>(filter);

  const [activeTab, setActiveTab] = useState<
    'dashboard' | 'data' | 'order' | 'entry' | 'customer'
  >('dashboard');

  useEffect(() => {
    const newFilter = mergedData.filter(
      (data) => data.companyId === (companySelect?.id ?? companies[0].id),
    );
    setFilterData(newFilter);
  }, [companySelect, companies]);

  return (
    <HomeStyles>
      <SideBar />
      <Header />
      <div className="table-content">
        <div className="sub-options">
          <button
            className={`table-option ${activeTab === 'dashboard' ? 'active-option' : ''}`}
            onClick={() => setActiveTab('dashboard')}
          >
            Tabela Completa
          </button>
          <button
            className={`table-option ${activeTab === 'data' ? 'active-option' : ''}`}
            onClick={() => setActiveTab('data')}
          >
            Dados
          </button>
          <button
            className={`table-option ${activeTab === 'order' ? 'active-option' : ''}`}
            onClick={() => setActiveTab('order')}
          >
            Controle Pedidos
          </button>
          <button
            className={`table-option ${activeTab === 'entry' ? 'active-option' : ''}`}
            onClick={() => setActiveTab('entry')}
          >
            Controle Entrada - Estoque
          </button>
          <button
            className={`table-option ${activeTab === 'customer' ? 'active-option' : ''}`}
            onClick={() => setActiveTab('customer')}
          >
            Relacionamento com Cliente
          </button>
        </div>

        <div className="table-container">
          {activeTab === 'dashboard' && (
            <DashBoard
              filterData={filterData}
              users={users}
              statuses={statuses}
              types={types}
              companies={companies}
            />
          )}
          {activeTab === 'data' && (
            <Data
              filterData={filterData}
              users={users}
              statuses={statuses}
              types={types}
              companies={companies}
            />
          )}
          {activeTab === 'order' && (
            <OrderControl
              filterData={filterData}
              users={users}
              statuses={statuses}
              types={types}
              companies={companies}
            />
          )}
          {activeTab === 'entry' && (
            <EntryControl
              filterData={filterData}
              users={users}
              statuses={statuses}
              types={types}
              companies={companies}
            />
          )}
          {activeTab === 'customer' && (
            <CustomerService
              filterData={filterData}
              users={users}
              statuses={statuses}
              types={types}
              companies={companies}
            />
          )}
        </div>
      </div>
    </HomeStyles>
  );
}
