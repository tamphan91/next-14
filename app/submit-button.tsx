"use client";

import { useFormStatus } from "react-dom";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <>
      <span>{pending ? "loading........" : ""}</span>
      <br/>
      <button type="submit" aria-disabled={pending}>
        {pending ? "loading..." : "Add"}
      </button>
    </>
  );
}
