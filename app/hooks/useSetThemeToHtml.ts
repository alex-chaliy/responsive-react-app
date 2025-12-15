import { useMainStore } from '../store/MainStore';
import { useEffect } from 'react';

export function useSetThemeToHtml(): void {
  const currentTheme = useMainStore((store) => store.theme);
  useEffect(() => {
    setThemeToHtml();
  }, [currentTheme]);

  function setThemeToHtml(): void {
    // localStorage and document are not available on server-side, because they are browser features
    // so we need to check if we can use them
    // if(window?.document) ...

    if (currentTheme === 'light') {
      document.body.classList.remove('theme-dark');
    } else {
      document.body.classList.remove('theme-light');
    }
    document.body.classList.add(`theme-${currentTheme}`);
  }
}
