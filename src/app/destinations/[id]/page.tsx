
import { destinations } from '@/lib/destinations';
import { notFound } from 'next/navigation';
import { SigiriyaPage } from './sigiriya';
import { RuwanvalisayaPage } from './ruwanvalisaya';
import Image from 'next/image';
import { GalleFortPage } from './galle-fort';

export default function DestinationDetailPage({ params }: { params: { id: string } }) {
  const destination = destinations.find(d => d.id === params.id);

  if (!destination) {
    notFound();
  }

  if (params.id === 'sigiriya-matale') {
    return <SigiriyaPage />;
  }

  if (params.id === 'ruwanvalisaya-anuradhapura') {
    return <RuwanvalisayaPage />;
  }

  if (params.id === 'galle-fort-galle') {
    return <GalleFortPage />;
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
