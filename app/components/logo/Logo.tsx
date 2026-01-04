import './logo.scss';
import cn from 'classnames';
import Link from 'next/link';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
  alt?: string;
}

export default function Logo(props: LogoProps) {
  const {
    className,
    width = 26,
    height = 19.25,
    alt = 'App Logo',
  } = { ...props };
  const classNames = cn('rra-logo', className);

  return (
    <Link href="/" className="rra-logo-wrap">
      <img
        className={classNames}
        src="/svg/logo.svg"
        alt={alt}
        width={width}
        height={height}
      />
    </Link>
  );
}
