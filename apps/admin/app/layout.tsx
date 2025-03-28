import Providers from '../components/layout/providers';
import { Toaster } from '@repo/ui/components/ui/toaster';
import type { Metadata } from 'next';
import NextTopLoader from 'nextjs-toploader';
import { Inter } from 'next/font/google';
import './globals.css';
import "@repo/ui/globals.css";

// import { auth } from '../auth';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next Shadcn',
  description: 'Basic dashboard with Next.js and Shadcn'
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  // const session = await auth();
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} overflow-hidden`}>
        <NextTopLoader />
        {/* <Providers session={session}> */}
        <Providers >
          <Toaster />
          {children}
        </Providers>
      </body>
    </html>
  );
}
