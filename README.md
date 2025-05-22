# Alphaxine NextJS Website

This is a placeholder website built with Next.js, designed to retain structure and design elements while removing content for future WordPress integration.

## Project Overview

This project is a website for Alphaxine, a technology consulting company. The site is built with Next.js and focuses on preserving the structure, layout, and interactive design elements while replacing actual content with placeholder elements.

### Key Features

- **Responsive Layout**: Built with TailwindCSS for responsive design
- **Placeholder Content**: Content replaced with gray boxes to maintain visual structure
- **Interactive Elements**: Hover effects, transitions, and animations preserved
- **SVG Icons**: Using inline SVG icons for better performance
- **Service & Industry Pages**: Structured pages for different services and industry verticals

## Project Structure

```
alphaxine-nextjs/
├── app/                        # Next.js app directory
│   ├── components/             # Reusable UI components
│   │   ├── IndustryPageTemplate.tsx  # Template for industry pages
│   │   ├── Layout/             # Layout components
│   │   └── UI/                 # UI elements
│   ├── industries/             # Industry-specific pages
│   │   ├── healthcare-education/
│   │   ├── it-ites/
│   │   ├── manufacturing/
│   │   └── retail-logistics/
│   ├── methodology/            # Methodology pages
│   │   ├── digital-transformation/
│   │   ├── strategy/
│   │   └── implementation/
│   └── services/               # Service offering pages
│       ├── consulting/
│       ├── enterprise-applications/
│       ├── data-analytics/
│       ├── automation-ai/
│       ├── business-process-outsourcing/
│       └── intelligent-marketing/
├── public/                     # Static assets
└── styles/                     # Global styles
```

## Page Types

### Industry Pages

- **Healthcare & Education**: Healthcare systems, learning systems, telemedicine, analytics, compliance
- **IT/ITES**: Digital transformation, cloud solutions, DevOps, cybersecurity, AI & analytics
- **Manufacturing**: Smart manufacturing, predictive maintenance, supply chain, quality management
- **Retail & Logistics**: Omnichannel, inventory, supply chain, route optimization

### Service Pages

- **Consulting**: IT Strategy, AI Strategy, Data Strategy, ERP Assessment
- **Enterprise Applications**: SAP Solutions, Odoo Implementation, Microsoft Solutions
- **Data & Analytics**: Data Management, Data Governance, Data Architecture, Data Warehousing/BI, Data Lake
- **Intelligent Automation & AI**: AI & Machine Learning, Generative AI, Agentic AI
- **Business Process Outsourcing**: IT Services, Back Office Operations, Customer Support, Finance & Accounting, HR, Supply Chain Management
- **Intelligent Marketing**: Digital Marketing, Content Marketing, Marketing Automation, Social Media Marketing, SEO & SEM, Analytics

### Methodology Pages

- Digital Transformation
- Strategy Methodology
- Implementation Methodology

## Design Features

- **Color Scheme**: Red (#ef4444) primary color with complementary colors for different sections
- **Typography**: Modern sans-serif font system with clear hierarchy
- **Components**: Card-based design for services and solutions
- **Icons**: Heroicons SVG library with customized color themes
- **Animations**: Subtle transitions and hover effects using Framer Motion

## WordPress Integration Notes

This NextJS site is designed to be a temporary placeholder for a WordPress site. Notable integration points:

1. All page content is replaced with gray placeholders
2. Page structure and navigation are preserved
3. Interactive elements remain functional
4. Service cards maintain correct layout and hover effects
5. Images are replaced with either placeholders or SVG icons

## Development

This project uses:

- Next.js 13+ (App Router)
- TailwindCSS
- Framer Motion for animations
- TypeScript
- Heroicons SVG library
- email JS

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Run the development server:
   ```
   npm run dev
   ```
4. Visit `http://localhost:3000` to view the site

## Deployment

The site can be deployed to any hosting service that supports Next.js applications, such as Vercel or Netlify.

---

© 2025 Alphaxine. All rights reserved.
# alphaxine
