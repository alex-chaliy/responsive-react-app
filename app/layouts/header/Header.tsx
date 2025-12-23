import './header.scss';
import TextButton from '../../components/buttons/text-button/TextButton';
import BurgerMenuButton from '../../components/buttons/burger-menu-button/BurgerMenuButton';
import ThemeSwitcher from '../../components/theme-switcher/ThemeSwitcher';
import Logo from '../../components/logo/Logo';

export default function Header() {
  return (
    <div className="header-layout">
      <header className="header">
        <div className="logo-wrap">
          <Logo className="header-logo" />
        </div>
        <div className="nav-wrap">

          <ThemeSwitcher className="header-theme-switcher" />

          {/* <TextButton
            className="header-text-button"
            title={'PG'}
            mode={'link'}
            linkHref={'/pages/playground'}
          /> */}

          <TextButton
            className="header-text-button"
            title={'Sign in'}
            mode={'link'}
            linkHref={'/pages/sign-in'}
          />
          <BurgerMenuButton className="header-menu-button" />
        </div>
      </header>
    </div>
  );
}
