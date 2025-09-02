
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PawPrint, MapPin, Leaf, Shield, Users, Heart, Calendar, Bird, Anchor, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function WildlifePage() {

  const bigFive = [
    {
      name: 'Asian Elephant',
      description: 'Largest land mammal in Asia, highly intelligent and social',
      location: 'Udawalawe, Minneriya',
      image: 'https://images.unsplash.com/photo-1571406761758-9a3eed5338ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxhc2lhbiUyMGVsZXBoYW50fGVufDB8fHx8MTc1NDQxNDU2MHww&ixlib=rb-4.1.0&q=80&w=1080',
      aiHint: 'asian elephant'
    },
    {
      name: 'Sri Lankan Leopard',
      description: 'Endemic subspecies, apex predator of the island',
      location: 'Yala, Wilpattu',
      image: 'https://images.unsplash.com/photo-1675534496223-51a77d58be40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxzcmklMjBsYW5rYW4lMjBsZW9wYXJkfGVufDB8fHx8MTc1NDQxNDU2MHww&ixlib=rb-4.1.0&q=80&w=1080',
      aiHint: 'sri lankan leopard'
    },
    {
      name: 'Sloth Bear',
      description: 'Shaggy-coated bear with distinctive white chest patch',
      location: 'Yala, Wasgamuwa',
      image: 'https://images.unsplash.com/photo-1711797523588-e54a2a409def?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxzbG90aCUyMGJlYXJ8ZW58MHx8fHwxNzU0NDE0NTU5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      aiHint: 'sloth bear'
    },
    {
      name: 'Blue Whale',
      description: 'Largest animal on Earth, frequent visitor to Sri Lankan sea area',
      location: 'Mirissa, Trincomalee',
      image: 'https://images.unsplash.com/photo-1540202404-b2979d19ed37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxibHVlJTIwd2hhbGV8ZW58MHx8fHwxNzU0NDE0NTU5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      aiHint: 'blue whale'
    },
    {
      name: 'Dolphin',
      description: 'Cute animal on Earth, frequent visitor to Sri Lankan Sea area',
      location: 'Kalpitiya, Dondra',
      image: 'https://images.unsplash.com/photo-1723741003462-c6f100395b7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxkb2xwaGluJTIwanVtcGluZ3xlbnwwfHx8fDE3NTQ0MTQ1NTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      aiHint: 'dolphin jumping'
    }
  ];

    const nationalParks = [
    {
      name: 'Yala National Park',
      description: 'Highest leopard density in the world',
      image: 'https://images.unsplash.com/photo-1536539754812-56b166f0e89b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHx5YWxhJTIwc2FmYXJpfGVufDB8fHx8MTc1NDQxNDcxOXww&ixlib=rb-4.1.0&q=80&w=1080',
      aiHint: 'yala safari',
      tags: ['Safari', 'Birds'],
      bestTime: 'May - September'
    },
    {
      name: 'Wilpattu National Park',
      description: 'Natural lakes and dense forest cover',
      image: 'https://images.unsplash.com/photo-1730828567781-eb513570e689?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHx3aWxwYXR0dSUyMHNhZmFyaXxlbnwwfHx8fDE3NTQ0MTQ3MTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      aiHint: 'wilpattu safari',
      tags: ['Safari', 'Lakes'],
      bestTime: 'May - September'
    },
    {
      name: 'Udawalawe National Park',
      description: 'Premier elephant watching destination',
      image: 'https://images.unsplash.com/photo-1559038209-9bc3455c7612?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHx1ZGF3YWxhd2UlMjBlbGVwaGFudHN8ZW58MHx8fHwxNzU0NDE0NzE5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      aiHint: 'udawalawe elephants',
      tags: ['Safari', 'Elephants'],
      bestTime: 'Year Round'
    },
    {
      name: 'Minneriya National Park',
      description: 'Famous for elephant gathering',
      image: 'https://images.unsplash.com/photo-1659731650022-d9aad2412098?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxtaW5uZXJpeWElMjBlbGVwaGFudHN8ZW58MHx8fHwxNzU0NDE0NzE5fDA&ixlib=rb-4.1.0&q=80&w=1080',
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
            src="https://content-provider.payshia.com/travel-web/category/wild.jpg"
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
                    <p className="text-lg text-muted- leading-relaxed">
                        Sri Lanka, though small in size, harbors an extraordinary diversity of wildlife. From ancient elephants roaming through national parks to elusive leopards prowling through dense jungles, this island nation offers some of the world's most spectacular wildlife encounters.
                    </p>
                    <p className="text-lg text-muted- leading-relaxed">
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
            <p className="mt-4 text-lg text-muted- max-w-2xl mx-auto">
              Meet the island's most iconic and sought-after wildlife species.
            </p>
             <span className="inline-block w-20 h-1 bg-accent mt-4"></span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {bigFive.map((animal) => (
              <Card key={animal.name} className="overflow-hidden shadow-lg rounded-lg flex flex-col">
                <Image
                  src={animal.image}
                  alt={animal.name}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                  data-ai-hint={animal.aiHint}
                />
                <CardContent className="p-6 flex-grow flex flex-col bg-white">
                  <h3 className="font-headline text-xl font-bold flex-shrink-0 h-14 text-green-700">{animal.name}</h3>
                  <p className="mt-2 text-muted- text-sm flex-grow">{animal.description}</p>
                  <div className="flex items-center text-sm text-muted-foreground mt-4 flex-shrink-0">
                    <MapPin className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
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
            <p className="mt-4 text-lg text-muted- max-w-3xl mx-auto">
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
                <CardContent className="p-6 flex-grow flex flex-col bg-white">
                  <h3 className="font-headline text-xl font-bold text-yellow-700">{park.name}</h3>
                  <p className="mt-2 text-muted- text-sm flex-grow">{park.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                      {park.tags.map(tag => (
                          <Badge key={tag} variant="secondary" className="bg-accent/20 text-accent-foreground">{tag}</Badge>
                      ))}
                  </div>
                   <div className="flex items-center text-sm text-muted-foreground mt-4">
                        <Calendar className="h-4 w-4 mr-2 text-primary" />
                        <span>Best: {park.bestTime}</span>
                    </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-12">
                    <div>
                        <h2 className="font-headline text-4xl md:text-5xl relative inline-block">
                           Beyond the Land
                           <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-accent"></span>
                        </h2>
                    </div>
                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <div className="text-primary pt-1"><Anchor className="w-6 h-6"/></div>
                            <div>
                                <h3 className="font-headline text-2xl font-semibold text-blue-400">Marine Life</h3>
                                <p className="mt-2 text-muted-">
                                    Sri Lanka's waters are among the world's best for whale watching, with blue whales, sperm whales, and dolphins visible year-round.
                                </p>
                                <div className="flex flex-wrap gap-2 mt-4">
                                    <Badge variant="outline">Trincomalee</Badge>
                                    <Badge variant="outline">Kalpitiya</Badge>
                                    <Badge variant="outline">Mirissa</Badge>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="text-primary pt-1"><Bird className="w-6 h-6"/></div>
                            <div>
                                <h3 className="font-headline text-2xl font-semibold text-green-400">Bird Watching</h3>
                                <p className="mt-2 text-muted-">
                                    With over 400 bird species, including 26 endemic varieties, Sri Lanka is a paradise for birders and nature photographers.
                                </p>
                                <div className="flex flex-wrap gap-2 mt-4">
                                    <Badge variant="outline">Kumana</Badge>
                                    <Badge variant="outline">Bundala</Badge>
                                    <Badge variant="outline">Sinharaja</Badge>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <div className="grid grid-cols-2 gap-4">
                        <Image src="https://images.unsplash.com/photo-1628350439121-f21d12a7006a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxraW5nZmlzaGVyJTIwYmlyZHxlbnwwfHx8fDE3NTQ0MTQ4MzR8MA&ixlib=rb-4.1.0&q=80&w=1080" width={400} height={300} alt="Kingfisher bird" className="rounded-lg shadow-lg" data-ai-hint="kingfisher bird" />
                        <Image src="https://images.unsplash.com/photo-1723741003462-c6f100395b7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxkb2xwaGlucyUyMGp1bXBpbmd8ZW58MHx8fHwxNzU0NDE0ODM0fDA&ixlib=rb-4.1.0&q=80&w=1080" width={400} height={300} alt="Dolphins jumping" className="rounded-lg shadow-lg" data-ai-hint="dolphins jumping" />
                        <Image src="https://images.unsplash.com/photo-1749070134691-676df3cbd770?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxwZWFjb2NrJTIwY2xvc2V1cHxlbnwwfHx8fDE3NTQ0MTQ4MzR8MA&ixlib=rb-4.1.0&q=80&w=1080" width={400} height={300} alt="Peacock" className="rounded-lg shadow-lg" data-ai-hint="peacock closeup" />
                        <Image src="https://images.unsplash.com/photo-1654629915409-cccce41b985a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8d2hhbGUlMjB0YWlsfGVufDB8fHx8MTc1NDQxNDgzNHww&ixlib=rb-4.1.0&q=80&w=1080" width={400} height={300} alt="Whale tail" className="rounded-lg shadow-lg" data-ai-hint="whale tail" />
                    </div>
                    <div className="absolute bottom-4 right-4 bg-white p-3 rounded-full shadow-lg">
                        <PawPrint className="h-6 w-6 text-primary" />
                    </div>
                </div>
            </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="max-w-4xl mx-auto p-8 lg:p-12 text-center shadow-lg">
                <div className="flex justify-center items-center gap-3">
                    <Leaf className="h-8 w-8 text-primary" />
                    <h2 className="font-headline text-3xl md:text-4xl text-green-900 font-bold">Conservation & Eco-Tourism</h2>
                </div>
                <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
                    Sri Lanka's commitment to wildlife conservation goes beyond protection—it's about creating sustainable tourism that benefits both wildlife and local communities. Our eco-tourism initiatives support elephant orphanages, promote ethical wildlife viewing, and empower local guides and communities.
                </p>
                <div className="mt-10 grid sm:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center gap-3">
                        <div className="bg-primary/10 p-3 rounded-full">
                            <Shield className="h-7 w-7 text-primary" />
                        </div>
                        <h3 className="font-semibold text-lg text-foreground">Protected Areas</h3>
                        <p className="text-sm text-muted-foreground">26 national parks covering 15% of the island</p>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                        <div className="bg-primary/10 p-3 rounded-full">
                            <Users className="h-7 w-7 text-primary" />
                        </div>
                        <h3 className="font-semibold text-lg text-foreground">Community Support</h3>
                        <p className="text-sm text-muted-foreground">Local guides and eco-lodges benefit communities</p>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                        <div className="bg-primary/10 p-3 rounded-full">
                            <Heart className="h-7 w-7 text-primary" />
                        </div>
                        <h3 className="font-semibold text-lg text-foreground">Ethical Tourism</h3>
                        <p className="text-sm text-muted-foreground">Responsible wildlife viewing practices</p>
                    </div>
                </div>
                <div className="mt-10">
                    <Button size="lg" className="bg-green-700 hover:bg-secondary/90 text-secondary-foreground rounded-3xl">Support Wildlife Tours</Button>
                </div>
            </Card>
        </div>
      </section>

      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0">
            <Image
              src="https://content-provider.payshia.com/travel-web/images/img4.webp"
              alt="Leopard in the wild"
              fill
              className="z-0 object-cover"
              data-ai-hint="leopard closeup"
            />
            <div className="absolute inset-0 bg-black/60 z-10" />
        </div>
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h2 className="font-headline text-4xl md:text-5xl font-bold">
                Ready for the Wild Side of Sri Lanka!
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-white">
              Embark on an unforgettable journey through pristine wilderness and encounter magnificent wildlife in their natural habitat.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button size="lg" className="bg-white hover:bg-gray-100 text-black">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book a Wildlife Experience
                </Button>
                <div className="flex items-center gap-2">
                    <div className="flex text-yellow-400">
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                    </div>
                    <span className="font-semibold">4.9/5 on TripAdvisor</span>
                </div>
            </div>
        </div>
      </section>
    </>
  );
}
