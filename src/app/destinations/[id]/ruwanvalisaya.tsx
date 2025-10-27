
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Camera, Users, Sun, Footprints, Waves, Star, Heart, Flower, Leaf } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

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

export function RuwanvalisayaPage() {
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
            <div className="text-center mb-12">
              <h2 className="font-headline text-4xl md:text-5xl relative inline-block">
                Explore Ruwanvalisaya
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-accent"></span>
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
                <div className="grid gap-4">
                    <div>
                        <Image
                            src="https://placehold.co/500x750.png"
                            alt="Ruwanvalisaya stupa"
                            width={500}
                            height={750}
                            className="h-full w-full rounded-lg object-cover"
                            data-ai-hint="ruwanvalisaya day"
                        />
                    </div>
                </div>
                <div className="grid gap-4">
                     <div>
                        <Image
                            src="https://placehold.co/500x500.png"
                            alt="Pilgrims at Ruwanvalisaya"
                            width={500}
                            height={500}
                            className="h-full w-full rounded-lg object-cover"
                            data-ai-hint="pilgrims worship"
                        />
                    </div>
                    <div>
                        <Image
                            src="https://placehold.co/500x500.png"
                            alt="Ruwanvalisaya at night"
                            width={500}
                            height={500}
                            className="h-full w-full rounded-lg object-cover"
                            data-ai-hint="ruwanvalisaya night"
                        />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                         <Image
                            src="https://placehold.co/500x500.png"
                            alt="Pathway to Ruwanvalisaya"
                            width={500}
                            height={500}
                            className="h-full w-full rounded-lg object-cover"
                            data-ai-hint="anuradhapura path"
                        />
                    </div>
                     <div>
                        <Image
                            src="https://placehold.co/500x500.png"
                            alt="Anuradhapura ruins"
                            width={500}
                            height={500}
                            className="h-full w-full rounded-lg object-cover"
                            data-ai-hint="anuradhapura ruins"
                        />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <Image
                            src="https://placehold.co/500x750.png"
                            alt="Bodhi tree leaf"
                            width={500}
                            height={750}
                            className="h-full w-full rounded-lg object-cover"
                            data-ai-hint="bodhi leaf"
                        />
                    </div>
                </div>
            </div>
        </section>
        <section className="py-16 lg:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-4xl md:text-5xl relative inline-block">
                        Discover Timeless Wonders
                        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-accent"></span>
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted- leading-relaxed">
                        Step into a world where every destination has a story to tell. From ancient landmarks and natural marvels to vibrant cities and serene escapes, each place invites you to explore its beauty, culture, and history. Let your journey be one of discovery, inspiration, and unforgettable memories.
                    </p>
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

    