"use client";
import { Input } from "@/components/ui/input";
import { useBearStore } from "@/stores/useBearStore";
import React, { memo } from "react";

export default memo(function Test0() {
  const jobName = useBearStore((state) => state.filteredValue.jobName);
  const setJobName = useBearStore((state) => state.setJobName);
  console.log("Test0 render");
  return (
    <Input
      value={jobName}
      onChange={(event) => setJobName(event.target.value)}
    />
  );
});
