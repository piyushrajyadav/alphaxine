import { getJobBySlug, getAllJobSlugs } from '@/lib/wordpress';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import BackgroundFix from '@/app/components/Layout/BackgroundFix';

export async function generateStaticParams() {
  const slugs = await getAllJobSlugs();
  return slugs;
}

export default async function JobPage({ params }: { params: { slug: string } }) {
  try {
    const job = await getJobBySlug(params.slug);

    return (
      <BackgroundFix>
        <div>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-indigo-900 to-purple-800 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{job.title.rendered}</h1>
              <div className="flex flex-wrap gap-4 text-lg">
                <div className="flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {job.acf.location}
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {job.acf.type}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Job Details */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8">
                {/* Overview */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">Overview</h2>
                  <div className="prose max-w-none text-gray-600">
                    {job.acf.description}
                  </div>
                </div>

                {/* Requirements */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">Requirements</h2>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {job.acf.requirements.map((req: string, index: number) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>

                {/* Responsibilities */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">Responsibilities</h2>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {job.acf.responsibilities.map((resp: string, index: number) => (
                      <li key={index}>{resp}</li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">Benefits</h2>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {job.acf.benefits.map((benefit: string, index: number) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </div>

                {/* Application */}
                <div className="text-center">
                  <Link
                    href={`/careers/${params.slug}/apply`}
                    className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
                  >
                    Apply for this Position
                  </Link>
                  <p className="mt-4 text-gray-500">
                    or email your resume to{' '}
                    <a href="mailto:careers@alphaxine.com" className="text-indigo-600 hover:text-indigo-700">
                      careers@alphaxine.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Back to Jobs */}
              <div className="mt-8 text-center">
                <Link
                  href="/careers"
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Back to All Positions
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      </BackgroundFix>
    );
  } catch (error) {
    notFound();
  }
} 