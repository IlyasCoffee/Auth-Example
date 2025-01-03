"use client";

import { Loader } from "lucide-react";
import { useFormStatus } from "react-dom";

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  type?: 'submit' | 'reset' | 'button';
  formAction?: any;
  onClick?: () => void;
  fullWidth?: boolean;
  icon?: React.ReactNode;
}

export default function Button({ variant = 'primary', children, type, formAction, onClick, fullWidth, icon, ...props }: ButtonProps) {
  const { pending } = useFormStatus();
  const baseClass = 'center rounded-2xl px-5 py-3 transition-all';

  const variantClass = {
    primary: 'bg-text text-background hover:bg-opacity-80',
    secondary: 'bg-transparent border-opacity-10 border-2',
  };

  return (
    <button
      type={type}
      className={`${baseClass} ${variantClass[variant]} ${fullWidth && "w-full"}`}
      onClick={onClick}
      formAction={formAction}
      aria-disabled={pending} {...props}
    >
      {/* Add an optional icon later... */}
      {pending ? <Loader className="animate-spin"/> : children}
    </button>
  );
}
