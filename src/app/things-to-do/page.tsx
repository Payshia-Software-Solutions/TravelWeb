
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Waves, Mountain, Leaf, Sparkles, Trophy } from 'lucide-react';

function CultureIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
        >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-12h2v2h-2v-2zm0 4h2v6h-2v-6z" />
        </svg>
    )
}


export default function ThingsToDoPage() {
    const categories = [
    {
      name: 'Water Sports',
      icon: <Waves className="h-10 w-10 text-primary" />,
    },
    {
      name: 'Adventure',
      icon: <Mountain className="h-10 w-10 text-green-500" />,
    },
    {
      name: 'Culture',
      icon: <CultureIcon className="h-10 w-10 text-yellow-500" />,
    },
    {
      name: 'Wellness',
      icon: <Leaf className="h-10 w-10 text-green-500" />,
    },
  ];

  return (
    <>
      <section className="relative h-screen flex flex-col items-center justify-center text-center text-white">
        <div className="absolute inset-0">
            <Image
              src="https://placehold.co/1920x1080.png"
              alt="Surfer on a wave"
              fill
              className="z-0 object-cover"
              priority
              data-ai-hint="surfer wave"
            />
            <div className="absolute inset-0 bg-black/50 z-10" />
        </div>
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Things to Do in Sri Lanka
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-white">
            From thrill-filled adventures to peaceful retreats, discover unforgettable experiences.
          </p>
          <Button size="lg" className="mt-8">
            Start Planning
          </Button>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h2 className="font-headline text-4xl md:text-5xl relative inline-block">
                        Discover Paradise
                        <span className="absolute -bottom-2 left-0 w-2/3 h-1 bg-green-200"></span>
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Sri Lanka's diverse landscapes offer everything from pristine beaches and lush rainforests to ancient temples and vibrant cities. Whether you seek adrenaline-pumping adventures or serene cultural experiences, the Pearl of the Indian Ocean has something magical waiting for you.
                    </p>
                    
                    <div className="flex items-center gap-3 text-primary">
                        <Trophy className="h-6 w-6" />
                        <span className="font-semibold">3000+ Years of Healing Tradition</span>
                    </div>
                </div>
                 <div className="grid grid-cols-2 gap-4">
                    {categories.map((category) => (
                        <Card key={category.name} className="text-center p-8 bg-gray-50/50 shadow-lg border-gray-200">
                            <CardContent className="flex flex-col items-center justify-center gap-4">
                            <div className="mb-4">{category.icon}</div>
                            <h3 className="font-headline text-xl font-bold">{category.name}</h3>
                            </CardContent>
                        </Card>
                    ))}
                 </div>
            </div>
        </div>
      </section>
    </>
  );
}
