import { Metadata } from 'next';
import { getPage } from '@/lib/wordpress';
import PageHero from '@/app/components/UI/PageHero';
import ContentRenderer from '@/app/components/UI/ContentRenderer';
import BackgroundFix from '@/app/components/Layout/BackgroundFix';

export const metadata: Metadata = {
  title: 'Products & Solutions | AlphaXine',
  description: 'Explore our innovative products and solutions designed to drive digital transformation and business growth.',
};

export default async function ProductsPage() {
  const pageData = await getPage('products');
  
  if (!pageData) {
    return (
      <BackgroundFix>
        <div className="container mx-auto py-20 px-4">
        <h1 className="text-3xl font-bold text-center">Products content not found</h1>
        <p className="text-center mt-4">The products page content could not be loaded at this time.</p>
      </div>
      </BackgroundFix>
    );
  }

  return (
      <BackgroundFix>
        <div className="min-h-screen bg-gray-50">
      <PageHero 
        title={pageData.title.rendered}
        imageUrl={pageData._embedded?.['wp:featuredmedia']?.[0]?.source_url}
      />
      
      <section className="container mx-auto py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <ContentRenderer content={pageData.content.rendered} />
        </div>
      </section>
    </div>
      </BackgroundFix>
    );
} 

