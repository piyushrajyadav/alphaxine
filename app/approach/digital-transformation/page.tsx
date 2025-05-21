'use client';

import React from 'react';
import BackgroundFix from '@/app/components/Layout/BackgroundFix';

export default function DigitalTransformation() {
  return (
    <BackgroundFix>
      <div className="force-gray-bg">
        {/* Hero Section */}
        <section className="relative text-black py-20 border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Digital Transformation
              </h1>
              <div className="h-6 bg-gray-200 rounded w-full max-w-3xl mb-8"></div>
            </div>
          </div>
        </section>

        {/* Framework Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Our Transformation Framework
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="card-shadow rounded-lg p-6">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-red-600">1</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">Assess</h3>
                <div className="h-20 bg-gray-200 rounded w-full"></div>
              </div>
              <div className="card-shadow rounded-lg p-6">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-red-600">2</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">Design</h3>
                <div className="h-20 bg-gray-200 rounded w-full"></div>
              </div>
              <div className="card-shadow rounded-lg p-6">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-red-600">3</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">Transform</h3>
                <div className="h-20 bg-gray-200 rounded w-full"></div>
              </div>
              <div className="card-shadow rounded-lg p-6">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-red-600">4</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">Optimize</h3>
                <div className="h-20 bg-gray-200 rounded w-full"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Areas Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Key Transformation Areas
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="card-shadow rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Business Process Transformation
                </h3>
                <div className="h-20 bg-gray-200 rounded w-full mb-4"></div>
              </div>
              <div className="card-shadow rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Technology Modernization
                </h3>
                <div className="h-20 bg-gray-200 rounded w-full mb-4"></div>
              </div>
              <div className="card-shadow rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Digital Culture & Skills
                </h3>
                <div className="h-20 bg-gray-200 rounded w-full mb-4"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </BackgroundFix>
  );
} 











