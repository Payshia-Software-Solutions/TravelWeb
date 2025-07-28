
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

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
    </>
  );
}
