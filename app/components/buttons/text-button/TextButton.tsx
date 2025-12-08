import './text-button.scss';
import cn from 'classnames';

interface TextButtonProps {
  className?: string;
  title?: string;
}

export default function TextButton(props: TextButtonProps) {
  const { title = 'Click Me!', className } = { ...props };
  const classNames = cn('text-button', className);

  return (
    <button className={classNames}>
      <span className="hover-layout">
        <span className="hl-more-pseudo" />
      </span>
      <span className="more-pseudo"></span>
      <span className="text-button-title">{title}</span>
    </button>
  );
}
