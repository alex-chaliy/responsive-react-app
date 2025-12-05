'use client';
import { useState } from 'react';
import './theme-switcher.scss';
import cn from 'classnames';
import Image from 'next/image';

export default function ThemeSwitcher(props: any) {
  const { className } = { ...props };
  const [cbChecked, setCbChecked] = useState(true);
  const classNames = cn('theme-switcher', className, { 'theme-night': !cbChecked });

  return (
    <div
      className={classNames}
      onClick={() => {
        toggleCheckbox();
      }}
    >
      <input
        className="checkbox"
        type="checkbox"
        name="theme-switch-checkbox"
        checked={cbChecked}
        onChange={() => {
          handleChackboxChange();
        }}
      />
      <span className="more-pseudo"></span>
      <div className="sunny-moon-element">
        <div className="img-wrap">
          <Image
            className="sunny-moon-image"
            src="/svg/sunny-moon-sprite.svg"
            alt="theme switch"
            width="12"
            height="34"
          />
        </div>
      </div>
    </div>
  );

  function toggleCheckbox() {
    setCbChecked(!cbChecked);
  }

  function handleChackboxChange() {
    console.log('checkbox toggled');
  }
}
