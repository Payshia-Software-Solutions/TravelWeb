"use client";

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { destinations } from '@/lib/destinations';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function DestinationsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [continentFilter, setContinentFilter] = useState('all');
  const [sortOrder, setSortOrder] = useState('name-asc');

  const continents = useMemo(() => ['all', ...new Set(destinations.map(d => d.continent))], []);

  const filteredAndSortedDestinations = useMemo(() => {
    let filtered = destinations.filter(dest =>
      dest.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (continentFilter !== 'all') {
      filtered = filtered.filter(dest => dest.continent === continentFilter);
    }

    return filtered.sort((a, b) => {
      if (sortOrder === 'name-asc') {
        return a.name.localeCompare(b.name);
      }
      if (sortOrder === 'name-desc') {
        return b.name.localeCompare(a.name);
      }
      return 0;
    });
  }, [searchTerm, continentFilter, sortOrder]);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">Explore Our Destinations</h1>
        <p className="mt-2 text-lg text-muted-foreground">Find your next adventure.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8 p-4 bg-secondary rounded-lg">
        <Input
          type="text"
          placeholder="Search destinations..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow bg-background"
        />
        <div className="flex flex-col sm:flex-row gap-4">
          <Select value={continentFilter} onValueChange={setContinentFilter}>
            <SelectTrigger className="w-full sm:w-[180px] bg-background">
              <SelectValue placeholder="Filter by continent" />
            </SelectTrigger>
            <SelectContent>
              {continents.map(continent => (
                <SelectItem key={continent} value={continent}>
                  {continent === 'all' ? 'All Continents' : continent}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={sortOrder} onValueChange={setSortOrder}>
            <SelectTrigger className="w-full sm:w-[180px] bg-background">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name-asc">Name (A-Z)</SelectItem>
              <SelectItem value="name-desc">Name (Z-A)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {filteredAndSortedDestinations.length > 0 ? (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredAndSortedDestinations.map((dest) => (
            <Card key={dest.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardHeader className="p-0">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                  data-ai-hint={`${dest.name.split(',')[0].toLowerCase()}`}
                />
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <CardTitle className="font-headline text-xl">{dest.name}</CardTitle>
                <p className="text-sm text-muted-foreground mt-1">{dest.continent}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button asChild variant="link" className="p-0 h-auto">
                  <Link href={`/destinations/${dest.id}`} className="flex items-center text-primary">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-xl text-muted-foreground">No destinations found. Try adjusting your filters.</p>
        </div>
      )}
    </div>
  );
}
