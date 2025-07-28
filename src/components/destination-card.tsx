
import { Destination } from "@/lib/destinations";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { MapPin } from "lucide-react";

interface DestinationCardProps {
    destination: Destination;
}

export function DestinationCard({ destination }: DestinationCardProps) {
    const [name, location] = destination.name.split(', ');

    return (
        <div className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <Image 
                src={destination.image} 
                alt={destination.name}
                width={600}
                height={800}
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
                data-ai-hint={`${name.toLowerCase()}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                 <div className="flex items-baseline gap-2">
                    <h3 className="text-2xl font-bold font-headline">{name}</h3>
                    <p className="text-sm opacity-90">{location}</p>
                 </div>
                 <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                    <Button asChild className="w-full bg-primary/80 backdrop-blur-sm hover:bg-primary">
                        <Link href={`/destinations/${destination.id}`}>
                            See More
                            <MapPin className="ml-2 h-4 w-4"/>
                        </Link>
                    </Button>
                 </div>
            </div>
        </div>
    );
}
