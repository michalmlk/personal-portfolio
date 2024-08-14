import { ReactNode } from 'react';
import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/app/components/ui/navbar/Navbar';
import PageFooter from '@/app/components/ui/page-footer/PageFooter';
import SocialMediaComponent from '@/app/components/social-media-component/SocialMediaComponent';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Michał Melka',
    description: 'Creative front-end dev',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <Navbar />
                {children}
                <PageFooter>
                    <SocialMediaComponent />
                </PageFooter>
            </body>
        </html>
    );
}
