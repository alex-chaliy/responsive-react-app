import './burger-menu-button.scss';
import cn from 'classnames';
import BurgerMenuIcon from '../../svg/BurgerMenuIcon';
import { memo } from 'react';

interface BurgerMenuButtonProps {
  className?: string;
}

// TODO remove this component
// and add IconButton component or extend TextButton features
// to make a general reusable icon-button component
// and don't copypaste a lot of code to make a new icon-button for a particular case

export function BurgerMenuButton(props: BurgerMenuButtonProps) {
  const { className } = { ...props };
  const classNames = cn('burger-menu-button', className);
  // console.log('BurgerMenuButton rendered');
  return (
    <button className={classNames}>
      <span className="rra-hover-layout">
        <span className="rra-hl-more-pseudo" />
      </span>
      <span className="rra-more-pseudo" />
      <BurgerMenuIcon className="menu-image" />
    </button>
  );
}

// BurgerMenuButton re-renders when ThmeSwitcher changed
// to prevent unnecessary re-renders use function memo
// function memo check if any props were changed in the current component
// and re-renders it only if any props were changed
// otherwise  skip rendering
export default memo(BurgerMenuButton);
