import { createColumnHelper } from '@tanstack/react-table';
import { MergedData } from '../../../types/user';
import { useContext } from 'react';
import DataContext from '../../../Contexts/DataContext';

const { companies, users, types, statuses } = useContext(DataContext);

const columnHelper = createColumnHelper<MergedData>();
export const columns = [
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
