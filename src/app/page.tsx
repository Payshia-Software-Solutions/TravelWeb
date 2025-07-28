
"use client"
import * as React from "react"
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar as CalendarIcon, MapPin } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { destinations } from "@/lib/destinations";
import { DestinationCard } from "@/components/destination-card";
import Link from "next/link";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
    {
      name: 'Sarah Jhons',
      date: '01.02.2025',
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor.',
      avatar: 'https://placehold.co/100x100.png',
      backgroundImage: 'https://placehold.co/1200x500.png',
      aiHint: 'person portrait'
    },
    {
      name: 'Michael Smith',
      date: '15.01.2025',
      quote: 'An absolutely unforgettable journey. The attention to detail and personalized service made our trip seamless and special. Highly recommended!',
      avatar: 'https://placehold.co/100x100.png',
      backgroundImage: 'https://placehold.co/1200x500.png',
      aiHint: 'person portrait'
    },
    {
      name: 'Emily Davis',
      date: '28.12.2024',
      quote: 'From the stunning landscapes to the vibrant culture, every moment was a picture-perfect memory. Thank you for the adventure of a lifetime!',
      avatar: 'https://placehold.co/100x100.png',
      backgroundImage: 'https://placehold.co/1200x500.png',
      aiHint: 'person portrait'
    }
  ];

