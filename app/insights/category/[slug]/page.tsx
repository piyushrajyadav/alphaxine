import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getPosts, getCategories } from '@/lib/wordpress';
import BackgroundFix from '@/app/components/Layout/BackgroundFix';

interface CategoryPageParams {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: CategoryPageParams): Promise<Metadata> {
  const categories = await getCategories();
  const category = categories.find(cat => cat.slug === params.slug);
  
  return {
    title: category ? `${category.name} | AlphaXine Insights` : 'Category | AlphaXine Insights',
    description: `Explore our latest insights and articles in the ${category?.name || 'selected'} category.`,
  };
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
}

export default async function CategoryPage({ params }: CategoryPageParams) {
  const categories = await getCategories();
  const category = categories.find(cat => cat.slug === params.slug);
  const categoryId = category?.id;
  
  let posts = [];
  if (categoryId) {
    posts = await getPosts({ category: categoryId.toString(), perPage: 9 });
  }
  
  if (!category) {
    return (
      <BackgroundFix>
        <div className="container mx-auto py-20 px-4">
        <h1 className="text-3xl font-bold text-center">Category not found</h1>
        <p className="text-center mt-4">The requested category could not be found.</p>
        <div className="flex justify-center mt-8">
          <Link 
            href="/insights"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Insights
          </Link>
        </div>
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{category.name}</h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Explore our latest articles and insights in the {category.name} category
            </p>
          </div>
        </div>
      </section>
      
      {/* Blog Posts Section */}
      <section className="container mx-auto py-16 px-4">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Main Content */}
          <div className="md:w-3/4">
            {posts.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-lg shadow">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">No articles found</h2>
                <p className="text-gray-600">
                  There are currently no articles in this category.
                </p>
                <Link 
                  href="/insights"
                  className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View all insights
                </Link>
              </div>
            ) : (
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
            )}
          </div>
          
          {/* Sidebar */}
          <div className="md:w-1/4">
            <div className="bg-gray-50 p-6 rounded-lg sticky top-24">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Categories</h3>
              <ul className="space-y-2">
                {categories.map((cat) => (
                  <li key={cat.id}>
                    <Link 
                      href={`/insights/category/${cat.slug}`}
                      className={`flex items-center justify-between ${
                        cat.id === category.id 
                          ? 'text-blue-600 font-medium' 
                          : 'text-gray-700 hover:text-blue-600'
                      }`}
                    >
                      <span>{cat.name}</span>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        cat.id === category.id 
                          ? 'bg-blue-100 text-blue-600' 
                          : 'bg-gray-200 text-gray-600'
                      }`}>
                        {cat.count}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <Link 
                  href="/insights"
                  className="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center"
                >
                  ← Back to all insights
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
      </BackgroundFix>
    );
} 