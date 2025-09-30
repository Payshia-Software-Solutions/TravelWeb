
"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ApiDestination } from '@/lib/destinations';
import { DestinationCard } from '@/components/destination-card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

export default function ExplorePage() {
  const [allDestinations, setAllDestinations] = useState<ApiDestination[]>([]);
  const [visibleDestinations, setVisibleDestinations] = useState(8);

  useEffect(() => {
    document.title = 'Destinations | TravelSite';
  }, []);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const res = await fetch(`${SERVER_URL}destinations`);
        const data = await res.json();
        if (Array.isArray(data)) {
          setAllDestinations(data);
        } else {
            console.error("Fetched data is not an array:", data);
        }
      } catch (error) {
        console.error("Failed to fetch destinations:", error);
      }
    };

    fetchDestinations();
  }, []);
  
  const featuredDestinations = allDestinations.filter(d => d.is_popular);


  const loadMore = () => {
    setVisibleDestinations(prev => prev + 4);
  };

  return (
    <>
      <section className="relative h-screen flex flex-col items-center justify-center text-center text-white">
        <div className="absolute inset-0">
            <Image
              src="https://content-provider.payshia.com/travel-web/nine.webp"
              alt="Scenic train view in Sri Lanka"
              fill
              className="z-0 object-cover"
              priority
              data-ai-hint="train bridge"
            />
            <div className="absolute inset-0 bg-black/50 z-10" />
        </div>
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl  tracking-tight">
            Explore Sri Lanka's Top Destinations
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-white">
            Discover the beauty, history, and culture of each region.
          </p>
          <Button size="lg" className="mt-8 rounded-3xl">
            Book Now
          </Button>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
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
                        <p className="mt-2 text-lg text-muted-">
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
      
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-headline text-4xl md:text-5xl relative inline-block">
              All Destinations
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-accent"></span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {allDestinations.slice(0, visibleDestinations).map(dest => (
                <DestinationCard key={dest.id} destination={dest} />
            ))}
          </div>
          {visibleDestinations < allDestinations.length && (
            <div className="text-center mt-12">
                <Button size="lg" onClick={loadMore}>
                    Load More
                </Button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
