'use client';
import { useSetThemeToHtml } from '../hooks/useSetThemeToHtml';
import Header from '../layouts/header/Header';

export default function PagesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  useSetThemeToHtml();

  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
