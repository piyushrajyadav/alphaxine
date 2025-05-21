import { Metadata } from 'next';
import { getPage } from '@/lib/wordpress';
import PageHero from '@/app/components/UI/PageHero';
import ContentRenderer from '@/app/components/UI/ContentRenderer';
import ServiceSection from '@/app/components/UI/ServiceSection';
import ServiceCard from '@/app/components/UI/ServiceCard';
import BackgroundFix from '@/app/components/Layout/BackgroundFix';
import PageContent from '@/app/components/UI/PageContent';

export const metadata: Metadata = {
  title: 'Our Services | AlphaXine',
  description: '',
};

export default async function ServicesPage() {
  const pageData = await getPage('services');
  
  if (!pageData) {
    return (
      <BackgroundFix>
        <div className="min-h-screen bg-gray-50">
          <PageHero 
            title="Our Services"
            subtitle=""
          />
          
          <section className="container mx-auto py-16 px-4 bg-gray-50">
            <div className="max-w-6xl mx-auto content-card">
              <h2 className="text-3xl font-bold text-red-600 mb-10">Our Services</h2>
              
              {/* Using new components for the Consulting section */}
              <ServiceSection title="Consulting Services">
                <ServiceCard 
                  title="IT Strategy" 
                  href="/services/consulting/it-strategy" 
                  icon="/image/icons/strategy.svg"
                />
                <ServiceCard 
                  title="AI Strategy" 
                  href="/services/consulting/ai-strategy" 
                  icon="/image/icons/ai.svg"
                />
                <ServiceCard 
                  title="Data Strategy" 
                  href="/services/consulting/data-strategy" 
                  icon="/image/icons/data.svg"
                />
                <ServiceCard 
                  title="ERP Assessment" 
                  href="/services/consulting/erp-assessment" 
                  icon="/image/icons/erp.svg"
                />
                <ServiceCard 
                  title="Outsourcing Assessment" 
                  href="/services/consulting/outsourcing-assessment" 
                  icon="/image/icons/outsourcing.svg"
                />
              </ServiceSection>
              
              {/* Enterprise Applications */}
              <ServiceSection title="Enterprise Applications">
                <ServiceCard 
                  title="SAP Solutions" 
                  href="/services/enterprise-applications/sap" 
                  icon="/image/icons/sap.svg"
                />
              
                <ServiceCard 
                  title="Microsoft Dynamics" 
                  href="/services/enterprise-applications/microsoft-dynamics" 
                  icon="/image/icons/dynamics.svg"
                />
              
                <ServiceCard 
                  title="Custom Development" 
                  href="/services/enterprise-applications/custom-development" 
                  icon="/image/icons/development.svg"
                />
              </ServiceSection>
              
              {/* Data & Analytics */}
              <ServiceSection title="Data & Analytics">
                <ServiceCard 
                  title="Data Management" 
                  href="/services/data-analytics/data-management" 
                  icon="/image/icons/data-management.svg"
                />
                
                <ServiceCard 
                  title="Business Intelligence" 
                  href="/services/data-analytics/business-intelligence" 
                  icon="/image/icons/business-intelligence.svg"
                />
                
                <ServiceCard 
                  title="Data Engineering" 
                  href="/services/data-analytics/data-engineering" 
                  icon="/image/icons/data-engineering.svg"
                />
              </ServiceSection>
              
              {/* Intelligent Automation & AI */}
              <ServiceSection title="Intelligent Automation & AI">
                <ServiceCard 
                  title="AI & Machine Learning" 
                  href="/services/automation-ai/ai-ml" 
                  icon="/image/icons/ai-ml.svg"
                />
                
                <ServiceCard 
                  title="Robotic Process Automation" 
                  href="/services/automation-ai/rpa" 
                  icon="/image/icons/rpa.svg"
                />
                
                <ServiceCard 
                  title="Cognitive Solutions" 
                  href="/services/automation-ai/cognitive-solutions" 
                  icon="/image/icons/cognitive-solutions.svg"
                />
              </ServiceSection>
              
              {/* Business Process Outsourcing */}
              <ServiceSection title="Business Process Outsourcing">
                <ServiceCard 
                  title="IT Services" 
                  href="/services/business-process-outsourcing/it-services" 
                  icon="/image/icons/it-services.svg"
                />
                
                <ServiceCard 
                  title="Back Office Operations" 
                  href="/services/business-process-outsourcing/back-office" 
                  icon="/image/icons/back-office.svg"
                />
                
                <ServiceCard 
                  title="Customer Support" 
                  href="/services/business-process-outsourcing/customer-support" 
                  icon="/image/icons/customer-support.svg"
                />
              </ServiceSection>
              
              {/* Intelligent Marketing */}
              <ServiceSection title="Intelligent Marketing">
                <ServiceCard 
                  title="Digital Marketing" 
                  href="/services/intelligent-marketing/digital-marketing" 
                  icon="/image/icons/digital-marketing.svg"
                />
                
                <ServiceCard 
                  title="Content Marketing" 
                  href="/services/intelligent-marketing/content-marketing" 
                  icon="/image/icons/content-marketing.svg"
                />
                
                <ServiceCard 
                  title="Marketing Automation" 
                  href="/services/intelligent-marketing/marketing-automation" 
                  icon="/image/icons/marketing-automation.svg"
                />
              </ServiceSection>
            </div>
          </section>
        </div>
      </BackgroundFix>
    );
  }

  return (
    <BackgroundFix>
      <div className="min-h-screen bg-gray-50">
        <PageHero 
          title={pageData.title.rendered}
          imageUrl={pageData._embedded?.['wp:featuredmedia']?.[0]?.source_url}
        />
      
        <section className="container mx-auto py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto content-card">
            <ContentRenderer content={pageData.content.rendered} />
            
            {/* Consulting Services */}
            <div className="mt-12 pt-8 border-t border-gray-200 mb-16">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">Consulting Services</h3>
              <div className="h-6 bg-gray-200 rounded w-full mb-6"></div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <ServiceCard 
                  title="IT Strategy" 
                  href="/services/consulting/it-strategy" 
                  icon="/image/icons/strategy.svg"
                />
              
                <ServiceCard 
                  title="AI Strategy" 
                  href="/services/consulting/ai-strategy" 
                  icon="/image/icons/ai.svg"
                />
                
                {/* More consulting services links can be added here */}
              </div>
            </div>
            
            {/* Add other service sections as needed */}
          </div>
        </section>
      </div>
    </BackgroundFix>
  );
} 

