
import { destinations } from '@/lib/destinations';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Camera, Eye, HelpCircle, Leaf, MapPin, MessageSquare, Mountain, Palmtree, Users, Sun, Footprints, Waves, Ticket, Star, Wind, Utensils, Heart, Flower } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

function ChatIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-background"
        >
            <path d="M4 4h16v12H5.17L4 17.17V4m0-2c-1.1 0-2 .9-2 2v15l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4z" />
        </svg>
    )
}

function TempleIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8 text-primary"
        >
            <path d="M12 2L2 7l10 5 10-5L12 2zm0 7.5L4.5 5.5 12 3l7.5 2.5L12 9.5zM2 17l10 5 10-5-10-5L2 17zm10 2.5L4.5 15.5 12 13l7.5 2.5L12 19.5z" />
        </svg>
    );
}


const sigiriyaThingsToDo = [
    {
        title: 'Climb the Fortress',
        description: "Ascend the ancient rock through lion's paws and enjoy panoramic views from the summit.",
        icon: <Mountain className="h-8 w-8 text-primary" />,
        image: 'https://placehold.co/600x400.png',
        aiHint: 'fortress climb'
    },
    {
        title: 'See Ancient Frescoes',
        description: 'Marvel at 1,500-year-old paintings of celestial maidens on the rock face.',
        icon: <Eye className="h-8 w-8 text-primary" />,
        image: 'https://placehold.co/600x400.png',
        aiHint: 'ancient frescoes'
    },
    {
        title: 'Explore Royal Gardens',
        description: 'Walk through sophisticated water gardens and landscaped terraces.',
        icon: <Palmtree className="h-8 w-8 text-primary" />,
        image: 'https://placehold.co/600x400.png',
        aiHint: 'royal gardens'
    },
    {
        title: 'Photography Tour',
        description: 'Capture stunning sunrise and sunset views from various vantage points.',
        icon: <Camera className="h-8 w-8 text-primary" />,
        image: 'https://placehold.co/600x400.png',
        aiHint: 'photography tour'
    },
    {
        title: 'Village Safari',
        description: 'Experience local culture and traditional life in nearby villages.',
        icon: <Users className="h-8 w-8 text-primary" />,
        image: 'https://placehold.co/600x400.png',
        aiHint: 'village safari'
    },
    {
        title: 'Ayurveda Spa',
        description: 'Relax with traditional Sri Lankan wellness treatments and massages.',
        icon: <Leaf className="h-8 w-8 text-primary" />,
        image: 'https://placehold.co/600x400.png',
        aiHint: 'ayurveda spa'
    }
]

const ruwanvalisayaThingsToDo = [
    {
        title: 'Join a Buddhist Offering Ceremony',
        description: 'Witness or participate in traditional flower and oil lamp offerings.',
        icon: <Flower className="h-8 w-8 text-primary" />,
        image: 'https://placehold.co/600x400.png',
        aiHint: 'buddhist ceremony'
    },
    {
        title: 'Explore Ancient Monasteries',
        description: 'Walk around ruins of monasteries and meditate in peaceful surroundings.',
        icon: <TempleIcon />,
        image: 'https://placehold.co/600x400.png',
        aiHint: 'ancient monastery'
    },
    {
        title: 'Capture Golden Hour at the Stupa',
        description: 'Visit at sunrise or sunset for magical reflections and spiritual ambiance.',
        icon: <Camera className="h-8 w-8 text-primary" />,
        image: 'https://placehold.co/600x400.png',
        aiHint: 'stupa sunset'
    },
    {
        title: 'Stroll through Sacred Bodhi Tree Area',
        description: 'Visit the Sri Maha Bodhi, one of the oldest trees with a known planting date.',
        icon: <Leaf className="h-8 w-8 text-primary" />,
        image: 'https://placehold.co/600x400.png',
        aiHint: 'bodhi tree'
    },
    {
        title: 'Birdwatching by the Kuttam Pokuna (Twin Ponds)',
        description: 'Explore tranquil ancient bathing ponds and watch for migratory birds.',
        icon: <Users className="h-8 w-8 text-primary" />,
        image: 'https://placehold.co/600x400.png',
        aiHint: 'kuttam pokuna'
    },
];


