import './text-input.scss';
import cn from 'classnames';

interface TextInputProps {
  className?: string;
}

export default function TextInput(props: TextInputProps) {
  const { className } = { ...props };
  const classNames = cn('text-input', className);

  return (
    <span className={classNames}>
      <input type="text" className="text-input-field" />
    </span>
  );
}
