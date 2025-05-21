// WordPress API helper functions

// Update this with your WordPress site URL
const WORDPRESS_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'https://yourdomain.com/wp-json/wp/v2';

/**
 * Fetches latest posts from WordPress
 * @param count Number of posts to fetch
 * @param type Post type (post, page, custom post type)
 * @returns Array of WordPress posts
 */
export async function getLatestInsights(count = 3, type = 'any') {
  try {
    let endpoint = `${WORDPRESS_API_URL}/posts?_embed&per_page=${count}`;
    
    if (type !== 'any') {
      endpoint = `${WORDPRESS_API_URL}/${type === 'post' ? 'posts' : type}?_embed&per_page=${count}`;
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
export async function getPostBySlug(slug: string, type = 'posts') {
  try {
    const response = await fetch(
      `${WORDPRESS_API_URL}/${type}?slug=${slug}&_embed`, 
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
export async function getMenu(menuLocation: string) {
  try {
    const response = await fetch(
      `${WORDPRESS_API_URL}/menus/v1/locations/${menuLocation}`,
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
export async function getPageBySlug(slug: string) {
  return getPostBySlug(slug, 'pages');
}

/**
 * Search WordPress content
 * @param query Search query
 * @param type Content type to search
 * @param perPage Number of results per page
 * @returns Search results
 */
export async function searchContent(query: string, type = 'any', perPage = 10) {
  try {
    let endpoint = `${WORDPRESS_API_URL}/search?search=${encodeURIComponent(query)}&per_page=${perPage}`;
    
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
export async function getWidgetArea(sidebarId: string) {
  try {
    const response = await fetch(
      `${WORDPRESS_API_URL}/widgets?sidebar=${sidebarId}`,
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
  getLatestInsights,
  getPostBySlug,
  getPageBySlug,
  getMenu,
  searchContent,
  getWidgetArea
}; 