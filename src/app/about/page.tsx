
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { PawPrint } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      <section className="relative h-screen flex flex-col items-center justify-center text-center text-white">
        <div className="absolute inset-0">
            <Image
              src="https://placehold.co/1920x1080.png"
              alt="Ayurvedic items for a traditional ceremony"
              fill
              className="z-0 object-cover"
              priority
              data-ai-hint="ayurveda items"
            />
            <div className="absolute inset-0 bg-black/50 z-10" />
        </div>
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            About Us
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-white">
            Your trusted guide to discovering the heart of Sri Lanka
          </p>
          <Button size="lg" className="mt-8 rounded-3xl" asChild>
            <Link href="/destinations">Explore Our Destinations</Link>
          </Button>
        </div>
      </section>
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h2 className="font-headline text-4xl md:text-5xl relative inline-block">
                        Our Story
                        <span className="absolute -bottom-2 left-0 w-2/3 h-1 bg-accent"></span>
                    </h2>
                    <p className="text-lg text-muted- leading-relaxed">
                        Born from a deep love for Sri Lanka's breathtaking landscapes and rich cultural heritage, our journey began with a simple mission: to share the authentic beauty of our island home with travelers from around the world.
                    </p>
                    <p className="text-lg text-muted- leading-relaxed">
                        What started as a small family business has grown into a trusted travel partner, connecting thousands of adventurers with unforgettable experiences across Sri Lanka's diverse regions.
                    </p>
                    <p className="text-lg text-muted- leading-relaxed">
                        Every journey we craft is infused with local insights, sustainable practices, and genuine care for both our guests and the communities we visit.
                    </p>
                </div>
                 <div className="relative">
                    <Image
                        src="https://placehold.co/800x600.png"
                        alt="Leopard in Sri Lanka"
                        width={800}
                        height={600}
                        className="rounded-lg shadow-lg"
                        data-ai-hint="leopard rock"
                    />
                    <div className="absolute bottom-4 right-4 bg-white p-3 rounded-full shadow-lg">
                        <PawPrint className="h-6 w-6 text-primary" />
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  );
}
