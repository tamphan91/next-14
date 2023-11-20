import { DataTable, ReactTableVirtualized } from './data-table';
import { columns } from './columns';
import { makeData } from './make-data';

// async function getData(): Promise<Payment[]> {
//   // Fetch data from your API here.
//   return [
//     {
//       id: "728ed52f",
//       amount: 100,
//       status: "pending",
//       email: "m@example.com",
//     },
//     {
//       id: "728ed52c",
//       amount: 66,
//       status: "processing",
//       email: "c@example.com",
//     },
//     {
//       id: "728ed52z",
//       amount: 77,
//       status: "failed",
//       email: "z@example.com",
//     },
//     {
//       id: "728ed52d",
//       amount: 77,
//       status: "success",
//       email: "d@example.com",
//     },
//     {
//       id: "728ed520",
//       amount: 100,
//       status: "pending",
//       email: "m@example.com",
//     },
//     {
//       id: "728ed521",
//       amount: 66,
//       status: "processing",
//       email: "c@example.com",
//     },
//     {
//       id: "728ed522",
//       amount: 77,
//       status: "failed",
//       email: "z@example.com",
//     },
//     {
//       id: "728ed523",
//       amount: 77,
//       status: "success",
//       email: "d@example.com",
//     },
//     {
//       id: "728ed524",
//       amount: 100,
//       status: "pending",
//       email: "m@example.com",
//     },
//     {
//       id: "728ed525",
//       amount: 66,
//       status: "processing",
//       email: "c@example.com",
//     },
//     {
//       id: "728ed526",
//       amount: 77,
//       status: "failed",
//       email: "z@example.com",
//     },
//     {
//       id: "728ed527",
//       amount: 77,
//       status: "success",
//       email: "d@example.com",
//     },
//     // ...
//   ]
// }

export default async function Page() {
  console.log('dashboard')
  const data = await makeData(10);
  return (
    <div className="p-2">
      <DataTable columns={columns} data={data} />
      {/* <ReactTableVirtualized /> */}
    </div>
  );
}
