'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { getLatestInsights } from '@/lib/wordpress';

interface WordPressPost {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
    }>;
    'wp:term'?: Array<Array<{
      name: string;
      taxonomy: string;
    }>>;
  };
}

const Insights = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'blogs' | 'case-studies'>('all');
  const [posts, setPosts] = useState<WordPressPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        let fetchedPosts;
        if (activeTab === 'all') {
          fetchedPosts = await getLatestInsights(3);
        } else if (activeTab === 'blogs') {
          fetchedPosts = await getLatestInsights(3, 'post');
        } else {
          fetchedPosts = await getLatestInsights(3, 'case-study');
        }
        setPosts(fetchedPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [activeTab]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getPostCategory = (post: WordPressPost) => {
    return post._embedded?.['wp:term']?.[0]?.find(term => term.taxonomy === 'category')?.name || 'Uncategorized';
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Real Results, Real Impact
            </h2>
            <div className="h-6 bg-gray-200 rounded max-w-3xl mx-auto mb-4"></div>
          </motion.div>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white rounded-lg p-1 shadow-sm">
            <button
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'all' ? 'bg-red-600 text-white' : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('all')}
            >
              All Insights
            </button>
            <button
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'case-studies' ? 'bg-red-600 text-white' : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('case-studies')}
            >
              Case Studies
            </button>
            <button
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'blogs' ? 'bg-red-600 text-white' : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('blogs')}
            >
              Blog Posts
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {loading ? (
            // Loading skeleton
            [...Array(3)].map((_, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg animate-pulse">
                <div className="h-48 bg-gray-200"/>
                <div className="p-6">
                  <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"/>
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"/>
                  <div className="h-4 bg-gray-200 rounded w-full mb-2"/>
                  <div className="h-4 bg-gray-200 rounded w-2/3"/>
                </div>
              </div>
            ))
          ) : (
            posts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href={`/insights/${post.slug}`}>
                  <div className="relative h-48">
                    <Image
                      src={post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/images/placeholder.jpg'}
                      alt="Featured image"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-2">
                      <span className="text-sm text-gray-500">{formatDate(post.date)}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 line-clamp-2 hover:text-red-600 transition-colors">
                      {/* Title will be filled by WordPress */}
                    </h3>
                    <div className="h-16 bg-gray-100 rounded w-full mb-4"></div>
                    <div className="flex items-center justify-between">
                      <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                        {getPostCategory(post)}
                      </span>
                      <span className="text-red-600 font-medium flex items-center text-sm">
                        Read more
                        <svg 
                          className="ml-1 w-4 h-4" 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path 
                            fillRule="evenodd" 
                            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                            clipRule="evenodd" 
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))
          )}
        </div>

        <div className="text-center">
          <Link
            href="/insights"
            className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-lg shadow hover:bg-red-700 transition-colors duration-200"
          >
            View all insights
            <svg
              className="ml-2 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Insights; 