
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { PawPrint, ShieldCheck, Sprout, UserCheck, HelpCircle, Users, Heart, ClipboardList, Headset } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us | TravelSite',
};

export default function AboutPage() {

  const values = [
    {
      title: 'Sustainability',
      description: "Protecting Sri Lanka's natural beauty for future generations",
      icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    },
    {
      title: 'Local Empowerment',
      description: 'Supporting communities and local businesses',
      icon: <Sprout className="h-10 w-10 text-primary" />,
    },
    {
      title: 'Personalized Service',
      description: 'Crafting unique experiences tailored to you',
      icon: <UserCheck className="h-10 w-10 text-primary" />,
    },
    {
      title: 'Cultural Respect',
      description: 'Honoring traditions and authentic experiences',
      icon: <HelpCircle className="h-10 w-10 text-primary" />,
    },
  ];

  const whyUs = [
    {
        title: 'Trusted Local Experts',
        description: 'Native guides with insider knowledge and authentic connections',
        icon: <Users className="h-10 w-10 text-primary" />,
    },
    {
        title: '1000+ Happy Travelers',
        description: 'Proven track record of creating unforgettable memories',
        icon: <Heart className="h-10 w-10 text-primary" />,
    },
    {
        title: 'Customized Itineraries',
        description: 'Tailored experiences designed around your interests and preferences',
        icon: <ClipboardList className="h-10 w-10 text-primary" />,
    },
    {
        title: '24/7 Support',
        description: 'Round-the-clock assistance for peace of mind during your journey',
        icon: <Headset className="h-10 w-10 text-primary" />,
    },
  ]

  return (
    <>
      <section className="relative h-screen flex flex-col items-center justify-center text-center text-white">
        <div className="absolute inset-0">
            <Image
              src="https://content-provider.payshia.com/travel-web/about-us/img3.webp"
              alt="Lush green tea plantations in Sri Lanka"
              fill
              className="z-0 object-cover"
              priority
              data-ai-hint="tea plantations"
            />
            <div className="absolute inset-0 bg-black/50 z-10" />
        </div>
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl  tracking-tight">
            About Us
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-white">
            Your trusted guide to discovering the heart of Sri Lanka
          </p>
          <Button size="lg" className="mt-8 rounded-3xl" asChild>
            <Link href="/destinations">Explore Our Destinations</Link>
          </Button>
        </div>
      </section>
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h2 className="font-headline text-4xl md:text-5xl relative inline-block">
                        Our Story
                        <span className="absolute -bottom-2 left-0 w-2/3 h-1 bg-accent"></span>
                    </h2>
                    <p className="text-lg text-muted- leading-relaxed">
                        Born from a deep love for Sri Lanka's breathtaking landscapes and rich cultural heritage, our journey began with a simple mission: to share the authentic beauty of our island home with travelers from around the world.
                    </p>
                    <p className="text-lg text-muted- leading-relaxed">
                        What started as a small family business has grown into a trusted travel partner, connecting thousands of adventurers with unforgettable experiences across Sri Lanka's diverse regions.
                    </p>
                    <p className="text-lg text-muted- leading-relaxed">
                        Every journey we craft is infused with local insights, sustainable practices, and genuine care for both our guests and the communities we visit.
                    </p>
                </div>
                 <div className="relative">
                    <Image
                        src="https://content-provider.payshia.com/travel-web/about-us/img2.jpg"
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
            <h2 className="font-headline text-4xl md:text-5xl relative inline-block">
              Our Mission & Values
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-accent"></span>
            </h2>
            <p className="mt-6 text-lg text-muted- max-w-2xl mx-auto">
              Guiding principles that shape every journey we create
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <Card key={value.title} className="text-center p-8 bg-blue-50/50 shadow-lg border-blue-100 flex flex-col">
                <CardContent className="flex flex-col items-center justify-center gap-4 flex-grow">
                  <div className="mb-4">{value.icon}</div>
                  <h3 className="font-headline text-xl font-bold h-7 flex items-center text-black">{value.title}</h3>
                  <p className="text-muted- text-sm flex-grow">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-headline text-4xl md:text-5xl relative inline-block">
              Why Travel With Us?
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-accent"></span>
            </h2>
            <p className="mt-6 text-lg text-muted- max-w-2xl mx-auto">
              Discover what makes us your perfect travel partner
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUs.map((item) => (
              <Card key={item.title} className="text-center p-8 bg-white shadow-lg border-border flex flex-col">
                <CardContent className="flex flex-col items-center justify-center gap-4 flex-grow">
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="font-headline text-xl font-bold h-12 flex items-center justify-center text-black">{item.title}</h3>
                  <p className="text-muted- text-sm flex-grow">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0">
            <Image
              src="https://content-provider.payshia.com/travel-web/about-us/img1.webp"
              alt="Train passing through tea plantations in Sri Lanka"
              fill
              className="z-0 object-cover"
              data-ai-hint="train tea plantation"
            />
            <div className="absolute inset-0 bg-black/60 z-10" />
        </div>
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h2 className="font-headline text-4xl md:text-5xl font-bold">
                Ready to explore Sri Lanka with us?
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-white">
              Let's create your perfect Sri Lankan adventure together.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button size="lg">
                    Start Your Journey
                </Button>
                <Button size="lg" variant="outline" className="border-white text-black hover:bg-white hover:text-secondary">
                    View Our Packages
                </Button>
            </div>
        </div>
      </section>
    </>
  );
}
