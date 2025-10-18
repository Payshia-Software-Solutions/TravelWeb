
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Waves, Mountain, Leaf } from 'lucide-react';
import Link from 'next/link';

function CultureIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg {...props} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M50,10A40,40 0 1,0 90,50 40,40 0 0,0 50,10ZM30,40H40V60H30ZM70,40H60V60H70ZM50,70a5,5 0 1,1 5-5A5,5 0 0,1 50,70ZM50,30a5,5 0 1,1 5-5A5,5 0 0,1 50,30Z" fill="currentColor" stroke="currentColor" strokeWidth="2"/>
            <path d="M45,80h10v10H45Z" fill="currentColor"/>
            <path d="M20,75H80" stroke="currentColor" strokeWidth="2"/>
            <path d="M25,20a5,5 0 1,1 5-5A5,5 0 0,1 25,20Z" fill="currentColor"/>
            <path d="M75,20a5,5 0 1,1 5-5A5,5 0 0,1 75,20Z" fill="currentColor"/>
        </svg>
    );
}

const categories = [
    {
      name: 'Culture',
      icon: <CultureIcon className="h-10 w-10 text-yellow-500" />,
      link: '/culture'
    },
    {
      name: 'Wellness',
      icon: <Leaf className="h-10 w-10 text-green-500" />,
      link: '/ayurveda'
    },
    {
      name: 'Water Sports',
      icon: <Waves className="h-10 w-10 text-blue-500" />,
      link: '/things-to-do'
    },
    {
      name: 'Adventure',
      icon: <Mountain className="h-10 w-10 text-green-700" />,
      link: '/wildlife'
    },
];

export function DiscoverParadise() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-12">
            <h2 className="font-headline text-4xl md:text-5xl relative inline-block">
                Discover Paradise
                <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-accent"></span>
            </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="space-y-8">
            <Link href={categories[0].link}>
                <Card className="p-6 shadow-lg hover:shadow-2xl transition-shadow cursor-pointer">
                  <CardContent className="flex items-center justify-center flex-col gap-4 p-0">
                    {categories[0].icon}
                    <h3 className="font-headline text-xl font-bold">{categories[0].name}</h3>
                  </CardContent>
                </Card>
            </Link>
            <Link href={categories[1].link}>
                 <Card className="p-6 shadow-lg hover:shadow-2xl transition-shadow cursor-pointer">
                  <CardContent className="flex items-center justify-center flex-col gap-4 p-0">
                    {categories[1].icon}
                    <h3 className="font-headline text-xl font-bold">{categories[1].name}</h3>
                  </CardContent>
                </Card>
            </Link>
          </div>

          <div className="flex justify-center">
            <Image
              src="https://content-provider.payshia.com/travel-web/images/map.webp"
              alt="Map of Sri Lanka"
              width={400}
              height={600}
              className="max-w-full h-auto"
              data-ai-hint="sri lanka map"
            />
          </div>

          <div className="space-y-8">
             <Link href={categories[2].link}>
                <Card className="p-6 shadow-lg hover:shadow-2xl transition-shadow cursor-pointer">
                  <CardContent className="flex items-center justify-center flex-col gap-4 p-0">
                    {categories[2].icon}
                    <h3 className="font-headline text-xl font-bold">{categories[2].name}</h3>
                  </CardContent>
                </Card>
            </Link>
             <Link href={categories[3].link}>
                <Card className="p-6 shadow-lg hover:shadow-2xl transition-shadow cursor-pointer">
                  <CardContent className="flex items-center justify-center flex-col gap-4 p-0">
                    {categories[3].icon}
                    <h3 className="font-headline text-xl font-bold">{categories[3].name}</h3>
                  </CardContent>
                </Card>
            </Link>
          </div>
        </div>
        <p className="mt-12 text-center text-lg text-muted-foreground max-w-4xl mx-auto">
            Sri Lanka's diverse landscapes offer everything from pristine beaches and lush rainforests to ancient temples and vibrant cities. Whether you seek adrenaline-pumping adventures or serene cultural experiences, the Pearl of the Indian Ocean has something magical waiting for you.
        </p>
      </div>
    </section>
  );
}

    