import apiFetch from '@wordpress/api-fetch';
import { cache } from 'react';

// Configure the WordPress API endpoint
const WORDPRESS_API_URL = 'https://public-api.wordpress.com/wp/v2/sites/allpharaj.wordpress.com';
const WORDPRESS_API_URL_CUSTOM = 'https://public-api.wordpress.com/rest/v1.1/sites/allpharaj.wordpress.com';

// Initialize apiFetch with the WordPress URL
apiFetch.use(apiFetch.createRootURLMiddleware(WORDPRESS_API_URL));

// Job interfaces and functions
interface Job {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  acf: {
    location: string;
    type: string;
    department: string;
    description: string;
    requirements: string[];
    responsibilities: string[];
    benefits: string[];
  };
  content: {
    rendered: string;
  };
}

export async function getAllJobs(): Promise<Job[]> {
  const res = await fetch(`${WORDPRESS_API_URL}/jobs?per_page=100`, {
    next: { revalidate: 3600 } // Revalidate every hour
  });

  if (!res.ok) {
    throw new Error('Failed to fetch jobs');
  }

  return res.json();
}

export async function getJobBySlug(slug: string): Promise<Job> {
  const res = await fetch(`${WORDPRESS_API_URL}/jobs?slug=${slug}`, {
    next: { revalidate: 3600 }
  });

  if (!res.ok) {
    throw new Error('Failed to fetch job');
  }

  const jobs = await res.json();
  if (!jobs.length) {
    throw new Error('Job not found');
  }

  return jobs[0];
}

export async function getAllJobSlugs() {
  const jobs = await getAllJobs();
  return jobs.map((job) => ({
    slug: job.slug,
  }));
}

// Service interfaces and functions
interface Service {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  featured_media: number;
  acf: {
    description: string;
    subtitle: string;
    heroImage: string;
    gradientColors: {
      from: string;
      to: string;
    };
    features: {
      title: string;
      description: string;
      icon: string;
      link: string;
    }[];
    benefits: {
      title: string;
      description: string;
      stat: string;
      statLabel: string;
    }[];
  };
  _embedded?: {
    'wp:featuredmedia'?: {
      source_url: string;
    }[];
  };
}

export async function getAllServices(): Promise<Service[]> {
  const res = await fetch(`${WORDPRESS_API_URL}/services?per_page=100&_embed`, {
    next: { revalidate: 3600 }
  });

  if (!res.ok) {
    throw new Error('Failed to fetch services');
  }

  return res.json();
}

export async function getServiceBySlug(slug: string): Promise<Service> {
  const res = await fetch(`${WORDPRESS_API_URL}/services?slug=${slug}&_embed`, {
    next: { revalidate: 3600 }
  });

  if (!res.ok) {
    throw new Error('Failed to fetch service');
  }

  const services = await res.json();
  if (!services.length) {
    throw new Error('Service not found');
  }

  return services[0];
}

export async function getAllServiceSlugs() {
  const services = await getAllServices();
  return services.map((service) => ({
    slug: service.slug,
  }));
}

// Blog interfaces and functions
interface BlogPost {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  date: string;
  featured_media: number;
  acf: {
    author: string;
    author_title: string;
    author_image: string;
    read_time: string;
  };
  _embedded?: {
    'wp:featuredmedia'?: {
      source_url: string;
      alt_text: string;
    }[];
    'wp:term'?: {
      id: number;
      name: string;
      slug: string;
    }[][];
  };
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const res = await fetch(`${WORDPRESS_API_URL}/posts?per_page=100&_embed`, {
    next: { revalidate: 3600 }
  });

  if (!res.ok) {
    throw new Error('Failed to fetch blog posts');
  }

