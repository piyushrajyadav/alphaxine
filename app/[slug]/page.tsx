import { getPageBySlug, getAllPageSlugs, sanitizeHtml } from '@/lib/wordpress';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  try {
    const slugs = await getAllPageSlugs();
    console.log('Slugs fetched from getAllPageSlugs:', slugs);
    return slugs; // Return the slugs as is
  } catch (error) {
    console.error('Error generating page params:', error);
    return [];
  }
}

export default async function GenericPage({ params }: { params: { slug: string } }) {
  try {
    console.log('Fetching page with slug:', params.slug);
    const page = await getPageBySlug(params.slug);

    if (!page) {
      console.warn(`No page found for slug: ${params.slug}`);
      return notFound();
    }

    console.log('Page data:', page);

    return (
      <div>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{page.title.rendered}</h1>
              {page.acf?.subtitle && (
                <p className="text-xl text-gray-300">{page.acf.subtitle}</p>
              )}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {page.acf?.heroImage && (
                <div className="relative h-96 w-full mb-10 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={page.acf.heroImage}
                    alt={page.title.rendered}
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                  />
                </div>
              )}

              <div className="prose prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: sanitizeHtml(page.content.rendered) }} />
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic Sections */}
        {page.acf?.sections && page.acf.sections.map((section, index) => (
          <section
            key={index}
            className={`py-16 ${section.background_color === 'gray' ? 'bg-gray-50' : 'bg-white'}`}
          >
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                {section.layout === 'image_left' ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {section.image && (
                      <div className="relative h-80 rounded-lg overflow-hidden shadow-md">
                        <Image
                          src={section.image}
                          alt={section.title}
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                    )}
                    <div>
                      <h2 className="text-3xl font-bold mb-6 text-gray-800">{section.title}</h2>
                      <div className="prose" dangerouslySetInnerHTML={{ __html: sanitizeHtml(section.content) }} />
                    </div>
                  </div>
                ) : section.layout === 'image_right' ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                      <h2 className="text-3xl font-bold mb-6 text-gray-800">{section.title}</h2>
                      <div className="prose" dangerouslySetInnerHTML={{ __html: sanitizeHtml(section.content) }} />
                    </div>
                    {section.image && (
                      <div className="relative h-80 rounded-lg overflow-hidden shadow-md">
                        <Image
                          src={section.image}
                          alt={section.title}
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center">
                    <h2 className="text-3xl font-bold mb-6 text-gray-800">{section.title}</h2>
                    <div className="prose mx-auto" dangerouslySetInnerHTML={{ __html: sanitizeHtml(section.content) }} />
                  </div>
                )}
              </div>
            </div>
          </section>
        ))}
      </div>
    );
  } catch (error) {
    console.error('Error fetching page:', error);
    return notFound();
  }
}
