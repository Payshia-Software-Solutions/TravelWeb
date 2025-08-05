

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Sparkles, Star, Users } from 'lucide-react';

export default function CulturePage() {
  const festivals = [
    {
      name: 'Vesak Festival',
      description: "The most sacred Buddhist festival celebrating the birth, enlightenment, and death of Buddha with thousands of colorful lanterns lighting up the night sky.",
      image: 'https://images.unsplash.com/photo-1678108865532-c41ccd262e8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHx2ZXNhayUyMGxhbnRlcm5zfGVufDB8fHx8MTc1NDQxMzYxN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      aiHint: 'vesak lanterns'
    },
    {
      name: 'Poson Festival',
      description: "Commemorates the arrival of Buddhism in Sri Lanka. The day is celebrated with religious activities, decorations, and the lighting of paper lanterns.",
      image: 'https://images.unsplash.com/photo-1693823029549-50286c4a5ff6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxidWRkaGlzdCUyMGZlc3RpdmFsfGVufDB8fHx8MTc1NDQxMzYxN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      aiHint: 'buddhist festival'
    },
    {
      name: 'Esala Perahera',
      description: "A grand festival of dance, music, and decorated elephants held in Kandy to pay homage to the Sacred Tooth Relic of Lord Buddha.",
      image: 'https://images.unsplash.com/photo-1711014778307-3fd549f523f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxmZXN0aXZhbCUyMHBhcmFkZXxlbnwwfHx8fDE3NTQ0MTM2MTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      aiHint: 'festival parade'
    }
  ]

    const arts = [
    {
      name: 'Kandyan Dance',
      description: 'Graceful classical dance form with elaborate costumes and precise movements',
      image: 'https://images.unsplash.com/photo-1603909477416-3fc943f3e4d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxrYW5keWFuJTIwZGFuY2V8ZW58MHx8fHwxNzU0NDE0OTE5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      aiHint: 'kandyan dance'
    },
    {
      name: 'Traditional Masks',
      description: 'Intricately carved wooden masks used in devil dancing and folk performances',
      image: 'https://images.unsplash.com/photo-1707922340846-2dcbdf954dc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHx0cmFkaXRpb25hbCUyMG1hc2tzfGVufDB8fHx8MTc1NDQxNDkxOXww&ixlib=rb-4.1.0&q=80&w=1080',
      aiHint: 'traditional masks'
    },
    {
      name: 'Percussion Ensemble',
      description: 'Hypnotic rhythms created by geta bera, yak bera, and other traditional drums',
      image: 'https://images.unsplash.com/photo-1565103001988-2de7a0a7c7f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHx0cmFkaXRpb25hbCUyMGRydW1zfGVufDB8fHx8MTc1NDQxNDkxOXww&ixlib=rb-4.1.0&q=80&w=1080',
      aiHint: 'traditional drums'
    },
    {
      name: 'Devil Dance',
      description: 'Hypnotic rhythms created by geta bera, yak bera, and other traditional drums',
      image: 'https://images.unsplash.com/photo-1653067415490-e83562337955?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8ZGV2aWwlMjBkYW5jZXxlbnwwfHx8fDE3NTQ0MTQ5MTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      aiHint: 'devil dance'
    }
  ];

  const heritageSites = [
    {
      name: 'Anuradhapura Ancient City',
      description: 'Explore the ruins of the first capital of Sri Lanka, a UNESCO World Heritage site filled with stupas and monasteries.',
      image: 'https://images.unsplash.com/photo-1654529652927-30e91120c42f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxhbnVyYWRoYXB1cmElMjBjaXR5fGVufDB8fHx8MTc1NDQxNDk2OHww&ixlib=rb-4.1.0&q=80&w=1080',
      aiHint: 'anuradhapura city'
    },
    {
      name: 'Polonnaruwa Ancient City',
      description: 'Discover the well-preserved ruins of the second ancient capital, known for its impressive statues and temples.',
      image: 'https://images.unsplash.com/photo-1646568109169-8eb3af71f308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8cG9sb25uYXJ1d2ElMjBydWluc3xlbnwwfHx8fDE3NTQ0MTQ5Njh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      aiHint: 'polonnaruwa ruins'
    },
    {
        name: 'Temple of the Tooth',
        description: 'Visit the sacred temple in Kandy that houses the relic of the tooth of the Buddha, a major pilgrimage site.',
        image: 'https://images.unsplash.com/photo-1722358699177-2522cc2306df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8a2FuZHklMjB0ZW1wbGV8ZW58MHx8fHwxNzU0NDE0OTY4fDA&ixlib=rb-4.1.0&q=80&w=1080',
        aiHint: 'kandy temple'
    },
    {
      name: 'Katharagama',
      description: 'A multi-religious sacred city, a pilgrimage site for Buddhists, Hindus, and the indigenous Vedda people.',
      image: 'https://images.unsplash.com/photo-1714459481307-f45bf179435d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxrYXRoYXJhZ2FtYSUyMHRlbXBsZXxlbnwwfHx8fDE3NTQ0MTQ5Njh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      aiHint: 'katharagama temple'
    },
    {
      name: 'Aluwiharaya',
      description: 'A rock monastery with ancient caves where the Buddhist scriptures were first written down on palm leaves.',
      image: 'https://images.unsplash.com/photo-1655289112263-edd3bf75bbdd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjYXZlJTIwdGVtcGxlfGVufDB8fHx8MTc1NDQxNDk2OHww&ixlib=rb-4.1.0&q=80&w=1080',
      aiHint: 'cave temple'
    },
    {
        name: 'Dambulla Cave Temple',
        description: 'The largest and best-preserved cave temple complex in Sri Lanka, with stunning murals and statues.',
        image: 'https://images.unsplash.com/photo-1704797390894-9feb440adf91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxkYW1idWxsYSUyMHRlbXBsZXxlbnwwfHx8fDE3NTQ0MTQ5Njh8MA&ixlib=rb-4.1.0&q=80&w=1080',
        aiHint: 'dambulla temple'
    }
  ];

  return (
    <>
      <section className="relative h-screen flex flex-col items-center justify-center text-center text-white">
        <div className="absolute inset-0">
            <Image
              src="https://content-provider.payshia.com/travel-web/category/culture.jpg"
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
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-white">
            Step into a world of ancient traditions, sacred rituals, and colorful festivals
          </p>
          <Button size="lg" className="mt-8">Explore Culture Tours</Button>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h2 className="font-headline text-4xl md:text-5xl  relative inline-block">
                        A Living Heritage
                        <span className="absolute -bottom-2 left-0 w-2/3 h-1 bg-accent"></span>
                    </h2>
                    <p className="text-lg text-muted- leading-relaxed">
                        Sri Lankan culture is a vibrant tapestry woven from over 2,500 years of history. Influenced by Buddhism, Hinduism, Islam, and Christianity, the island's cultural landscape reflects a harmonious blend of ancient traditions and modern expressions.
                    </p>
                    <p className="text-lg text-muted- leading-relaxed">
                        From the rhythmic beats of traditional drums to the graceful movements of Kandyan dancers, every aspect of Sri Lankan culture tells a story of resilience, spirituality, and celebration.
                    </p>
                    <div className="flex items-center gap-3 text-primary">
                        <Sparkles className="h-6 w-6" />
                        <span className="font-semibold">Experience authentic traditions passed down through generations</span>
                    </div>
                </div>
                 <div>
                    <Image
                        src="https://placehold.co/800x600.png"
                        alt="Sri Lankan cultural performance"
                        width={800}
                        height={600}
                        className="rounded-lg shadow-lg"
                        data-ai-hint="traditional dancer"
                    />
                </div>
            </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-headline text-4xl md:text-5xl  relative inline-block">
              Festivals & Traditions
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-accent"></span>
            </h2>
            <p className="mt-6 text-lg text-muted- max-w-2xl mx-auto">
              Celebrate life through Sri Lanka's most cherished festivals and time-honored traditions
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {festivals.map((festival) => (
              <Card key={festival.name} className="overflow-hidden shadow-lg border-none">
                <Image
                  src={festival.image}
                  alt={festival.name}
                  width={800}
                  height={600}
                  className="w-full h-64 object-cover"
                  data-ai-hint={festival.aiHint}
                />
                <CardContent className="p-6 bg-card">
                  <h3 className="font-headline text-2xl font-bold text-blue-950">{festival.name}</h3>
                  <p className="mt-2 text-muted-">{festival.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-headline text-4xl md:text-5xl  relative inline-block">
              Arts & Music
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-accent"></span>
            </h2>
            <p className="mt-6 text-lg text-muted- max-w-3xl mx-auto">
              Sri Lankan performing arts are a spectacular fusion of rhythm, movement, and storytelling that has captivated audiences for centuries.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {arts.map((art) => (
              <Card key={art.name} className="overflow-hidden shadow-lg border rounded-lg text-center">
                <Image
                  src={art.image}
                  alt={art.name}
                  width={600}
                  height={800}
                  className="w-full h-80 object-cover"
                  data-ai-hint={art.aiHint}
                />
                <CardContent className="p-6 bg-card">
                  <h3 className="font-headline text-xl font-bold text-blue-950">{art.name}</h3>
                  <p className="mt-2 text-sm text-muted- h-16">{art.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-headline text-4xl md:text-5xl  relative inline-block">
              Temples & Heritage Sites
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-accent"></span>
            </h2>
            <p className="mt-6 text-lg text-muted- max-w-3xl mx-auto">
              Explore the island's most sacred and historic sites, where ancient stories are carved in stone.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {heritageSites.map((site) => (
              <Card key={site.name} className="overflow-hidden shadow-lg border-none">
                <Image
                  src={site.image}
                  alt={site.name}
                  width={600}
                  height={400}
                  className="w-full h-56 object-cover"
                  data-ai-hint={site.aiHint}
                />
                <CardContent className="p-6 bg-card">
                  <h3 className="font-headline text-xl font-bold text-blue-950">{site.name}</h3>
                  <p className="mt-2 text-sm text-muted- h-20">{site.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0">
            <Image
              src="https://placehold.co/1920x1080.png"
              alt="Person looking over a lush valley"
              fill
              className="z-0 object-cover"
              data-ai-hint="valley view"
            />
            <div className="absolute inset-0 bg-black/60 z-10" />
        </div>
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h2 className="font-headline text-4xl md:text-5xl font-bold">
                Experience Sri Lankan Culture
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-white">
              Join our cultural tours and immerse yourself in authentic traditions with local guides
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book a Traditional Experience
                </Button>
                <Button size="lg" variant="outline" className="border-white text-black hover:bg-white hover:text-secondary">
                    <Users className="mr-2 h-5 w-5" />
                    Join a Cultural Tour
                </Button>
            </div>
            <div className="mt-8 flex items-center justify-center gap-8 text-sm">
                <div className="flex items-center gap-2">
                    <div className="flex text-yellow-400">
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                    </div>
                    <span>4.9/5 Rating</span>
                </div>
                <div className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    <span>Local Guides Included</span>
                </div>
            </div>
        </div>
      </section>

    </>
  );
}
