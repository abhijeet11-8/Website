'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Code2, Menu } from 'lucide-react';
import { portfolioData } from '@/lib/portfolio-data';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export function Header() {
  const pathname = usePathname();
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/blog', label: 'Blog' },
    { href: '/other-than-work', label: 'Other Than Work' },
  ];

  const NavLinks = ({ className }: { className?: string }) => (
    <nav className={cn('flex items-center gap-4 lg:gap-6', className)}>
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            'text-lg font-medium transition-colors hover:text-primary md:text-sm',
            pathname === item.href ? 'text-primary' : 'text-muted-foreground'
          )}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 max-w-4xl items-center">
        <Link href="/" className="mr-6 flex items-center gap-2 group">
          <Code2 className="h-6 w-6 text-primary transition-transform duration-300 group-hover:rotate-12" />
          <span className="font-bold">{portfolioData.name}</span>
        </Link>
        
        <div className="ml-auto flex items-center">
            {/* Desktop Nav */}
            <div className="hidden md:block">
                <NavLinks />
            </div>

            {/* Mobile Nav */}
            <div className="md:hidden">
                <Sheet>
                    <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle Menu</span>
                    </Button>
                    </SheetTrigger>
                    <SheetContent side="right">
                    <Link href="/" className="mb-6 flex items-center gap-2 group">
                        <Code2 className="h-6 w-6 text-primary" />
                        <span className="font-bold">{portfolioData.name}</span>
                    </Link>
                    <div className="flex flex-col">
                        <NavLinks className="flex-col !items-start gap-6" />
                    </div>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
      </div>
    </header>
  );
}
