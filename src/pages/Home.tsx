import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { OrderData } from '../types/order';
import {
  useReactTable,
  createColumnHelper,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table';
import SideBar from '../components/SideBar/SideBar';
import Header from '../components/Header/Header';
import UserContext from '../Contexts/UserContext';
import { HomeStyles } from '../styles/HomeStyles';

export default function Home() {
  const [orderData, setOrderData] = useState<OrderData[]>([]);
  const { token } = useContext(UserContext);
  const URL = 'http://localhost:1234/orderdata';

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const columnHelper = createColumnHelper<OrderData>();

  const columns = [
    columnHelper.accessor('companyId', { header: 'Empresa ID' }),
    columnHelper.accessor('osOrc', { header: 'OS/Orçamento' }),
    columnHelper.accessor('orderDate', { header: 'Data do Pedido' }),
    columnHelper.accessor('userId', { header: 'Usuário' }),
    columnHelper.accessor('client', { header: 'Cliente' }),
    columnHelper.accessor('model', { header: 'Modelo' }),
    columnHelper.accessor('description', { header: 'Descrição' }),
    columnHelper.accessor('quantity', { header: 'Quantidade' }),
  ];

  const table = useReactTable({
    data: orderData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  useEffect(() => {
    axios
      .get(URL, config)
      .then((res) => setOrderData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <HomeStyles>
      <SideBar />
      <Header />
      <div className="table-content">
        <table>
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
      </div>
    </HomeStyles>
  );
}
