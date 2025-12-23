'use client';

import './main-heading.scss';
import cn from 'classnames';

// gsap imports
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface MainHeadingProps {
  className?: string;
  title?: string;
}

export default function MainHeading(props: MainHeadingProps) {
  const { title = 'Title', className } = { ...props };
  const classNames = cn('rra-main-heading', className);

  gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies
  const container = useRef('');

  return <h2 className={classNames}> {title} </h2>;
}
