import { TableWrapper } from '../../styles/TableWrapper';
import { orders } from '../../assets/consts/data_test';
import { Grid } from 'gridjs-react';

export default function CustomerService() {
  return (
    <TableWrapper>
      <Grid
        data={orders.map((order) => [
          order.firstContact,
          order.secondContact,
          order.thirdContact,
          order.agendaDate,
          order.applicationDate,
          order.observations,
        ])}
        columns={['prim', 'sec', 'ter', 'aplicacoes', 'obs']}
        search={true}
        sort={true}
        pagination={{
          limit: 100,
        }}
      />
    </TableWrapper>
  );
}
