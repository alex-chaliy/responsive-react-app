'use client';

import './main-screen.scss';
import cn from 'classnames';
import { memo } from 'react';

// gsap imports
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import MainHeading from '@/app/components/headings/main-heading/MainHeading';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Logo from '@/app/components/logo/Logo';
import {
  animateActionButtonOnInit,
  animateHeadingOnInit,
  animateHeadingsOnScroll,
  animateLogoOnInit,
  animateLogoOnScroll,
} from './animations';
import TextButton from '@/app/components/buttons/text-button/TextButton';
gsap.registerPlugin(ScrollTrigger);

interface MainScreenProps {
  className?: string;
}

export function MainScreen(props: MainScreenProps) {
  const { className } = { ...props };
  const classNames = cn('rra-main-screen', className);
  const iconSpriteNumbers = [...Array(5).keys()];

  const mainScreenAnimationsContainer = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // left-right animation:
      // animate background icons, make it flow from the left to the right and backwards
      gsap.to('.rra-main-screen__icon-sprite', {
        repeat: -1,
        yoyo: true, // Makes it play backwards after the forward play

        left: '-75%',
        ease: 'none',
        duration: 12.5,

        scrollTrigger: {
          trigger: '.rra-main-screen__icon-sprite-2', // target element, which will be a trigger of animation starting or stopping
          toggleActions: 'play pause reverse none',

          // apply animation when 'top' border of the target element is on center (or above) of viewport
          start: 'top center',
          // stop animation when bottom border of target element is on top of viewport
          end: 'bottom top',
          // top center bottom
        },
      });

      // left-right animation on scroll:
      // apply left-right animation that linked to the scroll progress
      gsap.to('.rra-main-screen__icon-sprite', {
        left: '-155%',
        ease: 'none',
        duration: 12.5,

        scrollTrigger: {
          trigger: '.rra-main-screen__icon-sprite-3 .rra-main-screen__icon-sprite-4',

          toggleActions: 'play reverse reverse pause', // on enter, on leave, on enter back, on leave back
          // pause play reverse reset none resume
          scrub: true, // Smoothly links animation progress to scroll position
          start: 'top top',
        },
      });

      animateLogoOnInit();
      animateLogoOnScroll();

      animateHeadingOnInit();
      animateHeadingsOnScroll();

      animateActionButtonOnInit();
    },
    {
      dependencies: [],
      scope: mainScreenAnimationsContainer,
      revertOnUpdate: true,
    }
  );

  return (
    <div className={classNames} ref={mainScreenAnimationsContainer} id="rra-main-screen">
      <div className="rra-main-screen__icon-sprites">
        {iconSpriteNumbers.map((i: number) => (
          <div className={`rra-main-screen__icon-sprite rra-main-screen__icon-sprite-${i + 1}`} key={i + 1} />
        ))}
      </div>

      <div className="rra-main-screen__darkener"></div>

      <div className="rra-main-screen__content">
        <div className="rra-main-screen__logo-perspective">
          <Logo width={'100%'} height={'auto'} className="rra-main-screen__logo" />
        </div>

        <div className="rra-main-screen__headings">
          <MainHeading title="Feel The Flow" className="rra-main-screen__heading rra-main-screen__heading-1" />
          <MainHeading title="Share w/ Everyone" className="rra-main-screen__heading rra-main-screen__heading-2" />
        </div>

        <TextButton
          className="rra-main-screen__action-button"
          title={'Sign in'}
          mode={'link'}
          linkHref={'/pages/sign-in'}
          viewExtension="super-feature-button"
          size="xlg"
        />
      </div>
    </div>
  );
}

export default memo(MainScreen);
