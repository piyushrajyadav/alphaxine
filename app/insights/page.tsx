import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getPosts, getCategories } from '@/lib/wordpress';
import BackgroundFix from '@/app/components/Layout/BackgroundFix';

export const metadata: Metadata = {
  title: 'Insights | AlphaXine',
  description: 'Explore our latest insights, articles, and resources on digital transformation, technology trends, and business strategy.',
};

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
}

export default async function InsightsPage() {
  const posts = await getPosts({ perPage: 9 });
  const categories = await getCategories();
  
  if (!posts || posts.length === 0) {
    return (
      <BackgroundFix>
        <div className="container mx-auto py-20 px-4">
        <h1 className="text-3xl font-bold text-center">No posts found</h1>
        <p className="text-center mt-4">Check back later for articles and insights.</p>
      </div>
      </BackgroundFix>
    );
  }

  return (
      <BackgroundFix>
        <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Insights</h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Explore our latest articles, research, and thoughts on technology, business, and innovation
            </p>
          </div>
        </div>
      </section>
      
      {/* Blog Posts Section */}
      <section className="container mx-auto py-16 px-4">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Main Content */}
          <div className="md:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
                  {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
                    <div className="relative h-48 w-full">
                      <Image
                        src={post._embedded['wp:featuredmedia'][0].source_url}
                        alt={post.title.rendered}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="text-sm text-gray-500 mb-2">
                      {formatDate(post.date)}
                    </div>
                    <h2 
                      className="text-xl font-bold mb-3 text-gray-800 line-clamp-2"
                      dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    />
                    <div 
                      className="text-gray-600 mb-4 line-clamp-3"
                      dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                    />
                    <Link 
                      href={`/insights/${post.slug}`}
                      className="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center"
                    >
                      Read more
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="md:w-1/4">
            <div className="bg-gray-50 p-6 rounded-lg sticky top-24">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Categories</h3>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category.id}>
                    <Link 
                      href={`/insights/category/${category.slug}`}
                      className="text-gray-700 hover:text-blue-600 flex items-center justify-between"
                    >
                      <span>{category.name}</span>
                      <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full text-xs">
                        {category.count}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
      </BackgroundFix>
    );
} 