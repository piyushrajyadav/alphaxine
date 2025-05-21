'use client';

import React from 'react';
import ServicePageTemplate from '@/app/components/ServicePageTemplate';

const AIMLPage = () => {
  const pageData = {
    title: 'AI & Machine Learning Services',
    subtitle: 'Enterprise AI & ML Solutions',
    description: 'Leverage the power of artificial intelligence and machine learning to transform your business operations, enhance customer experiences, and drive innovation.',
    heroImage: '/images/services/ai-ml-hero.jpg',
    features: [
      {
        title: 'AI Strategy & Roadmap',
        description: 'Development of comprehensive AI strategies and implementation roadmaps aligned with your business objectives.',
        icon: '/images/icons/strategy.svg'
      },
      {
        title: 'Predictive Analytics',
        description: 'Implementation of predictive models to forecast trends, behaviors, and outcomes based on historical data.',
        icon: '/images/icons/predictive.svg'
      },
      {
        title: 'Computer Vision Solutions',
        description: 'Development of image and video analysis systems for object detection, recognition, and classification.',
        icon: '/images/icons/vision.svg'
      },
      {
        title: 'Natural Language Processing',
        description: 'Implementation of NLP solutions for text analysis, sentiment analysis, document classification, and more.',
        icon: '/images/icons/nlp.svg'
      },
      {
        title: 'Machine Learning Ops (MLOps)',
        description: 'Establishment of robust MLOps practices and infrastructure for model deployment, monitoring, and management.',
        icon: '/images/icons/mlops.svg'
      },
      {
        title: 'Custom AI Model Development',
        description: 'Design and implementation of custom machine learning models tailored to your specific business challenges.',
        icon: '/images/icons/model.svg'
      }
    ],
    benefits: [
      {
        title: 'Enhanced Decision Making',
        description: 'Leverage data-driven insights and predictions to make more informed business decisions.'
      },
      {
        title: 'Operational Efficiency',
        description: 'Automate complex processes and tasks to reduce costs and improve operational efficiency.'
      },
      {
        title: 'Improved Customer Experience',
        description: 'Deliver personalized, intelligent customer experiences through AI-powered solutions.'
      },
      {
        title: 'Competitive Advantage',
        description: 'Differentiate your products and services with embedded AI capabilities and intelligent features.'
      },
      {
        title: 'Innovation Acceleration',
        description: 'Expedite the discovery of new insights, patterns, and opportunities through advanced analytics.'
      },
      {
        title: 'Risk Reduction',
        description: 'Identify potential issues, fraud, and anomalies before they impact your business.'
      }
    ],
    cta: {
      title: 'Ready to Transform Your Business with AI?',
      description: 'Connect with our AI experts to discuss how we can help you leverage artificial intelligence and machine learning for your business.',
      buttonText: 'Schedule a Consultation',
      buttonLink: '/contact'
    }
  };

  return <ServicePageTemplate {...pageData} />;
};

export default AIMLPage; 

