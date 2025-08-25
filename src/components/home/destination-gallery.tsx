
import Image from "next/image";

export function DestinationGallery() {
    return (
        <section className="py-16 lg:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="font-headline text-4xl md:text-5xl">Destination Gallery</h2>
                <p className="mt-4 text-lg text-muted- max-w-2xl mx-auto">
                    Our photo gallery on trip
                </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="grid gap-4">
                    <div>
                        <Image className="h-auto max-w-full rounded-lg" src="https://content-provider.payshia.com/travel-web/gallery/img4.webp" alt="Man standing in front of a colorful mural" width={500} height={750} data-ai-hint="man mural" />
                    </div>
                    <div>
                        <Image className="h-auto max-w-full rounded-lg" src="https://content-provider.payshia.com/travel-web/gallery/img5.webp" alt="Man with a backpack looking out at a view" width={500} height={300} data-ai-hint="man backpack" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <Image className="h-auto max-w-full rounded-lg" src="https://content-provider.payshia.com/travel-web/gallery/img6.webp" alt="Couple walking on a tropical beach" width={500} height={300} data-ai-hint="couple beach" />
                    </div>
                    <div>
                        <Image className="h-auto max-w-full rounded-lg" src="https://content-provider.payshia.com/travel-web/gallery/img7.webp" alt="Woman with a backpack in a lush green environment" width={500} height={750} data-ai-hint="woman backpack" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <Image className="h-auto max-w-full rounded-lg" src="https://content-provider.payshia.com/travel-web/gallery/img8.webp" alt="Another man standing in front of a vibrant mural" width={500} height={750} data-ai-hint="man mural" />
                    </div>
                    <div>
                        <Image className="h-auto max-w-full rounded-lg" src="https://content-provider.payshia.com/travel-web/gallery/img9.webp" alt="A different couple enjoying a day at the beach" width={500} height={300} data-ai-hint="couple beach" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <Image className="h-auto max-w-full rounded-lg" src="https://content-provider.payshia.com/travel-web/gallery/img10.webp" alt="A shot of a happy couple on the beach" width={500} height={300} data-ai-hint="couple beach" />
                    </div>
                    <div>
                        <Image className="h-auto max-w-full rounded-lg" src="https://content-provider.payshia.com/travel-web/gallery/img11.webp" alt="Another woman with a backpack exploring nature" width={500} height={750} data-ai-hint="woman backpack" />
                    </div>
                </div>
            </div>
            </div>
      </section>
    );
}
