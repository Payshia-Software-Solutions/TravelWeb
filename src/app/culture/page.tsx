

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

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

      <section className="py-16 lg:py-24 bg-background">
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
                <CardContent className="p-6 bg-card">
                  <h3 className="font-headline text-2xl font-bold text-primary">{festival.name}</h3>
                  <p className="mt-2 text-muted-foreground">{festival.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
