"use client";
import JobTable from "./JobTable";
import JobInfo from "./JobInfo";
import { myAction } from "../actions";
import { useCallback, useState } from "react";
import { useFormState } from "react-dom";

const initialState = {
  data: [],
};

export default function Schedule() {
  const [date, setDate] = useState<Date>()
  // const myActionWithData = useCallback(() => myAction.bind(null, date)(), [date]);
  const [state, formAction] = useFormState(myAction, initialState);
  return (
    <form action={formAction}>
      <JobTable data={state?.data ?? []} />
      <JobInfo date={date} setDate={setDate}/>
      <br/>
      <br/>
    </form>
  );
}
