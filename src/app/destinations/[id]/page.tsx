import { destinations } from '@/lib/destinations';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Separator } from '@/components/ui/separator';
import { CheckCircle } from 'lucide-react';

export default function DestinationDetailPage({ params }: { params: { id: string } }) {
  const destination = destinations.find(d => d.id === params.id);

  if (!destination) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <article>
        <div className="text-center mb-8">
          <h1 className="font-headline text-4xl md:text-6xl font-bold">{destination.name}</h1>
        </div>

        <div className="relative w-full h-[300px] md:h-[500px] rounded-lg overflow-hidden shadow-2xl mb-12">
          <Image
            src={destination.gallery[0]}
            alt={`View of ${destination.name}`}
            fill
            className="object-cover"
            priority
            data-ai-hint="destination landscape"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          <div className="md:col-span-2">
            <h2 className="font-headline text-3xl font-semibold mb-4">About {destination.name}</h2>
            <p className="text-lg text-foreground/80 leading-relaxed">{destination.details}</p>

            <Separator className="my-8" />
            
            <h3 className="font-headline text-2xl font-semibold mb-6">Top Attractions</h3>
            <div className="space-y-6">
              {destination.attractions.map(attraction => (
                <Card key={attraction.name}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <CheckCircle className="text-primary w-6 h-6 flex-shrink-0" />
                      <span className="font-body text-xl font-semibold">{attraction.name}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground pl-9">{attraction.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <aside className="md:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Photo Gallery</CardTitle>
              </CardHeader>
              <CardContent>
                <Carousel className="w-full">
                  <CarouselContent>
                    {destination.gallery.map((img, index) => (
                      <CarouselItem key={index}>
                        <div className="p-1">
                            <Image
                              src={img}
                              alt={`Image ${index + 1} of ${destination.name}`}
                              width={800}
                              height={600}
                              className="w-full rounded-md object-cover aspect-video"
                              data-ai-hint="destination attraction"
                            />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2"/>
                  <CarouselNext className="right-2"/>
                </Carousel>
              </CardContent>
            </Card>
          </aside>
        </div>
      </article>
    </div>
  );
}

export async function generateStaticParams() {
    return destinations.map((destination) => ({
      id: destination.id,
    }))
}
