import { NextRequest, NextResponse } from 'next/server';
import { searchContent } from '@/lib/wordpress-api';

// Define the types of content we can search
type ContentType = 'page' | 'post' | 'service' | 'article' | 'blog';

interface SearchResult {
  title: string;
  path: string;
  type: ContentType;
  description: string;
  date?: string;
  featuredImage?: string;
}

// Static site pages (you can expand this list as needed)
const staticPages: SearchResult[] = [
  // Main pages
  {
    title: 'Home',
    path: '/',
    type: 'page',
    description: 'Alphaxine - Digital transformation solutions and services'
  },
  {
    title: 'About Us',
    path: '/company/about-us',
    type: 'page',
    description: 'Learn about our company, mission, and vision.'
  },
  {
    title: 'Our Services',
    path: '/services',
    type: 'page',
    description: 'Explore our comprehensive service offerings.'
  },
  {
    title: 'Our Journey',
    path: '/company/journey',
    type: 'page',
    description: 'The story of our evolution and growth.'
  },
  {
    title: 'Careers',
    path: '/careers',
    type: 'page',
    description: 'Join our team and grow your career.'
  },
  {
    title: 'Contact Us',
    path: '/contact',
    type: 'page',
    description: 'Get in touch with our team.'
  },
  
  // Company section
  {
    title: 'Leadership Team',
    path: '/company/leadership',
    type: 'page',
    description: 'Meet our leadership team driving innovation and growth.'
  },
  {
    title: 'Mission & Vision',
    path: '/company/mission-vision',
    type: 'page',
    description: 'Our mission, vision, and core values.'
  },
  {
    title: 'Certifications',
    path: '/company/certifications',
    type: 'page',
    description: 'Our industry certifications and accreditations.'
  },
  {
    title: 'Our Partners',
    path: '/company/partners',
    type: 'page',
    description: 'Strategic partnerships and collaborations.'
  },
  
  // Industry pages
  {
    title: 'Healthcare & Education',
    path: '/industries/healthcare-education',
    type: 'page',
    description: 'Solutions for healthcare and education sectors.'
  },
  {
    title: 'IT & ITES',
    path: '/industries/it-ites',
    type: 'page',
    description: 'Solutions for IT and ITES companies.'
  },
  {
    title: 'Manufacturing',
    path: '/industries/manufacturing',
    type: 'page',
    description: 'Solutions for manufacturing businesses.'
  },
  {
    title: 'Retail & Logistics',
    path: '/industries/retail-logistics',
    type: 'page',
    description: 'Solutions for retail and logistics industries.'
  },
  
  // Service pages
  {
    title: 'Data & Analytics',
    path: '/services/data-analytics',
    type: 'service',
    description: 'Transform your data into actionable insights.'
  },
  {
    title: 'Consulting',
    path: '/services/consulting',
    type: 'service',
    description: 'Strategic IT, AI, and Data consulting services.'
  },
  {
    title: 'Enterprise Applications',
    path: '/services/enterprise-applications',
    type: 'service',
    description: 'ERP and business applications solutions.'
  },
  {
    title: 'Intelligent Automation & AI',
    path: '/services/automation-ai',
    type: 'service',
    description: 'AI and automation for enhanced efficiency.'
  },
  {
    title: 'Business Process Outsourcing',
    path: '/services/bpo',
    type: 'service',
    description: 'Comprehensive business process outsourcing services.'
  },
  {
    title: 'Intelligent Marketing',
    path: '/services/marketing',
    type: 'service',
    description: 'Strategic marketing services for digital growth.'
  },
  
  // Consulting sub-pages
  {
    title: 'IT Strategy',
    path: '/services/consulting/it-strategy',
    type: 'service',
    description: 'Strategic IT planning for business growth.'
  },
  {
    title: 'AI Strategy',
    path: '/services/consulting/ai-strategy',
    type: 'service',
    description: 'AI strategy development and implementation.'
  },
  {
    title: 'Data Strategy',
    path: '/services/consulting/data-strategy',
    type: 'service',
    description: 'Comprehensive data strategy planning.'
  },
  {
    title: 'Outsourcing & Vendor Assessment',
    path: '/services/consulting/outsourcing-assessment',
    type: 'service',
    description: 'Strategic outsourcing planning and vendor assessment.'
  },
  {
    title: 'ERP Assessment',
    path: '/services/consulting/erp-assessment',
    type: 'service',
    description: 'Evaluation of ERP systems and implementation planning.'
  },
  
  // Enterprise Applications sub-pages
  {
    title: 'SAP Solutions',
    path: '/services/enterprise-applications/sap',
    type: 'service',
    description: 'Comprehensive SAP implementation and support services.'
  },
  {
    title: 'Odoo Solutions',
    path: '/services/enterprise-applications/odoo',
    type: 'service',
    description: 'Odoo implementation and customization services.'
  },
  {
    title: 'Microsoft Solutions',
    path: '/services/enterprise-applications/microsoft',
    type: 'service',
    description: 'Microsoft Dynamics and other Microsoft business applications.'
  },
  
  // Data & Analytics sub-pages
  {
    title: 'Data Management',
    path: '/services/data-analytics/data-management',
    type: 'service',
    description: 'Comprehensive data management solutions.'
  },
  {
    title: 'Data Governance',
    path: '/services/data-analytics/data-governance',
    type: 'service',
    description: 'Establishing robust data governance frameworks.'
  },
  {
    title: 'Data Architecture',
    path: '/services/data-analytics/data-architecture',
    type: 'service',
    description: 'Design and implementation of data architecture.'
  },
  {
    title: 'Data Warehousing/BI',
    path: '/services/data-analytics/data-warehousing',
    type: 'service',
    description: 'Data warehousing and business intelligence solutions.'
  },
  {
    title: 'Data Lake',
    path: '/services/data-analytics/data-lake',
    type: 'service',
    description: 'Modern data lake design and implementation.'
  },
  
  // Automation & AI sub-pages
  {
    title: 'AI/ML',
    path: '/services/automation-ai/ai-ml',
    type: 'service',
    description: 'Artificial intelligence and machine learning solutions.'
  },
  {
    title: 'Generative AI',
    path: '/services/automation-ai/generative-ai',
    type: 'service',
    description: 'Advanced generative AI solutions for business.'
  },
  {
    title: 'Agentic AI',
    path: '/services/automation-ai/agentic-ai',
    type: 'service',
    description: 'Intelligent autonomous agent systems for business automation.'
  },
  
  // BPO sub-pages
  {
    title: 'Technology Outsourcing - Applications',
    path: '/services/bpo/tech-applications',
    type: 'service',
    description: 'Application development and maintenance outsourcing.'
  },
  {
    title: 'Technology Outsourcing - Infrastructure',
    path: '/services/bpo/tech-infrastructure',
    type: 'service',
    description: 'IT infrastructure management and support outsourcing.'
  },
  {
    title: 'Process Outsourcing - HRMS & Payroll',
    path: '/services/bpo/process-hrms',
    type: 'service',
    description: 'Human resources and payroll process outsourcing.'
  },
  
  // Marketing sub-pages
  {
    title: 'Digital Marketing',
    path: '/services/marketing/digital-marketing',
    type: 'service',
    description: 'Comprehensive digital marketing services.'
  },
  {
    title: 'Content Strategy',
    path: '/services/marketing/content-strategy',
    type: 'service',
    description: 'Strategic content planning and development.'
  },
  {
    title: 'Analytics & Insights',
    path: '/services/marketing/analytics',
    type: 'service',
    description: 'Marketing analytics and data-driven insights.'
  },
  
  // Approach pages
  {
    title: 'Digital Transformation',
    path: '/approach/digital-transformation',
    type: 'page',
    description: 'Our approach to digital transformation.'
  },
  {
    title: 'Strategy Methodology',
    path: '/approach/strategy-methodology',
    type: 'page',
    description: 'Our strategic planning methodology.'
  },
  {
    title: 'Implementation Methodology',
    path: '/approach/implementation-methodology',
    type: 'page',
    description: 'Our approach to successful implementation.'
  },
  
  // Insights pages
  {
    title: 'Blog',
    path: '/insights/blog',
    type: 'page',
    description: 'Latest insights, articles, and updates.'
  },
  {
    title: 'Case Studies',
    path: '/insights/case-studies',
    type: 'page',
    description: 'Real-world implementation success stories.'
  },
  {
    title: 'Whitepapers',
    path: '/insights/whitepapers',
    type: 'page',
    description: 'In-depth research and industry insights.'
  }
];

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('query');
  
  if (!query) {
    return NextResponse.json(
      { error: 'Search query is required' },
      { status: 400 }
    );
  }
  
  try {
    // Placeholder for now - will eventually connect to WordPress API
    // Simulating a search response until WordPress integration is complete
    const mockResults = [
      {
        title: 'Search result placeholder',
        path: '/placeholder-path',
        type: 'page',
        description: ''
      }
    ];
    
    // Once WordPress integration is complete, replace with:
    // const results = await searchContent(query);
    
    return NextResponse.json({ results: mockResults });
  } catch (error) {
    console.error('Search error:', error);
    return NextResponse.json(
      { error: 'Failed to perform search' },
      { status: 500 }
    );
  }
} 