import './burger-menu-button.scss';
import cn from 'classnames';
import BurgerMenuIcon from '../../svg/BurgerMenuIcon';

export default function BurgerMenuButton(props: any) {
  const { className } = { ...props };
  const classNames = cn('burger-menu-button', className);
  return (
    <button className={classNames}>
      <span className="more-pseudo"></span>
      <BurgerMenuIcon className="menu-image" />
    </button>
  );
}
