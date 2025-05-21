import BackgroundFix from '@/app/components/Layout/BackgroundFix';
export default function StrategyMethodology() {
  return (
      <BackgroundFix>
      <div className="force-gray-bg">
      {/* Hero Section */}
      <section className="relative text-black py-20 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-red-600">
              Strategy Methodology
            </h1>
            <div className="h-6 bg-gray-200 rounded w-full max-w-3xl mb-8"></div>
          </div>
        </div>
      </section>

      {/* Methodology Steps */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/3">
                  <div className="bg-red-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto">
                    <span className="text-3xl font-bold text-red-600">1</span>
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-2xl font-bold mb-4 text-red-600">
                    Discovery & Assessment
                  </h3>
                  <div className="h-6 bg-gray-200 rounded w-full mb-4"></div>
                  <div className="space-y-2">
                    <div className="h-5 bg-gray-200 rounded w-full"></div>
                    <div className="h-5 bg-gray-200 rounded w-full"></div>
                    <div className="h-5 bg-gray-200 rounded w-full"></div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/3">
                  <div className="bg-red-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto">
                    <span className="text-3xl font-bold text-red-600">2</span>
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-2xl font-bold mb-4 text-red-600">
                    Strategy Development
                  </h3>
                  <div className="h-6 bg-gray-200 rounded w-full mb-4"></div>
                  <div className="space-y-2">
                    <div className="h-5 bg-gray-200 rounded w-full"></div>
                    <div className="h-5 bg-gray-200 rounded w-full"></div>
                    <div className="h-5 bg-gray-200 rounded w-full"></div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/3">
                  <div className="bg-red-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto">
                    <span className="text-3xl font-bold text-red-600">3</span>
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-2xl font-bold mb-4 text-red-600">
                    Implementation Planning
                  </h3>
                  <div className="h-6 bg-gray-200 rounded w-full mb-4"></div>
                  <div className="space-y-2">
                    <div className="h-5 bg-gray-200 rounded w-full"></div>
                    <div className="h-5 bg-gray-200 rounded w-full"></div>
                    <div className="h-5 bg-gray-200 rounded w-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-red-600">
            Benefits of Our Strategy Methodology
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="rounded-lg shadow-md p-6">
              <div className="text-red-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-red-600">Proven Results</h3>
              <div className="h-16 bg-gray-200 rounded w-full"></div>
            </div>
            <div className="rounded-lg shadow-md p-6">
              <div className="text-red-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-red-600">Accelerated Delivery</h3>
              <div className="h-16 bg-gray-200 rounded w-full"></div>
            </div>
            <div className="rounded-lg shadow-md p-6">
              <div className="text-red-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-red-600">Risk Mitigation</h3>
              <div className="h-16 bg-gray-200 rounded w-full"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
      </BackgroundFix>
    );
} 












