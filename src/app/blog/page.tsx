"use client";

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, User } from 'lucide-react';

const blogPosts = [
  {
    id: '1',
    title: '10 Tips for Your First Trip to Paris',
    author: 'Jane Doe',
    date: '2024-05-15',
    category: 'Travel Tips',
    image: 'https://placehold.co/600x400.png',
    excerpt: 'Paris can be overwhelming for first-timers. Here are 10 essential tips to make your trip unforgettable, from navigating the metro to finding the best croissants.',
  },
  {
    id: '2',
    title: 'A Culinary Journey Through Kyoto',
    author: 'John Smith',
    date: '2024-04-22',
    category: 'Food & Drink',
    image: 'https://placehold.co/600x400.png',
    excerpt: 'Discover the rich and diverse culinary scene of Kyoto. We explore everything from traditional kaiseki dining to bustling street food markets.',
  },
  {
    id: '3',
    title: 'Hidden Gems of the Egyptian Desert',
    author: 'Maria Garcia',
    date: '2024-03-10',
    category: 'Adventure',
    image: 'https://placehold.co/600x400.png',
    excerpt: 'Venture beyond the pyramids and discover the breathtaking landscapes and ancient secrets hidden within the Egyptian desert.',
  },
    {
    id: '4',
    title: 'Packing Light: The Ultimate Guide',
    author: 'Alex Johnson',
    date: '2024-05-28',
    category: 'Travel Tips',
    image: 'https://placehold.co/600x400.png',
    excerpt: 'Learn the art of packing light without sacrificing style or essentials. Our guide will help you save space, money, and your back!',
  },
  {
    id: '5',
    title: 'The Most Colorful Festivals in Brazil',
    author: 'Sofia Costa',
    date: '2024-02-18',
    category: 'Culture',
    image: 'https://placehold.co/600x400.png',
    excerpt: 'From Carnival in Rio to Bumba Meu Boi in São Luís, explore the vibrant and energetic festivals that make Brazil a cultural hotspot.',
  },
  {
    id: '6',
    title: 'Hiking the Blue Mountains in Sydney',
    author: 'Chris Wilson',
    date: '2024-01-05',
    category: 'Adventure',
    image: 'https://placehold.co/600x400.png',
    excerpt: 'A comprehensive guide to hiking the stunning Blue Mountains near Sydney, with trails for all skill levels and breathtaking views.',
  }
];

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const categories = useMemo(() => ['all', ...new Set(blogPosts.map(p => p.category))], []);

  const filteredPosts = useMemo(() => {
    return blogPosts
      .filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .filter(post =>
        categoryFilter === 'all' ? true : post.category === categoryFilter
      );
  }, [searchTerm, categoryFilter]);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">Travel Blog</h1>
        <p className="mt-2 text-lg text-muted-foreground">Stories, tips, and inspiration from our travels.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8 p-4 bg-secondary rounded-lg">
        <Input
          type="text"
          placeholder="Search articles..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow bg-background"
        />
        <Select value={categoryFilter} onValueChange={setCategoryFilter}>
          <SelectTrigger className="w-full md:w-[200px] bg-background">
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map(category => (
              <SelectItem key={category} value={category}>
                {category === 'all' ? 'All Categories' : category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      {filteredPosts.length > 0 ? (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardHeader className="p-0">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                   data-ai-hint="travel blog"
                />
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <p className="text-sm text-muted-foreground mb-2">{post.category}</p>
                <CardTitle className="font-headline text-xl h-14">{post.title}</CardTitle>
                 <div className="flex items-center text-sm text-muted-foreground mt-4 space-x-4">
                    <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                </div>
                <p className="mt-4 text-sm text-foreground/80">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button asChild variant="link" className="p-0 h-auto">
                  <Link href="#" className="flex items-center text-primary">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-xl text-muted-foreground">No articles found. Try a different search or filter.</p>
        </div>
      )}
    </div>
  );
}
