import { UIElementSizes } from '@/app/models/UIElementSizes.model';
import './sub-heading.scss';
import cn from 'classnames';

interface SubHeadingProps {
  className?: string;
  title?: string;
  size?: UIElementSizes
}

export default function SubHeading(props: SubHeadingProps) {
  const { title = 'Sub Title', className, size = 'default-size' } = { ...props };
  const classNames = cn('rra-sub-heading', className, `rra-sub-heading-${size}`);

  return <h3 className={classNames}> {title} </h3>;
}
