'use client';

import React from 'react';
import ServicePageTemplate from '@/app/components/ServicePageTemplate';

const AgenticAIPage = () => {
  const pageData = {
    title: 'Agentic AI Services',
    subtitle: 'Enterprise Autonomous AI Agents',
    description: 'Implement intelligent, autonomous AI agents that can understand, reason, and complete complex tasks with minimal human intervention, transforming workflows and enabling new levels of automation.',
    heroImage: '/images/services/agentic-ai-hero.jpg',
    features: [
      {
        title: 'Agentic AI Strategy',
        description: 'Development of comprehensive agentic AI strategies and implementation roadmaps aligned with your business objectives.',
        icon: '/images/icons/strategy.svg'
      },
      {
        title: 'Autonomous Agent Development',
        description: 'Design and implementation of AI agents that can autonomously complete complex tasks and workflows.',
        icon: '/images/icons/agent.svg'
      },
      {
        title: 'Multi-Agent Systems',
        description: 'Implementation of coordinated multi-agent systems that can collaborate to solve complex problems.',
        icon: '/images/icons/multi-agent.svg'
      },
      {
        title: 'Tool-Using AI Agents',
        description: 'Development of AI agents that can effectively use various tools and APIs to complete tasks and access information.',
        icon: '/images/icons/tools.svg'
      },
      {
        title: 'AI Agent Orchestration',
        description: 'Creation of frameworks to coordinate, monitor, and manage multiple AI agents within your business processes.',
        icon: '/images/icons/orchestration.svg'
      },
      {
        title: 'AI Agent Governance',
        description: 'Establishment of governance frameworks to ensure responsible, safe, and effective deployment of autonomous AI agents.',
        icon: '/images/icons/governance.svg'
      }
    ],
    benefits: [
      {
        title: 'Advanced Automation',
        description: 'Automate complex, multi-step processes that require reasoning, decision-making, and adaptation.'
      },
      {
        title: 'Enhanced Efficiency',
        description: 'Execute workflows faster and with greater accuracy than traditional automation approaches.'
      },
      {
        title: 'Cognitive Augmentation',
        description: 'Augment human capabilities with AI agents that can handle cognitive tasks and provide intelligent assistance.'
      },
      {
        title: 'Adaptive Problem Solving',
        description: 'Leverage AI agents that can adapt to new situations and solve problems with minimal human intervention.'
      },
      {
        title: 'Scalable Intelligence',
        description: 'Deploy multiple AI agents that can work collaboratively to handle complex tasks at scale.'
      },
      {
        title: 'Competitive Differentiation',
        description: 'Gain competitive advantage through cutting-edge AI capabilities that transform business operations.'
      }
    ],
    cta: {
      title: 'Ready to Transform Your Business with Agentic AI?',
      description: 'Connect with our AI experts to discuss how we can help you implement autonomous AI agents for your specific business needs.',
      buttonText: 'Schedule a Consultation',
      buttonLink: '/contact'
    }
  };

  return <ServicePageTemplate {...pageData} />;
};

export default AgenticAIPage; 