const nearbyAttractions = [
  { name: 'Sigiriya Rock', icon: <MapPin className="h-5 w-5 text-primary" /> },
  { name: 'Dambulla Cave Temple', icon: <MapPin className="h-5 w-5 text-primary" /> },
  { name: 'Minneriya National Park', icon: <MapPin className="h-5 w-5 text-primary" /> }
];

const travelTips = [
    {
        title: 'Best Time',
        description: 'Visit early morning or late afternoon for cooler weather',
        icon: <Sun className="h-10 w-10 text-primary" />
    },
    {
        title: 'What to Wear',
        description: 'Comfortable shoes, hat, and light clothing recommended',
        icon: <Footprints className="h-10 w-10 text-primary" />
    },
    {
        title: 'Stay Hydrated',
        description: 'Bring plenty of water for the 1,200-step climb',
        icon: <Waves className="h-10 w-10 text-primary" />
    },
    {
        title: 'Book Ahead',
        description: 'Reserve tickets online to avoid long queues',
        icon: <Ticket className="h-10 w-10 text-primary" />
    }
];

const ruwanvalisayaTravelTips = [
    {
        title: 'Best Time',
        description: 'Early morning or dusk for cooler weather and fewer crowds.',
        icon: <Sun className="h-10 w-10 text-primary" />
    },
    {
        title: 'What to Wear',
        description: 'White or light modest clothing (arms and legs covered) is respectful.',
        icon: <Footprints className="h-10 w-10 text-primary" />
    },
    {
        title: 'Stay Hydrated',
        description: 'Carry a water bottle; the complex is large and open.',
        icon: <Waves className="h-10 w-10 text-primary" />
    },
    {
        title: 'Respect Rituals',
        description: 'Maintain silence and remove shoes near sacred zones.',
        icon: <Heart className="h-10 w-10 text-primary" />
    }
];

const reviews = [
    {
        name: 'John Doe',
        title: 'Accountant',
        quote: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
        avatar: 'https://placehold.co/100x100.png',
        aiHint: 'person portrait',
        rating: 5,
    },
    {
        name: 'John Smith',
        title: 'Journalist, HWO News',
        quote: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
        avatar: 'https://placehold.co/100x100.png',
        aiHint: 'person portrait',
        rating: 5,
    },
    {
        name: 'Tamara Bellis',
        title: 'Managing Director, JTH',
        quote: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
        avatar: 'https://placehold.co/100x100.png',
        aiHint: 'person portrait',
        rating: 5,
    },
]

