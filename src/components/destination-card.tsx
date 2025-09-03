
import { Destination, ApiDestination } from "@/lib/destinations";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

interface DestinationCardProps {
    destination: Destination | ApiDestination;
}

export function DestinationCard({ destination }: DestinationCardProps) {
    const isApiDestination = 'hero_bg_image_url' in destination;
    const ftpBaseUrl = 'https://content-provider.payshia.com/travel-web';


    const name = isApiDestination ? destination.name : destination.name.split(', ')[0];
    const location = isApiDestination ? destination.location : destination.name.split(', ')[1];
    let imageUrl = isApiDestination ? destination.hero_bg_image_url : destination.image;
    const linkId = isApiDestination ? destination.id : destination.id;

    if (isApiDestination && imageUrl && !imageUrl.startsWith('http')) {
        imageUrl = `${ftpBaseUrl}${imageUrl.startsWith('/') ? '' : '/'}${imageUrl}`;
    }

    return (
        <div className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out h-full flex flex-col">
            <Image 
                src={imageUrl} 
                alt={destination.name}
                width={600}
                height={800}
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
                data-ai-hint={`${name.toLowerCase()}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white flex flex-col">
                 <div className="flex justify-between items-baseline">
                    <h3 className="text-2xl font-bold font-body">{name}</h3>
                    <p className="text-sm opacity-90">{location}</p>
                 </div>
                 <Button asChild className="mt-4 bg-accent/80 hover:bg-accent text-accent-foreground w-full">
                    <Link href={`/destinations/${linkId}`}>
                        See More
                    </Link>
                 </Button>
            </div>
        </div>
    );
}

    