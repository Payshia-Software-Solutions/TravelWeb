
"use client"
import React, { useState, useEffect } from 'react';
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

type Testimonial = {
  id: number;
  name: string;
  travel_date: string;
  description: string;
  profile_image_url: string | null;
  background_image_url: string | null;
  is_approved: number;
};

export function TravelersExperiences() {
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const ftpBaseUrl = 'https://content-provider.payshia.com';

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const response = await fetch('http://localhost/travel_web_server/feedback');
                if (!response.ok) {
                    throw new Error('Failed to fetch testimonials');
                }
                const data: Testimonial[] = await response.json();
                // Filter for approved testimonials and ensure they have necessary images
                const approvedTestimonials = data.filter(t => t.is_approved && t.profile_image_url && t.background_image_url);
                setTestimonials(approvedTestimonials);
            } catch (error) {
                console.error('Error fetching testimonials:', error);
            }
        };

        fetchTestimonials();
    }, []);

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
          {testimonials.length > 0 && (
            <Carousel
                opts={{
                loop: true,
                }}
                className="w-full"
            >
                <CarouselContent>
                {testimonials.map((testimonial) => (
                    <CarouselItem key={testimonial.id}>
                    <div className="p-1">
                        <div className="relative flex flex-col items-center justify-center">
                            <Image
                            src={`${ftpBaseUrl}${testimonial.background_image_url}`}
                            alt={`Background for ${testimonial.name}'s feedback`}
                            width={1000}
                            height={500}
                            className="w-full max-w-4xl h-[400px] object-cover rounded-lg"
                            data-ai-hint="travel landscape"
                            />
                            <div className="relative -mt-24 w-full max-w-2xl">
                                <Card className="bg-white backdrop-blur-sm shadow-xl p-8 text-center">
                                    <Avatar className="h-20 w-20 mx-auto -mt-20 mb-4 border-4 border-white">
                                        <AvatarImage 
                                            src={`${ftpBaseUrl}${testimonial.profile_image_url}`} 
                                            alt={testimonial.name} 
                                            data-ai-hint="person portrait" 
                                        />
                                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <CardContent className="p-0">
                                    <p className="text-lg text-foreground/80 italic">"{testimonial.description}"</p>
                                    <p className="mt-6 font-bold text-lg text-foreground">{testimonial.name}</p>
                                    <p className="text-sm text-muted-foreground">{new Date(testimonial.travel_date).toLocaleDateString()}</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                    </CarouselItem>
                ))}
                </CarouselContent>
            </Carousel>
          )}
        </div>
      </section>
    );
}