export default function DestinationDetailPage({ params }: { params: { id: string } }) {
  const destination = destinations.find(d => d.id === params.id);

  if (!destination) {
    notFound();
  }

  if (params.id === 'sigiriya-matale') {
    return (
      <>
        <section className="relative h-screen flex flex-col items-center justify-center text-center text-white">
            <div className="absolute inset-0">
                <Image
                src="https://placehold.co/1920x1080.png"
                alt="Discover the Ancient Marvel of Sigiriya"
                fill
                className="z-0 object-cover"
                priority
                data-ai-hint="sigiriya fortress"
                />
                <div className="absolute inset-0 bg-black/50 z-10" />
            </div>
            <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl tracking-tight">
                    Discover the Ancient Marvel of Sigiriya
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-white">
                    Explore Sri Lanka's iconic rock fortress and its majestic surroundings.
                </p>
                <Button size="lg" className="mt-8 rounded-3xl" asChild>
                    <Link href="/culture">Explore Culture Tours</Link>
                </Button>
            </div>
        </section>
        <section className="py-16 lg:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="font-headline text-4xl md:text-5xl relative">
                           The Eighth Wonder of the World
                            <span className="block w-2/3 h-1 bg-accent mt-2"></span>
                        </h2>
                        <p className="text-lg text-muted- leading-relaxed">
                            Sigiriya, also known as Lion Rock, is an ancient rock fortress located in the northern Matale District near the town of Dambulla. Built during the reign of King Kashyapa (477-495 CE), this UNESCO World Heritage Site stands 200 meters high and showcases remarkable ancient urban planning, art, and architecture.
                        </p>
                        <p className="text-lg text-muted- leading-relaxed">
                            The site features extensive gardens, sophisticated hydraulic systems, and world-famous frescoes that have survived for over 1,500 years, making it one of the best-preserved examples of ancient urban planning in Asia.
                        </p>
                        <div className="flex items-center gap-2 text-primary pt-4">
                            <HelpCircle className="h-5 w-5" />
                            <span>Experience authentic traditions passed down through generations</span>
                        </div>
                    </div>
                     <div className="relative">
                        <Image
                            src="https://placehold.co/800x600.png"
                            alt="Sigiriya Frescoes"
                            width={800}
                            height={600}
                            className="rounded-lg shadow-lg"
                            data-ai-hint="sigiriya frescoes"
                        />
                         <div className="absolute bottom-4 right-4 bg-yellow-400 p-3 rounded-full shadow-lg cursor-pointer">
                            <ChatIcon />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-headline text-4xl md:text-5xl relative inline-block">
                Explore Sigiriya
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-accent"></span>
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="grid gap-4 col-span-2">
                    <div className="col-span-2">
                        <Image
                            src="https://placehold.co/800x400.png"
                            alt="Sigiriya frescoes"
                            width={800}
                            height={400}
                            className="h-auto w-full rounded-lg object-cover"
                            data-ai-hint="sigiriya frescoes"
                        />
                    </div>
                    <div className="col-span-1">
                        <Image
                            src="https://placehold.co/400x400.png"
                            alt="Woman leading towards Sigiriya rock"
                            width={400}
                            height={400}
                            className="h-auto w-full rounded-lg object-cover"
                            data-ai-hint="follow me sigiriya"
                        />
                    </div>
                     <div className="col-span-1">
                        <Image
                            src="https://placehold.co/400x400.png"
                            alt="Aerial view of Sigiriya rock"
                            width={400}
                            height={400}
                            className="h-auto w-full rounded-lg object-cover"
                            data-ai-hint="sigiriya aerial"
                        />
                    </div>
                </div>
                <div className="grid gap-4 col-span-2">
                    <div className="col-span-2">
                         <Image
                            src="https://placehold.co/800x800.png"
                            alt="Pathway to Sigiriya"
                            width={800}
                            height={800}
                            className="h-full w-full rounded-lg object-cover"
                            data-ai-hint="sigiriya path"
                        />
                    </div>
                </div>
            </div>
          </div>
        </section>
        <section className="py-16 lg:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-4xl md:text-5xl relative inline-block">
                        Things To Do
                        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-accent"></span>
                    </h2>
                    <p className="mt-6 text-lg text-muted- max-w-2xl mx-auto">
                        Sri Lankan performing arts are a spectacular fusion of rhythm, movement, and storytelling that has captivated audiences for centuries.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sigiriyaThingsToDo.map((item) => (
                        <Card key={item.title} className="overflow-hidden shadow-lg rounded-lg flex flex-col">
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={600}
                                height={400}
                                className="w-full h-48 object-cover"
                                data-ai-hint={item.aiHint}
                            />
                            <CardContent className="p-6 flex-grow flex flex-col bg-card">
                                <div className="flex items-center gap-4">
                                    {item.icon}
                                    <h3 className="font-headline text-xl font-bold flex-grow h-12 flex items-center">{item.title}</h3>
                                </div>
                                <p className="text-muted-foreground mt-2 flex-grow">{item.description}</p>
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
                Location &amp; Nearby Attractions
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-accent"></span>
              </h2>
            </div>
            <div className="relative">
              <div className="absolute top-4 left-4 z-10 bg-white p-4 rounded-lg shadow-lg">
                <ul className="space-y-3">
                  {nearbyAttractions.map(attraction => (
                    <li key={attraction.name} className="flex items-center gap-3">
                      {attraction.icon}
                      <span className="text-sm font-medium">{attraction.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.918731737383!2d80.7574169747599!3d7.95722209210452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afca0dfa731793d%3A0x1e36d82343ab6286!2sSigiriya!5e0!3m2!1sen!2slk!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sigiriya Location"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 lg:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-4xl md:text-5xl relative inline-block">
                        Travel Tips
                        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-accent"></span>
                    </h2>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {travelTips.map((tip) => (
                        <Card key={tip.title} className="text-center p-8 bg-green-50/50 shadow-lg border-green-200 flex flex-col">
                            <CardContent className="flex flex-col items-center justify-center gap-4 flex-grow">
                                <div className="mb-4">{tip.icon}</div>
                                <h3 className="font-headline text-xl font-bold h-7 flex items-center justify-center">{tip.title}</h3>
                                <p className="text-muted-foreground text-sm flex-grow">{tip.description}</p>
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
                        What Travelers Say
                        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-accent"></span>
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map((review) => (
                        <Card key={review.name} className="bg-gray-50/50 shadow-lg p-6 relative flex flex-col items-center">
                            <Avatar className="h-24 w-24 border-4 border-white absolute -top-12">
                                <AvatarImage src={review.avatar} alt={review.name} data-ai-hint={review.aiHint} />
                                <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <CardContent className="pt-16 text-center">
                                <p className="text-muted-foreground text-sm italic">"{review.quote}"</p>
                                <div className="flex justify-center mt-4">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                                    ))}
                                </div>
                                <h3 className="mt-4 font-bold text-lg">{review.name}</h3>
                                <p className="text-sm text-muted-foreground">{review.title}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
      </>
    );
  }

  if (params.id === 'ruwanvalisaya-anuradhapura') {
    return (
      <>
        <section className="relative h-screen flex flex-col items-center justify-center text-center text-white">
            <div className="absolute inset-0">
                <Image
                src="https://placehold.co/1920x1080.png"
                alt="Step into the Sacred Heart of Ancient Anuradhapura"
                fill
                className="z-0 object-cover"
                priority
                data-ai-hint="ruwanvalisaya stupa"
                />
                <div className="absolute inset-0 bg-black/50 z-10" />
            </div>
            <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl tracking-tight">
                    Step into the Sacred Heart of Ancient Anuradhapura
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-white">
                    Experience timeless serenity at Ruwanvalisaya — Sri Lanka’s most revered stupa and a living symbol of Buddhist heritage.
                </p>
                <Button size="lg" className="mt-8 rounded-3xl" asChild>
                    <Link href="/culture">Explore Culture Tours</Link>
                </Button>
            </div>
        </section>
        <section className="py-16 lg:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="font-headline text-4xl md:text-5xl relative">
                           Ruwanvalisaya: Beacon of Buddhist Devotion
                            <span className="block w-2/3 h-1 bg-accent mt-2"></span>
                        </h2>
                        <p className="text-lg text-muted- leading-relaxed">
                           Located in the sacred city of Anuradhapura, Ruwanvalisaya is one of the largest and most revered stupas in Sri Lanka. Built by King Dutugemunu in the 2nd century BCE, this magnificent white dome stands as a symbol of peace and Buddhist heritage.
                        </p>
                        <p className="text-lg text-muted- leading-relaxed">
                           Surrounded by ancient monastic ruins and serene lotus ponds, the stupa attracts pilgrims and visitors alike for its spiritual ambiance and architectural brilliance.
                        </p>
                         <p className="text-lg text-muted- leading-relaxed">
                           Whether you're here to witness the rituals or admire its massive structure glowing under moonlight, Ruwanvalisaya offers a truly humbling experience.
                        </p>
                    </div>
                     <div className="relative">
                        <Image
                            src="https://placehold.co/800x600.png"
                            alt="Ruwanvalisaya Stupa"
                            width={800}
                            height={600}
                            className="rounded-lg shadow-lg"
                            data-ai-hint="ruwanvalisaya close up"
                        />
                    </div>
                </div>
            </div>
        </section>
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-headline text-4xl md:text-5xl relative inline-block">
                Explore Ruwanvalisaya
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-accent"></span>
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="grid gap-4 col-span-2">
                    <div className="col-span-2">
                        <Image
                            src="https://placehold.co/800x400.png"
                            alt="Ruwanvalisaya stupa"
                            width={800}
                            height={400}
                            className="h-auto w-full rounded-lg object-cover"
                            data-ai-hint="ruwanvalisaya day"
                        />
                    </div>
                    <div className="col-span-1">
                        <Image
                            src="https://placehold.co/400x400.png"
                            alt="Pilgrims at Ruwanvalisaya"
                            width={400}
                            height={400}
                            className="h-auto w-full rounded-lg object-cover"
                            data-ai-hint="pilgrims worship"
                        />
                    </div>
                     <div className="col-span-1">
                        <Image
                            src="https://placehold.co/400x400.png"
                            alt="Ruwanvalisaya at night"
                            width={400}
                            height={400}
                            className="h-auto w-full rounded-lg object-cover"
                            data-ai-hint="ruwanvalisaya night"
                        />
                    </div>
                </div>
                <div className="grid gap-4 col-span-2">
                    <div className="col-span-2">
                         <Image
                            src="https://placehold.co/800x800.png"
                            alt="Pathway to Ruwanvalisaya"
                            width={800}
                            height={800}
                            className="h-full w-full rounded-lg object-cover"
                            data-ai-hint="anuradhapura path"
                        />
                    </div>
                </div>
            </div>
          </div>
        </section>
        <section className="py-16 lg:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-4xl md:text-5xl relative inline-block">
                        Things To Do
                        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-accent"></span>
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {ruwanvalisayaThingsToDo.map((item) => (
                        <Card key={item.title} className="overflow-hidden shadow-lg rounded-lg flex flex-col">
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={600}
                                height={400}
                                className="w-full h-48 object-cover"
                                data-ai-hint={item.aiHint}
                            />
                            <CardContent className="p-6 flex-grow flex flex-col bg-card">
                                <div className="flex items-center gap-4">
                                    {item.icon}
                                    <h3 className="font-headline text-xl font-bold flex-grow h-12 flex items-center">{item.title}</h3>
                                </div>
                                <p className="text-muted-foreground mt-2 flex-grow">{item.description}</p>
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
                Location
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-accent"></span>
              </h2>
            </div>
            <div className="relative">
              <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.167883311822!2d80.39485787476228!3d8.3512210917029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afcf44d6a7a1409%3A0x7e5978582753381e!2sRuwanweli%20Maha%20Seya!5e0!3m2!1sen!2slk!4v1700000000001"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ruwanvalisaya Location"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 lg:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-4xl md:text-5xl relative inline-block">
                        Travel Tips
                        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-accent"></span>
                    </h2>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {ruwanvalisayaTravelTips.map((tip) => (
                        <Card key={tip.title} className="text-center p-8 bg-green-50/50 shadow-lg border-green-200 flex flex-col">
                            <CardContent className="flex flex-col items-center justify-center gap-4 flex-grow">
                                <div className="mb-4">{tip.icon}</div>
                                <h3 className="font-headline text-xl font-bold h-7 flex items-center justify-center">{tip.title}</h3>
                                <p className="text-muted-foreground text-sm flex-grow">{tip.description}</p>
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
                        What Travelers Say
                        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-accent"></span>
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map((review) => (
                        <Card key={review.name} className="bg-gray-50/50 shadow-lg p-6 relative flex flex-col items-center">
                            <Avatar className="h-24 w-24 border-4 border-white absolute -top-12">
                                <AvatarImage src={review.avatar} alt={review.name} data-ai-hint={review.aiHint} />
                                <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <CardContent className="pt-16 text-center">
                                <p className="text-muted-foreground text-sm italic">"{review.quote}"</p>
                                <div className="flex justify-center mt-4">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                                    ))}
                                </div>
                                <h3 className="mt-4 font-bold text-lg">{review.name}</h3>
                                <p className="text-sm text-muted-foreground">{review.title}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
      </>
    );
  }

  // Fallback for other destinations
  return (
    <div className="bg-white text-gray-800">
      <section className="relative h-[60vh] flex items-center justify-center text-white">
        <div className="absolute inset-0">
          <Image
            src={destination.gallery[0]}
            alt={`Hero image for ${destination.name}`}
            fill
            className="object-cover"
            priority
            data-ai-hint={`${destination.name.split(',')[0].toLowerCase()} landscape`}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight">{destination.name.split(',')[0]}</h1>
          <p className="mt-2 text-xl md:text-2xl font-light">{destination.name.split(', ')[1]}</p>
        </div>
      </section>
    </div>
  );
}

export async function generateStaticParams() {
    return destinations.map((destination) => ({
      id: destination.id,
    }))
}

    
