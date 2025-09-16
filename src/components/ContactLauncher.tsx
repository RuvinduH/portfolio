"use client";
import { useState, PropsWithChildren } from "react";
import ContactModal from "./ContactModal";

export default function ContactLauncher({
  className,
  children,
}: PropsWithChildren<{ className?: string }>) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={className}
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        {children}
      </button>
      <ContactModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
