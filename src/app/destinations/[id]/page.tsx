
import { destinations } from '@/lib/destinations';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function DestinationDetailPage({ params }: { params: { id: string } }) {
  const destination = destinations.find(d => d.id === params.id);

  if (!destination) {
    notFound();
  }

  // A more generic hero for all destinations for now.
  // We can specialize it for Sigiriya if needed.
  if (params.id === 'sigiriya-matale') {
    return (
        <section className="relative h-screen flex flex-col items-center justify-center text-center text-white">
            <div className="absolute inset-0">
                <Image
                src="https://placehold.co/1920x1080.png"
                alt="Discover the Ancient Marvel of Sigiriya"
                fill
                className="z-0 object-cover"
                priority
                data-ai-hint="sigiriya fortress"
                />
                <div className="absolute inset-0 bg-black/50 z-10" />
            </div>
            <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl tracking-tight">
                    Discover the Ancient Marvel of Sigiriya
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-white">
                    Explore Sri Lanka's iconic rock fortress and its majestic surroundings.
                </p>
                <Button size="lg" className="mt-8 rounded-3xl" asChild>
                    <Link href="/culture">Explore Culture Tours</Link>
                </Button>
            </div>
        </section>
    );
  }

  // Fallback for other destinations
  return (
    <div className="bg-white text-gray-800">
      <section className="relative h-[60vh] flex items-center justify-center text-white">
        <div className="absolute inset-0">
          <Image
            src={destination.gallery[0]}
            alt={`Hero image for ${destination.name}`}
            fill
            className="object-cover"
            priority
            data-ai-hint={`${destination.name.split(',')[0].toLowerCase()} landscape`}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight">{destination.name.split(',')[0]}</h1>
          <p className="mt-2 text-xl md:text-2xl font-light">{destination.name.split(', ')[1]}</p>
        </div>
      </section>
    </div>
  );
}

export async function generateStaticParams() {
    return destinations.map((destination) => ({
      id: destination.id,
    }))
}
