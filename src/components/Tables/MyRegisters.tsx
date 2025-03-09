import { TableWrapper } from '../../styles/TableWrapper';
import {
  orders,
  types,
  consultants,
  statuses,
} from '../../assets/consts/data_test';
import { getNameById } from '../../assets/functions/getName';
import { Grid } from 'gridjs-react';

export default function MyRegisters() {
  return (
    <TableWrapper>
      <Grid
        data={orders
          .filter((order) => order.consultantId === 2)
          .map((order) => [
            order.id,
            order.emp,
            order.osOrc,
            order.orderDate,
            getNameById(order.consultantId, consultants),
            order.client,
            order.model,
            order.description,
            order.quantity,
            order.shippingDate,
            order.num,
            getNameById(order.typeId, types),
            order.branchOrder,
            order.guarantee,
            order.pendingDays,
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
        pagination={{
          limit: 100,
        }}
      />
    </TableWrapper>
  );
}
