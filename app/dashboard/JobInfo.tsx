"use client";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { SubmitButton } from "../submit-button";

function JobInfo({
  date,
  setDate,
}: {
  date: Date | undefined;
  setDate: Dispatch<SetStateAction<Date | undefined>>;
}) {
  const hiddenButtonRef = useRef<HTMLInputElement>(null);
  useEffect(()=>{
    if(date) hiddenButtonRef?.current?.click()
  }, [date])
  return (
    <>
      <div>JobInfo</div>
      <SubmitButton />
      <input type="submit" style={{ display: "none" }} ref={hiddenButtonRef} />
      <br />
      <br />
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-[280px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(e) => {
              setDate(e);
            }}
            initialFocus
          />
        </PopoverContent>
      </Popover>
      <button
        type="button"
        onClick={() => hiddenButtonRef?.current?.click()}
      ></button>
    </>
  );
}

export default JobInfo;