export default function Home() {
    const [checkInDate, setCheckInDate] = React.useState<Date>()
    const [checkOutDate, setCheckOutDate] = React.useState<Date>()
    const popularDestinations = destinations.filter(d => d.popular).slice(0, 4);

  return (
    <>
      <section className="relative h-screen flex flex-col items-center justify-center text-center text-white">
        <div className="absolute inset-0">
            <Image
              src="https://placehold.co/1920x1080.png"
              alt="Tropical beach at sunset"
              fill
              className="z-0 object-cover"
              priority
              data-ai-hint="tropical beach"
            />
            <div className="absolute inset-0 bg-black/50 z-10" />
        </div>
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-normal tracking-tight">
            Start your unforgettable journey with us.
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-primary-foreground/90">
            The best travel for your journey begins now
          </p>

          <Card className="mt-12 w-full max-w-4xl bg-white/90 backdrop-blur-sm p-4 text-left text-card-foreground">
            <CardContent className="p-0 md:p-2">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                    <div className="flex flex-col space-y-1">
                        <label htmlFor="person-select" className="text-xs font-semibold text-muted-foreground uppercase">Person</label>
                        <Select defaultValue="2">
                            <SelectTrigger id="person-select" className="w-full text-foreground border-0 border-b-2 border-dotted rounded-none focus:ring-0">
                                <SelectValue placeholder="Select persons" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="1">1 Person</SelectItem>
                                <SelectItem value="2">2 People</SelectItem>
                                <SelectItem value="3">3 People</SelectItem>
                                <SelectItem value="4">4 People</SelectItem>
                                <SelectItem value="5">5+ People</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                     <div className="flex flex-col space-y-1">
                        <label htmlFor="check-in-date" className="text-xs font-semibold text-muted-foreground uppercase">Check In</label>
                         <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                variant={"ghost"}
                                id="check-in-date"
                                className={cn(
                                    "w-full justify-start text-left font-normal text-foreground border-0 border-b-2 border-dotted rounded-none focus:ring-0 hover:bg-transparent px-0",
                                    !checkInDate && "text-muted-foreground"
                                )}
                                >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {checkInDate ? format(checkInDate, "EEE, dd MMM yyyy") : <span>Pick a date</span>}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                                <Calendar
                                mode="single"
                                selected={checkInDate}
                                onSelect={setCheckInDate}
                                initialFocus
                                />
                            </PopoverContent>
                        </Popover>
                    </div>

                     <div className="flex flex-col space-y-1">
                        <label htmlFor="check-out-date" className="text-xs font-semibold text-muted-foreground uppercase">Check Out</label>
                         <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                variant={"ghost"}
                                id="check-out-date"
                                className={cn(
                                    "w-full justify-start text-left font-normal text-foreground border-0 border-b-2 border-dotted rounded-none focus:ring-0 hover:bg-transparent px-0",
                                    !checkOutDate && "text-muted-foreground"
                                )}
                                >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {checkOutDate ? format(checkOutDate, "EEE, dd MMM yyyy") : <span>Pick a date</span>}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                                <Calendar
                                mode="single"
                                selected={checkOutDate}
                                onSelect={setCheckOutDate}
                                disabled={(date) =>
                                    date < (checkInDate || new Date())
                                }
                                initialFocus
                                />
                            </PopoverContent>
                        </Popover>
                    </div>

                    <Button size="lg" className="h-full text-base md:h-14 md:text-lg w-full">Create Your Plan</Button>
                </div>
            </CardContent>
          </Card>

        </div>
      </section>
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="font-headline text-4xl md:text-5xl font-bold">Popular Destinations</h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                    Most popular destinations around the world, from historical places to natural wonders.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {popularDestinations.map(dest => (
                    <DestinationCard key={dest.id} destination={dest} />
                ))}
            </div>
            <div className="text-center mt-12">
                <Button size="lg" asChild>
                    <Link href="/destinations">See All Destinations</Link>
                </Button>
            </div>
        </div>
      </section>
       <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0">
            <Image
              src="https://placehold.co/1920x1080.png"
              alt="Sri Lankan cultural dance"
              fill
              className="z-0 object-cover"
              data-ai-hint="traditional dance"
            />
            <div className="absolute inset-0 bg-black/50 z-10" />
        </div>
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl text-white">
                <h2 className="font-headline text-4xl md:text-5xl font-bold relative inline-block">
                Sri Lankan Culture
                <span className="absolute -bottom-2 left-0 w-2/3 h-1 bg-accent"></span>
                </h2>
                <p className="mt-6 text-lg text-white">
                Step into a world of ancient traditions, sacred rituals, and colorful festivals
                </p>
                <Button size="lg" className="mt-8">Explore Culture Tours</Button>
            </div>
        </div>
      </section>
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0">
            <Image
              src="https://placehold.co/1920x1080.png"
              alt="Elephants in a field in Sri Lanka"
              fill
              className="z-0 object-cover"
              data-ai-hint="elephants safari"
            />
            <div className="absolute inset-0 bg-black/50 z-10" />
        </div>
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 flex justify-end text-right">
            <div className="max-w-2xl text-white">
                <h2 className="font-headline text-4xl md:text-5xl font-bold relative inline-block">
                Wildlife Encounters in Sri Lanka
                <span className="absolute -bottom-2 right-0 w-2/3 h-1 bg-accent"></span>
                </h2>
                <p className="mt-6 text-lg text-white">
                Experience the wild heart of the island through safaris, marine life, and tropical bird sanctuaries.
                </p>
                <Button size="lg" className="mt-8">Plan Your Safari Adventure</Button>
            </div>
        </div>
      </section>
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0">
            <Image
              src="https://placehold.co/1920x1080.png"
              alt="People rafting in a river in Sri Lanka"
              fill
              className="z-0 object-cover"
              data-ai-hint="river rafting"
            />
            <div className="absolute inset-0 bg-black/50 z-10" />
        </div>
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl text-white">
                <h2 className="font-headline text-4xl md:text-5xl font-bold relative inline-block">
                Things to Do in Sri Lanka
                <span className="absolute -bottom-2 left-0 w-2/3 h-1 bg-accent"></span>
                </h2>
                <p className="mt-6 text-lg text-white">
                From thrill-filled adventures to peaceful retreats, discover unforgettable experiences.
                </p>
                <Button size="lg" className="mt-8">Start Planning</Button>
            </div>
        </div>
      </section>
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0">
            <Image
              src="https://placehold.co/1920x1080.png"
              alt="Ayurveda in Sri Lanka"
              fill
              className="z-0 object-cover"
              data-ai-hint="ayurveda spa"
            />
            <div className="absolute inset-0 bg-black/50 z-10" />
        </div>
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 flex justify-end text-right">
            <div className="max-w-2xl text-white">
                <h2 className="font-headline text-4xl md:text-5xl font-bold relative inline-block">
                Ayurveda in Sri Lanka
                <span className="absolute -bottom-2 right-0 w-2/3 h-1 bg-accent"></span>
                </h2>
                <p className="mt-6 text-lg text-white">
                Discover ancient wellness practices rooted in balance, nature, and self-care
                </p>
                <Button size="lg" className="mt-8">Book a Wellness Retreat</Button>
            </div>
        </div>
      </section>
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-headline text-4xl md:text-5xl">Our Blog</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              An insight the incredible experience in the world
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="https://placehold.co/800x600.png"
                alt="Beautiful Sri Lanka illustration"
                width={800}
                height={600}
                className="rounded-lg shadow-lg"
                data-ai-hint="sri lanka illustration"
              />
            </div>
            <div>
              <h3 className="font-headline text-3xl">Beautiful Sri Lanka</h3>
              <p className="font-headline text-2xl text-muted-foreground mb-4">Let's travel</p>
              <p className="mb-8 text-foreground/80 leading-relaxed">
                Beautiful Sri Lanka is a tropical paradise brimming with lush landscapes, golden beaches, ancient ruins, and vibrant culture. From the misty mountains of Ella to the sun-kissed shores of Mirissa, every corner offers a new adventure. Wander through the sacred city of Kandy, explore the wildlife of Yala National Park, or sip world-renowned Ceylon tea in Nuwara Eliya. Let's travel to Sri Lanka and discover its rich heritage, warm hospitality, and breathtaking natural beauty—it's a journey you'll never forget!
              </p>
              <Button size="lg" asChild>
                <Link href="/destinations">See All Destinations</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0">
            <Image
              src="https://placehold.co/1920x1080.png"
              alt="Train on a bridge in a lush forest"
              fill
              className="z-0 object-cover"
              data-ai-hint="train bridge"
            />
            <div className="absolute inset-0 bg-black/50 z-10" />
        </div>
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 flex justify-start text-left">
            <div className="max-w-2xl text-white">
                <h2 className="font-headline text-4xl md:text-5xl font-bold relative inline-block">
                Plan Your Own Journey
                <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-accent"></span>
                </h2>
                <p className="mt-6 text-lg text-white">
                20 years from now you will be more disappointed by the things that you didn't do. Stop regretting and start travelling, start throwing off the bowlines.
                </p>
                <Button size="lg" className="mt-8">Let's Create trip plans</Button>
            </div>
        </div>
      </section>
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-headline text-4xl md:text-5xl">Destination Gallery</h2>
             <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Our photo gallery on trip
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="grid gap-4">
                  <div>
                      <Image className="h-auto max-w-full rounded-lg" src="https://placehold.co/500x750.png" alt="" width={500} height={750} data-ai-hint="man mural" />
                  </div>
                  <div>
                      <Image className="h-auto max-w-full rounded-lg" src="https://placehold.co/500x300.png" alt="" width={500} height={300} data-ai-hint="man backpack" />
                  </div>
              </div>
              <div className="grid gap-4">
                  <div>
                      <Image className="h-auto max-w-full rounded-lg" src="https://placehold.co/500x300.png" alt="" width={500} height={300} data-ai-hint="couple beach" />
                  </div>
                  <div>
                      <Image className="h-auto max-w-full rounded-lg" src="https://placehold.co/500x750.png" alt="" width={500} height={750} data-ai-hint="woman backpack" />
                  </div>
              </div>
              <div className="grid gap-4">
                  <div>
                      <Image className="h-auto max-w-full rounded-lg" src="https://placehold.co/500x750.png" alt="" width={500} height={750} data-ai-hint="man mural" />
                  </div>
                  <div>
                      <Image className="h-auto max-w-full rounded-lg" src="https://placehold.co/500x300.png" alt="" width={500} height={300} data-ai-hint="couple beach" />
                  </div>
              </div>
              <div className="grid gap-4">
                  <div>
                      <Image className="h-auto max-w-full rounded-lg" src="https://placehold.co/500x300.png" alt="" width={500} height={300} data-ai-hint="couple beach" />
                  </div>
                  <div>
                      <Image className="h-auto max-w-full rounded-lg" src="https://placehold.co/500x750.png" alt="" width={500} height={750} data-ai-hint="woman backpack" />
                  </div>
              </div>
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-headline text-4xl md:text-5xl">Traveler's Experiences</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Here some awesome feedback from our travelers
            </p>
             <span className="inline-block w-20 h-1 bg-accent mt-4"></span>
          </div>
          <Carousel
            opts={{
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                      <div className="relative flex flex-col items-center justify-center">
                        <Image
                          src={testimonial.backgroundImage}
                          alt="Testimonial background"
                          width={1000}
                          height={500}
                          className="w-full max-w-4xl h-[400px] object-cover rounded-lg"
                          data-ai-hint="travel landscape"
                        />
                        <div className="relative -mt-24 w-full max-w-2xl">
                             <Card className="bg-background/90 backdrop-blur-sm shadow-xl p-8 text-center">
                                <Avatar className="h-20 w-20 mx-auto -mt-20 mb-4 border-4 border-background">
                                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.aiHint} />
                                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <CardContent className="p-0">
                                <p className="text-lg text-foreground/80 italic">"{testimonial.quote}"</p>
                                <p className="mt-6 font-bold text-lg text-foreground">{testimonial.name}</p>
                                <p className="text-sm text-muted-foreground">{testimonial.date}</p>
                                </CardContent>
                            </Card>
                        </div>
                      </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-10" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-10" />
          </Carousel>
        </div>
      </section>
    </>
  );
}

    

    