import './burger-menu-button.scss';
import cn from 'classnames';
import BurgerMenuIcon from '../../svg/BurgerMenuIcon';

interface BurgerMenuButtonProps {
  className?: string;
}

export default function BurgerMenuButton(props: BurgerMenuButtonProps) {
  const { className } = { ...props };
  const classNames = cn('burger-menu-button', className);
  return (
    <button className={classNames}>
      <span className="hover-layout">
        <span className="hl-more-pseudo" />
      </span>
      <span className="more-pseudo" />
      <BurgerMenuIcon className="menu-image" />
    </button>
  );
}
