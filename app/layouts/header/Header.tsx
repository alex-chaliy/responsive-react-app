import './header.scss';
import TextButton from '../../components/buttons/text-button/TextButton';
import BurgerMenuButton from '../../components/buttons/burger-menu-button/BurgerMenuButton';
import ThemeSwitcher from '../../components/theme-switcher/ThemeSwitcher';
import Logo from '../../components/logo/Logo';

// gsap imports
import { memo, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { animateHeaderOnScroll } from './animations';

export function Header() {
  const headerAnimationsContainer = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const isAnimation = document.getElementById('rra-main-screen');
      isAnimation && animateHeaderOnScroll();
    },
    {
      dependencies: [],
      scope: headerAnimationsContainer,
      revertOnUpdate: true,
    }
  );
  return (
    <div className="header-layout" ref={headerAnimationsContainer}>
      <header className="header">
        <div className="logo-wrap">
          <Logo className="header-logo" mode="link" />
        </div>
        <div className="nav-wrap">
          <ThemeSwitcher className="header-theme-switcher" />

          {/* <TextButton
            className="header-text-button"
            title={'PG'}
            mode={'link'}
            linkHref={'/pages/playground'}
          /> */}

          <TextButton className="header-text-button" title={'Sign in'} mode={'link'} linkHref={'/pages/sign-in'} />
          <BurgerMenuButton className="header-menu-button" />
        </div>
      </header>
    </div>
  );
}

export default memo(Header);
