
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Info } from 'lucide-react';
import Link from 'next/link';

export default function BlogPage() {
  return (
    <>
      <section className="relative h-screen flex flex-col items-center justify-center text-center text-white">
        <div className="absolute inset-0">
            <Image
              src="https://placehold.co/1920x1080.png"
              alt="Woman leading someone towards Sigiriya rock"
              fill
              className="z-0 object-cover"
              priority
              data-ai-hint="follow me sigiriya"
            />
            <div className="absolute inset-0 bg-black/50 z-10" />
        </div>
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl tracking-tight">
            Travel Blog & Stories
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-white">
            Inspiration, stories, and tips for your next adventure in Sri Lanka
          </p>
          <Button size="lg" className="mt-8">
            Subscribe to Newsletter
          </Button>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-12">
            <div className="w-full md:max-w-xs">
              <Input placeholder="Search blog articles..." />
            </div>
            <div className="flex gap-4">
              <Select defaultValue="all">
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="culture">Culture</SelectItem>
                  <SelectItem value="wildlife">Wildlife</SelectItem>
                  <SelectItem value="adventure">Adventure</SelectItem>
                  <SelectItem value="food">Food</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="newest">
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Sort by Newest" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Sort by Newest</SelectItem>
                  <SelectItem value="oldest">Sort by Oldest</SelectItem>
                  <SelectItem value="popular">Sort by Popularity</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-headline text-4xl md:text-5xl relative">
                Climbing Sigiriya: A Journey Through Ancient Sri Lankan History
                <span className="block w-2/3 h-1 bg-accent mt-2"></span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Discover the breathtaking ancient rock fortress of Sigiriya, one of Sri Lanka's most iconic landmarks. From its fascinating history to practical climbing tips...
              </p>
              <Button asChild size="lg">
                <Link href="#">Read more</Link>
              </Button>
              <div className="flex items-center gap-2 text-muted-foreground pt-4">
                <Info className="w-5 h-5 text-primary" />
                <span>Experience authentic traditions passed down through generations</span>
              </div>
            </div>
             <div className="relative">
                <Image
                    src="https://placehold.co/800x600.png"
                    alt="Sigiriya Rock Fortress"
                    width={800}
                    height={600}
                    className="rounded-lg shadow-lg"
                    data-ai-hint="sigiriya fortress"
                />
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
