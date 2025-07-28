
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { PawPrint, Sparkles } from 'lucide-react';

export default function AyurvedaPage() {
  return (
    <>
      <section className="relative h-screen flex flex-col items-center justify-center text-center text-white">
        <div className="absolute inset-0">
            <Image
              src="https://placehold.co/1920x1080.png"
              alt="Ayurveda setup with oils and herbs"
              fill
              className="z-0 object-cover"
              priority
              data-ai-hint="ayurveda spa"
            />
            <div className="absolute inset-0 bg-black/50 z-10" />
        </div>
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Ayurveda
          </h1>
          <p className="mt-4 text-2xl md:text-3xl font-headline">
            The Healing Spirit of Sri Lanka
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-white">
            Discover ancient wellness practices rooted in balance, nature, and self-care
          </p>
          <Button size="lg" className="mt-8" asChild>
            <Link href="#">Book a Wellness Retreat</Link>
          </Button>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h2 className="font-headline text-4xl md:text-5xl relative inline-block">
                        What is Ayurveda?
                        <span className="absolute -bottom-2 left-0 w-2/3 h-1 bg-accent"></span>
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Ayurveda, the ancient "science of life," has flourished in Sri Lanka for over 3,000 years. This holistic healing system emphasizes the balance between mind, body, and spirit through natural remedies, herbal treatments, and mindful practices.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Experience authentic treatments that cleanse toxins, restore energy, and promote deep healing in the birthplace of traditional wellness wisdom.
                    </p>
                    <div className="flex items-center gap-3 text-primary">
                        <Sparkles className="h-6 w-6" />
                        <span className="font-semibold">3000+ Years of Healing Tradition</span>
                    </div>
                </div>
                 <div className="relative">
                    <Image
                        src="https://placehold.co/800x600.png"
                        alt="Leopard in Sri Lanka"
                        width={800}
                        height={600}
                        className="rounded-lg shadow-lg"
                        data-ai-hint="leopard rock"
                    />
                    <div className="absolute bottom-4 right-4 bg-white p-3 rounded-full shadow-lg">
                        <PawPrint className="h-6 w-6 text-primary" />
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  );
}
