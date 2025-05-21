import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import ClientLayout from './components/Layout/ClientLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Alphaxine',
  description: '',
  icons: {
    icon: [
      { url: '/favicon.webp', sizes: 'any' },
      { url: '/image/favicon.webp', type: 'image/webp' }
    ],
    apple: '/image/favicon.webp',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 min-h-screen flex flex-col`}>
        <ClientLayout>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ClientLayout>
      </body>
    </html>
  );
}
