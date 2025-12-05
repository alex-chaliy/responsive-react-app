import './sub-heading.scss';
import cn from 'classnames';


export default function SubHeading(props: any) {
  const { title = 'Sub Title', className } = { ...props };
  const classNames = cn('sub-heading', className);

  return <h3
    className={classNames}
  > {title} </h3>;
}
