interface ContentRendererProps {
  content: string;
  className?: string;
}

export default function ContentRenderer({ content, className = '' }: ContentRendererProps) {
  return (
    <div 
      className={`wp-content prose prose-lg max-w-none 
        prose-headings:text-red-600 
        prose-headings:font-bold
        prose-headings:mt-8
        prose-headings:mb-4
        prose-h1:text-3xl 
        prose-h1:text-red-600
        prose-h2:text-2xl 
        prose-h2:text-red-600
        prose-h3:text-xl
        prose-h3:text-red-600
        prose-p:text-gray-600 
        prose-p:leading-relaxed
        prose-p:mb-4
        prose-a:text-red-600 
        prose-a:font-medium 
        prose-a:no-underline 
        hover:prose-a:underline
        prose-li:text-gray-600
        prose-li:mb-2
        prose-img:rounded-lg
        prose-img:shadow-md
        prose-img:my-8
        prose-strong:text-gray-800
        prose-blockquote:text-gray-700
        prose-blockquote:border-red-600
        prose-blockquote:bg-red-50
        prose-blockquote:py-1
        prose-blockquote:px-4
        prose-blockquote:rounded-r-lg
        prose-code:text-pink-600
        prose-code:bg-gray-100
        prose-code:px-1
        prose-code:py-0.5
        prose-code:rounded
        prose-pre:bg-gray-900
        prose-pre:text-gray-100
        ${className}`}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
} 