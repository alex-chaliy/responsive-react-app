import './logo.scss';
import cn from 'classnames';
import Image from 'next/image';

export default function Logo(props: any) {
  const { className, width = 26, height = 19.25, alt = 'App Logo' } = { ...props };
  const classNames = cn('logo', className);

  return <Image
    className={classNames}
    src="/svg/logo.svg"
    alt={alt}
    width={width}
    height={height}
  />;
}
