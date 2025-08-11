
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
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { PopularDestinations } from "@/components/home/popular-destinations";
import { DestinationGallery } from "@/components/home/destination-gallery";
import { TravelersExperiences } from "@/components/home/travelers-experiences";


export default function Home() {
    const [checkInDate, setCheckInDate] = React.useState<Date>()
    const [checkOutDate, setCheckOutDate] = React.useState<Date>()

  return (
    <>
      <section className="relative h-screen flex flex-col items-center justify-center text-center text-white">
        <div className="absolute inset-0">
            <Image
              src="https://content-provider.payshia.com/travel-web/hero.jpg"
              alt="Scenic view of a travel destination"
              fill
              className="z-0 object-cover"
              priority
              data-ai-hint="travel landscape"
            />
            <div className="absolute inset-0 bg-black/50 z-10" />
        </div>
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-normal tracking-tight">
            Start your unforgettable journey with us.
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-primary-/90">
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

                    <Button size="lg" className="h-full text-base md:h-14 md:text-lg w-full" asChild>
                      <Link href="/plan">Create Your Plan</Link>
                    </Button>
                </div>
            </CardContent>
          </Card>

        </div>
      </section>
      <PopularDestinations />
       <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0">
            <Image
              src="https://content-provider.payshia.com/travel-web/category/culture.jpg"
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
                <Button size="lg" className="mt-8" asChild>
                  <Link href="/culture">Explore Culture Tours</Link>
                </Button>
            </div>
        </div>
      </section>
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0">
            <Image
              src="https://content-provider.payshia.com/travel-web/category/wild.jpg"
              alt="Elephants in a field in Sri Lanka"
              fill
              className="z-0 object-cover"
              data-ai-hint="elephants safari"
            />
            <div className="absolute inset-0 bg-black/50 z-10" />
        </div>
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 flex justify-end">
            <div className="max-w-2xl text-white text-right">
                <h2 className="font-headline text-4xl md:text-5xl font-bold relative inline-block">
                Wildlife Encounters in Sri Lanka
                <span className="absolute -bottom-2 right-0 w-2/3 h-1 bg-accent"></span>
                </h2>
                <p className="mt-6 text-lg text-white">
                Experience the wild heart of the island through safaris, marine life, and tropical bird sanctuaries.
                </p>
                <Button size="lg" className="mt-8" asChild>
                  <Link href="/wildlife">Plan Your Safari Adventure</Link>
                </Button>
            </div>
        </div>
      </section>
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0">
            <Image
              src="https://content-provider.payshia.com/travel-web/category/adven.jpg"
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
                <Button size="lg" className="mt-8" asChild>
                  <Link href="/things-to-do">Start Planning</Link>
                </Button>
            </div>
        </div>
      </section>
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0">
            <Image
              src="https://content-provider.payshia.com/travel-web/category/aryveda.jpg"
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
                <Button size="lg" className="mt-8" asChild>
                  <Link href="/ayurveda">Book a Wellness Retreat</Link>
                </Button>
            </div>
        </div>
      </section>
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-headline text-4xl md:text-5xl">Our Blog</h2>
            <p className="mt-4 text-lg text-muted- max-w-2xl mx-auto">
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
              <p className="mb-8 text-/80 leading-relaxed">
                Beautiful Sri Lanka is a tropical paradise brimming with lush landscapes, golden beaches, ancient ruins, and vibrant culture. From the misty mountains of Ella to the sun-kissed shores of Mirissa, every corner offers a new adventure. Wander through the sacred city of Kandy, explore the wildlife of Yala National Park, or sip world-renowned Ceylon tea in Nuwara Eliya. Let's travel to Sri Lanka and discover its rich heritage, warm hospitality, and breathtaking natural beauty—it's a journey you'll never forget!
              </p>
              <Button size="lg" asChild>
                <Link href="/destinations">SeeAll Destinations</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0">
            <Image
              src="https://content-provider.payshia.com/travel-web/train.jpg"
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
            </div>
        </div>
      </section>
      <DestinationGallery />
      <TravelersExperiences />
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto bg-card p-8 rounded-lg text-left">
            <h2 className="font-headline text-3xl md:text-4xl">Subscribe Newsletter</h2>
            <p className="mt-2 text-lg font-bold">The Travel</p>
            <p className="mt-2 text-muted-foreground">Get inspired! Receive travel discounts, tips and behind the scenes stories.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-2 max-w-md">
              <Input type="email" placeholder="Your email address" className="flex-grow bg-white" />
              <Button className="bg-secondary hover:bg-secondary/90 text-white">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
