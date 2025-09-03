

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { PawPrint, Sparkles, Hand, Leaf, BrainCircuit, HeartPulse, MapPin, Home, Bed, Tag, Star, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function AyurvedaPage() {
  const treatments = [
    {
      name: 'Herbal Oil Massage',
      description: 'Deep tissue relaxation with warm herbal oils to release tension and improve circulation',
      icon: <Hand className="h-10 w-10 text-primary" />,
    },
    {
      name: 'Panchakarma',
      description: 'Complete detoxification program to eliminate toxins and restore natural balance',
      icon: <HeartPulse className="h-10 w-10 text-primary" />,
    },
    {
      name: 'Detox Therapy',
      description: 'Cleansing treatments using indigenous herbs to purify and rejuvenate your system',
      icon: <Leaf className="h-10 w-10 text-primary" />,
    },
    {
      name: 'Meditation',
      description: 'Guided mindfulness practices to achieve mental clarity and spiritual awakening',
      icon: <BrainCircuit className="h-10 w-10 text-primary" />,
    },
  ];

  const resorts = [
    {
        name: 'Barberyn Ayurveda Resort',
        location: 'Beruwala, Sri Lanka',
        image: 'https://images.unsplash.com/photo-1628870776167-b4b684441e10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxheXVydmVkYSUyMHJlc29ydHxlbnwwfHx8fDE3NTQ0MTUxOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
        aiHint: 'ayurveda resort',
        tags: [
            { icon: <Tag className="h-4 w-4" />, label: 'Spa' },
            { icon: <Home className="h-4 w-4" />, label: 'Resort' },
            { icon: <Bed className="h-4 w-4" />, label: 'Luxury' },
        ],
    },
    {
        name: 'Siddhalepa Ayurveda Health Resort',
        location: 'Wadduwa, Sri Lanka',
        image: 'https://images.unsplash.com/photo-1695694443208-3caf39edfd63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxheXVydmVkYSUyMHJlc29ydHxlbnwwfHx8fDE3NTQ0MTUxOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
        aiHint: 'ayurveda resort',
        tags: [
            { icon: <Tag className="h-4 w-4" />, label: 'Spa' },
            { icon: <Home className="h-4 w-4" />, label: 'Resort' },
            { icon: <Bed className="h-4 w-4" />, label: 'Luxury' },
        ],
    },
    {
        name: 'Jetwing Ayurveda Pavilions',
        location: 'Negombo, Sri Lanka',
        image: 'https://images.unsplash.com/photo-1606749831463-23939b0313fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxheXVydmVkYSUyMHJlc29ydCUyMGJlYWNofGVufDB8fHx8MTc1NDQxNTE5Nnww&ixlib=rb-4.1.0&q=80&w=1080',
        aiHint: 'ayurveda resort beach',
        tags: [
            { icon: <Tag className="h-4 w-4" />, label: 'Spa' },
            { icon: <Home className="h-4 w-4" />, label: 'Resort' },
            { icon: <Bed className="h-4 w-4" />, label: 'Luxury' },
        ],
    },
    {
        name: 'Jetwing Ayurveda Pavilions',
        location: 'Negombo, Sri Lanka',
        image: 'https://images.unsplash.com/photo-1575669629426-cea7489ba1e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxheXVydmVkYSUyMHJlc29ydCUyMGJlYWNofGVufDB8fHx8MTc1NDQxNTE5Nnww&ixlib=rb-4.1.0&q=80&w=1080',
        aiHint: 'ayurveda resort beach',
        tags: [
            { icon: <Tag className="h-4 w-4" />, label: 'Spa' },
            { icon: <Home className="h-4 w-4" />, label: 'Resort' },
            { icon: <Bed className="h-4 w-4" />, label: 'Luxury' },
        ],
    },
  ];

  return (
    <>
      <section className="relative h-screen flex flex-col items-center justify-center text-center text-white">
        <div className="absolute inset-0">
            <Image
              src="https://content-provider.payshia.com/travel-web/category/aryveda.jpg"
              alt="Ayurveda setup with oils and herbs"
              fill
              className="z-0 object-cover"
              priority
              data-ai-hint="ayurveda spa"
            />
            <div className="absolute inset-0 bg-black/50 z-10" />
        </div>
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Ayurveda
          </h1>
          <p className="mt-4 text-2xl md:text-3xl font-headline">
            The Healing Spirit of Sri Lanka
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-white">
            Discover ancient wellness practices rooted in balance, nature, and self-care
          </p>
          <Button size="lg" className="mt-8" asChild>
            <Link href="/ayurveda">Book a Wellness Retreat</Link>
          </Button>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h2 className="font-headline text-4xl md:text-5xl relative inline-block">
                        What is Ayurveda?
                        <span className="absolute -bottom-2 left-0 w-2/3 h-1 bg-accent"></span>
                    </h2>
                    <p className="text-lg text-muted- leading-relaxed">
                        Ayurveda, the ancient "science of life," has flourished in Sri Lanka for over 3,000 years. This holistic healing system emphasizes the balance between mind, body, and spirit through natural remedies, herbal treatments, and mindful practices.
                    </p>
                    <p className="text-lg text-muted- leading-relaxed">
                        Experience authentic treatments that cleanse toxins, restore energy, and promote deep healing in the birthplace of traditional wellness wisdom.
                    </p>
                    <div className="flex items-center gap-3 text-primary">
                        <Sparkles className="h-6 w-6" />
                        <span className="font-semibold">3000+ Years of Healing Tradition</span>
                    </div>
                </div>
                 <div className="relative">
                    <Image
                        src="https://content-provider.payshia.com/travel-web/images/img7.webp"
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
              Popular Treatments
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-accent"></span>
            </h2>
            <p className="mt-6 text-lg text-muted- max-w-2xl mx-auto">
              Discover transformative healing experiences designed to restore your natural balance
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {treatments.map((treatment) => (
              <Card key={treatment.name} className="text-center p-8 bg-green-50/50 shadow-lg border-green-200">
                <CardContent className="flex flex-col items-center justify-center gap-4">
                  <div className="mb-4">{treatment.icon}</div>
                  <h3 className="font-headline text-xl font-bold h-14 flex items-center justify-center">{treatment.name}</h3>
                  <p className="text-muted-foreground text-sm flex-grow">{treatment.description}</p>
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
              Top Ayurvedic Resorts
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-accent"></span>
            </h2>
            <p className="mt-6 text-lg text-muted- max-w-2xl mx-auto">
              Luxury wellness destinations offering authentic healing experiences
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {resorts.map((resort, index) => (
              <Card key={index} className="overflow-hidden shadow-lg rounded-lg flex flex-col">
                 <Image
                    src={resort.image}
                    alt={resort.name}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover"
                    data-ai-hint={resort.aiHint}
                />
                <CardContent className="p-6 flex-grow flex flex-col bg-card">
                  <h3 className="font-headline text-xl font-bold h-12 flex items-center">{resort.name}</h3>
                  <div className="flex items-center text-sm text-muted-foreground mt-2">
                    <MapPin className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
                    <span>{resort.location}</span>
                  </div>
                   <div className="flex flex-wrap gap-4 mt-4 text-muted-foreground text-sm">
                      {resort.tags.map(tag => (
                        <div key={tag.label} className="flex items-center gap-1">
                          {tag.icon}
                          <span>{tag.label}</span>
                        </div>
                      ))}
                  </div>
                </CardContent>
                 <CardFooter className="p-4 bg-card mt-auto">
                    <Button className="w-full">View Details</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
           <div className="text-center mb-12">
            <h2 className="font-headline text-4xl md:text-5xl relative inline-block">
              Tips for Tourists
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-accent"></span>
            </h2>
            <p className="mt-6 text-lg text-muted-">
              Everything you need to know for an authentic Ayurveda experience
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What to expect during an Ayurveda session?</AccordionTrigger>
              <AccordionContent>
                An authentic Ayurvedic session begins with a consultation with a qualified practitioner who will determine your unique mind-body constitution (dosha). Treatments often involve herbal oil massages, steam baths, and other therapies designed to detoxify and rejuvenate. Expect a calming and deeply relaxing experience that focuses on holistic well-being.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How to book an authentic experience?</AccordionTrigger>
              <AccordionContent>
                To book an authentic Ayurvedic experience, research reputable wellness centers and resorts that are certified by the Sri Lanka Tourism Development Authority. Reading reviews, checking practitioner credentials, and booking directly through official websites are good practices. Our recommended resorts are all verified for authenticity and quality.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it safe and certified?</AccordionTrigger>
              <AccordionContent>
                Yes, authentic Ayurvedic treatments in Sri Lanka are safe when performed by certified professionals. Look for centers registered with the Department of Ayurveda. Practitioners undergo rigorous training, and the herbal remedies used are regulated for quality and safety, ensuring a trustworthy and effective healing journey.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="mt-12 bg-green-50 p-8 rounded-lg shadow-md">
            <p className="text-lg italic text-muted-foreground text-center">
              "The healing I experienced in Sri Lanka was beyond anything I imagined. The authentic treatments and peaceful environment created a transformation that lasted long after I returned home."
            </p>
            <p className="text-right mt-4 font-semibold text-foreground">- Sarah M., Wellness Traveler</p>
          </div>
        </div>
      </section>
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0">
            <Image
              src="https://content-provider.payshia.com/travel-web/images/img7.webp"
              alt="Leopard in Sri Lanka"
              fill
              className="z-0 object-cover"
              data-ai-hint="leopard closeup"
            />
            <div className="absolute inset-0 bg-black/60 z-10" />
        </div>
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h2 className="font-headline text-4xl md:text-5xl font-bold">
                Ready to Rejuvenate in Sri Lanka?
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-white">
              Begin your journey to wellness with authentic Ayurvedic treatments
            </p>
            <div className="mt-8 flex justify-center">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    Find Ayurveda Packages
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
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Certified Centers</span>
                </div>
            </div>
        </div>
      </section>
    </>
  );
}

    