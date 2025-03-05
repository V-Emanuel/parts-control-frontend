import { Grid } from 'gridjs-react';
import 'gridjs/dist/theme/mermaid.css';
import styled from 'styled-components';
import { orders, types, consultants, statuses } from '../assets/consts/data';
import SideBar from '../components/SideBar/SideBar';
import { HomeStyles } from '../styles/HomeStyles';

const TableWrapper = styled.div`
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 100%;
  overflow-x: auto;

  .gridjs-table {
    width: 100%;
  }
`;

export default function Home() {
  const getNameById = (id: number, array: any) => {
    const selected = array.find((t: any) => t.id === id);
    if (!selected) {
      return '-';
    }
    return selected.name;
  };
  return (
    <HomeStyles>
      <SideBar />
      <div className="table-content">
        <TableWrapper>
          <Grid
            data={orders.map((order) => [
              order.id,
              order.emp,
              order.osOrc,
              order.orderDate,
              // order.consultantId,
              getNameById(order.consultantId, consultants),
              order.client,
              order.model,
              order.description,
              order.quantity,
              order.shippingDate,
              order.num,
              // order.typeId,
              getNameById(order.typeId, types),
              order.branchOrder,
              order.guarantee,
              order.pendingDays,
              // order.statusId,
              getNameById(order.statusId, statuses),
              order.nf,
              order.nfDate,
              order.accuracyDate,
              order.entryDate,
              order.daysTt,
              order.daysStock,
              order.firstContact,
              order.secondContact,
              order.thirdContact,
              order.agendaDate,
              order.applicationDate,
              order.observations,
            ])}
            columns={[
              'id',
              'emp',
              'os-orc',
              'Data Pedido',
              'Consultor',
              'Cliente',
              'Modelo',
              'Descriçao',
              'quantidade',
              'data envio',
              'N',
              'tipo',
              'filial',
              'garantia',
              'dias pendentes',
              'status',
              'nf',
              'data da nf',
              'accuracy',
              'entrada',
              'dias tt',
              'dias estoque',
              'prim',
              'sec',
              'ter',
              'aplicacoes',
              'obs',
            ]}
            search={true}
            sort={true}
          />
        </TableWrapper>
      </div>
    </HomeStyles>
  );
}
