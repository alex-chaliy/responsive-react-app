'use client';

import { useSetThemeToHtml } from './hooks/useSetThemeToHtml';
import Header from './layouts/header/Header';
import MainPage from './pages/main/page';

export default function Home() {
  useSetThemeToHtml();

  return (
    <div className="rra-page-wrap">
      <main className="page">
        <Header />
        <MainPage />
      </main>
    </div>
  );
}
