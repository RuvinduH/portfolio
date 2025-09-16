"use client";
import React, { PropsWithChildren, useCallback } from "react";

type Props = PropsWithChildren<{
  className?: string;
  scrollToId?: string;
}>;

const ScrollButton = ({ className, scrollToId, children }: Props) => {
  const onClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!scrollToId) return;
      e.preventDefault();
      document
        .getElementById(scrollToId)
        ?.scrollIntoView({ behavior: "smooth" });
    },
    [scrollToId]
  );

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default ScrollButton;
