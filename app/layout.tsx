import type { Metadata } from 'next';
import { Roboto, Montserrat } from 'next/font/google';
import './globals.scss';

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
      </body>
    </html>
  );
}
