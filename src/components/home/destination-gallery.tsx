
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
                        <Image className="h-auto max-w-full rounded-lg" src="https://placehold.co/500x750.png" alt="" width={500} height={750} data-ai-hint="man mural" />
                    </div>
                    <div>
                        <Image className="h-auto max-w-full rounded-lg" src="https://placehold.co/500x300.png" alt="" width={500} height={300} data-ai-hint="man backpack" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <Image className="h-auto max-w-full rounded-lg" src="https://placehold.co/500x300.png" alt="" width={500} height={300} data-ai-hint="couple beach" />
                    </div>
                    <div>
                        <Image className="h-auto max-w-full rounded-lg" src="https://placehold.co/500x750.png" alt="" width={500} height={750} data-ai-hint="woman backpack" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <Image className="h-auto max-w-full rounded-lg" src="https://placehold.co/500x750.png" alt="" width={500} height={750} data-ai-hint="man mural" />
                    </div>
                    <div>
                        <Image className="h-auto max-w-full rounded-lg" src="https://placehold.co/500x300.png" alt="" width={500} height={300} data-ai-hint="couple beach" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <Image className="h-auto max-w-full rounded-lg" src="https://placehold.co/500x300.png" alt="" width={500} height={300} data-ai-hint="couple beach" />
                    </div>
                    <div>
                        <Image className="h-auto max-w-full rounded-lg" src="https://placehold.co/500x750.png" alt="" width={500} height={750} data-ai-hint="woman backpack" />
                    </div>
                </div>
            </div>
            </div>
      </section>
    );
}
