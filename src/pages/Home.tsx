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

export default function Home() {
  const { mergedData, users, statuses, types, companies } =
    useContext(DataContext);

  const { companySelect } = useContext(UserContext);

  const filter = mergedData.filter(
    (data) => data.companyId === (companySelect?.id ?? companies[0].id),
  );

  const [filterData, setFilterData] = useState<MergedData | any>(filter);

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
          <button className="table-option">Tabela Completa</button>
          <button className="table-option">Dados</button>
          <button className="table-option">Controle Pedidos</button>
          <button className="table-option">Controle Entrada - Estoque</button>
          <button className="table-option">Relacionamento com Cliente</button>
        </div>
        <div className="table-container">
          <DashBoard
            filterData={filterData}
            users={users}
            statuses={statuses}
            types={types}
            companies={companies}
          />
          {/* <Data
            filterData={filterData}
            users={users}
            statuses={statuses}
            types={types}
            companies={companies}
          /> */}
          {/* <OrderControl
          filterData={filterData}
          statuses={statuses}
          types={types}
          /> */}
        </div>
      </div>
    </HomeStyles>
  );
}