  return res.json();
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost> {
  const res = await fetch(`${WORDPRESS_API_URL}/posts?slug=${slug}&_embed`, {
    next: { revalidate: 3600 }
  });

  if (!res.ok) {
    throw new Error('Failed to fetch blog post');
  }

  const posts = await res.json();
  if (!posts.length) {
    throw new Error('Blog post not found');
  }

  return posts[0];
}

export async function getAllBlogSlugs() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Generic Page interfaces and functions
interface Page {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  acf: {
    subtitle: string;
    heroImage: string;
    sections: {
      title: string;
      content: string;
      background_color: string;
      image: string;
      layout: string;
    }[];
  };
}

async function fetchContentBySlug(endpoint: string, slug: string): Promise<any | null> {
  try {
    const res = await fetch(`${WORDPRESS_API_URL}${endpoint}?slug=${slug}`, {
      next: { revalidate: 3600 }
    });

    if (!res.ok) {
      console.error(`Error fetching content from ${endpoint} with slug ${slug}: ${res.status} ${res.statusText}`);
      return null;
    }

    const content = await res.json();
    if (!content.length) {
      console.warn(`No content found in ${endpoint} with slug ${slug}`);
      return null;
    }

    return content[0];
  } catch (error: any) {
    console.error(`Error fetching content from ${endpoint} with slug ${slug}: ${error.message}`);
    return null;
  }
}

export async function getPageBySlug(slug: string): Promise<Page | null> {
  const page = await fetchContentBySlug('/pages', slug);
  if (page) return page;

  const service = await fetchContentBySlug('/services', slug);
  if (service) return service;

  const job = await fetchContentBySlug('/jobs', slug);
  if (job) return job;

  const post = await fetchContentBySlug('/posts', slug);
  if (post) return post;

  return null;
}

async function getAllSlugsFromEndpoint(endpoint: string): Promise<string[]> {
  const res = await fetch(`${WORDPRESS_API_URL}${endpoint}?per_page=100`, {
    next: { revalidate: 3600 }
  });

  if (!res.ok) {
    console.error(`Failed to fetch slugs from ${endpoint}`);
    return [];
  }

  const items = await res.json();
  return items.map((item: { slug: string }) => item.slug);
}

export async function getAllPageSlugs() {
  const pageSlugs = await getAllSlugsFromEndpoint('/pages');
  const serviceSlugs = await getAllSlugsFromEndpoint('/services');
  const careerSlugs = await getAllSlugsFromEndpoint('/jobs'); // Assuming "careers" are stored as "jobs"
  const blogSlugs = await getAllSlugsFromEndpoint('/posts'); // Assuming "blogs" are stored as "posts"

  const allSlugs = [...pageSlugs, ...serviceSlugs, ...careerSlugs, ...blogSlugs];
  console.log('All slugs fetched:', allSlugs);
  return allSlugs.map((slug) => ({ slug }));
}

// Helper function to sanitize WordPress HTML content
export function sanitizeHtml(html: string): string {
  // You might want to use a library like 'sanitize-html' here
  return html;
}

// Helper function to format date
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

interface WordPressImage {
  rendered: string;
}

interface WordPressPage {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  featured_media: number;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
  };
}

interface WordPressPost extends WordPressPage {
  date: string;
  categories: number[];
  tags: number[];
  author: number;
}

interface WordPressCategory {
  id: number;
  name: string;
  slug: string;
  count: number;
}

export const getPage = cache(async (slug: string): Promise<WordPressPage | null> => {
  try {
    // First try to get the page by slug
    const response = await fetch(
      `${WORDPRESS_API_URL}/pages?slug=${slug}&_embed=true`,
      { next: { revalidate: 3600 } }
    );
    
    if (!response.ok) {
      console.error(`Failed to fetch page by slug ${slug}: ${response.status}`);
      
      // If that fails, try to get it by path
      const pathResponse = await fetch(
        `${WORDPRESS_API_URL_CUSTOM}/posts/slug:${slug}?_embed=true`,
        { next: { revalidate: 3600 } }
      );
      
      if (!pathResponse.ok) {
        console.error(`Failed to fetch page by path ${slug}: ${pathResponse.status}`);
        return null;
      }
      
      const pathData = await pathResponse.json();
      return pathData;
    }
    
    const pages = await response.json();
    return pages.length > 0 ? pages[0] : null;
  } catch (error) {
    console.error('Error fetching page:', error);
    return null;
  }
});

interface PostParams {
  perPage?: number;
  page?: number;
  category?: string;
  tag?: string;
  search?: string;
  postType?: 'post' | 'case-study';
}

