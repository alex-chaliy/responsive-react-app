import './text-button.scss';
import cn from 'classnames';
import { UIElementSizes } from '../../../models/UIElementSizes.model';

interface TextButtonProps {
  className?: string;
  title?: string;
  size?: UIElementSizes;
}

export default function TextButton(props: TextButtonProps) {
  const { title = 'Click Me!', className, size = 'default-size' } = { ...props };
  const classNames = cn('rra-text-button', className, `rra-text-button-${size}`);

  return (
    <button className={classNames}>
      <span className="rra-hover-layout">
        <span className="rra-hl-more-pseudo" />
      </span>
      <span className="rra-more-pseudo"></span>
      <span className="text-button-title">{title}</span>
    </button>
  );
}
