
"use client"

import { destinations, ApiDestination } from '@/lib/destinations';
import { notFound } from 'next/navigation';
import { SigiriyaPage } from './sigiriya';
import { RuwanvalisayaPage } from './ruwanvalisaya';
import Image from 'next/image';
import { GalleFortPage } from './galle-fort';
import { YalaPage } from './yala';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function DestinationDetailPage({ params }: { params: { id: string } }) {
  const [destination, setDestination] = useState<ApiDestination | null>(null);
  const [loading, setLoading] = useState(true);

  // Hardcoded destinations check
  const hardcodedDestination = destinations.find(d => d.id === params.id);

  useEffect(() => {
    if (!hardcodedDestination && params.id) {
      const fetchDestination = async () => {
        try {
          const res = await fetch(`http://localhost/travel_web_server/destinations/${params.id}`);
          if (!res.ok) {
            throw new Error('Failed to fetch destination');
          }
          const data = await res.json();
          setDestination(data);
        } catch (error) {
          console.error(error);
          setDestination(null);
        } finally {
          setLoading(false);
        }
      };
      fetchDestination();
    } else {
      setLoading(false);
    }
  }, [params.id, hardcodedDestination]);

  if (loading) {
    return <div>Loading...</div>;
  }
  
  if (hardcodedDestination) {
    if (params.id === 'sigiriya-matale') {
      return <SigiriyaPage />;
    }
    if (params.id === 'ruwanvalisaya-anuradhapura') {
      return <RuwanvalisayaPage />;
    }
    if (params.id === 'galle-fort-galle') {
      return <GalleFortPage />;
    }
    if (params.id === 'yala-hambanthota') {
      return <YalaPage />;
    }
  }
  
  if (!destination) {
    return notFound();
  }

  // Fallback for other destinations
  return (
     <div className="bg-white text-gray-800">
      <section className="relative h-screen flex flex-col items-center justify-center text-center text-white">
        <div className="absolute inset-0">
          <Image
            src={destination.hero_bg_image_url}
            alt={`Hero image for ${destination.name}`}
            fill
            className="object-cover"
            priority
            data-ai-hint={`${destination.name.toLowerCase()} landscape`}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight">{destination.hero_heading}</h1>
          <p className="mt-2 text-xl md:text-2xl font-light">{destination.hero_subheading}</p>
          <Button size="lg" className="mt-8 rounded-3xl" asChild>
            <Link href="/plan">Create Your Plan</Link>
          </Button>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h2 className="font-headline text-4xl md:text-5xl relative">
                       {destination.intro_heading}
                        <span className="block w-2/3 h-1 bg-accent mt-2"></span>
                    </h2>
                    <p className="text-lg text-muted- leading-relaxed">
                       {destination.description}
                    </p>
                </div>
                 <div className="relative">
                    <Image
                        src={destination.intro_image_url}
                        alt={destination.intro_heading}
                        width={800}
                        height={600}
                        className="rounded-lg shadow-lg"
                        data-ai-hint={destination.intro_heading.toLowerCase()}
                    />
                </div>
            </div>
        </div>
      </section>

      {destination.gallery_image_urls && destination.gallery_image_urls.length > 0 && (
        <section className="py-16 lg:py-24 bg-white">
            <div className="text-center mb-12">
              <h2 className="font-headline text-4xl md:text-5xl relative inline-block">
                Explore {destination.name}
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-accent"></span>
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
              {destination.gallery_image_urls.map((url, index) => (
                <div key={index} className="grid gap-4">
                  <div>
                    <Image
                        src={url}
                        alt={`${destination.name} gallery image ${index + 1}`}
                        width={500}
                        height={750}
                        className="h-full w-full rounded-lg object-cover"
                        data-ai-hint={`${destination.name.toLowerCase()} view`}
                    />
                  </div>
                </div>
              ))}
            </div>
        </section>
      )}

    </div>
  );
}

export async function generateStaticParams() {
    // This can be improved by fetching all destination ids from the API
    // For now, we only pre-render hardcoded ones
    return hardcodedDestinations.map((destination) => ({
      id: destination.id,
    }))
}

    