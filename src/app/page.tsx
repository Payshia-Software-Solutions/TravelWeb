
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
                <p className="mt-6 text-lg text-primary-foreground/90">
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
                <p className="mt-6 text-lg text-primary-foreground/90">
                Experience the wild heart of the island through safaris, marine life, and tropical bird sanctuaries.
                </p>
                <Button size="lg" className="mt-8">Plan Your Safari Adventure</Button>
            </div>
        </div>
      </section>
    </>
  );
}
