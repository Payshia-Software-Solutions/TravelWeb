

"use client"

import { destinations, ApiDestination } from '@/lib/destinations';
import { notFound, useParams } from 'next/navigation';
import { SigiriyaPage } from './sigiriya';
import { RuwanvalisayaPage } from './ruwanvalisaya';
import Image from 'next/image';
import { GalleFortPage } from './galle-fort';
import { YalaPage } from './yala';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Footprints, Heart, MapPin, Mountain, Sun, Users, Star, Camera, Ticket } from 'lucide-react';
import type { Metadata } from 'next';

const ICONS: { [key: string]: React.ComponentType<any> } = {
    Sun,
    Footprints,
    Heart,
    Users,
    Mountain,
    Star,
    Camera,
    Ticket
};
const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

function DynamicIcon({ name, ...props }: { name: string, [key: string]: any }) {
    const IconComponent = ICONS[name];
    if (!IconComponent) return <Mountain {...props} />; // Fallback icon
    return <IconComponent {...props} />;
}


export default function DestinationDetailPage() {
  const params = useParams();
  const id = typeof params.id === 'string' ? params.id : '';

  const [destination, setDestination] = useState<ApiDestination | null>(null);
  const [loading, setLoading] = useState(true);
  const ftpBaseUrl = 'https://content-provider.payshia.com/travel-web';


  useEffect(() => {
    if (id) {
      const fetchDestination = async () => {
        try {
          const res = await fetch(`${SERVER_URL}destinations/${id}`);
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
  }, [id]);

  const getImageUrl = (url: string | null) => {
    if (!url) return 'https://placehold.co/1920x1080.png';
    if (url.startsWith('http')) return url;
    return `${ftpBaseUrl}${url.startsWith('/') ? '' : '/'}${url}`;
  };
  
   const getThingsToDoImageUrl = (url: string | null) => {
    if (!url) return 'https://placehold.co/600x400.png';
    if (url.startsWith('http')) return url;
    return `${ftpBaseUrl}${url.startsWith('/') ? '' : '/'}${url}`;
  };

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
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
            src={getImageUrl(destination.hero_bg_image_url)}
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
                        src={getImageUrl(destination.intro_image_url)}
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
                <div className="grid gap-4">
                    <div>
                        <Image
                            src={getImageUrl(destination.gallery_image_urls[0])}
                            alt={`${destination.name} gallery image 1`}
                            width={500}
                            height={750}
                            className="h-full w-full rounded-lg object-cover"
                            data-ai-hint={`${destination.name.toLowerCase()} view`}
                        />
                    </div>
                </div>
                <div className="grid gap-4">
                     <div>
                        <Image
                            src={getImageUrl(destination.gallery_image_urls[1])}
                            alt={`${destination.name} gallery image 2`}
                            width={500}
                            height={500}
                            className="h-full w-full rounded-lg object-cover"
                            data-ai-hint={`${destination.name.toLowerCase()} landscape`}
                        />
                    </div>
                    <div>
                        <Image
                            src={getImageUrl(destination.gallery_image_urls[2])}
                             alt={`${destination.name} gallery image 3`}
                            width={500}
                            height={500}
                            className="h-full w-full rounded-lg object-cover"
                            data-ai-hint={`${destination.name.toLowerCase()} scene`}
                        />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                         <Image
                            src={getImageUrl(destination.gallery_image_urls[3])}
                            alt={`${destination.name} gallery image 4`}
                            width={500}
                            height={500}
                            className="h-full w-full rounded-lg object-cover"
                            data-ai-hint={`${destination.name.toLowerCase()} scenery`}
                        />
                    </div>
                     <div>
                        <Image
                             src={getImageUrl(destination.gallery_image_urls[4])}
                             alt={`${destination.name} gallery image 5`}
                            width={500}
                            height={500}
                            className="h-full w-full rounded-lg object-cover"
                            data-ai-hint={`${destination.name.toLowerCase()} detail`}
                        />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <Image
                            src={getImageUrl(destination.gallery_image_urls[5])}
                             alt={`${destination.name} gallery image 6`}
                            width={500}
                            height={750}
                            className="h-full w-full rounded-lg object-cover"
                            data-ai-hint={`${destination.name.toLowerCase()} portrait`}
                        />
                    </div>
                </div>
            </div>
        </section>
      )}

      {destination.things_to_do && destination.things_to_do.length > 0 && (
        <section className="py-16 lg:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-4xl md:text-5xl relative inline-block">
                        Things To Do
                        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-accent"></span>
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {destination.things_to_do.map((item, index) => (
                        <Card key={index} className="overflow-hidden shadow-lg rounded-lg flex flex-col">
                            <Image
                                src={getThingsToDoImageUrl(item.image_url)}
                                alt={item.title}
                                width={600}
                                height={400}
                                className="w-full h-48 object-cover"
                                data-ai-hint={item.title.toLowerCase()}
                            />
                            <CardContent className="p-6 flex-grow flex flex-col bg-card">
                                <div className="flex items-center gap-4">
                                    <DynamicIcon name={item.icon} className="h-8 w-8 text-primary" />
                                    <h3 className="font-headline text-xl font-bold flex-grow h-12 flex items-center">{item.title}</h3>
                                </div>
                                <p className="text-muted-foreground mt-2 flex-grow">{item.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
      )}

      {destination.map_link && (
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-headline text-4xl md:text-5xl relative inline-block">
                Location &amp; Nearby Attractions
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-accent"></span>
              </h2>
            </div>
            <div className="relative">
              {destination.nearby_attractions && destination.nearby_attractions.length > 0 && (
                <div className="absolute top-4 left-4 z-10 bg-white p-4 rounded-lg shadow-lg">
                  <ul className="space-y-3">
                    {destination.nearby_attractions.map(attraction => (
                      <li key={attraction} className="flex items-center gap-3">
                        <MapPin className="h-5 w-5 text-primary" />
                        <span className="text-sm font-medium">{attraction}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src={destination.map_link}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${destination.name} Location`}
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      )}

      {destination.travel_tips && destination.travel_tips.length > 0 && (
        <section className="py-16 lg:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-4xl md:text-5xl relative inline-block">
                        Travel Tips
                        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-accent"></span>
                    </h2>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {destination.travel_tips.map((tip, index) => (
                    <Card key={index} className="text-center p-8 bg-green-50/50 shadow-lg border-green-200 flex flex-col">
                        <CardContent className="flex flex-col items-center justify-center gap-4 flex-grow">
                            <div className="mb-4">
                                <DynamicIcon name={tip.icon} className="h-10 w-10 text-primary" />
                            </div>
                            <h3 className="font-headline text-xl font-bold h-7 flex items-center justify-center">{tip.heading}</h3>
                            <p className="text-muted-foreground text-sm flex-grow">{tip.description}</p>
                        </CardContent>
                    </Card>
                  ))}
                </div>
            </div>
        </section>
      )}

    </div>
  );
}
