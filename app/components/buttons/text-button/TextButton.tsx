'use client';

import './text-button.scss';
import cn from 'classnames';
import { UIElementSizes } from '../../../models/UIElementSizes.model';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
  TextButtonHtmlTypes,
  TextButtonModes,
  TextButtonPlaceOnBGTypes,
} from './TextButton.model';
import {
  DEFAULT_PLACE_ON_BG,
  DEFAULT_TEXT_BUTTON_HTML_TYPE,
  DEFAULT_TEXT_BUTTON_MODE,
} from './TextButton.constants';

interface TextButtonProps {
  className?: string;
  title?: string;
  size?: UIElementSizes;

  mode?: TextButtonModes;
  handleClick?: () => void; // works with mode 'button'
  linkHref?: string; // works with mode 'link'
  linkTarget?: string;

  placeOnBg?: TextButtonPlaceOnBGTypes;

  type?: TextButtonHtmlTypes; // works with mode 'button'
}

export default function TextButton(props: TextButtonProps) {
  const {
    title = 'Click Me!',
    className,
    size = 'default-size',
    mode = DEFAULT_TEXT_BUTTON_MODE,
    handleClick,
    linkHref = '',
    linkTarget,
    placeOnBg = DEFAULT_PLACE_ON_BG,
    type = DEFAULT_TEXT_BUTTON_HTML_TYPE
  } = { ...props };

  const isLinkActive = usePathname() === linkHref;

  const classNames = cn(
    'rra-text-button',
    className,
    `rra-text-button-${size}`,
    `rra-text-button-mode-${mode}`,
    `rra-text-button-place-on-bg-${placeOnBg}`,
    {
      'rra-link-active': isLinkActive,
    }
  );

  if (mode === 'link') {
    return (
      <>
        <Link className={classNames} href={linkHref} target={linkTarget}>
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
    <button className={classNames} onClick={handleClick} type={type}>
      <span className="rra-hover-layout">
        <span className="rra-hl-more-pseudo" />
      </span>
      <span className="rra-more-pseudo"></span>
      <span className="text-button-title">{title}</span>
    </button>
  );
}
