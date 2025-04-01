import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { MergedData } from '../types/user';
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
  const [mergedData, setMergedData] = useState<any[]>([]);

  const { token } = useContext(UserContext);
  const urls = {
    orderData: 'http://localhost:1234/orderdata',
    orderControl: 'http://localhost:1234/ordercontrol',
    stockControl: 'http://localhost:1234/stockcontrol',
    clientRelationship: 'http://localhost:1234/clientrelationship',
  };

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  useEffect(() => {
    Promise.all([
      axios.get(urls.orderData, config),
      axios.get(urls.orderControl, config),
      axios.get(urls.stockControl, config),
      axios.get(urls.clientRelationship, config),
    ])
      .then(([orderRes, controlRes, stockRes, clientRes]) => {
        const orderData = orderRes.data;
        const orderControl = controlRes.data;
        const stockControl = stockRes.data;
        const clientRelationship = clientRes.data;

        const combinedData = orderData.map((order: any) => ({
          ...order,
          orderControl:
            orderControl.find((oc: any) => oc.orderDataId === order.id) || {},
          stockControl:
            stockControl.find((sc: any) => sc.orderDataId === order.id) || {},
          clientRelationship:
            clientRelationship.find((cr: any) => cr.orderDataId === order.id) ||
            {},
        }));

        setMergedData(combinedData);
      })
      .catch((err) => console.log(err));
  }, []);

  const columnHelper = createColumnHelper<MergedData>();
  const columns = [
    columnHelper.accessor('companyId', { header: 'Empresa ID' }),
    columnHelper.accessor('osOrc', { header: 'OS/Orçamento' }),
    columnHelper.accessor('orderDate', { header: 'Data do Pedido' }),
    columnHelper.accessor('userId', { header: 'Usuário' }),
    columnHelper.accessor('client', { header: 'Cliente' }),
    columnHelper.accessor('model', { header: 'Modelo' }),
    columnHelper.accessor('description', { header: 'Descrição' }),
    columnHelper.accessor('quantity', { header: 'Quantidade' }),
    columnHelper.accessor('orderControl.shippingData', {
      header: 'Data de Envio',
    }),
    columnHelper.accessor('orderControl.num', { header: 'Número' }),
    columnHelper.accessor('orderControl.typeId', { header: 'Tipo' }),
    columnHelper.accessor('orderControl.branchOrder', {
      header: 'Pedido Filial',
    }),
    columnHelper.accessor('orderControl.guarantee', { header: 'Garantia' }),
    columnHelper.accessor('orderControl.statusId', { header: 'Status' }),
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
    data: mergedData,
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
