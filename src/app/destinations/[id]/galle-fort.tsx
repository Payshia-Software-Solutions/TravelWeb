
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Camera, Users, Sun, Footprints, Waves, Star, Heart, Leaf, Utensils, Sailboat, Building } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const galleFortThingsToDo = [
    {
        title: 'Walk the Fort Ramparts at Sunset',
        description: 'Enjoy panoramic views of the ocean and watch local cricket matches on the beach below.',
        icon: <Sun className="h-8 w-8 text-primary" />,
        image: 'https://placehold.co/600x400.png',
        aiHint: 'fort sunset'
    },
    {
        title: 'Visit the Maritime Museum & Dutch Reformed Church',
        description: 'Discover colonial history and 17th-century architecture.',
        icon: <Building className="h-8 w-8 text-primary" />,
        image: 'https://placehold.co/600x400.png',
        aiHint: 'colonial church'
    },
    {
        title: 'Try Artisanal Ice Cream & Seafood',
        description: 'Stop by charming cafés offering local treats and fresh seafood platters.',
        icon: <Utensils className="h-8 w-8 text-primary" />,
        image: 'https://placehold.co/600x400.png',
        aiHint: 'seafood platter'
    },
    {
        title: 'Shop Local Boutiques',
        description: 'Explore hidden lanes filled with handmade crafts, gems, and vintage clothing.',
        icon: <Heart className="h-8 w-8 text-primary" />,
        image: 'https://placehold.co/600x400.png',
        aiHint: 'local boutique'
    },
    {
        title: 'Join a Guided Photography Tour',
        description: 'Capture the best colonial corners, vibrant doors, and lighthouse frames.',
        icon: <Camera className="h-8 w-8 text-primary" />,
        image: 'https://placehold.co/600x400.png',
        aiHint: 'galle photography'
    },
];

const galleFortTravelTips = [
    {
        title: 'Best Time',
        description: 'Evening walks are cooler and ideal for sunset photos.',
        icon: <Sun className="h-10 w-10 text-primary" />
    },
    {
        title: 'What to Wear',
        description: 'Comfortable walking sandals for cobblestone streets.',
        icon: <Footprints className="h-10 w-10 text-primary" />
    },
    {
        title: 'Stay Local',
        description: 'Support small local-owned cafés and artisan shops.',
        icon: <Heart className="h-10 w-10 text-primary" />
    },
    {
        title: 'Book Ahead',
        description: 'Some top rooftop restaurants require reservations.',
        icon: <Users className="h-10 w-10 text-primary" />
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

export function GalleFortPage() {
    return (
      <>
        <section className="relative h-screen flex flex-col items-center justify-center text-center text-white">
            <div className="absolute inset-0">
                <Image
                src="https://placehold.co/1920x1080.png"
                alt="Wander Through the Timeless Streets of Galle Fort"
                fill
                className="z-0 object-cover"
                priority
                data-ai-hint="galle fort"
                />
                <div className="absolute inset-0 bg-black/50 z-10" />
            </div>
            <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl tracking-tight">
                    Wander Through the Timeless Streets of Galle Fort
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-white">
                    Explore cobbled alleys, colonial charm, and coastal beauty inside Sri Lanka’s iconic UNESCO World Heritage Fort.
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
                           Galle Fort: A Colonial Time Capsule by the Sea
                            <span className="block w-2/3 h-1 bg-accent mt-2"></span>
                        </h2>
                        <p className="text-lg text-muted- leading-relaxed">
                           Step into history at the iconic Galle Fort, a UNESCO World Heritage Site nestled along Sri Lanka’s southern coast. Originally built by the Portuguese in the 16th century and later fortified by the Dutch, this coastal fortress is a unique blend of European architecture and South Asian traditions.
                        </p>
                        <p className="text-lg text-muted- leading-relaxed">
                           Stroll along the ancient ramparts, explore charming cobblestone lanes, and enjoy boutique cafes and art galleries housed in colonial-era buildings. Sunset views from the lighthouse are unforgettable.
                        </p>
                    </div>
                     <div className="relative">
                        <Image
                            src="https://placehold.co/800x600.png"
                            alt="Galle Fort lighthouse"
                            width={800}
                            height={600}
                            className="rounded-lg shadow-lg"
                            data-ai-hint="galle lighthouse"
                        />
                    </div>
                </div>
            </div>
        </section>
        <section className="py-16 lg:py-24 bg-white">
            <div className="text-center mb-12">
              <h2 className="font-headline text-4xl md:text-5xl relative inline-block">
                Explore Galle Fort
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-accent"></span>
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
                <div className="grid gap-4">
                    <div>
                        <Image
                            src="https://placehold.co/500x750.png"
                            alt="Galle fort street"
                            width={500}
                            height={750}
                            className="h-full w-full rounded-lg object-cover"
                            data-ai-hint="galle street"
                        />
                    </div>
                </div>
                <div className="grid gap-4">
                     <div>
                        <Image
                            src="https://placehold.co/500x500.png"
                            alt="Galle fort ramparts"
                            width={500}
                            height={500}
                            className="h-full w-full rounded-lg object-cover"
                            data-ai-hint="galle ramparts"
                        />
                    </div>
                    <div>
                        <Image
                            src="https://placehold.co/500x500.png"
                            alt="Galle fort cafe"
                            width={500}
                            height={500}
                            className="h-full w-full rounded-lg object-cover"
                            data-ai-hint="galle cafe"
                        />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                         <Image
                            src="https://placehold.co/500x500.png"
                            alt="Galle fort aerial"
                            width={500}
                            height={500}
                            className="h-full w-full rounded-lg object-cover"
                            data-ai-hint="galle aerial"
                        />
                    </div>
                     <div>
                        <Image
                            src="https://placehold.co/500x500.png"
                            alt="Galle fort wall"
                            width={500}
                            height={500}
                            className="h-full w-full rounded-lg object-cover"
                            data-ai-hint="galle wall"
                        />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <Image
                            src="https://placehold.co/500x750.png"
                            alt="Galle fort door"
                            width={500}
                            height={750}
                            className="h-full w-full rounded-lg object-cover"
                            data-ai-hint="galle door"
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
                    {galleFortThingsToDo.map((item) => (
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15870.561571580173!2d80.21113584999999!3d6.026093599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae171e2b8612953%3A0x2aa785ab9140445!2sGalle%20Fort!5e0!3m2!1sen!2slk!4v1700000000002"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Galle Fort Location"
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
                    {galleFortTravelTips.map((tip) => (
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

    