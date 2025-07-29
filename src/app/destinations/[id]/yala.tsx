
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Camera, Users, Sun, Footprints, Waves, Star, Heart, Leaf, Mountain, Bird } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const yalaThingsToDo = [
    {
        title: 'Go on a Wildlife Safari',
        description: 'Book a guided jeep safari to spot elephants, leopards, crocodiles, and peacocks.',
        icon: <Mountain className="h-8 w-8 text-primary" />,
        image: 'https://placehold.co/600x400.png',
        aiHint: 'jeep safari'
    },
    {
        title: 'Visit the Elephant Rock Lookout',
        description: 'Climb up for scenic views over the savannah and watering holes.',
        icon: <Mountain className="h-8 w-8 text-primary" />,
        image: 'https://placehold.co/600x400.png',
        aiHint: 'savannah view'
    },
    {
        title: 'Relax at Patanangala Beach',
        description: 'A wild beach inside the park known for its untouched beauty (no swimming).',
        icon: <Waves className="h-8 w-8 text-primary" />,
        image: 'https://placehold.co/600x400.png',
        aiHint: 'wild beach'
    },
    {
        title: 'Enjoy Birdwatching',
        description: 'Spot rare birds like the painted stork, bee-eaters, and crested serpent eagle.',
        icon: <Bird className="h-8 w-8 text-primary" />,
        image: 'https://placehold.co/600x400.png',
        aiHint: 'bird watching'
    },
    {
        title: 'Try a Night Stay in a Jungle Lodge',
        description: 'Experience the thrill of nature under a starry sky with forest sounds.',
        icon: <Leaf className="h-8 w-8 text-primary" />,
        image: 'https://placehold.co/600x400.png',
        aiHint: 'jungle lodge'
    },
];

const yalaTravelTips = [
    {
        title: 'Best Time',
        description: 'February to July (dry season = more animal sightings).',
        icon: <Sun className="h-10 w-10 text-primary" />
    },
    {
        title: 'What to Wear',
        description: 'Neutral colors, hat, sunglasses, and insect repellent.',
        icon: <Footprints className="h-10 w-10 text-primary" />
    },
    {
        title: 'Stay Hydrated',
        description: 'Bring water; park rides can last 3–4 hours.',
        icon: <Waves className="h-10 w-10 text-primary" />
    },
    {
        title: 'Book Ahead',
        description: 'Safari slots and luxury tents fill up fast in peak season.',
        icon: <Users className="h-10 w-10 text-primary" />
    }
];

const reviews = [
    {
        name: 'Alex Johnson',
        title: 'Wildlife Photographer',
        quote: "An unparalleled safari experience! The sheer number of leopards we saw was astounding. The guides were incredibly knowledgeable and respectful of the animals. Yala is a must-visit for any wildlife enthusiast.",
        avatar: 'https://placehold.co/100x100.png',
        aiHint: 'photographer portrait',
        rating: 5,
    },
    {
        name: 'Samantha Lee',
        title: 'Travel Blogger',
        quote: "Camping under the stars in Yala was magical. The sounds of the jungle at night are something I'll never forget. It's raw, beautiful, and completely immersive. Can't wait to return!",
        avatar: 'https://placehold.co/100x100.png',
        aiHint: 'woman portrait',
        rating: 5,
    },
    {
        name: 'David Chen',
        title: 'Family Traveler',
        quote: "Our family had an amazing time at Yala. The kids were thrilled to see elephants up close. It was both an adventurous and educational trip. The park is well-maintained, and the safari was very well-organized.",
        avatar: 'https://placehold.co/100x100.png',
        aiHint: 'man portrait',
        rating: 5,
    },
]

export function YalaPage() {
    return (
      <>
        <section className="relative h-screen flex flex-col items-center justify-center text-center text-white">
            <div className="absolute inset-0">
                <Image
                src="https://placehold.co/1920x1080.png"
                alt="Venture into the Wild at Yala National Park"
                fill
                className="z-0 object-cover"
                priority
                data-ai-hint="yala safari"
                />
                <div className="absolute inset-0 bg-black/50 z-10" />
            </div>
            <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl tracking-tight">
                    Venture into the Wild at Yala National Park
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-white">
                    Embark on an unforgettable safari adventure and witness Sri Lanka’s majestic wildlife roam free in their natural habitat.
                </p>
                <Button size="lg" className="mt-8 rounded-3xl" asChild>
                    <Link href="/wildlife">Explore Wildlife Tours</Link>
                </Button>
            </div>
        </section>
        <section className="py-16 lg:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="font-headline text-4xl md:text-5xl relative">
                           Yala National Park: Where the Wild Roams Free
                            <span className="block w-2/3 h-1 bg-accent mt-2"></span>
                        </h2>
                        <p className="text-lg text-muted- leading-relaxed">
                           Welcome to Yala, Sri Lanka’s premier wildlife sanctuary and home to the highest density of leopards in the world. Situated in Hambantota, this national park stretches over grasslands, lagoons, and forests, offering an exhilarating safari experience.
                        </p>
                        <p className="text-lg text-muted- leading-relaxed">
                           Spot elephants, sloth bears, crocodiles, and exotic birds as you ride through the wilderness in a 4x4 jeep. The thrill of seeing a leopard in its natural habitat is a memory you’ll never forget.
                        </p>
                    </div>
                     <div className="relative">
                        <Image
                            src="https://placehold.co/800x600.png"
                            alt="Leopard in Yala"
                            width={800}
                            height={600}
                            className="rounded-lg shadow-lg"
                            data-ai-hint="yala leopard"
                        />
                    </div>
                </div>
            </div>
        </section>
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-headline text-4xl md:text-5xl relative inline-block">
                Explore Yala
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-accent"></span>
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="grid gap-4 col-span-2">
                    <div className="col-span-2">
                        <Image
                            src="https://placehold.co/800x400.png"
                            alt="Elephants in Yala"
                            width={800}
                            height={400}
                            className="h-auto w-full rounded-lg object-cover"
                            data-ai-hint="yala elephants"
                        />
                    </div>
                    <div className="col-span-1">
                        <Image
                            src="https://placehold.co/400x400.png"
                            alt="Yala landscape"
                            width={400}
                            height={400}
                            className="h-auto w-full rounded-lg object-cover"
                            data-ai-hint="yala landscape"
                        />
                    </div>
                     <div className="col-span-1">
                        <Image
                            src="https://placehold.co/400x400.png"
                            alt="Yala lake"
                            width={400}
                            height={400}
                            className="h-auto w-full rounded-lg object-cover"
                            data-ai-hint="yala lake"
                        />
                    </div>
                </div>
                <div className="grid gap-4 col-span-2">
                    <div className="col-span-2">
                         <Image
                            src="https://placehold.co/800x800.png"
                            alt="Yala safari jeep"
                            width={800}
                            height={800}
                            className="h-full w-full rounded-lg object-cover"
                            data-ai-hint="safari jeep"
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
                    {yalaThingsToDo.map((item) => (
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101416.7443187216!2d81.3857180004928!3d6.416173699999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae5d3a62ffb8543%3A0xaf1957f5c50d5e7!2sYala%20National%20Park!5e0!3m2!1sen!2slk!4v1700000000003"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Yala National Park Location"
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
                    {yalaTravelTips.map((tip) => (
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
