
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Waves, Mountain, Leaf, Sparkles, Trophy, Utensils, Wind, Star, Users } from 'lucide-react';

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

  const experiences = [
    {
        name: 'Surfing at Arugam Bay',
        description: 'Perfect waves from May to October, ideal for all skill levels',
        image: 'https://placehold.co/600x400.png',
        aiHint: 'surfing wave',
        icon: <Waves className="h-6 w-6 text-primary" />,
    },
    {
        name: 'Hiking in Ella',
        description: 'Perfect waves from May to October, ideal for all skill levels',
        image: 'https://placehold.co/600x400.png',
        aiHint: 'hiking ella',
        icon: <Mountain className="h-6 w-6 text-green-500" />,
    },
    {
        name: 'Waterfall Jumping Lakshapana',
        description: 'Perfect waves from May to October, ideal for all skill levels',
        image: 'https://placehold.co/600x400.png',
        aiHint: 'waterfall jumping',
        icon: <Waves className="h-6 w-6 text-primary" />,
    },
    {
        name: 'Cooking Classes',
        description: 'Perfect waves from May to October, ideal for all skill levels',
        image: 'https://placehold.co/600x400.png',
        aiHint: 'cooking class',
        icon: <Utensils className="h-6 w-6 text-red-500" />,
    },
    {
        name: 'Beach Yoga',
        description: 'Perfect waves from May to October, ideal for all skill levels',
        image: 'https://placehold.co/600x400.png',
        aiHint: 'beach yoga',
        icon: <Leaf className="h-6 w-6 text-green-500" />,
    },
    {
        name: 'Ravana Zip Line',
        description: 'Perfect waves from May to October, ideal for all skill levels',
        image: 'https://placehold.co/600x400.png',
        aiHint: 'zip line',
        icon: <Mountain className="h-6 w-6 text-green-500" />,
    },
    {
        name: 'Skating in Hikkaduwa',
        description: 'Perfect waves from May to October, ideal for all skill levels',
        image: 'https://placehold.co/600x400.png',
        aiHint: 'surfing hikkaduwa',
        icon: <Waves className="h-6 w-6 text-primary" />,
    },
    {
        name: 'Rafting Kithulgala',
        description: 'Perfect waves from May to October, ideal for all skill levels',
        image: 'https://placehold.co/600x400.png',
        aiHint: 'rafting river',
        icon: <Waves className="h-6 w-6 text-primary" />,
    }
  ]

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

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-headline text-4xl md:text-5xl relative inline-block">
              Top Experiences
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-accent"></span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {experiences.map((experience, index) => (
              <Card key={index} className="overflow-hidden shadow-lg rounded-lg flex flex-col">
                <Image
                    src={experience.image}
                    alt={experience.name}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover"
                    data-ai-hint={experience.aiHint}
                />
                <CardContent className="p-6 flex-grow flex flex-col">
                    <div className="flex items-start gap-3">
                        {experience.icon}
                        <h3 className="font-headline text-xl font-bold flex-1">{experience.name}</h3>
                    </div>
                    <p className="text-muted-foreground mt-2">{experience.description}</p>
                </CardContent>
                <CardFooter className="p-4 bg-card mt-auto">
                    <Button className="w-full">Learn More</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0">
            <Image
              src="https://placehold.co/1920x800.png"
              alt="People interacting with locals in Sri Lanka"
              fill
              className="z-0 object-cover"
              data-ai-hint="tourists locals"
            />
            <div className="absolute inset-0 bg-black/60 z-10" />
        </div>
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h2 className="font-headline text-4xl md:text-5xl font-bold">
                Let's Make Your Sri Lanka Experience Unforgettable
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-white">
              Join thousands of travelers who've discovered the magic of Sri Lanka
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    Build Your Itinerary
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-secondary">
                    Book Local Experiences
                </Button>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm">
                <div className="flex items-center gap-2">
                    <div className="flex text-yellow-400">
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                    </div>
                    <span>5000+ Reviews</span>
                </div>
                <div className="flex items-center gap-2">
                    <Leaf className="w-5 h-5 text-green-400" />
                    <span>Eco-certified</span>
                </div>
                <div className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    <span>Local Guides</span>
                </div>
            </div>
        </div>
      </section>

    </>
  );
}