export const getPosts = cache(async ({ perPage = 10, page = 1, category, tag, search, postType = 'post' }: PostParams = {}) => {
  try {
    const params = new URLSearchParams({
      per_page: perPage.toString(),
      page: page.toString(),
      _embed: 'true',
    });

    if (category) params.append('categories', category);
    if (tag) params.append('tags', tag);
    if (search) params.append('search', search);
    if (postType) params.append('type', postType);

    const response = await fetch(`${WORDPRESS_API_URL}/posts?${params.toString()}`);
    if (!response.ok) throw new Error('Failed to fetch posts');
    return await response.json();
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
});

export const getPost = cache(async (slug: string) => {
  try {
    const response = await fetch(`${WORDPRESS_API_URL}/posts?slug=${slug}&_embed=true`);
    if (!response.ok) throw new Error('Failed to fetch post');
    const posts = await response.json();
    return posts[0];
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
});

export const getCategories = cache(async () => {
  try {
    const response = await fetch(`${WORDPRESS_API_URL}/categories`);
    if (!response.ok) throw new Error('Failed to fetch categories');
    return await response.json();
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
});

export const getRecentPosts = cache(async (count: number = 3) => {
  return getPosts({ perPage: count });
});

export const getCaseStudies = cache(async (count: number = 3) => {
  return getPosts({ perPage: count, postType: 'case-study' });
});

export const getLatestInsights = cache(async (count: number = 3, type?: 'post' | 'case-study') => {
  return getPosts({ perPage: count, postType: type });
});

// For fetching menu items if available through a custom endpoint
export async function getMenuItems(menuLocation: string) {
  try {
    return await apiFetch({
      url: `${WORDPRESS_API_URL_CUSTOM}/menus/v1/locations/${menuLocation}`,
    });
  } catch (e) {
    console.error('Error fetching menu:', e);
    return null;
  }
}

// WordPress API helper functions

// Update this with your WordPress site URL
const WORDPRESS_API_URL_HELPER = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'https://yourdomain.com/wp-json/wp/v2';

/**
 * Fetches latest posts from WordPress
 * @param count Number of posts to fetch
 * @param type Post type (post, page, custom post type)
 * @returns Array of WordPress posts
 */
export async function getLatestInsightsHelper(count = 3, type = 'any') {
  try {
    let endpoint = `${WORDPRESS_API_URL_HELPER}/posts?_embed&per_page=${count}`;
    
    if (type !== 'any') {
      endpoint = `${WORDPRESS_API_URL_HELPER}/${type === 'post' ? 'posts' : type}?_embed&per_page=${count}`;
    }
    
    const response = await fetch(endpoint, { 
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch WordPress posts: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching WordPress posts:', error);
    return [];
  }
}

/**
 * Fetches a single post by slug
 * @param slug Post slug
 * @param type Post type
 * @returns WordPress post or null
 */
export async function getPostBySlugHelper(slug: string, type = 'posts') {
  try {
    const response = await fetch(
      `${WORDPRESS_API_URL_HELPER}/${type}?slug=${slug}&_embed`, 
      { next: { revalidate: 3600 } }
    );
    
    if (!response.ok) {
      throw new Error(`Failed to fetch WordPress post: ${response.status}`);
    }
    
    const posts = await response.json();
    return posts.length > 0 ? posts[0] : null;
  } catch (error) {
    console.error('Error fetching WordPress post by slug:', error);
    return null;
  }
}

/**
 * Fetches menu from WordPress
 * @param menuLocation Menu location slug from WordPress
 * @returns Menu items array
 */
export async function getMenuHelper(menuLocation: string) {
  try {
    const response = await fetch(
      `${WORDPRESS_API_URL_HELPER}/menus/v1/locations/${menuLocation}`,
      { next: { revalidate: 86400 } } // Cache for 24 hours
    );
    
    if (!response.ok) {
      throw new Error(`Failed to fetch WordPress menu: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching WordPress menu:', error);
    return [];
  }
}

/**
 * Fetches page content by slug
 * @param slug Page slug
 * @returns WordPress page or null
 */
export async function getPageBySlugHelper(slug: string) {
  return getPostBySlugHelper(slug, 'pages');
}

/**
 * Search WordPress content
 * @param query Search query
 * @param type Content type to search
 * @param perPage Number of results per page
 * @returns Search results
 */
export async function searchContentHelper(query: string, type = 'any', perPage = 10) {
  try {
    let endpoint = `${WORDPRESS_API_URL_HELPER}/search?search=${encodeURIComponent(query)}&per_page=${perPage}`;
    
    if (type !== 'any') {
      endpoint += `&type=${type}`;
    }
    
    const response = await fetch(endpoint);
    
    if (!response.ok) {
      throw new Error(`Failed to search WordPress content: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error searching WordPress content:', error);
    return [];
  }
}

/**
 * Get widget area content by sidebar ID
 * @param sidebarId ID of the sidebar/widget area
 * @returns Widget area content
 */
export async function getWidgetAreaHelper(sidebarId: string) {
  try {
    const response = await fetch(
      `${WORDPRESS_API_URL_HELPER}/widgets?sidebar=${sidebarId}`,
      { next: { revalidate: 3600 } }
    );
    
    if (!response.ok) {
      throw new Error(`Failed to fetch widget area: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching WordPress widget area:', error);
    return [];
  }
}

export default {
  getLatestInsights: getLatestInsightsHelper,
  getPostBySlug: getPostBySlugHelper,
  getPageBySlug: getPageBySlugHelper,
  getMenu: getMenuHelper,
  searchContent: searchContentHelper,
  getWidgetArea: getWidgetAreaHelper
};
