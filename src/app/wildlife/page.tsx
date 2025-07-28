
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PawPrint } from 'lucide-react';

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

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h2 className="font-headline text-4xl md:text-5xl relative inline-block">
                        A Living Sanctuary
                        <span className="absolute -bottom-2 left-0 w-2/3 h-1 bg-accent"></span>
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Sri Lanka, though small in size, harbors an extraordinary diversity of wildlife. From ancient elephants roaming through national parks to elusive leopards prowling through dense jungles, this island nation offers some of the world's most spectacular wildlife encounters.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                       With over 26 national parks and nature reserves, Sri Lanka protects its endemic species while providing unforgettable experiences for nature enthusiasts and adventure seekers alike.
                    </p>
                    <div className="flex space-x-8 pt-4">
                        <div>
                            <p className="text-3xl font-bold text-primary">26+</p>
                            <p className="text-sm text-muted-foreground">National Parks</p>
                        </div>
                         <div>
                            <p className="text-3xl font-bold text-primary">400+</p>
                            <p className="text-sm text-muted-foreground">Bird Species</p>
                        </div>
                         <div>
                            <p className="text-3xl font-bold text-primary">90+</p>
                            <p className="text-sm text-muted-foreground">Mammals</p>
                        </div>
                    </div>
                </div>
                 <div className="relative">
                    <Image
                        src="https://placehold.co/800x600.png"
                        alt="Leopard in Sri Lanka"
                        width={800}
                        height={600}
                        className="rounded-lg shadow-lg"
                        data-ai-hint="leopard rock"
                    />
                    <div className="absolute bottom-4 right-4 bg-white p-3 rounded-full shadow-lg">
                        <PawPrint className="h-6 w-6 text-primary" />
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  );
}
