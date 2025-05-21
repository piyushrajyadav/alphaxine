import { Metadata } from 'next';
import { getPage } from '@/lib/wordpress';
import PageHero from '@/app/components/UI/PageHero';
import ContentRenderer from '@/app/components/UI/ContentRenderer';
import BackgroundFix from '@/app/components/Layout/BackgroundFix';

export const metadata: Metadata = {
  title: 'Our Approach | Alphaxine',
  description: 'Learn about our strategic approach to solving complex business challenges and delivering transformative solutions.',
};

export default async function ApproachPage() {
  const pageData = await getPage('approach');
  
  if (!pageData) {
    return (
      <BackgroundFix>
        <div className="bg-gray-50 container mx-auto py-20 px-4">
        <h1 className="text-3xl font-bold text-center">Approach content not found</h1>
        <p className="text-center mt-4">The approach page content could not be loaded at this time.</p>
      </div>
      </BackgroundFix>
    );
  }

  return (
      <BackgroundFix>
        <div className="bg-gray-50 min-h-screen bg-gray-50">
      <PageHero 
        title={pageData.title.rendered}
        imageUrl={pageData._embedded?.['wp:featuredmedia']?.[0]?.source_url}
      />
      
      <section className="container mx-auto py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <ContentRenderer 
            content={pageData.content.rendered} 
            className="prose prose-lg max-w-none 
              prose-headings:text-red-600 
              prose-headings:font-bold"
          />
        </div>
      </section>
    </div>
      </BackgroundFix>
    );
} 







