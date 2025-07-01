
'use client';

import { cn } from '@/lib/utils';

export function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className={cn('relative flex flex-1 flex-col')}>
      <main className="container mx-auto max-w-4xl flex-1 p-4 md:p-8">
        {children}
      </main>
    </div>
  );
}

    