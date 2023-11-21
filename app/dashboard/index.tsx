"use client";
import React, { memo, useEffect } from "react";
import Test0 from "./Test0";
import Test1 from "./Test1";
import { useBearStore } from "@/stores/useBearStore";
import Test2 from "./Test2";

export default memo(function Main({ data }: { data: any[] }) {
  console.log("Main render");
  const setJobs = useBearStore((state) => state.setJobs);
  const setFilteredJobs = useBearStore((state) => state.setFilteredJobs);
  useEffect(() => {
    setJobs(data);
    setFilteredJobs(data);
  }, []);
  return (
    <>
      <Test0 />
      <Test1 />
      <Test2 data={data}/>
    </>
  );
});
