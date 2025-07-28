

"use client";
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Toaster } from "@/components/ui/toaster";
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Suspense } from 'react';

function LayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hasTransparentHeader = ['/', '/things-to-do', '/culture', '/wildlife', '/ayurveda', '/destinations', '/blog'].includes(pathname);

  return (
    <body className={cn("font-body antialiased bg-background text-foreground", { 'bg-secondary': hasTransparentHeader })}>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
      <Toaster />
    </body>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <Suspense fallback={<body>{children}</body>}>
        <LayoutContent>{children}</LayoutContent>
      </Suspense>
    </html>
  );
}
