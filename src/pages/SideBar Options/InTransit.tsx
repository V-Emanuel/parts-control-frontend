import SideBar from '../../components/SideBar/SideBar';
import Header from '../../components/Header/Header';
import { HomeStyles } from '../../styles/HomeStyles';
import DashBoard from '../../components/Tables/components/Dashboard';
import { useContext, useEffect, useState } from 'react';
import DataContext from '../../Contexts/DataContext';
import UserContext from '../../Contexts/UserContext';
import { MergedData } from '../../types/user';

export default function InTransit() {
  const { mergedData, users, statuses, types, companies } =
    useContext(DataContext);

  const { companySelect } = useContext(UserContext);

  const baseCompanyId = companySelect?.id ?? companies[0].id;

  // Filtrando pedidos da empresa selecionada que não possuem data de entrada
  const filter = mergedData.filter(
    (data) =>
      data.companyId === baseCompanyId && data.stockControl?.entryDate == null,
  );

  const [filterData, setFilterData] = useState<MergedData[]>(filter);

  useEffect(() => {
    const newFilter = mergedData.filter(
      (data) =>
        data.companyId === (companySelect?.id ?? companies[0].id) &&
        data.stockControl?.entryDate == null,
    );
    setFilterData(newFilter);
  }, [companySelect, companies, mergedData]);

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
        </div>
      </div>
    </HomeStyles>
  );
}
