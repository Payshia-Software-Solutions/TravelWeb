
"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function ExplorePage() {

  return (
    <>
      <section className="relative h-screen flex flex-col items-center justify-center text-center text-white">
        <div className="absolute inset-0">
            <Image
              src="https://placehold.co/1920x1080.png"
              alt="Woman leading man towards Sigiriya rock"
              fill
              className="z-0 object-cover"
              priority
              data-ai-hint="follow me sigiriya"
            />
            <div className="absolute inset-0 bg-black/50 z-10" />
        </div>
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Explore Sri Lanka's Top Destinations
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-white">
            Discover the beauty, history, and culture of each region.
          </p>
          <Button size="lg" className="mt-8">
            Book Now
          </Button>
        </div>
      </section>
    </>
  );
}
