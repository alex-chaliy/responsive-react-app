'use client';

import './text-button.scss';
import cn from 'classnames';
import { UIElementSizes } from '../../../models/UIElementSizes.model';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

type TextButtonModes = 'button' | 'link';
const DEFAULT_TEXT_BUTTON_MODE: TextButtonModes = 'button';

interface TextButtonProps {
  className?: string;
  title?: string;
  size?: UIElementSizes;
  mode?: TextButtonModes;
  handleClick?: () => void;
  linkHref?: string;
}

export default function TextButton(props: TextButtonProps) {
  const {
    title = 'Click Me!',
    className,
    size = 'default-size',
    mode = DEFAULT_TEXT_BUTTON_MODE,
    handleClick,
    linkHref = '',
  } = { ...props };

  const isLinkActive = usePathname() === linkHref;

  const classNames = cn(
    'rra-text-button',
    className,
    `rra-text-button-${size}`,
    `rra-text-button-mode-${mode}`, {
      'rra-link-active': isLinkActive
    }
  );

  if (mode === 'link') {
    return (
      <>
        <Link className={classNames} href={linkHref}>
          <span className="rra-hover-layout">
            <span className="rra-hl-more-pseudo" />
          </span>
          <span className="rra-more-pseudo"></span>
          <span className="text-button-title">{title}</span>
        </Link>
      </>
    );
  }

  return (
    <button className={classNames} onClick={handleClick}>
      <span className="rra-hover-layout">
        <span className="rra-hl-more-pseudo" />
      </span>
      <span className="rra-more-pseudo"></span>
      <span className="text-button-title">{title}</span>
    </button>
  );
}
