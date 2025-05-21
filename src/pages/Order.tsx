import { useParams } from 'react-router-dom';
import Header from '../components/Header/Header';
import SideBar from '../components/SideBar/SideBar';
import { OrderStyles } from '../styles/OrderStyles';
import { useContext } from 'react';
import DataContext from '../Contexts/DataContext';
import { formatDate } from '../assets/functions/formatData';
import { differenceInBusinessDays } from 'date-fns';
import { Link } from 'react-router-dom';
import UserContext from '../Contexts/UserContext';

export default function Order() {
  const { id } = useParams();
  const { mergedData, companies, types, statuses, users } =
    useContext(DataContext);
  const { categories } = useContext(UserContext);
  const order = mergedData.find((item) => String(item.id) === id);

  const safe = <T,>(value: T | undefined | null) =>
    value !== undefined && value !== null && value !== '' ? value : '-';

  const companyName =
    companies.find((c) => c.id === order?.companyId)?.name || '-';

  const typeName =
    types.find((t) => t.id === order?.orderControl?.typeId)?.name || '-';

  const statusName =
    statuses.find((s) => s.id === order?.orderControl?.statusId)?.name || '-';

  const userName = users.find((s) => s.id === order?.userId)?.fullName || '-';

  const statusDoPedido = statuses.find(
    (s) => s.id === order?.orderControl?.statusId,
  )?.name;

  const mostrarDiasPendentes = statusDoPedido === 'PENDENTE';

  const today = new Date();

  const diasPendentes =
    order?.orderDate && !order?.stockControl?.entryDate
      ? differenceInBusinessDays(today, new Date(order.orderDate))
      : '-';

  const diasTT =
    order?.orderDate && order?.stockControl?.entryDate
      ? differenceInBusinessDays(
          new Date(order.stockControl.entryDate),
          new Date(order.orderDate),
        )
      : '-';

  const diasEstoque =
    order?.stockControl?.entryDate && order?.clientRelationship?.applicationDate
      ? differenceInBusinessDays(
          new Date(order.clientRelationship.applicationDate),
          new Date(order.stockControl.entryDate),
        )
      : '-';

  return (
    <OrderStyles>
      <SideBar />
      <Header />
      <div className="order-content">
        <div className="order-title">
          <h1 style={{ backgroundColor: '#3c8ec2' }}>Dados</h1>
          {/* <Link to="/" className="add-data-btn">
            Atualizar
          </Link> */}
        </div>
        <div className="order-data">
          {order ? (
            <div className="order-card">
              <p>
                <strong>Pedido N°:</strong> {safe(order.id)}
              </p>
              <p>
                <strong>Empresa:</strong> {companyName}
              </p>
              <p>
                <strong>Usuário:</strong> {safe(userName)}
              </p>
              <p>
                <strong>OS/Orçamento:</strong> {safe(order.osOrc)}
              </p>
              <p>
                <strong>Data do Pedido:</strong> {formatDate(order.orderDate)}
              </p>
              <p>
                <strong>Cliente:</strong> {safe(order.client)}
              </p>
              <p>
                <strong>Modelo:</strong> {safe(order.model)}
              </p>
              <p>
                <strong>Descrição:</strong> {safe(order.description)}
              </p>
              <p>
                <strong>Quantidade:</strong> {safe(order.quantity)}
              </p>
            </div>
          ) : (
            <p>Registro não encontrado.</p>
          )}
        </div>
        <div className="order-title">
          <h1 style={{ backgroundColor: '#2d7db0' }}>Controle Pedidos</h1>
          {Array.isArray(categories) &&
            categories.some((category) => category.name === 'Estoquista') &&
            (order?.orderControl?.orderDataId ? (
              <Link
                className="update-data-btn"
                to={`/controle-pedido-update/${order.id}`}
              >
                Atualizar
              </Link>
            ) : (
              <Link
                className="add-data-btn"
                to={`/controle-pedido/${order.id}`}
              >
                Adicionar
              </Link>
            ))}
        </div>
        <div className="order-data">
          {order ? (
            <div className="order-card">
              <p>
                <strong>Data de Envio:</strong>{' '}
                {formatDate(safe(order.orderControl?.shippingDate))}
              </p>
              <p>
                <strong>Número:</strong> {safe(order.orderControl?.num)}
              </p>
              <p>
                <strong>Tipo:</strong> {typeName}
              </p>
              <p>
                <strong>Pedido Filial:</strong>{' '}
                {safe(order.orderControl?.branchOrder)}
              </p>
              <p>
                <strong>Status:</strong> {statusName}
              </p>
              <p>
                <strong>Garantia:</strong> {safe(order.orderControl?.guarantee)}
              </p>
              {mostrarDiasPendentes && (
                <p>
                  <strong>Dias Pendentes:</strong> {diasPendentes}
                </p>
              )}
            </div>
          ) : (
            <p>Registro não encontrado.</p>
          )}
        </div>
        <div className="order-title">
          <h1 style={{ backgroundColor: '#1e6d9e' }}>
            Controle Entrada Estoque
          </h1>
          {Array.isArray(categories) &&
            categories.some((category) => category.name === 'Estoquista') &&
            (order?.stockControl?.orderDataId ? (
              <Link
                className="update-data-btn"
                to={`/controle-estoque-update/${order.id}`}
              >
                Atualizar
              </Link>
            ) : (
              <Link
                className="add-data-btn"
                to={`/controle-estoque/${order.id}`}
              >
                Adicionar
              </Link>
            ))}
        </div>
        <div className="order-data">
          {order ? (
            <div className="order-card">
              <p>
                <strong>NF:</strong> {safe(order.stockControl?.nf)}
              </p>
              <p>
                <strong>Data NF:</strong>{' '}
                {formatDate(safe(order.stockControl?.nfDate))}
              </p>
              <p>
                <strong>Previsão:</strong>{' '}
                {formatDate(safe(order.stockControl?.accuracyDate))}
              </p>
              <p>
                <strong>Data de Entrada:</strong>{' '}
                {formatDate(safe(order.stockControl?.entryDate))}
              </p>
              <p>
                <strong>Dias TT:</strong> {diasTT}
              </p>
              <p>
                <strong>Dias Estoque:</strong> {diasEstoque}
              </p>
            </div>
          ) : (
            <p>Registro não encontrado.</p>
          )}
        </div>
        <div className="order-title">
          <h1 style={{ backgroundColor: '#0f5c8c' }}>
            Relacionamento com Cliente
          </h1>
          {Array.isArray(categories) &&
            categories.some((category) => category.name === 'CRM') &&
            (order?.clientRelationship?.orderDataId ? (
              <Link
                className="update-data-btn"
                to={`/relacionamento-cliente-update/${order.id}`}
              >
                Atualizar
              </Link>
            ) : (
              <Link
                className="add-data-btn"
                to={`/relacionamento-cliente/${order.id}`}
              >
                Adicionar
              </Link>
            ))}
        </div>
        <div className="order-data">
          {order ? (
            <div className="order-card">
              <p>
                <strong>1º Contato:</strong>{' '}
                {formatDate(safe(order.clientRelationship?.firstContact))}
              </p>
              <p>
                <strong>2º Contato:</strong>{' '}
                {formatDate(safe(order.clientRelationship?.secondContact))}
              </p>
              <p>
                <strong>3º Contato:</strong>{' '}
                {formatDate(safe(order.clientRelationship?.thirdContact))}
              </p>
              <p>
                <strong>Data Agenda:</strong>{' '}
                {formatDate(safe(order.clientRelationship?.agendaDate))}
              </p>
              <p>
                <strong>Data Aplicação:</strong>{' '}
                {formatDate(safe(order.clientRelationship?.applicationDate))}
              </p>
              <p>
                <strong>Observações:</strong>{' '}
                {safe(order.clientRelationship?.observations)}
              </p>
            </div>
          ) : (
            <p>Registro não encontrado.</p>
          )}
        </div>
      </div>
    </OrderStyles>
  );
}
