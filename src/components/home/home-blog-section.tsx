
"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

type BlogPost = {
  id: number;
  title: string;
  slug: string;
  description: string;
  content: string;
  image_url: string;
  category: string;
  created_at: string;
};

export function HomeBlogSection() {
    const [latestPost, setLatestPost] = useState<BlogPost | null>(null);
    const ftpBaseUrl = 'https://content-provider.payshia.com/travel-web';

    useEffect(() => {
        const fetchLatestBlog = async () => {
            try {
                const res = await fetch('http://localhost/travel_web_server/blogs');
                if (!res.ok) {
                    throw new Error('Failed to fetch blogs');
                }
                const data: BlogPost[] = await res.json();
                if (data && data.length > 0) {
                    const sortedData = data.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
                    setLatestPost(sortedData[0]);
                }
            } catch (error) {
                console.error("Failed to fetch latest blog:", error);
                setLatestPost(null);
            }
        };
        fetchLatestBlog();
    }, []);

    const getImageUrl = (url: string | null) => {
        if (!url) return 'https://placehold.co/800x600.png';
        if (url.startsWith('http')) return url;
        return `${ftpBaseUrl}${url.startsWith('/') ? '' : '/'}${url}`;
    };

    if (!latestPost) {
        return (
            <section className="py-16 lg:py-24 bg-white">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="font-headline text-4xl md:text-5xl">Our Blog</h2>
                  <p className="mt-4 text-lg text-muted- max-w-2xl mx-auto">
                    An insight the incredible experience in the world
                  </p>
                </div>
                <div className="flex justify-center">
                    <p>Loading latest blog post...</p>
                </div>
              </div>
            </section>
        );
    }
    
    return (
        <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-headline text-4xl md:text-5xl">Our Blog</h2>
            <p className="mt-4 text-lg text-muted- max-w-2xl mx-auto">
              An insight the incredible experience in the world
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src={getImageUrl(latestPost.image_url)}
                alt={latestPost.title}
                width={800}
                height={600}
                className="rounded-lg shadow-lg"
                data-ai-hint={latestPost.category.toLowerCase()}
              />
            </div>
            <div>
              <h3 className="font-headline text-3xl">{latestPost.title}</h3>
              <p className="font-headline text-2xl text-muted-foreground mb-4">Let's travel</p>
              <p className="mb-8 text-/80 leading-relaxed">
                {latestPost.description}
              </p>
              <Button size="lg" asChild>
                <Link href={`/blog/${latestPost.slug}`}>Read More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
}
