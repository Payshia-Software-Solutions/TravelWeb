"use client"
import { useState } from 'react';
import Link from 'next/link';
import { Menu, Mountain, X } from 'lucide-react';
import { Button } from './ui/button';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/destinations', label: 'Explore' },
    { href: '/blog', label: 'Blog' },
    { href: '/about', label: 'About us' },
  ];

  return (
    <header className="bg-secondary/90 text-secondary-foreground sticky top-0 z-50 shadow-md">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2 text-2xl font-bold">
              <Mountain className="h-8 w-8" />
              <span>TravelSite</span>
            </Link>
          </div>
          
          <div className="hidden md:flex flex-1 items-center justify-center">
            <div className="flex items-baseline space-x-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-primary",
                    pathname === link.href 
                      ? "font-bold" 
                      : ""
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
              <Button variant="link" asChild>
                <Link href="/login">Login</Link>
              </Button>
              <Button asChild>
                <Link href="/signup">Sign up</Link>
              </Button>
          </div>

          <div className="md:hidden">
            <Button onClick={() => setIsOpen(!isOpen)} variant="ghost" size="icon">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Open main menu</span>
            </Button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden border-t border-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                onClick={() => setIsOpen(false)} 
                className={cn(
                  "block px-3 py-2 rounded-md text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                  pathname === link.href
                    ? "bg-accent text-accent-foreground"
                    : "text-foreground"
                )}
              >
                  {link.label}
              </Link>
            ))}
            <div className="border-t border-border pt-4 mt-4 flex flex-col space-y-2">
                <Button variant="outline" asChild>
                    <Link href="/login">Login</Link>
                </Button>
                <Button asChild>
                    <Link href="/signup">Sign up</Link>
                </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
