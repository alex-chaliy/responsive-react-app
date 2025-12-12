import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import type {} from '@redux-devtools/extension'; // required for devtools typing
import { ThemesType } from '../models/Theme.model';
import { DEFAULT_THEME } from '../constants/theme.constants';

interface MainState {
  theme: ThemesType;
  switchTheme: () => void;
  setTheme: (currentTheme: ThemesType) => void;
}

export const useMainStore = create<MainState>()(
  devtools(
    // persist function automatically synchronizes your store with localStorage
    persist(
      (set) => ({
        theme: DEFAULT_THEME,
        switchTheme: () =>
          set((state) => ({
            theme: state.theme === 'light' ? 'dark' : 'light',
          })),
          
        setTheme: (currentTheme: ThemesType) =>
          set(() => ({
            theme: currentTheme
          })),
      }),
      {
        name: 'main-storage',
      }
    )
  )
);
