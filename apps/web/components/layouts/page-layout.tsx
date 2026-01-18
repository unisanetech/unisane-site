import type { ReactNode } from "react";

import { CtaSection } from "@/components/home/cta-section";
import { cn } from "@workspace/ui/lib/utils";

type PageLayoutProps = {
  children: ReactNode;
  /**
   * Override CTA content. Pass null to remove CTA completely.
   */
  cta?: ReactNode | null;
  /**
   * Optional additional classes for the main element.
   */
  mainClassName?: string;
};

export function PageLayout({
  children,
  cta,
  mainClassName,
}: PageLayoutProps) {
  const ctaContent = cta === undefined ? <CtaSection /> : cta;

  return (
    <>
      <main className={cn("flex-1", mainClassName)}>{children}</main>
      {ctaContent}
    </>
  );
}
