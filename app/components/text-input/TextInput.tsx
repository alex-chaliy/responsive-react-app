import { InputTypes } from '@/app/models/Input.model';
import './text-input.scss';
import cn from 'classnames';

interface TextInputProps {
  className?: string;
  type: InputTypes;
  fieldId: string;
  placeholder?: string;
}

export default function TextInput(props: TextInputProps) {
  const { className, type, fieldId, placeholder = '' } = { ...props };
  const classNames = cn('rra-text-input', className);

  return (
    <span className={classNames}>
      <input
        type={type}
        className="rra-text-input-field"
        id={fieldId}
        placeholder={placeholder}
      />
      <label htmlFor={fieldId} className="rra-text-input-label">
        <span className="rra-hover-layout">
          <span className="rra-hl-more-pseudo" />
        </span>
        <span className="rra-more-pseudo" />
      </label>
    </span>
  );
}
