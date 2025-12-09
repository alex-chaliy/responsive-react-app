'use client';

import Header from './layouts/header/Header';
import MainPage from './pages/main/MainPage';

import { useMainStore } from './store/MainStore';
import { useEffect } from 'react';

export default function Home() {
  const currentTheme = useMainStore((store) => store.theme);

  useEffect(() => {
    setThemeToHtml();
  }, [currentTheme]);

  return (
    <main className="page">
      <Header />
      <MainPage />
    </main>
  );

  function setThemeToHtml(): void {
    // localStorage and document are not available on server-side, because they are browser features
    // so we need to check if we can use them
    if (currentTheme === 'light') {
      document.body.classList.remove('theme-dark');
    } else {
      document.body.classList.remove('theme-light');
    }
    document.body.classList.add(`theme-${currentTheme}`);
  }
}
