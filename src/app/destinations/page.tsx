
"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { destinations } from '@/lib/destinations';
import { DestinationCard } from '@/components/destination-card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Link from 'next/link';

export default function ExplorePage() {
  const featuredDestinations = destinations.filter(d => d.popular);

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

      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                className="w-full"
            >
                <div className="flex justify-between items-center mb-12">
                    <div>
                        <h2 className="font-headline text-4xl md:text-5xl font-bold">Featured Destinations</h2>
                        <p className="mt-2 text-lg text-muted-foreground">
                            Our most popular and highly recommended places to visit
                        </p>
                    </div>
                    <div className="hidden md:flex gap-2">
                        <CarouselPrevious />
                        <CarouselNext />
                    </div>
                </div>
                <CarouselContent>
                    {featuredDestinations.map((dest, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                             <DestinationCard destination={dest} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className="md:hidden flex justify-center gap-2 mt-8">
                    <CarouselPrevious />
                    <CarouselNext />
                </div>
            </Carousel>
        </div>
      </section>

    </>
  );
}
