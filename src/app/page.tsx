import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { destinations } from '@/lib/destinations';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const popularDestinations = destinations.filter(d => d.popular);

  return (
    <>
      <section className="relative h-screen flex flex-col items-center justify-center text-center text-white">
        <div className="absolute inset-0">
            <Image
              src="https://placehold.co/1920x1080.png"
              alt="Tropical beach at sunset"
              fill
              className="z-0 object-cover"
              priority
              data-ai-hint="tropical beach"
            />
            <div className="absolute inset-0 bg-black/50 z-10" />
        </div>
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Your Journey Begins Here
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-primary-foreground/90">
            Discover breathtaking destinations and create unforgettable memories.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/destinations">Explore Destinations</Link>
          </Button>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Popular Destinations</h2>
            <p className="mt-2 text-lg text-muted-foreground">Travel to the most loved places in the world.</p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {popularDestinations.map((dest) => (
              <Card key={dest.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <CardHeader className="p-0">
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover"
                    data-ai-hint={`${dest.name.split(',')[0].toLowerCase()}`}
                  />
                </CardHeader>
                <CardContent className="p-6 flex-grow">
                  <CardTitle className="font-headline text-xl">{dest.name}</CardTitle>
                  <p className="mt-2 text-sm text-muted-foreground">{dest.description}</p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button asChild variant="link" className="p-0 h-auto">
                    <Link href={`/destinations/${dest.id}`} className="flex items-center text-primary">
                      Discover More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
