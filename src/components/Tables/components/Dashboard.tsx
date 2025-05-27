import {
  useReactTable,
  createColumnHelper,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table';

import { MergedData } from '../../../types/user';
import { DashboardProps } from '../../../types/user';
import { useNavigate } from 'react-router-dom';
import { formatDate } from '../../../assets/functions/formatData';

export default function DashBoard({
  filterData,
  usersNames,
  statuses,
  types,
  companies,
}: DashboardProps) {
  const columnHelper = createColumnHelper<MergedData>();
  const navigate = useNavigate();

  const columns = [
    columnHelper.display({
      id: 'index',
      header: 'Pedido Nº',
      cell: (info) => info.row.index + 1,
    }),
    columnHelper.accessor(
      (row) => companies.find((c) => c.id === row.companyId)?.name || '-',
      { header: 'Empresa' },
    ),
    columnHelper.accessor('osOrc', { header: 'OS/Orçamento' }),
    columnHelper.accessor((row) => formatDate(row.orderDate), {
      header: 'Data do Pedido',
    }),
    columnHelper.accessor(
      (row) => usersNames.find((u) => u.id === row.userId)?.fullName || '-',
      { header: 'Usuário' },
    ),
    columnHelper.accessor('client', { header: 'Cliente' }),
    columnHelper.accessor('model', { header: 'Modelo' }),
    columnHelper.accessor('description', { header: 'Descrição' }),
    columnHelper.accessor('quantity', { header: 'Quantidade' }),
    columnHelper.accessor(
      (row) => formatDate(row.orderControl?.shippingDate ?? '-'),
      {
        header: 'Data de Envio',
      },
    ),
    columnHelper.accessor((row) => row.orderControl?.num ?? '-', {
      header: 'Número',
    }),
    columnHelper.accessor(
      (row) =>
        types.find((t) => t.id === row.orderControl?.typeId)?.name || '-',
      {
        header: 'Tipo',
      },
    ),
    columnHelper.accessor((row) => row.orderControl?.branchOrder ?? '-', {
      header: 'Pedido Filial',
    }),
    columnHelper.accessor((row) => row.orderControl?.guarantee ?? '-', {
      header: 'Garantia',
    }),
    columnHelper.accessor(
      (row) => {
        const statusId = row.orderControl?.statusId;
        const shippingDateStr = row.orderControl?.shippingDate;
        if (statusId === 1 && shippingDateStr) {
          const shippingDate = new Date(shippingDateStr);
          const today = new Date();
          const diffTime = today.getTime() - shippingDate.getTime();
          const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
          return diffDays >= 0 ? diffDays : 0;
        }
        return '-';
      },
      {
        header: 'Dias Pendentes',
      },
    ),
    columnHelper.accessor(
      (row) =>
        statuses.find((s) => s.id === row.orderControl?.statusId)?.name || '-',
      {
        header: 'Status',
      },
    ),
    columnHelper.accessor((row) => row.stockControl?.nf ?? '-', {
      header: 'Nota Fiscal',
    }),
    columnHelper.accessor(
      (row) => formatDate(row.stockControl?.nfDate ?? '-'),
      {
        header: 'Data da NF',
      },
    ),
    columnHelper.accessor(
      (row) => formatDate(row.stockControl?.accuracyDate ?? '-'),
      {
        header: 'Previsão',
      },
    ),
    columnHelper.accessor(
      (row) => formatDate(row.stockControl?.entryDate ?? '-'),
      {
        header: 'Data de Entrada',
      },
    ),
    columnHelper.accessor(
      (row) => {
        const nfDateStr = row.stockControl?.nfDate;
        const entryDateStr = row.stockControl?.entryDate;

        if (!nfDateStr || !entryDateStr) return '-';

        const nfDate = new Date(nfDateStr);
        const entryDate = new Date(entryDateStr);

        nfDate.setHours(0, 0, 0, 0);
        entryDate.setHours(0, 0, 0, 0);

        const diffTime = entryDate.getTime() - nfDate.getTime();
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

        return diffDays >= 0 ? diffDays : '-';
      },
      {
        header: 'Dia TT',
      },
    ),
    columnHelper.accessor(
      (row) => {
        const nfDateStr = row.stockControl?.nfDate;
        if (!nfDateStr) return '-';

        const nfDate = new Date(nfDateStr);
        const today = new Date();

        nfDate.setHours(0, 0, 0, 0);
        today.setHours(0, 0, 0, 0);

        const diffTime = today.getTime() - nfDate.getTime();
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

        return diffDays >= 0 ? diffDays : '-';
      },
      {
        header: 'Dias Estoque',
      },
    ),
    columnHelper.accessor(
      (row) => formatDate(row.clientRelationship?.firstContact ?? '-'),
      {
        header: '1º Contato',
      },
    ),
    columnHelper.accessor(
      (row) => formatDate(row.clientRelationship?.secondContact ?? '-'),
      {
        header: '2º Contato',
      },
    ),
    columnHelper.accessor(
      (row) => formatDate(row.clientRelationship?.thirdContact ?? '-'),
      {
        header: '3º Contato',
      },
    ),
    columnHelper.accessor(
      (row) => formatDate(row.clientRelationship?.agendaDate ?? '-'),
      {
        header: 'Data Agendamento',
      },
    ),
    columnHelper.accessor(
      (row) => formatDate(row.clientRelationship?.applicationDate ?? '-'),
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

  const handleRowClick = (rowId: number | string | null) => {
    navigate(`/pedido/${rowId}`);
  };

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
        {table.getRowModel().rows.map((row) => {
          const nfDateStr = row.original.stockControl?.nfDate;
          const shippingDateStr = row.original.orderControl?.shippingDate;
          const statusId = row.original.orderControl?.statusId;

          let highlightColor: string | null = null;

          if (statusId === 1 && shippingDateStr) {
            const shippingDate = new Date(shippingDateStr);
            const today = new Date();
            shippingDate.setHours(0, 0, 0, 0);
            today.setHours(0, 0, 0, 0);
            const diffDays = Math.floor(
              (today.getTime() - shippingDate.getTime()) /
                (1000 * 60 * 60 * 24),
            );
            if (diffDays > 5) {
              highlightColor = '#f7e877';
            }
          }

          if (!highlightColor && nfDateStr) {
            const nfDate = new Date(nfDateStr);
            const today = new Date();
            nfDate.setHours(0, 0, 0, 0);
            today.setHours(0, 0, 0, 0);
            const diffDays = Math.floor(
              (today.getTime() - nfDate.getTime()) / (1000 * 60 * 60 * 24),
            );
            if (diffDays > 10) {
              highlightColor = '#fe5455';
            }
          }

          return (
            <tr
              key={row.id}
              onClick={() => handleRowClick(row.original.id)}
              style={{
                cursor: 'pointer',
                backgroundColor: highlightColor || 'inherit',
              }}
            >
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  style={{
                    color:
                      highlightColor === '#fe5455' ? '#f1f1f1ff' : 'inherit',
                  }}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
