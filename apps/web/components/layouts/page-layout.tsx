import type { ReactNode } from 'react';

import { cn } from '@workspace/ui/lib/utils';

type PageLayoutProps = {
  children: ReactNode;
  mainClassName?: string;
};

export function PageLayout({ children, mainClassName }: PageLayoutProps) {
  return <main className={cn('flex-1', mainClassName)}>{children}</main>;
}
