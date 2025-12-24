'use client';

import './main-heading.scss';
import cn from 'classnames';

// gsap imports
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';

interface MainHeadingProps {
  className?: string;
  title?: string;
}

export default function MainHeading(props: MainHeadingProps) {
  const { title = 'Title', className } = { ...props };
  const classNames = cn('rra-main-heading', className);

  const animationsContainer = useRef<HTMLSpanElement>(null);
  useGSAP(
    () => {
      const titleSplitText = new SplitText('.rra-main-heading__title-text', {
        type: 'chars',
        // by default gsap uses div element, to wrap a single character, which is a line element
        tag: 'span', // but in some cases we need to use inline element, to wpap a character
        // to not to break SEO rules, we shouldn't use line elements inside inline elements
        // however, in that case we can use tag div inside h2, 'cos they both are line elements

        smartWrap: true, // use this option to prevent unexpected word breaking
        // on smaller screen sizes
        // e.g. render the whole word "Block" instead of moving characters "ck" to the next line

        wordsClass: 'rra-main-heading__title-word++', // not applied when type 'chars', even if we use smartWrap option
        charsClass: 'rra-main-heading__title-char++',
      });
      const titleChars = titleSplitText.chars;

      gsap.from(titleChars, {
        yPercent: 50,
        rotation: '+=45',
        ease: 'power3.out',
        duration: 0.5,
        display: 'inline-block' // if we use tag 'span' to wrap a single character, animation doesn't work
        // to fix that we should apply 'display: inline-block' style to every single character
      });
    },
    {
      dependencies: [title],
      scope: animationsContainer,
      revertOnUpdate: true,
    }
  );

  return (
    <h2 className={classNames}>
      <span
        className="rra-main-heading__animationsContainer"
        ref={animationsContainer}
      >
        <span className="rra-main-heading__title-text">{title}</span>
      </span>
    </h2>
  );
}
