'use client';

import React from 'react';
import ServicePageTemplate from '@/app/components/ServicePageTemplate';

const GenerativeAIPage = () => {
  const pageData = {
    title: 'Generative AI Services',
    subtitle: 'Enterprise Generative AI Solutions',
    description: 'Harness the transformative power of generative AI to create content, automate processes, enhance creativity, and drive innovation across your organization.',
    heroImage: '/images/services/generative-ai-hero.jpg',
    features: [
      {
        title: 'Generative AI Strategy',
        description: 'Development of comprehensive generative AI strategies aligned with your business objectives and use cases.',
        icon: '/images/icons/strategy.svg'
      },
      {
        title: 'Large Language Model Implementation',
        description: 'Deployment and fine-tuning of large language models (LLMs) for specific business domains and applications.',
        icon: '/images/icons/llm.svg'
      },
      {
        title: 'Generative AI Applications',
        description: 'Development of custom applications leveraging generative AI for content creation, summarization, and automation.',
        icon: '/images/icons/application.svg'
      },
      {
        title: 'AI-Generated Content Solutions',
        description: 'Implementation of AI systems for generating text, images, audio, and other content types for marketing, product, and support functions.',
        icon: '/images/icons/content.svg'
      },
      {
        title: 'Responsible AI Framework',
        description: 'Establishment of ethical guidelines and governance frameworks for responsible generative AI implementation.',
        icon: '/images/icons/ethics.svg'
      },
      {
        title: 'Generative AI Integration',
        description: 'Seamless integration of generative AI capabilities into existing business applications and workflows.',
        icon: '/images/icons/integration.svg'
      }
    ],
    benefits: [
      {
        title: 'Enhanced Productivity',
        description: 'Automate content creation and routine tasks, allowing your team to focus on high-value activities.'
      },
      {
        title: 'Accelerated Innovation',
        description: 'Generate new ideas, designs, and approaches rapidly through AI-assisted creative processes.'
      },
      {
        title: 'Personalization at Scale',
        description: 'Create personalized content, recommendations, and experiences for each customer or user.'
      },
      {
        title: 'Improved Customer Support',
        description: 'Enhance customer service with AI-powered assistance, response generation, and knowledge management.'
      },
      {
        title: 'Cost Efficiency',
        description: 'Reduce content production costs and time-to-market through automated generation capabilities.'
      },
      {
        title: 'Competitive Advantage',
        description: 'Differentiate your products and services with embedded generative AI capabilities and features.'
      }
    ],
    cta: {
      title: 'Ready to Transform Your Business with Generative AI?',
      description: 'Connect with our AI experts to discuss how we can help you leverage generative AI for your specific business needs.',
      buttonText: 'Schedule a Consultation',
      buttonLink: '/contact'
    }
  };

  return <ServicePageTemplate {...pageData} />;
};

export default GenerativeAIPage; 

