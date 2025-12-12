import './main-heading.scss';
import cn from 'classnames';

interface MainHeadingProps {
  className?: string;
  title?: string;
}

export default function MainHeading(props: MainHeadingProps) {
  const { title = 'Title', className } = { ...props };
  const classNames = cn('rra-main-heading', className);

  return <h2
    className={classNames}
  > {title} </h2>;
}
