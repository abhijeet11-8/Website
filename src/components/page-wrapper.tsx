'use client';

import { cn } from '@/lib/utils';

export function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className={cn('flex-grow transition-all duration-500 relative')}>
      <main className="container mx-auto max-w-4xl p-4 md:p-8 animate-fade-in relative">
        {children}
      </main>
    </div>
  );
}
