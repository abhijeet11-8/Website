
'use client';

import { cn } from '@/lib/utils';
import { AppHeader } from '@/components/app-header';

export function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className={cn('relative flex flex-1 flex-col')}>
      <AppHeader />
      <main className="container mx-auto max-w-4xl flex-1 p-4 md:p-8">
        {children}
      </main>
    </div>
  );
}
