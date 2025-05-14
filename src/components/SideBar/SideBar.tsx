import { SideBarStyles } from './SideBarStyles';
import {
  FaClipboardList,
  FaFileInvoiceDollar,
  FaCalendarTimes,
  FaTools,
} from 'react-icons/fa';
import { FiTruck } from 'react-icons/fi';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BiSolidDashboard } from 'react-icons/bi';
import UserContext from '../../Contexts/UserContext';
import { useContext } from 'react';
import { CiLogout } from 'react-icons/ci';

export default function SideBar() {
  const userContext = useContext(UserContext);
  const location = useLocation();
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.clear();
    userContext.setTokenLS('');
    navigate('/');
  }

  return (
    <SideBarStyles>
      <div className="box-title">
        <p>{`${userContext.name}`}</p>
      </div>
      <div className="line"></div>
      <ul className="options">
        <Link
          to="/dashboard"
          className={`${location.pathname === '/dashboard' ? 'active' : ''} option`}
        >
          <BiSolidDashboard />
          <h1>Dashboard</h1>
        </Link>
        <Link
          to="/sempedidos"
          className={`${location.pathname === '/sempedidos' ? 'active' : ''} option`}
        >
          <FaClipboardList />
          <h1>OSs sem Pedido</h1>
        </Link>
        <Link
          to="/transito"
          className={`${location.pathname === '/transito' ? 'active' : ''} option`}
        >
          <FiTruck />
          <h1>Pedidos em Trânsito</h1>
        </Link>
        <Link
          to="/nao-faturados"
          className={`${location.pathname === '/nao-faturados' ? 'active' : ''} option`}
        >
          <FaFileInvoiceDollar />
          <h1>Pedidos não Faturados</h1>
        </Link>
        <Link
          to="/sem-agendamento"
          className={` ${location.pathname === '/sem-agendamento' ? 'active' : ''} option`}
        >
          <FaCalendarTimes />
          <h1>Peças sem Agendamento</h1>
        </Link>
        <Link
          to="/nao-aplicadas"
          className={`${location.pathname === '/nao-aplicadas' ? 'active' : ''} option`}
        >
          <FaTools />
          <h1>Peças Não aplicadas</h1>
        </Link>
      </ul>

      <button className="logout-btn" onClick={handleLogout}>
        <CiLogout />
        <h6>Logout</h6>
      </button>
    </SideBarStyles>
  );
}
