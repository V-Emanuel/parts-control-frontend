import { TableWrapper } from '../../styles/TableWrapper';
import { orders, consultants } from '../../assets/consts/data_test';
import { getNameById } from '../../assets/functions/getName';
import { Grid } from 'gridjs-react';

export default function Data() {
  return (
    <TableWrapper>
      <Grid
        data={orders.map((order) => [
          order.id,
          order.emp,
          order.osOrc,
          order.orderDate,
          getNameById(order.consultantId, consultants),
          order.client,
          order.model,
          order.description,
          order.quantity,
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
        ]}
        search={true}
        sort={true}
      />
    </TableWrapper>
  );
}
