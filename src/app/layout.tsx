import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Chirheha 2E Limited (C2E) | Engineering & Asset Integrity Solutions',
  description: 'Indigenous Nigerian engineering, asset integrity, NDT inspection, composite pipeline repairs, and technical solutions firm for oil, gas, and heavy industry.',
  keywords: [
    'Chirheha 2E Limited',
    'C2E Nigeria',
    'Asset Integrity Nigeria',
    'NDT Inspection Eket',
    'Pipeline Composite Repair',
    'Mascoat Thermal Insulation',
    'GSI Tank Gauging',
    'Oil and Gas Engineering Nigeria'
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="bg-white text-slate-800 antialiased selection:bg-brand-orange selection:text-white min-h-screen">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
