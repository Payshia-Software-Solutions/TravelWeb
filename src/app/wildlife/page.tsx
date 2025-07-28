import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function WildlifePage() {
  return (
    <>
      <section className="relative h-screen flex flex-col items-center justify-center text-center text-white">
        <div className="absolute inset-0">
          <Image
            src="https://placehold.co/1920x1080.png"
            alt="Elephants in a field"
            fill
            className="z-0 object-cover"
            priority
            data-ai-hint="elephants safari"
          />
          <div className="absolute inset-0 bg-black/50 z-10" />
        </div>
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Wildlife Encounters in Sri Lanka
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-white">
            Experience the wild heart of the island through safaris, marine life, and tropical bird sanctuaries.
          </p>
          <Button size="lg" className="mt-8">Plan Your Safari Adventure</Button>
        </div>
      </section>
    </>
  );
}
