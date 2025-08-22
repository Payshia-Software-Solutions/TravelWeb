
"use client"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image"
import { Button } from "../ui/button"
import Link from "next/link"

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

export function TravelersExperiences() {
    return (
        <section className="py-16 lg:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center items-center gap-4 mb-4">
                <h2 className="font-headline text-4xl md:text-5xl">Traveler's Experiences</h2>
                <Button asChild>
                    <Link href="/feedback">Give Feedback</Link>
                </Button>
            </div>
            <p className="mt-4 text-lg text-muted- max-w-2xl mx-auto">
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
                             <Card className="bg-white backdrop-blur-sm shadow-xl p-8 text-center">
                                <Avatar className="h-20 w-20 mx-auto -mt-20 mb-4 border-4 border-white">
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
          </Carousel>
        </div>
      </section>
    );
}
