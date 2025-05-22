import { SideBarStyles } from './SideBarStyles';
import {
  FaClipboardList,
  FaFileInvoiceDollar,
  FaCalendarTimes,
  FaTools,
  FaUsers,
} from 'react-icons/fa';

import { FiTruck } from 'react-icons/fi';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BiSolidDashboard, BiCategoryAlt } from 'react-icons/bi';
import UserContext from '../../Contexts/UserContext';
import { useContext } from 'react';
import { CiLogout } from 'react-icons/ci';

export default function SideBar() {
  const userContext = useContext(UserContext);
  const location = useLocation();
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('companySelect');
    localStorage.removeItem('name');
    userContext.setUserAdminLS(false);
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
          <div className="left-div"></div>
        </Link>
        <Link
          to="/sempedidos"
          className={`${location.pathname === '/sempedidos' ? 'active' : ''} option`}
        >
          <FaClipboardList />
          <h1>OSs sem Pedido</h1>
          <div className="left-div"></div>
        </Link>
        <Link
          to="/transito"
          className={`${location.pathname === '/transito' ? 'active' : ''} option`}
        >
          <FiTruck />
          <h1>Pedidos em Trânsito</h1>
          <div className="left-div"></div>
        </Link>
        <Link
          to="/nao-faturados"
          className={`${location.pathname === '/nao-faturados' ? 'active' : ''} option`}
        >
          <FaFileInvoiceDollar />
          <h1>Pedidos não Faturados</h1>
          <div className="left-div"></div>
        </Link>
        <Link
          to="/sem-agendamento"
          className={` ${location.pathname === '/sem-agendamento' ? 'active' : ''} option`}
        >
          <FaCalendarTimes />
          <h1>Peças sem Agendamento</h1>
          <div className="left-div"></div>
        </Link>
        <Link
          to="/nao-aplicadas"
          className={`${location.pathname === '/nao-aplicadas' ? 'active' : ''} option`}
        >
          <FaTools />
          <h1>Peças Não aplicadas</h1>
          <div className="left-div"></div>
        </Link>
        {Boolean(userContext.userAdmin) && (
          <>
            <p className="admin-division">Administrador</p>
            <Link
              to="/usuarios"
              className={`${location.pathname === '/usuarios' ? 'active' : ''} option`}
            >
              <FaUsers />
              <h1>Usuários</h1>
              <div className="left-div"></div>
            </Link>
            <Link
              to="/tipos"
              className={`${location.pathname === '/tipos-status' ? 'active' : ''} option`}
            >
              <BiCategoryAlt />
              <h1>Tipos e Status</h1>
              <div className="left-div"></div>
            </Link>
          </>
        )}
      </ul>

      <button className="logout-btn" onClick={handleLogout}>
        <CiLogout />
        <h6>Logout</h6>
      </button>
    </SideBarStyles>
  );
}
