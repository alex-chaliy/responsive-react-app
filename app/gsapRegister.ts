import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(SplitText);

export * as gsap from "gsap";
export * from "@gsap/react";
export * from "gsap/SplitText";