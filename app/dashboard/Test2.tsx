"use client";
import React, { memo } from "react";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { useBearStore } from "@/stores/useBearStore";

export default memo(function Test2({data}: {data: any[]}) {
  console.log("Test2 render");
  const statuses = useBearStore((state) => state.filteredValue.statuses);
  return <DataTable columns={columns} data={data} />;
});
