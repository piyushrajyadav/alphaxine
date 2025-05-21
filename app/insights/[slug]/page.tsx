import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getPost, getPosts } from '@/lib/wordpress';
import ContentRenderer from '@/app/components/UI/ContentRenderer';
import BackgroundFix from '@/app/components/Layout/BackgroundFix';

interface PostPageParams {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PostPageParams): Promise<Metadata> {
  const post = await getPost(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested post could not be found',
    };
  }
  
  // Convert HTML to plain text for meta description
  const description = post.excerpt.rendered
    .replace(/<\/?[^>]+(>|$)/g, '')
    .replace(/&nbsp;/g, ' ')
    .substring(0, 160);
  
  return {
    title: `${post.title.rendered} | AlphaXine Insights`,
    description,
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

export default async function BlogPostPage({ params }: PostPageParams) {
  const post = await getPost(params.slug);
  
  if (!post) {
    return (
      <BackgroundFix>
        <div className="container mx-auto py-20 px-4">
        <h1 className="text-3xl font-bold text-center">Post not found</h1>
        <p className="text-center mt-4">The requested post could not be found.</p>
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

  // Get related posts (can be customized based on categories, tags, etc.)
  const relatedPosts = await getPosts({ perPage: 3 });

  return (
      <BackgroundFix>
        <div className="min-h-screen pb-20 bg-gray-50">
      {/* Hero */}
      <section className="relative h-96 md:h-[500px] bg-gray-900">
        {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
          <div className="absolute inset-0">
            <Image
              src={post._embedded['wp:featuredmedia'][0].source_url}
              alt={post.title.rendered}
              fill
              className="object-cover object-center opacity-50"
              priority
            />
          </div>
        )}
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-4xl">
            <h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />
            <div className="text-gray-300 mb-4">
              {formatDate(post.date)}
            </div>
          </div>
        </div>
      </section>
      
      {/* Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <article className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <ContentRenderer 
                content={post.content.rendered} 
                className="prose-headings:text-gray-800 prose-p:text-gray-600 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline"
              />
            </article>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg shadow-md p-6 sticky top-24">
              <h3 className="text-xl font-bold mb-6 text-gray-800 border-b border-gray-200 pb-4">Related Posts</h3>
              <div className="space-y-6">
                {relatedPosts.slice(0, 3).map((relatedPost) => (
                  <div key={relatedPost.id} className="flex gap-4">
                    {relatedPost._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
                      <div className="relative h-16 w-16 flex-shrink-0">
                        <Image
                          src={relatedPost._embedded['wp:featuredmedia'][0].source_url}
                          alt={relatedPost.title.rendered}
                          fill
                          className="object-cover rounded-md"
                        />
                      </div>
                    )}
                    <div>
                      <h4 className="font-medium text-gray-800 line-clamp-2">
                        <Link 
                          href={`/insights/${relatedPost.slug}`}
                          className="hover:text-blue-600 transition-colors"
                          dangerouslySetInnerHTML={{ __html: relatedPost.title.rendered }}
                        />
                      </h4>
                      <div className="text-xs text-gray-500 mt-1">
                        {formatDate(relatedPost.date)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12">
                <Link
                  href="/insights"
                  className="bg-blue-600 text-white w-full py-3 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  View All Insights
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