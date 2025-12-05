import './main-heading.scss';
import cn from 'classnames';


export default function MainHeading(props: any) {
  const { title = 'Title', className } = { ...props };
  const headerClassName = cn('main-heading', className);

  return <h2
    className={headerClassName}
  > {title} </h2>;
}
