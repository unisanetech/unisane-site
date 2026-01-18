"use client";

import type { SVGProps } from "react";
import { cn } from "@workspace/ui/lib/utils";

type LogoProps = Omit<SVGProps<SVGSVGElement>, "width" | "height"> & {
  size?: number | string;
  title?: string;
};

export function Logo({
  className,
  title = "Unisane logo",
  "aria-hidden": ariaHidden,
  size = 32,
  style,
  ...rest
}: LogoProps) {
  const dimension = typeof size === "number" ? size : undefined;
  const sizeStyle = typeof size === "string" ? size : undefined;
  return (
    <svg
      viewBox="0 0 32 32"
      role={ariaHidden ? "presentation" : "img"}
      className={cn(
        !dimension && !sizeStyle ? "h-8 w-8" : undefined,
        className
      )}
      aria-hidden={ariaHidden}
      width={dimension}
      height={dimension}
      style={
        sizeStyle ? { width: sizeStyle, height: sizeStyle, ...style } : style
      }
      {...rest}
    >
      {!ariaHidden && <title>{title}</title>}
      <rect
        x="4"
        y="4"
        width="28"
        height="16"
        rx="3"
        fill="currentColor"
        opacity={0.18}
      />
      <rect
        x="4"
        y="22"
        width="28"
        height="6"
        rx="1.5"
        fill="currentColor"
        opacity={0.95}
      />
    </svg>
  );
}
