// import { useState } from 'react';
import 'gridjs/dist/theme/mermaid.css';
import { HomeStyles } from '../styles/HomeStyles';
// import DashBoard from '../components/Tables/Dashboard';
// import Data from '../components/Tables/Data';
// import OrderControl from '../components/Tables/OrderControl';
// import EntryControl from '../components/Tables/EntryControl';
// import CustomerService from '../components/Tables/CustomerService';
import SideBar from '../components/SideBar/SideBar';
// import MyRegisters from '../components/Tables/MyRegisters';
import Header from '../components/Header/Header';

export default function Home() {
  // const [activeTab, setActiveTab] = useState('Dashboard');

  // const components: any = {
  //   Dashboard: <DashBoard />,
  //   Dados: <Data />,
  //   'Controle Pedidos': <OrderControl />,
  //   'Controle Entrada - Estoque': <EntryControl />,
  //   'Relacionamento com cliente': <CustomerService />,
  //   'Meus Registros': <MyRegisters />,
  // };

  return (
    <HomeStyles>
      <SideBar />
      <Header />
      <div className="table-content">
        {/* <div className="table-options">
          <ul className="sub-divisions">
            {Object.keys(components).map((tab) => (
              <li
                key={tab}
                className={`sub ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </li>
            ))}
          </ul>
        </div> */}
        {/* {components[activeTab]} */}
      </div>
    </HomeStyles>
  );
}
