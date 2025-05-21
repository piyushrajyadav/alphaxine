import Image from 'next/image';

interface PageHeroProps {
  title: string;
  imageUrl?: string;
  subtitle?: string;
}

export default function PageHero({ title, imageUrl, subtitle }: PageHeroProps) {
  // Parse the title to handle HTML entities if needed
  const parsedTitle = title.replace(/&#8211;/g, '–')
                           .replace(/&amp;/g, '&');

  return (
    <section className="relative bg-gray-50 text-black py-20 border-b border-gray-200">
      {imageUrl && (
        <div className="absolute inset-0 z-0">
          <Image
            src={imageUrl}
            alt={parsedTitle}
            fill
            className="object-cover object-center opacity-10"
            priority
          />
        </div>
      )}
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-red-600"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          
          {subtitle && (
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
} 