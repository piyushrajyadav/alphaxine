'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  prefix?: string;
}

const stats: StatItem[] = [
  {
    value: 95,
    suffix: '+',
    //prefix: '+',
    label: 'Customer Retaintions',
  },
  {
    value: 92,
    suffix: '+',
    label: 'Ontime Delivery',
  },
  {
    value: 98,
    suffix: '+',
    label: 'Quality',
  },
  {
    value: 97,
    suffix: '+',
    label: 'Customer Satisfaction',
  },
];

const Counter = ({ value, duration = 2, suffix = '', prefix = '' }: { value: number; duration?: number; suffix?: string; prefix?: string }) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(nodeRef, { once: true, amount: 1 });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const incrementTime = (duration * 1000) / end;
    const counter = setInterval(() => {
      start += 1;
      setCount(Math.min(start, end));
      if (start >= end) clearInterval(counter);
    }, incrementTime);

    return () => clearInterval(counter);
  }, [isInView, value, duration]);

  return (
    <div ref={nodeRef} className="text-5xl md:text-6xl font-bold">
      {prefix}{Math.floor(count) === count ? count : count.toFixed(1)}{suffix}
    </div>
  );
};

const StatsTicker = () => {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold"
          >
            alphaxine Key Facts
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-block">
                <div className="mb-2">
                  <Counter
                    value={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                  />
                </div>
                <div className="text-xl text-blue-100 font-medium">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsTicker; 