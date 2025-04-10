import {
  useReactTable,
  createColumnHelper,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table';

import { useContext, useEffect, useState } from 'react';

import DataContext from '../../../Contexts/DataContext';
import { MergedData } from '../../../types/user';
import UserContext from '../../../Contexts/UserContext';

export default function Data() {
  const { mergedData, users, companies } = useContext(DataContext);

  const { companySelect } = useContext(UserContext);

  const filter = mergedData.filter(
    (data) => data.companyId === (companySelect?.id ?? companies[0].id),
  );

  const [filterData, setFilterData] = useState<MergedData | any>(filter);

  console.log();

  useEffect(() => {
    const newFilter = mergedData.filter(
      (data) => data.companyId === (companySelect?.id ?? companies[0].id),
    );
    setFilterData(newFilter);
  }, [companySelect, companies]);

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
