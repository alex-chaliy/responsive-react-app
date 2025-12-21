import type { Metadata, Viewport } from 'next';
import { Roboto, Montserrat } from 'next/font/google';
import './globals.scss';
import LiquidGlassDistortion from './components/svg/LiquidGlassDistortion';

const robotoFont = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
});

const montserratFont = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'React Next App | Glass UI',
  description: 'https://github.com/alex-chaliy/responsive-react-app',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
  minimumScale: 1.0,
  maximumScale: 1.0,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoFont.variable} ${montserratFont.variable} antialiased`}
      >
        {children}

        <LiquidGlassDistortion />
      </body>
    </html>
  );
}
