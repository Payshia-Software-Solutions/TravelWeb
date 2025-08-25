
"use client"
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { useState, useEffect, useMemo } from 'react';

type BlogPost = {
  id: number;
  title: string;
  slug: string;
  description: string;
  content: string;
  image_url: string;
  category: string;
  is_published: boolean;
  created_at: string;
};

const POSTS_PER_PAGE = 6;

export default function BlogPage() {
  const [allPosts, setAllPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [visiblePostsCount, setVisiblePostsCount] = useState(POSTS_PER_PAGE);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const ftpBaseUrl = 'https://content-provider.payshia.com/travel-web';

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch('http://localhost/travel_web_server/blogs');
        if (!res.ok) {
          throw new Error('Failed to fetch blogs');
        }
        const data: BlogPost[] = await res.json();
        const publishedPosts = data.filter(post => post.is_published);
        setAllPosts(publishedPosts);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
        setAllPosts([]);
      }
    };
    fetchBlogs();
  }, []);

  useEffect(() => {
    let posts = allPosts;

    if (selectedCategory !== 'all') {
      posts = posts.filter(post => post.category.toLowerCase() === selectedCategory.toLowerCase());
    }

    if (searchTerm) {
      posts = posts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredPosts(posts);
    setVisiblePostsCount(POSTS_PER_PAGE); // Reset pagination on filter change
  }, [selectedCategory, searchTerm, allPosts]);


  const loadMore = () => {
    setVisiblePostsCount(prev => prev + 3);
  }
  
  const getImageUrl = (url: string | null) => {
    if (!url) return 'https://placehold.co/600x400.png';
    if (url.startsWith('http')) return url;
    return `${ftpBaseUrl}${url.startsWith('/') ? '' : '/'}${url}`;
  };
  
  const categories = useMemo(() => {
    const cats = new Set(allPosts.map(p => p.category));
    return Array.from(cats);
  }, [allPosts]);

  return (
    <>
      <section className="relative h-screen flex flex-col items-center justify-center text-center text-white">
        <div className="absolute inset-0">
            <Image
              src="https://content-provider.payshia.com/travel-web/unawatuna.webp"
              alt="Scenic view of Unawatuna beach"
              fill
              className="z-0 object-cover"
              priority
              data-ai-hint="unawatuna beach"
            />
            <div className="absolute inset-0 bg-black/50 z-10" />
        </div>
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl tracking-tight">
            Travel Blog & Stories
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-white">
            Inspiration, stories, and tips for your next adventure in Sri Lanka
          </p>
          <Button size="lg" className="mt-8 rounded-3xl">
            Subscribe to Newsletter
          </Button>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-12">
            <div className="w-full md:max-w-xs">
              <Input 
                placeholder="Search blog articles..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map(cat => (
                    <SelectItem key={cat} value={cat.toLowerCase()}>{cat}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="font-headline text-4xl md:text-5xl relative inline-block">
              Our Blogs
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-accent"></span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(0, visiblePostsCount).map((post) => (
              <Card key={post.id} className="overflow-hidden shadow-lg rounded-lg flex flex-col group">
                 <Image
                    src={getImageUrl(post.image_url)}
                    alt={post.title}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    data-ai-hint={post.category.toLowerCase()}
                />
                <CardContent className="p-6 flex-grow flex flex-col bg-card">
                  <h3 className="font-headline text-xl font-bold h-16">{post.title}</h3>
                  <p className="text-muted-foreground mt-2 flex-grow">{post.description}</p>
                   <Link href={`/blog/${post.slug}`} className="flex items-center justify-end text-primary mt-4 font-semibold group-hover:translate-x-1 transition-transform">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          {visiblePostsCount < filteredPosts.length && (
            <div className="text-center mt-12">
                <Button size="lg" onClick={loadMore}>
                    Load More Articles
                </Button>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-green-500 text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-headline text-3xl md:text-4xl text-white">Get travel inspiration directly to your inbox</h2>
            <p className="mt-4 max-w-2xl mx-auto text-white">Subscribe to our newsletter for the latest travel stories, tips, and exclusive deals for your Sri Lankan adventure.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <Input type="email" placeholder="Enter your email" className="flex-grow bg-white text-foreground" />
              <Button variant="secondary" className="bg-white hover:bg-white/90 text-green-500">Subscribe</Button>
            </div>
        </div>
      </section>

      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0">
            <Image
              src="https://placehold.co/1920x800.png"
              alt="Mountain sunrise"
              fill
              className="z-0 object-cover"
              data-ai-hint="mountain sunrise"
            />
            <div className="absolute inset-0 bg-black/50 z-10" />
        </div>
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h2 className="font-headline text-4xl md:text-5xl font-bold">
                Ready to explore Sri Lanka?
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-white">
              Turn your travel dreams into reality with our expertly crafted itineraries
            </p>
            <div className="mt-8 flex justify-center">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    Start Your Journey
                </Button>
            </div>
        </div>
      </section>

    </>
  );
}
