import cn from 'classnames';

interface BurgerMenuIconProps {
  className?: string;
}

export default function BurgerMenuIcon(props: BurgerMenuIconProps) {
  const { className } = { ...props };
  const classNames = cn('burger-menu-icon common-svg-icon', className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={12}
      height={8}
      fill="none"
      className={classNames}
    >
      <path
        fill="#E2F7FF"
        fillRule="evenodd"
        d="M0 .75A.75.75 0 0 1 .75 0h10.5a.75.75 0 0 1 0 1.5H.75A.75.75 0 0 1 0 .75ZM0 4a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H.75A.75.75 0 0 1 0 4ZM0 7.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H.75A.75.75 0 0 1 0 7.25Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
