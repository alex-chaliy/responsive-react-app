import './label.scss';
import cn from 'classnames';

interface LabelProps {
  className?: string;
  title?: string;
  labelFor: string;
}

export default function Label(props: LabelProps) {
  const { title = 'Label text', className, labelFor } = { ...props };
  const classNames = cn('rra-label', className);

  return (
    <label className={classNames} htmlFor={labelFor}>
      {title}
    </label>
  );
}
