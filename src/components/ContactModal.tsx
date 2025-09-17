"use client";

import { useEffect, useRef, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

export default function ContactModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const emailRef = useRef<HTMLInputElement>(null);

  // When the modal closes, bump this key to remount the form content,
  // which resets Formspree's internal "succeeded" state.
  const [contentKey, setContentKey] = useState(0);

  useEffect(() => {
    if (open) {
      emailRef.current?.focus();
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    } else {
      // Modal just closed -> reset the form content
      setContentKey((k) => k + 1);
    }
  }, [open]);

  // ESC to close
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          aria-modal="true"
          role="dialog"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60"
            onClick={onClose}
            aria-hidden
          />
          {/* Dialog */}
          <motion.div
            className="relative z-[101] w-full max-w-lg rounded-2xl border border-white/10 bg-gray-900 p-6 text-white shadow-xl"
            initial={{ y: 16, opacity: 0.95 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 16, opacity: 0.95 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-start justify-between">
              <h3 className="font-serif text-xl">Contact Me</h3>
              <button
                onClick={onClose}
                className="rounded-md px-2 py-1 text-white/70 hover:bg-white/10"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {/* Formspree content is isolated so we can remount/reset via `contentKey` */}
            <FormspreeContent key={contentKey} emailRef={emailRef} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/** Child component holds the Formspree hook so it resets when remounted. */
function FormspreeContent({
  emailRef,
}: {
  emailRef: React.RefObject<HTMLInputElement>;
}) {
  const [state, handleSubmit] = useForm("xrbawgrz");

  if (state.succeeded) {
    return (
      <div className="space-y-3 text-sm">
        <p className="font-medium">Thanks — I’ll get back to you soon.</p>
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="mailto:ruvinduhwg@gmail.com?subject=Contact%20via%20portfolio&body=Hi%20Ruvindu%2C%0D%0A%0D%0A—I saw your portfolio and…"
            className="underline"
          >
            Email me directly
          </Link>
          <span className="text-white/40">•</span>
          <Link
            href="https://www.linkedin.com/in/ruvindu-h-8241b1141"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Connect on LinkedIn ↗
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="hidden" name="_subject" value="New message from portfolio" />
      <input
        type="text"
        name="_gotcha"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div>
        <label htmlFor="email" className="mb-1 block text-sm text-white/70">
          Your email
        </label>
        <input
          ref={emailRef}
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 outline-none focus:ring-2 focus:ring-white/20"
          placeholder="you@company.com"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm text-white/70">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 outline-none focus:ring-2 focus:ring-white/20"
          placeholder="Hi Ruvindu — we'd like to chat about…"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>

      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={state.submitting}
          className="inline-flex h-11 w-[150px] md:w-[160px] items-center justify-center gap-2 rounded-xl border border-white/15 px-5 font-semibold text-xs md:text-base disabled:opacity-60 hover:bg-gray-600"
        >
          {state.submitting ? "Sending…" : "Send Message"}
        </button>

        <Link
          href="https://www.linkedin.com/in/ruvindu-h-8241b1141"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 w-[150px] md:w-[160px] justify-center items-center gap-1 rounded-xl border border-white/15 px-5 font-semibold text-xs md:text-base hover:bg-gray-600"
        >
          <span>LinkedIn</span>
          <ArrowUpRightIcon className="size-4 md:size-6" />
        </Link>
      </div>
    </form>
  );
}
