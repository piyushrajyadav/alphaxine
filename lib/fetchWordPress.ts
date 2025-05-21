/**
 * WordPress Content Fetching Library
 * This module provides functions to fetch content from WordPress for any page.
 */

// Helper function to extract content from HTML
function extractContentFromHTML(html: string): string {
  // Look for main content div, article, or entry-content
  let content = '';
  
  // Try to extract entry-content
  const entryContentMatch = html.match(/<div class="entry-content">([\s\S]*?)<\/div>/);
  if (entryContentMatch && entryContentMatch[1]) {
    content = entryContentMatch[1];
  }
  
  // If we couldn't find entry-content, return what we found or just the whole body
  if (!content) {
    const bodyMatch = html.match(/<body>([\s\S]*?)<\/body>/);
    if (bodyMatch && bodyMatch[1]) {
      content = bodyMatch[1];
    }
  }
  
  return content || html;
}

/**
 * Fetches content from WordPress for a specific page slug
 * @param slug The WordPress page or post slug to fetch
 * @returns WordPress content object or null if not found
 */
export async function fetchWordPressContent(slug: string) {
  try {
    // Try multiple API endpoints to get the content

    // First try: WordPress WP API pages endpoint
    const pagesResponse = await fetch(
      `https://public-api.wordpress.com/wp/v2/sites/allpharaj.wordpress.com/pages?slug=${slug}&_embed=true`,
      { next: { revalidate: 3600 } }
    );

    if (pagesResponse.ok) {
      const pages = await pagesResponse.json();
      if (pages.length > 0) {
        return pages[0];
      }
    }
    
    console.error(`Failed to fetch from WordPress WP API pages endpoint for slug: ${slug}`);

    // Second try: WordPress WP API posts endpoint
    const postsResponse = await fetch(
      `https://public-api.wordpress.com/wp/v2/sites/allpharaj.wordpress.com/posts?slug=${slug}&_embed=true`,
      { next: { revalidate: 3600 } }
    );

    if (postsResponse.ok) {
      const posts = await postsResponse.json();
      if (posts.length > 0) {
        return posts[0];
      }
    }
    
    console.error(`Failed to fetch from WordPress WP API posts endpoint for slug: ${slug}`);

    // Third try: WordPress.com REST API posts endpoint
    const wpcomResponse = await fetch(
      `https://public-api.wordpress.com/rest/v1.1/sites/allpharaj.wordpress.com/posts/slug:${slug}`,
      { next: { revalidate: 3600 } }
    );
    
    if (wpcomResponse.ok) {
      return await wpcomResponse.json();
    }
    
    console.error(`Failed to fetch from WordPress.com REST API posts endpoint for slug: ${slug}`);
    
    // Fourth try: WordPress.com site URL (get HTML content)
    const rawResponse = await fetch(
      `https://allpharaj.wordpress.com/${slug}/`,
      { next: { revalidate: 3600 } }
    );
    
    if (rawResponse.ok) {
      const html = await rawResponse.text();
      // Extract title and content from HTML
      return {
        title: { rendered: slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') },
        content: { rendered: extractContentFromHTML(html) }
      };
    }
    
    console.error(`Failed to fetch from WordPress.com site URL for slug: ${slug}`);
    return null;
  } catch (error) {
    console.error(`Error fetching WordPress content for slug: ${slug}`, error);
    return null;
  }
}

/**
 * Extracts and normalizes content from a WordPress response
 * Handles different response structures from different WordPress APIs
 */
export function extractWordPressContent(wordpressData: any, defaultTitle: string = '') {
  if (!wordpressData) return { title: defaultTitle, content: null, featuredImage: null };
  
  // Handle different response structures from WP API and WordPress.com REST API
  const title = wordpressData?.title?.rendered || wordpressData?.title || defaultTitle;
  const content = wordpressData?.content?.rendered || wordpressData?.content || null;
  
  // Handle different featured image structures
  let featuredImage = null;
  if (wordpressData?._embedded?.['wp:featuredmedia']?.[0]?.source_url) {
    featuredImage = wordpressData._embedded['wp:featuredmedia'][0].source_url;
  } else if (wordpressData?.featured_image) {
    featuredImage = wordpressData.featured_image;
  }

  return { title, content, featuredImage };
} 