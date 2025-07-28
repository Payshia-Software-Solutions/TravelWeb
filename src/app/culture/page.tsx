

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Sparkles, Star, Users } from 'lucide-react';

export default function CulturePage() {
  const festivals = [
    {
      name: 'Vesak Festival',
      description: "The most sacred Buddhist festival celebrating the birth, enlightenment, and death of Buddha with thousands of colorful lanterns lighting up the night sky.",
      image: 'https://placehold.co/800x600.png',
      aiHint: 'vesak lanterns'
    },
    {
      name: 'Poson Festival',
      description: "Commemorates the arrival of Buddhism in Sri Lanka. The day is celebrated with religious activities, decorations, and the lighting of paper lanterns.",
      image: 'https://placehold.co/800x600.png',
      aiHint: 'buddhist festival'
    },
    {
      name: 'Esala Perahera',
      description: "A grand festival of dance, music, and decorated elephants held in Kandy to pay homage to the Sacred Tooth Relic of Lord Buddha.",
      image: 'https://placehold.co/800x600.png',
      aiHint: 'festival parade'
    }
  ]

    const arts = [
    {
      name: 'Kandyan Dance',
      description: 'Graceful classical dance form with elaborate costumes and precise movements',
      image: 'https://placehold.co/600x800.png',
      aiHint: 'kandyan dance'
    },
    {
      name: 'Traditional Masks',
      description: 'Intricately carved wooden masks used in devil dancing and folk performances',
      image: 'https://placehold.co/600x800.png',
      aiHint: 'traditional masks'
    },
    {
      name: 'Percussion Ensemble',
      description: 'Hypnotic rhythms created by geta bera, yak bera, and other traditional drums',
      image: 'https://placehold.co/600x800.png',
      aiHint: 'traditional drums'
    },
    {
      name: 'Devil Dance',
      description: 'Hypnotic rhythms created by geta bera, yak bera, and other traditional drums',
      image: 'https://placehold.co/600x800.png',
      aiHint: 'devil dance'
    }
  ];

  const heritageSites = [
    {
      name: 'Anuradhapura Ancient City',
      description: 'Explore the ruins of the first capital of Sri Lanka, a UNESCO World Heritage site filled with stupas and monasteries.',
      image: 'https://placehold.co/600x400.png',
      aiHint: 'anuradhapura city'
    },
    {
      name: 'Polonnaruwa Ancient City',
      description: 'Discover the well-preserved ruins of the second ancient capital, known for its impressive statues and temples.',
      image: 'https://placehold.co/600x400.png',
      aiHint: 'polonnaruwa ruins'
    },
    {
        name: 'Temple of the Tooth',
        description: 'Visit the sacred temple in Kandy that houses the relic of the tooth of the Buddha, a major pilgrimage site.',
        image: 'https://placehold.co/600x400.png',
        aiHint: 'kandy temple'
    },
    {
      name: 'Katharagama',
      description: 'A multi-religious sacred city, a pilgrimage site for Buddhists, Hindus, and the indigenous Vedda people.',
      image: 'https://placehold.co/600x400.png',
      aiHint: 'katharagama temple'
    },
    {
      name: 'Aluwiharaya',
      description: 'A rock monastery with ancient caves where the Buddhist scriptures were first written down on palm leaves.',
      image: 'https://placehold.co/600x400.png',
      aiHint: 'cave temple'
    },
    {
        name: 'Dambulla Cave Temple',
        description: 'The largest and best-preserved cave temple complex in Sri Lanka, with stunning murals and statues.',
        image: 'https://placehold.co/600x400.png',
        aiHint: 'dambulla temple'
    }
  ];

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
                    <h2 className="font-headline text-4xl md:text-5xl font-bold relative inline-block">
                        A Living Heritage
                        <span className="absolute -bottom-2 left-0 w-2/3 h-1 bg-accent"></span>
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Sri Lankan culture is a vibrant tapestry woven from over 2,500 years of history. Influenced by Buddhism, Hinduism, Islam, and Christianity, the island's cultural landscape reflects a harmonious blend of ancient traditions and modern expressions.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
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
            <h2 className="font-headline text-4xl md:text-5xl font-bold relative inline-block">
              Festivals & Traditions
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-accent"></span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
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
                <CardContent className="p-6 bg-blue-50">
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
            <h2 className="font-headline text-4xl md:text-5xl font-bold relative inline-block">
              Arts & Music
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-accent"></span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
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
                <CardContent className="p-6 bg-blue-50">
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
            <h2 className="font-headline text-4xl md:text-5xl font-bold relative inline-block">
              Temples & Heritage Sites
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-accent"></span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
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
                <CardContent className="p-6 bg-blue-50">
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
