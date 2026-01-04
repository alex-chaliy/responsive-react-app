'use client';

import { UIElementSizes } from '@/app/models/UIElementSizes.model';
import './sub-heading.scss';
import cn from 'classnames';

// gsap imports
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';

interface SubHeadingProps {
  className?: string;
  title?: string;
  size?: UIElementSizes;
}

export default function SubHeading(props: SubHeadingProps) {
  const {
    title = 'Sub Title',
    className,
    size = 'default-size',
  } = { ...props };
  const classNames = cn(
    'rra-sub-heading',
    className,
    `rra-sub-heading-${size}`
  );

  const headingAnimationsContainer = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const titleSplitText = new SplitText('.rra-sub-heading__title-text', {
        type: 'chars',

        // by default gsap uses div element, to wrap a single character, which is a line element
        tag: 'span', // but in some cases we need to use inline element, to wpap a character
        // to not to break SEO rules, we shouldn't use line elements inside inline elements
        // however, in that case we can use tag div inside h3, 'cos they both are line elements

        smartWrap: true, // use this option to prevent unexpected word breaking
        // on smaller screen sizes
        // e.g. render the whole word "Block" instead of moving characters "ck" to the next line

        wordsClass: 'rra-sub-heading__title-word++', // not applied when type 'chars', even if we use smartWrap option
        charsClass: 'rra-sub-heading__title-char++',
      });
      const titleChars = titleSplitText.chars;

      gsap.from(titleChars, {
        // repeat: -1, // infinite animation repeat
        yPercent: 50,
        rotation: '+=45',
        ease: 'power3.out',
        duration: 0.5,
        display: 'inline-block', // if we use tag 'span' to wrap a single character, animation doesn't work
        // to fix that we should apply 'display: inline-block' style to every single character
      });
    },
    {
      dependencies: [title],
      scope: headingAnimationsContainer,
      revertOnUpdate: true,
    }
  );

  return (
    <h3 className={classNames}>
      <span
        className="rra-subheading__animations-container"
        ref={headingAnimationsContainer}
      >
        <span className="rra-sub-heading__title-text">{title}</span>
      </span>
    </h3>
  );
}
