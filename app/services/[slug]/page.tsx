import { getServiceBySlug, getAllServiceSlugs } from '@/lib/wordpress';
import ServicePageTemplate from '@/app/components/ServicePageTemplate';
import { notFound } from 'next/navigation';
import BackgroundFix from '@/app/components/Layout/BackgroundFix';

export async function generateStaticParams() {
  try {
    const slugs = await getAllServiceSlugs();
    return slugs;
  } catch (error) {
    console.error('Error generating service params:', error);
    return [];
  }
}

export default async function ServicePage({ params }: { params: { slug: string } }) {
  try {
    const service = await getServiceBySlug(params.slug);
    
    // Format the data to match the ServicePageTemplate props
    const pageData = {
      title: service.title.rendered,
      description: service.acf.description || '',
      gradientColors: service.acf.gradientColors || {
        from: 'blue-600',
        to: 'indigo-700'
      },
      heroImage: service.acf.heroImage || 
        (service._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/images/default-service.jpg'),
      features: service.acf.features || [],
      benefits: service.acf.benefits || []
    };

    return <ServicePageTemplate {...pageData} />;
  } catch (error) {
    console.error('Error fetching service:', error);
    notFound();
  }
} 