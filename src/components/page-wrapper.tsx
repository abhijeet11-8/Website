'use client';

import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export function PageWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const getBackgroundClass = () => {
    if (pathname === '/') {
      return 'bg-home';
    }
    if (pathname.startsWith('/blog')) {
      return 'bg-blog';
    }
    if (pathname.startsWith('/other-than-work')) {
      return 'bg-other';
    }
    return 'bg-background';
  };

  return (
    <div className={cn(getBackgroundClass(), 'flex-grow transition-all duration-500')}>
      <main className="container mx-auto max-w-4xl p-4 md:p-8 animate-fade-in">
        {children}
      </main>
    </div>
  );
}
