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

// gsap imports
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';

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
    type = DEFAULT_TEXT_BUTTON_HTML_TYPE,
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

  const animationsContainer = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const titleSplitText = new SplitText('.rra-text-button__title', {
        type: 'words',
        tag: 'span',
        wordsClass: 'rra-text-button__title-word++',
      });
      const titleWords = titleSplitText.words;
      gsap.from(titleWords, {
        // repeat: -1, // infinite animation repeat
        yPercent: 50,
        // xPercent: -50,
        rotation: '-45',
        ease: 'elastic.out',
        duration: 1.8,
        display: 'inline-block', // if we use tag 'span' to wrap a single character, animation doesn't work
        // to fix that we should apply 'display: inline-block' style to every single character
      });
    },
    {
      dependencies: [title],
      scope: animationsContainer,
      revertOnUpdate: true,
    }
  );
  if (mode === 'link') {
    return (
      <>
        <Link className={classNames} href={linkHref} target={linkTarget}>
          <span
            className="rra-text-button__animations-container"
            ref={animationsContainer}
          >
            <span className="rra-hover-layout">
              <span className="rra-hl-more-pseudo" />
            </span>
            <span className="rra-more-pseudo"></span>
            <span className="rra-text-button__title">{title}</span>
          </span>
        </Link>
      </>
    );
  }

  return (
    <button className={classNames} onClick={handleClick} type={type}>
      <span
        className="rra-text-button__animations-container"
        ref={animationsContainer}
      >
        <span className="rra-hover-layout">
          <span className="rra-hl-more-pseudo" />
        </span>
        <span className="rra-more-pseudo"></span>
        <span className="rra-text-button__title">{title}</span>
      </span>
    </button>
  );
}
