import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Target, Eye } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">About TravelSite</h1>
        <p className="mt-2 text-lg text-muted-foreground">Crafting unforgettable travel experiences.</p>
      </div>

      <div className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg mb-12">
        <Image
          src="https://placehold.co/1200x400.png"
          alt="Our team working"
          fill
          className="object-cover"
          data-ai-hint="team office"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center p-4">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Your Adventure, Our Passion</h2>
            <p className="mt-4 max-w-2xl text-lg">We believe travel is more than just seeing new places; it's about creating lasting memories and connecting with the world on a deeper level.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 text-center mb-16">
        <Card>
          <CardHeader>
            <Users className="mx-auto h-12 w-12 text-primary mb-4" />
            <CardTitle className="font-headline text-2xl">Who We Are</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">We are a team of passionate travelers, explorers, and storytellers dedicated to helping you discover the world's most amazing destinations.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Target className="mx-auto h-12 w-12 text-primary mb-4" />
            <CardTitle className="font-headline text-2xl">Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Our mission is to inspire and empower people to explore the world with curiosity, respect, and an open heart. We provide the tools and inspiration for your next great adventure.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Eye className="mx-auto h-12 w-12 text-primary mb-4" />
            <CardTitle className="font-headline text-2xl">Our Vision</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">We envision a world where travel is accessible to everyone, fostering understanding and appreciation for the diverse cultures and natural beauty of our planet.</p>
          </CardContent>
        </Card>
      </div>

    </div>
  );
}
