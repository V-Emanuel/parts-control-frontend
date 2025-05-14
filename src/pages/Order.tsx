import { useParams } from 'react-router-dom';
import Header from '../components/Header/Header';
import SideBar from '../components/SideBar/SideBar';
import { OrderStyles } from '../styles/OrderStyles';
import { useContext } from 'react';
import DataContext from '../Contexts/DataContext';
import { formatDate } from '../assets/functions/formatData';

export default function Order() {
  const { id } = useParams();
  const { mergedData, companies, types, statuses } = useContext(DataContext);
  const order = mergedData.find((item) => String(item.id) === id);

  const safe = <T,>(value: T | undefined | null) =>
    value !== undefined && value !== null && value !== '' ? value : '-';

  const companyName =
    companies.find((c) => c.id === order?.companyId)?.name || '-';

  const typeName =
    types.find((t) => t.id === order?.orderControl?.typeId)?.name || '-';

  const statusName =
    statuses.find((s) => s.id === order?.orderControl?.statusId)?.name || '-';

  return (
    <OrderStyles>
      <SideBar />
      <Header />
      <div className="order-content">
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
                <strong>Usuário:</strong> {safe(order.userId)}
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

              {/* Campos de controle */}
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
                <strong>Status:</strong> {statusName}
              </p>
              <p>
                <strong>Garantia:</strong> {safe(order.orderControl?.guarantee)}
              </p>

              {/* Campos de estoque */}
              <p>
                <strong>NF:</strong> {safe(order.stockControl?.nf)}
              </p>
              <p>
                <strong>Data NF:</strong>{' '}
                {formatDate(safe(order.stockControl?.nfDate))}
              </p>

              {/* Relacionamento com cliente */}
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
