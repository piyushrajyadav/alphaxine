import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Strategy Consulting | AlphaXine',
  description: 'Our AI strategy consulting services help organizations leverage artificial intelligence to drive innovation and business growth.',
};

export default function AIStrategyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 