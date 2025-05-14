import {
  useReactTable,
  createColumnHelper,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table';

import { MergedData } from '../../../types/user';
import { DashboardProps } from '../../../types/user';

export default function DashBoard({
  filterData,
  users,
  statuses,
  types,
  companies,
}: DashboardProps) {
  const columnHelper = createColumnHelper<MergedData>();

  const columns = [
    columnHelper.accessor(
      (row) => companies.find((c) => c.id === row.companyId)?.name || '-',
      { header: 'Empresa' },
    ),
    columnHelper.accessor('osOrc', { header: 'OS/Orçamento' }),
    columnHelper.accessor('orderDate', { header: 'Data do Pedido' }),
    columnHelper.accessor(
      (row) => users.find((u) => u.id === row.userId)?.fullName || '-',
      { header: 'Usuário' },
    ),
    columnHelper.accessor('client', { header: 'Cliente' }),
    columnHelper.accessor('model', { header: 'Modelo' }),
    columnHelper.accessor('description', { header: 'Descrição' }),
    columnHelper.accessor('quantity', { header: 'Quantidade' }),

    columnHelper.accessor((row) => row.orderControl?.shippingData ?? '-', {
      header: 'Data de Envio',
    }),
    columnHelper.accessor((row) => row.orderControl?.num ?? '-', {
      header: 'Número',
    }),
    columnHelper.accessor(
      (row) =>
        types.find((t) => t.id === row.orderControl?.typeId)?.name || '-',
      { header: 'Tipo' },
    ),
    columnHelper.accessor((row) => row.orderControl?.branchOrder ?? '-', {
      header: 'Pedido Filial',
    }),
    columnHelper.accessor((row) => row.orderControl?.guarantee ?? '-', {
      header: 'Garantia',
    }),
    columnHelper.accessor(
      (row) =>
        statuses.find((s) => s.id === row.orderControl?.statusId)?.name || '-',
      { header: 'Status' },
    ),

    columnHelper.accessor((row) => row.stockControl?.nf ?? '-', {
      header: 'Nota Fiscal',
    }),
    columnHelper.accessor((row) => row.stockControl?.nfData ?? '-', {
      header: 'Data da NF',
    }),
    columnHelper.accessor((row) => row.stockControl?.accuracyDate ?? '-', {
      header: 'Data de Acerto',
    }),
    columnHelper.accessor((row) => row.stockControl?.entryData ?? '-', {
      header: 'Data de Entrada',
    }),

    columnHelper.accessor(
      (row) => row.clientRelationship?.firstContact ?? '-',
      {
        header: '1º Contato',
      },
    ),
    columnHelper.accessor(
      (row) => row.clientRelationship?.secondContact ?? '-',
      {
        header: '2º Contato',
      },
    ),
    columnHelper.accessor(
      (row) => row.clientRelationship?.thirdContact ?? '-',
      {
        header: '3º Contato',
      },
    ),
    columnHelper.accessor((row) => row.clientRelationship?.agedaDate ?? '-', {
      header: 'Data Agendada',
    }),
    columnHelper.accessor(
      (row) => row.clientRelationship?.applicationDate ?? '-',
      {
        header: 'Data de Aplicação',
      },
    ),
    columnHelper.accessor(
      (row) => row.clientRelationship?.observations ?? '-',
      {
        header: 'Observações',
      },
    ),
  ];

  const table = useReactTable({
    data: filterData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table className="dashboard-table">
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext(),
                )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
