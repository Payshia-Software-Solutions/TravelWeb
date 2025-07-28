
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function CulturePage() {
  return (
    <>
      <section className="relative h-screen flex flex-col items-center justify-center text-center text-white">
        <div className="absolute inset-0">
            <Image
              src="https://placehold.co/1920x1080.png"
              alt="Traditional Sri Lankan dancers"
              fill
              className="z-0 object-cover"
              priority
              data-ai-hint="traditional dance"
            />
            <div className="absolute inset-0 bg-black/50 z-10" />
        </div>
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Sri Lankan Culture
          </h1>
          <p className="mt-4 text-2xl md:text-3xl font-headline">
            Timeless & Vibrant
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-primary-foreground/90">
            Step into a world of ancient traditions, sacred rituals, and colorful festivals
          </p>
          <Button size="lg" className="mt-8">Explore Culture Tours</Button>
        </div>
      </section>
    </>
  );
}
