"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTableColumnHeader } from "./data-table-column-header";
import { PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Person } from './make-data';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
// export type Payment = {
//   id: string;
//   amount: number;
//   status: "pending" | "processing" | "success" | "failed";
//   email: string;
// };

export const columns: ColumnDef<Person>[] = [
  {
    size: 200,
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        className="data-[state=checked]:bg-white data-[state=checked]:text-black bg-white text-black"
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "firstName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="firstName"/>
    ),
  },
  // {
  //   accessorKey: "lastName",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="lastName" />
  //   ),
  // },
  // {
  //   accessorKey: "age",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="age" />
  //   ),
  // },
  // {
  //   accessorKey: "visits",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="visits" />
  //   ),
  // },
  // {
  //   accessorKey: "progress",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="progress" />
  //   ),
  // },
  // {
  //   accessorKey: "status",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="status" />
  //   ),
  // },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;

      return (
        // <Button variant="outline" size="icon" color="blue">
        //    Please wait <PlayCircle className="h-4 w-4 ml-8" />
        // </Button>
        <div className="text-center">
          <Button size="sm">
            <PlayCircle className="h-4 w-4" />
          </Button>
        </div>
      );
      //   return (
      //     <>
      //       <svg
      //         xmlns="http://www.w3.org/2000/svg"
      //         className="w-5 h-5"
      //         viewBox="0 0 20 20"
      //         fill="currentColor"
      //       >
      //         <path
      //           fillRule="evenodd"
      //           d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
      //           clipRule="evenodd"
      //         />
      //       </svg>
      //       <svg
      //         xmlns="http://www.w3.org/2000/svg"
      //         className="w-5 h-5"
      //         viewBox="0 0 20 20"
      //         fill="currentColor"
      //       >
      //         <path
      //           fillRule="evenodd"
      //           d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
      //           clipRule="evenodd"
      //         />
      //       </svg>
      //       <svg
      //         xmlns="http://www.w3.org/2000/svg"
      //         className="w-5 h-5"
      //         viewBox="0 0 20 20"
      //         fill="currentColor"
      //       >
      //         <path
      //           fillRule="evenodd"
      //           d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
      //           clipRule="evenodd"
      //         />
      //       </svg>
      //       <PlayCircle />
      //       <PauseCircle />
      //       <Ban />
      //     </>
      //   );
    },
  },
];
