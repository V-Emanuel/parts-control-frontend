import { useContext, useEffect, useState } from 'react';
import {
  useReactTable,
  createColumnHelper,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table';
import SideBar from '../components/SideBar/SideBar';
import Header from '../components/Header/Header';
import { HomeStyles } from '../styles/HomeStyles';
import DataContext from '../Contexts/DataContext';
import { MergedData } from '../types/user';
import UserContext from '../Contexts/UserContext';

export default function Home() {
  const { mergedData, users, statuses, types, companies } =
    useContext(DataContext);

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
    columnHelper.accessor('orderControl.shippingData', {
      header: 'Data de Envio',
    }),
    columnHelper.accessor('orderControl.num', { header: 'Número' }),
    columnHelper.accessor(
      (row) => types.find((t) => t.id === row.orderControl.typeId)?.name || '-',
      { header: 'Tipo' },
    ),
    columnHelper.accessor('orderControl.branchOrder', {
      header: 'Pedido Filial',
    }),
    columnHelper.accessor('orderControl.guarantee', { header: 'Garantia' }),
    columnHelper.accessor(
      (row) =>
        statuses.find((s) => s.id === row.orderControl.statusId)?.name || '-',
      { header: 'Status' },
    ),
    columnHelper.accessor('stockControl.nf', { header: 'Nota Fiscal' }),
    columnHelper.accessor('stockControl.nfData', { header: 'Data da NF' }),
    columnHelper.accessor('stockControl.accuracyDate', {
      header: 'Data de Acerto',
    }),
    columnHelper.accessor('stockControl.entryData', {
      header: 'Data de Entrada',
    }),
    columnHelper.accessor('clientRelationship.firstContact', {
      header: '1º Contato',
    }),
    columnHelper.accessor('clientRelationship.secondContact', {
      header: '2º Contato',
    }),
    columnHelper.accessor('clientRelationship.thirdContact', {
      header: '3º Contato',
    }),
    columnHelper.accessor('clientRelationship.agedaDate', {
      header: 'Data Agendada',
    }),
    columnHelper.accessor('clientRelationship.applicationDate', {
      header: 'Data de Aplicação',
    }),
    columnHelper.accessor('clientRelationship.observations', {
      header: 'Observações',
    }),
  ];

  const table = useReactTable({
    data: filterData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <HomeStyles>
      <SideBar />
      <Header />
      <div className="table-content">
        <div className="table-container">
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
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </HomeStyles>
  );
}
