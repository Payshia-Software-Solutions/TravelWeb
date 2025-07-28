
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AyurvedaPage() {
  return (
    <>
      <section className="relative h-screen flex flex-col items-center justify-center text-center text-white">
        <div className="absolute inset-0">
            <Image
              src="https://placehold.co/1920x1080.png"
              alt="Ayurveda setup with oils and herbs"
              fill
              className="z-0 object-cover"
              priority
              data-ai-hint="ayurveda spa"
            />
            <div className="absolute inset-0 bg-black/50 z-10" />
        </div>
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Ayurveda
          </h1>
          <p className="mt-4 text-2xl md:text-3xl font-headline">
            The Healing Spirit of Sri Lanka
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-white">
            Discover ancient wellness practices rooted in balance, nature, and self-care
          </p>
          <Button size="lg" className="mt-8" asChild>
            <Link href="#">Book a Wellness Retreat</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
