
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
  const hasTransparentHeader = ['/', '/things-to-do', '/culture', '/wildlife', '/ayurveda', '/destinations', '/blog', '/about'].includes(pathname) || /^\/destinations\/[^/]+$/.test(pathname);

  return (
    <body className={cn("font-body antialiased bg-background text-foreground")}>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className={cn(
            "flex-grow",
            !hasTransparentHeader && 'pt-20'
        )}>
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
        <link href="https://fonts.googleapis.com/css2?family=David+Libre:wght@400;500;700&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <Suspense fallback={<body>{children}</body>}>
        <LayoutContent>{children}</LayoutContent>
      </Suspense>
    </html>
  );
}
