"use client";
import { memo, useRef, useState } from "react";
import { columns } from "./columns";
import { ColumnFiltersState, Row, SortingState, flexRender, getCoreRowModel, getFilteredRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useVirtualizer } from '@tanstack/react-virtual';
import { Person } from './make-data';
import { useFormStatus } from 'react-dom';

export default memo(function JobTable({data}: {data: any[]}) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [rowSelection, setRowSelection] = useState({});
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      rowSelection,
    },
  });

  

  const { rows } = table.getRowModel();

  const parentRef = useRef<HTMLDivElement>(null);

  const virtualizer = useVirtualizer({
    count: rows.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 34,
    overscan: 20,
  });

  const { pending } = useFormStatus();

  return (
    <div>
      <div className="flex items-center py-4">
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader className="bg-black">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="hover:bg-black">
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="text-white" >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
                {rows.length > 7 && (
                  <th style={{ width: "16.5px" }}></th>
                )}
              </TableRow>
            ))}
          </TableHeader>
        </Table>
        <div
          ref={parentRef}
          className="overflow-auto h-[482px]"
        >
          <div style={{ height: `${virtualizer.getTotalSize()}px` }}>
            {pending ? 'pending...' : <Table>
              <TableBody>
                {virtualizer.getVirtualItems().length ? (
                  virtualizer.getVirtualItems().map((virtualRow, index) => {
                    const row = rows[virtualRow.index] as Row<Person>;
                    return (
                      <TableRow
                        key={row.id}
                        style={{
                          height: `${virtualRow.size}px`,
                          transform: `translateY(${
                            virtualRow.start - index * virtualRow.size
                          }px)`,
                        }}
                      >
                        {row.getVisibleCells().map((cell) => {
                          return (
                            <TableCell key={cell.id}>
                              {flexRender(
                                cell.column.columnDef.cell,
                                cell.getContext()
                              )}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={columns.length}
                      className="text-center h-[482px]"
                    >
                      No results.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>}
          </div>
        </div>
      </div>
      <div className="flex-1 text-sm text-muted-foreground">
        {table.getFilteredSelectedRowModel().rows.length} of{" "}
        {table.getFilteredRowModel().rows.length} row(s) selected.
      </div>
    </div>
  );
});
