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
      <span className="rra-hover-layout">
        <span className="rra-hl-more-pseudo" />
      </span>
      <span className="rra-more-pseudo" />
      <BurgerMenuIcon className="menu-image" />
    </button>
  );
}
