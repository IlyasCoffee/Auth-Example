"use client";

import { Loader } from "lucide-react";
import { useFormStatus } from "react-dom";

export function SubmitButton({ children, ...props}: any) {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className="bg-text text-background rounded-2xl center w-full px-5 py-3 hover:bg-opacity-80 transition-all" aria-disabled={pending} {...props}>
      {pending ? <Loader className="animate-spin"/> : children}
    </button>
  );
}
