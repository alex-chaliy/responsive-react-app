import './sub-heading.scss';
import cn from 'classnames';

interface SubHeadingProps {
  className?: string;
  title?: string;
}

export default function SubHeading(props: SubHeadingProps) {
  const { title = 'Sub Title', className } = { ...props };
  const classNames = cn('sub-heading', className);

  return <h3 className={classNames}> {title} </h3>;
}
