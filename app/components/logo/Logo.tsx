import './logo.scss';
import cn from 'classnames';
import Link from 'next/link';

interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
  alt?: string;

  mode?: 'default' | 'link';
}

export default function Logo(props: LogoProps) {
  const {
    className,
    width = '26px',
    height = 'auto',
    alt = 'App Logo',
    mode = 'default',
  } = { ...props };

  const classNames = cn('rra-logo', className);

  const styles = { width: width, height: height };

  if (mode === 'link') {
    return (
      <Link href="/" className={classNames} style={styles}>
        <img className="rra-logo__img" src="/svg/logo.svg" alt={alt} />
      </Link>
    );
  }

  return (
    <span className={classNames} style={styles}>
      <img className="rra-logo__img" src="/svg/logo.svg" alt={alt} />
    </span>
  );
}
