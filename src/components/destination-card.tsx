
import { Destination } from "@/lib/destinations";
import Image from "next/image";

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
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white flex justify-between items-end">
                 <h3 className="text-2xl font-bold font-body">{name}</h3>
                 <p className="text-sm opacity-90">{location}</p>
            </div>
        </div>
    );
}
