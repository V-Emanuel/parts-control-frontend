import { TableWrapper } from '../../styles/TableWrapper';
import { orders, types, statuses } from '../../assets/consts/data_test';
import { getNameById } from '../../assets/functions/getName';
import { Grid } from 'gridjs-react';

export default function OrderControl() {
  return (
    <TableWrapper>
      <Grid
        data={orders.map((order) => [
          order.shippingDate,
          order.num,
          getNameById(order.typeId, types),
          order.branchOrder,
          order.guarantee,
          order.pendingDays,
          getNameById(order.statusId, statuses),
        ])}
        columns={[
          'data envio',
          'N',
          'tipo',
          'filial',
          'garantia',
          'dias pendentes',
          'status',
        ]}
        search={false}
        sort={true}
      />
    </TableWrapper>
  );
}
