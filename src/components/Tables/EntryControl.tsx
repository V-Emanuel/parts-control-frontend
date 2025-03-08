import { TableWrapper } from '../../styles/TableWrapper';
import { orders } from '../../assets/consts/data_test';
import { Grid } from 'gridjs-react';

export default function EntryControl() {
  return (
    <TableWrapper>
      <Grid
        data={orders.map((order) => [
          order.nf,
          order.nfDate,
          order.accuracyDate,
          order.entryDate,
          order.daysTt,
          order.daysStock,
        ])}
        columns={[
          'nf',
          'data da nf',
          'accuracy',
          'entrada',
          'dias tt',
          'dias estoque',
        ]}
        search={true}
        sort={true}
      />
    </TableWrapper>
  );
}
