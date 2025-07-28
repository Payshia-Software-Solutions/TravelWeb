import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";
import Link from "next/link";

function PinterestIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 4c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9" />
            <path d="M12 4v16" />
            <path d="M12 4c2.5 0 4.5 2 4.5 4.5s-2 4.5-4.5 4.5" />
            <path d="M12 15c-2.5 0-4.5-2-4.5-4.5S9.5 6 12 6" />
        </svg>
    )
}

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Menu</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/destinations" className="text-sm hover:text-primary transition-colors">Explore</Link></li>
              <li><Link href="#" className="text-sm hover:text-primary transition-colors">Travel</Link></li>
              <li><Link href="/blog" className="text-sm hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="#" className="text-sm hover:text-primary transition-colors">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Information</h3>
            <ul className="space-y-2">
              <li><Link href="/destinations" className="text-sm hover:text-primary transition-colors">Destinations</Link></li>
              <li><Link href="#" className="text-sm hover:text-primary transition-colors">Supports</Link></li>
              <li><Link href="#" className="text-sm hover:text-primary transition-colors">Terms & Conditions</Link></li>
              <li><Link href="#" className="text-sm hover:text-primary transition-colors">Privacy</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span>+123 456 789</span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@travelsite.com</span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span>1245, New York, USA</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Follow us on</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-secondary-foreground hover:text-primary transition-colors"><Facebook className="h-5 w-5" /></Link>
              <Link href="#" className="text-secondary-foreground hover:text-primary transition-colors"><PinterestIcon className="h-5 w-5" /></Link>
              <Link href="#" className="text-secondary-foreground hover:text-primary transition-colors"><Instagram className="h-5 w-5" /></Link>
              <Link href="#" className="text-secondary-foreground hover:text-primary transition-colors"><Twitter className="h-5 w-5" /></Link>
            </div>
          </div>

        </div>
        <div className="mt-8 pt-8 border-t border-border/20 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} TravelSite. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}