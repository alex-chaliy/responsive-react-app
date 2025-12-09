'use client';

import './theme-switcher.scss';
import cn from 'classnames';
import Image from 'next/image';
import SunnyMoonSprite from '../svg/SunnyMoonSprite';

import { useMainStore } from '../../store/MainStore';

interface ThemeSwitcherProps {
  className?: string;
}

export default function ThemeSwitcher(props: ThemeSwitcherProps) {
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
      <span className="more-pseudo"></span>
      <div className="sunny-moon-element">
        <div className="img-wrap">
          {/* <Image
            
            src="/svg/sunny-moon-sprite.svg"
            alt="theme switch"
            width={12}
            height={34}
          /> */}
          <SunnyMoonSprite className="tsw-sunny-moon-sprite" width={15} height={36} />
        </div>
      </div>
    </div>
  );

  function toggleTheme(): void {
    switchTheme();
  }

  function handleCheckboxChange(): void {
    console.log('checkbox toggled');
  }
}
