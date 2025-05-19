// import {
//   useReactTable,
//   createColumnHelper,
//   getCoreRowModel,
//   flexRender,
// } from '@tanstack/react-table';

// import { MergedData } from '../../../types/user';

// export interface OrderControlProps {
//   filterData: MergedData | any;
//   statuses: any[];
//   types: any[];
// }

// export default function OrderControl({
//   filterData,
//   statuses,
//   types,
// }: OrderControlProps) {
//   const columnHelper = createColumnHelper<MergedData>();
//   const columns = [
//     columnHelper.accessor('orderControl.shippingData', {
//       header: 'Data de Envio',
//     }),
//     columnHelper.accessor('orderControl.num', { header: 'Número' }),
//     columnHelper.accessor(
//       (row) => types.find((t) => t.id === row.orderControl.typeId)?.name || '-',
//       { header: 'Tipo' },
//     ),
//     columnHelper.accessor('orderControl.branchOrder', {
//       header: 'Pedido Filial',
//     }),
//     columnHelper.accessor('orderControl.guarantee', { header: 'Garantia' }),
//     columnHelper.accessor(
//       (row) =>
//         statuses.find((s) => s.id === row.orderControl.statusId)?.name || '-',
//       { header: 'Status' },
//     ),
//   ];

//   const table = useReactTable({
//     data: filterData,
//     columns,
//     getCoreRowModel: getCoreRowModel(),
//   });

//   return (
//     <table className="dashboard-table">
//       <thead>
//         {table.getHeaderGroups().map((headerGroup) => (
//           <tr key={headerGroup.id}>
//             {headerGroup.headers.map((header) => (
//               <th key={header.id}>
//                 {flexRender(
//                   header.column.columnDef.header,
//                   header.getContext(),
//                 )}
//               </th>
//             ))}
//           </tr>
//         ))}
//       </thead>
//       <tbody>
//         {table.getRowModel().rows.map((row) => (
//           <tr key={row.id}>
//             {row.getVisibleCells().map((cell) => (
//               <td key={cell.id}>
//                 {flexRender(cell.column.columnDef.cell, cell.getContext())}
//               </td>
//             ))}
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// }
