'use client';

import './theme-switcher.scss';
import cn from 'classnames';
import SunnyMoonSprite from '../svg/SunnyMoonSprite';

import { useMainStore } from '../../store/MainStore';
import { memo } from 'react';

interface ThemeSwitcherProps {
  className?: string;
}

export function ThemeSwitcher(props: ThemeSwitcherProps) {
  const currentTheme = useMainStore((s) => s.theme);
  const switchTheme = useMainStore((state) => state.switchTheme);

  const { className } = { ...props };
  const classNames = cn('theme-switcher', className, {
    'tsw-mode-night': currentTheme === 'dark',
  });

  return (
    <div
      className={classNames}
      onClick={() => {
        toggleTheme();
      }}
    >
      <input
        className="checkbox"
        type="checkbox"
        name="theme-switch-checkbox"
        checked={currentTheme === 'light'}
        onChange={() => {
          handleCheckboxChange();
        }}
      />
      <span className="rra-more-pseudo"></span>
      <div className="sunny-moon-element">
        <div className="img-wrap">
          <SunnyMoonSprite
            className="tsw-sunny-moon-sprite"
            width={15}
            height={36}
          />
        </div>
      </div>
    </div>
  );

  function toggleTheme(): void {
    // console.log('toggleTheme() called');
    switchTheme();
  }

  function handleCheckboxChange(): void {
    console.log('checkbox toggled');
  }
}

export default memo(ThemeSwitcher);
