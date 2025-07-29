
import { destinations } from '@/lib/destinations';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { HelpCircle, MessageSquare } from 'lucide-react';

function ChatIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-background"
        >
            <path d="M4 4h16v12H5.17L4 17.17V4m0-2c-1.1 0-2 .9-2 2v15l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4z" />
        </svg>
    )
}

export default function DestinationDetailPage({ params }: { params: { id: string } }) {
  const destination = destinations.find(d => d.id === params.id);

  if (!destination) {
    notFound();
  }

  if (params.id === 'sigiriya-matale') {
    return (
      <>
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
        <section className="py-16 lg:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="font-headline text-4xl md:text-5xl relative">
                           The Eighth Wonder of the World
                            <span className="block w-2/3 h-1 bg-accent mt-2"></span>
                        </h2>
                        <p className="text-lg text-muted- leading-relaxed">
                            Sigiriya, also known as Lion Rock, is an ancient rock fortress located in the northern Matale District near the town of Dambulla. Built during the reign of King Kashyapa (477-495 CE), this UNESCO World Heritage Site stands 200 meters high and showcases remarkable ancient urban planning, art, and architecture.
                        </p>
                        <p className="text-lg text-muted- leading-relaxed">
                            The site features extensive gardens, sophisticated hydraulic systems, and world-famous frescoes that have survived for over 1,500 years, making it one of the best-preserved examples of ancient urban planning in Asia.
                        </p>
                        <div className="flex items-center gap-2 text-primary pt-4">
                            <HelpCircle className="h-5 w-5" />
                            <span>Experience authentic traditions passed down through generations</span>
                        </div>
                    </div>
                     <div className="relative">
                        <Image
                            src="https://placehold.co/800x600.png"
                            alt="Sigiriya Frescoes"
                            width={800}
                            height={600}
                            className="rounded-lg shadow-lg"
                            data-ai-hint="sigiriya frescoes"
                        />
                         <div className="absolute bottom-4 right-4 bg-yellow-400 p-3 rounded-full shadow-lg cursor-pointer">
                            <ChatIcon />
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </>
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
