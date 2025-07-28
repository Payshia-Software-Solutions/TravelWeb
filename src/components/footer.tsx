import { Globe } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground mt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Globe className="h-8 w-8 text-primary" />
            <span className="text-xl font-headline font-bold">Wanderlust Web</span>
          </div>
          <div className="flex space-x-6">
            <Link href="/" className="text-sm hover:text-primary transition-colors">Home</Link>
            <Link href="/destinations" className="text-sm hover:text-primary transition-colors">Destinations</Link>
            <Link href="/contact" className="text-sm hover:text-primary transition-colors">Contact</Link>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-muted-foreground border-t border-border pt-4">
          <p>&copy; {new Date().getFullYear()} Wanderlust Web. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
