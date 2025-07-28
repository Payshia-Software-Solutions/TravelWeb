
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PawPrint, MapPin, Tag, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function WildlifePage() {

  const bigFive = [
    {
      name: 'Asian Elephant',
      description: 'Largest land mammal in Asia, highly intelligent and social',
      location: 'Udawalawe, Minneriya',
      image: 'https://placehold.co/600x400.png',
      aiHint: 'asian elephant'
    },
    {
      name: 'Sri Lankan Leopard',
      description: 'Endemic subspecies, apex predator of the island',
      location: 'Yala, Wilpattu',
      image: 'https://placehold.co/600x400.png',
      aiHint: 'sri lankan leopard'
    },
    {
      name: 'Sloth Bear',
      description: 'Shaggy-coated bear with distinctive white chest patch',
      location: 'Yala, Wasgamuwa',
      image: 'https://placehold.co/600x400.png',
      aiHint: 'sloth bear'
    },
    {
      name: 'Blue Whale',
      description: 'Largest animal on Earth, frequent visitor to Sri Lankan sea area',
      location: 'Mirissa, Trincomalee',
      image: 'https://placehold.co/600x400.png',
      aiHint: 'blue whale'
    },
    {
      name: 'Dolphin',
      description: 'Cute animal on Earth, frequent visitor to Sri Lankan Sea area',
      location: 'Kalpitiya, Dondra',
      image: 'https://placehold.co/600x400.png',
      aiHint: 'dolphin jumping'
    }
  ];

    const nationalParks = [
    {
      name: 'Yala National Park',
      description: 'Highest leopard density in the world',
      image: 'https://placehold.co/600x400.png',
      aiHint: 'yala safari',
      tags: ['Safari', 'Birds'],
      bestTime: 'May - September'
    },
    {
      name: 'Wilpattu National Park',
      description: 'Natural lakes and dense forest cover',
      image: 'https://placehold.co/600x400.png',
      aiHint: 'wilpattu safari',
      tags: ['Safari', 'Lakes'],
      bestTime: 'May - September'
    },
    {
      name: 'Udawalawe National Park',
      description: 'Premier elephant watching destination',
      image: 'https://placehold.co/600x400.png',
      aiHint: 'udawalawe elephants',
      tags: ['Safari', 'Elephants'],
      bestTime: 'Year Round'
    },
    {
      name: 'Minneriya National Park',
      description: 'Famous for elephant gathering',
      image: 'https://placehold.co/600x400.png',
      aiHint: 'minneriya elephants',
      tags: ['Safari', 'Elephants'],
      bestTime: 'August - September'
    }
  ];

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

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-headline text-4xl md:text-5xl">The Big Five of Sri Lanka</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the island's most iconic and sought-after wildlife species.
            </p>
             <span className="inline-block w-20 h-1 bg-accent mt-4"></span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {bigFive.map((animal) => (
              <Card key={animal.name} className="overflow-hidden shadow-lg rounded-lg">
                <Image
                  src={animal.image}
                  alt={animal.name}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                  data-ai-hint={animal.aiHint}
                />
                <CardContent className="p-6">
                  <h3 className="font-headline text-xl font-bold">{animal.name}</h3>
                  <p className="mt-2 text-muted-foreground text-sm h-16">{animal.description}</p>
                  <div className="flex items-center text-sm text-muted-foreground mt-4">
                    <MapPin className="h-4 w-4 mr-2 text-primary" />
                    <span>{animal.location}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-headline text-4xl md:text-5xl">Top National Parks</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Sri Lankan performing arts are a spectacular fusion of rhythm, movement, and storytelling that has captivated audiences for centuries.
            </p>
             <span className="inline-block w-20 h-1 bg-accent mt-4"></span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {nationalParks.map((park) => (
              <Card key={park.name} className="overflow-hidden shadow-lg rounded-lg flex flex-col">
                <Image
                  src={park.image}
                  alt={park.name}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                  data-ai-hint={park.aiHint}
                />
                <CardContent className="p-6 flex-grow flex flex-col">
                  <h3 className="font-headline text-xl font-bold">{park.name}</h3>
                  <p className="mt-2 text-muted-foreground text-sm flex-grow">{park.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                      {park.tags.map(tag => (
                          <Badge key={tag} variant="secondary" className="bg-accent/20 text-accent-foreground">{tag}</Badge>
                      ))}
                  </div>
                </CardContent>
                 <div className="p-6 pt-0">
                    <div className="flex items-center text-sm text-muted-foreground mt-4">
                        <Calendar className="h-4 w-4 mr-2 text-primary" />
                        <span>Best: {park.bestTime}</span>
                    </div>
                 </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
