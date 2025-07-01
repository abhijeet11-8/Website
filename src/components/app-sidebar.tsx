
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Code2,
  Home,
  Rss,
  Coffee,
  Github,
  Linkedin,
  Mail,
} from 'lucide-react';
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { portfolioData } from '@/lib/portfolio-data';

export function AppSidebar() {
  const pathname = usePathname();
  const navItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/blog', label: 'Blog', icon: Rss },
    { href: '/other-than-work', label: 'Other Than Work', icon: Coffee },
  ];

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <Link href="/" className="group flex items-center gap-2 p-2">
          <Code2 className="h-6 w-6 text-primary transition-transform duration-300 group-hover:rotate-12" />
          <span className="text-lg font-bold group-data-[collapsible=icon]:hidden">
            {portfolioData.name}
          </span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {navItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton
                asChild
                isActive={pathname === item.href}
                tooltip={item.label}
              >
                <Link href={item.href}>
                  <item.icon />
                  <span>{item.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="group-data-[collapsible=icon]:justify-center">
        <div className="flex items-center justify-center gap-2 group-data-[collapsible=icon]:flex-col">
          <Button variant="ghost" size="icon" asChild>
            <a
              href={portfolioData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a
              href={portfolioData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href={`mailto:${portfolioData.contact.email}`} aria-label="Email">
              <Mail />
            </a>
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
