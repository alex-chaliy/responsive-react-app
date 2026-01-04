import { InputTypes } from '@/app/models/Input.model';
import './text-input.scss';
import cn from 'classnames';

import { useField } from 'formik';
// import { useEffect } from 'react';

interface TextInputProps {
  className?: string;
  type: InputTypes;
  id: string;
  name: string;
  placeholder?: string;
}

export default function TextInput(props: TextInputProps) {
  const { className, type, id, name, placeholder = '' } = { ...props };

  const [field, meta, helpers] = useField(props);
  const classNames = cn('rra-text-input', className, {
    'rra-text-input--error-state': !!meta.error,
  });

  // useEffect(() => {
  //   console.log(' field : ', field);
  //   console.log(' helpers : ', helpers);
  // }, []);

  return (
    <span className={classNames}>
      <input
        {...field}
        // {...props}
        className="rra-text-input-field"
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
      />

      <label htmlFor={id} className="rra-text-input-label">
        <span className="rra-hover-layout">
          <span className="rra-hl-more-pseudo" />
        </span>
        <span className="rra-more-pseudo" />
      </label>

      {!!meta.error && (
        <span className="rra-text-input__error-message">{meta.error}</span>
      )}
    </span>
  );
}
