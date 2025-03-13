import { SideBarStyles } from './SideBarStyles';
import { CiUser } from 'react-icons/ci';
import {
  FaRegPlusSquare,
  FaClipboardList,
  FaFileInvoiceDollar,
  FaCalendarTimes,
  FaTools,
} from 'react-icons/fa';
import { FiTruck } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function SideBar() {
  return (
    <SideBarStyles>
      <div className="box-title">
        <CiUser className="user-icon" />
        <p>{`Fulano de Tal`}</p>
      </div>
      <ul className="side-options">
        <Link to="/novo-registro" className="option">
          <FaRegPlusSquare />
          <h1>{`Novo Registro`}</h1>
        </Link>
        <Link to="/" className="option">
          <FaClipboardList />
          <h1>{`OSs sem Pedido`}</h1>
        </Link>
        <Link to="/" className="option">
          <FiTruck />
          <h1>{`Pedidos em Transito`}</h1>
        </Link>
        <Link to="/" className="option">
          <FaFileInvoiceDollar />
          <h1>{`Pedidos não Faturados`}</h1>
        </Link>
        <Link to="/" className="option">
          <FaCalendarTimes />
          <h1>{`Peças sem Agendamento`}</h1>
        </Link>
        <Link to="/" className="option">
          <FaTools />
          <h1>{`Peças Não aplicadas`}</h1>
        </Link>
      </ul>
      <div className="line"></div>
    </SideBarStyles>
  );
}
