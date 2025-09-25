
"use client"
import Link from "next/link";
import { DestinationCard } from "@/components/destination-card";
import { Button } from "@/components/ui/button";
import { ApiDestination } from "@/lib/destinations";
import { useEffect, useState } from "react";

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

export function PopularDestinations() {
    const [popularDestinations, setPopularDestinations] = useState<ApiDestination[]>([]);

    useEffect(() => {
        const fetchDestinations = async () => {
            try {
                const res = await fetch(`${SERVER_URL}destinations`);
                const data = await res.json();
                if (Array.isArray(data)) {
                    const popular = data.filter(d => d.is_popular).slice(0, 4);
                    setPopularDestinations(popular);
                } else {
                    console.error("Fetched data is not an array:", data);
                }
            } catch (error) {
                console.error("Failed to fetch destinations:", error);
            }
        };

        fetchDestinations();
    }, []);

    return (
        <section className="py-16 lg:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-4xl md:text-5xl font-bold">Popular Destinations</h2>
                    <p className="mt-4 text-lg text-muted- max-w-2xl mx-auto">
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
    );
}
