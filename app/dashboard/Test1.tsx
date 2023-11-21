"use client";
import React, { memo } from "react";
import { Button } from "../ui/button";
import { useBearStore } from "@/stores/useBearStore";

export default memo(function Test1() {
  console.log("Test1 render");
  const addStatus = useBearStore((state) => state.addStatus);
  return <Button onClick={() => addStatus("TEST")}>set Status</Button>;
});
