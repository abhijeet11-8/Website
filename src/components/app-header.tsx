'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight, Menu } from 'lucide-react';
import { Button } from './ui/button';

const navConfig: Record<string, { href: string; text: string } | undefined> = {
  '/': {
    href: '/blog',
    text: "don't click here",
  },
  '/blog': {
    href: '/other-than-work',
    text: 'try again !',
  },
  '/other-than-work': {
    href: '/',
    text: 'one more time?',
  },
};

export function AppHeader() {
  const pathname = usePathname();
  let config;

  if (pathname === '/') {
    config = navConfig['/'];
  } else if (pathname.startsWith('/blog')) {
    config = navConfig['/blog'];
  } else if (pathname.startsWith('/other-than-work')) {
    config = navConfig['/other-than-work'];
  }

  if (!config) {
    return null; // Don't render if no config matches
  }

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-4">
      <p className="hidden animate-pulse font-semibold text-primary md:block">
        {config.text}
      </p>
      <ArrowRight className="hidden h-8 w-8 animate-bounce-horizontal text-primary md:block" />
      <Button
        asChild
        variant="outline"
        size="icon"
        className="h-12 w-12 shrink-0"
      >
        <Link href={config.href}>
          <Menu />
          <span className="sr-only">{config.text}</span>
        </Link>
      </Button>
    </div>
  );
}
