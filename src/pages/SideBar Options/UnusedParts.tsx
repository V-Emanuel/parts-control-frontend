import SideBar from '../../components/SideBar/SideBar';
import Header from '../../components/Header/Header';
import { HomeStyles } from '../../styles/HomeStyles';
import DashBoard from '../../components/Tables/components/Dashboard';
import Data from '../../components/Tables/components/Data';
import { useContext, useEffect, useState } from 'react';
import DataContext from '../../Contexts/DataContext';
import UserContext from '../../Contexts/UserContext';
import { MergedData } from '../../types/user';
import OrderControl from '../../components/Tables/components/OrderControl';
import EntryControl from '../../components/Tables/components/EntryControl';
import CustomerService from '../../components/Tables/components/CustomerService';

export default function UnusedParts() {
  const { mergedData, users, statuses, types, companies } =
    useContext(DataContext);
  const { companySelect } = useContext(UserContext);

  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [filterData, setFilterData] = useState<MergedData[]>([]);
  const [activeTab, setActiveTab] = useState<
    'dashboard' | 'data' | 'order' | 'entry' | 'customer'
  >('dashboard');

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search.toLowerCase());
    }, 300);
    return () => clearTimeout(handler);
  }, [search]);

  useEffect(() => {
    const baseFilter = mergedData.filter(
      (data) =>
        data.companyId === (companySelect?.id ?? companies[0].id) &&
        !data.clientRelationship?.applicationDate,
    );

    const fullFilter = baseFilter.filter((item) => {
      const user = users.find((u) => u.id === item.userId);
      const status = statuses.find((s) => s.id === item.orderControl?.statusId);
      const type = types.find((t) => t.id === item.orderControl?.typeId);
      const company = companies.find((c) => c.id === item.companyId);

      return (
        (typeof item.osOrc === 'string' &&
          item.osOrc.toLowerCase().includes(debouncedSearch)) ||
        (typeof item.client === 'string' &&
          item.client.toLowerCase().includes(debouncedSearch)) ||
        (typeof item.model === 'string' &&
          item.model.toLowerCase().includes(debouncedSearch)) ||
        (typeof item.description === 'string' &&
          item.description.toLowerCase().includes(debouncedSearch)) ||
        user?.fullName?.toLowerCase().includes(debouncedSearch) ||
        status?.name?.toLowerCase().includes(debouncedSearch) ||
        type?.name?.toLowerCase().includes(debouncedSearch) ||
        company?.name?.toLowerCase().includes(debouncedSearch)
      );
    });

    setFilterData(fullFilter);
  }, [
    debouncedSearch,
    companySelect,
    companies,
    mergedData,
    users,
    statuses,
    types,
  ]);

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

        <div style={{ margin: '16px 0' }}>
          <input
            type="text"
            placeholder="🔍 Pesquisar cliente, modelo, OS, usuário..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              padding: '10px 14px',
              fontSize: '14px',
              width: '100%',
              maxWidth: '400px',
              border: '1px solid #ccc',
              borderRadius: '10px',
              outline: 'none',
              boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
              marginLeft: '4px',
            }}
          />
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
