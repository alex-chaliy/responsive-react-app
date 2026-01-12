import gsap from 'gsap';

export function animateLogoOnInit() {
  // animate logo on init
  gsap.from('.rra-main-screen__logo', {
    opacity: 0.25,
    scale: 5,
    transform: 'rotate3d(1, 1, 1, -50deg) skew(-5deg, 15deg)',
    xPercent: 100,
    ease: 'power2.out',
    duration: 1.25,
  });

  gsap.fromTo(
    '.rra-main-screen__logo',
    {
      scale: 1.5,
      skewX: '50deg',
      xPercent: 25,
    },
    {
      scale: 1,
      skewX: 0,
      xPercent: 0,
      ease: 'elastic',
      duration: 1,
      delay: 0.5,
    }
  );

  gsap.fromTo(
    '.rra-main-screen__logo',
    {
      yPercent: 150,
      skewX: '-45deg',
      opacity: 0.1,
      scale: 0.1,
    },
    {
      yoyo: true,
      skewX: '0deg',
      opacity: 1,
      scale: 1,
      yPercent: 0,
      duration: 0.3,
      delay: 1,
    }
  );
}

export function animateLogoOnScroll() {
  // animate logo on scroll
  gsap.to('.rra-main-screen__logo', {
    width: '50%',
    duration: 5,
    scrollTrigger: {
      trigger: '.rra-main-screen__icon-sprite-2',
      toggleActions: 'play pause reverse pause',
      start: 'top top',
      scrub: true,
    },
  });
}

export function animateHeadingOnInit() {
  gsap.fromTo(
    '.rra-main-screen__heading-1',
    {
      xPercent: -250,
      opacity: 0,
      scale: 3,
    },
    {
      scale: 1,
      xPercent: 0,
      opacity: 1,
      ease: 'expo.out',
      duration: 0.8,
    }
  );

  gsap.from('.rra-main-screen__heading-1', {
    skewX: '-45deg',
    ease: 'elastic',
    duration: 1,
    delay: 0.3,
  });
}

export function animateHeadingsOnScroll() {
  gsap.to('.rra-main-screen__heading-1', {
    left: '-500%',
    ease: 'none',
    duration: 1,

    scrollTrigger: {
      trigger: '.rra-main-screen__sprite-2',
      start: 'top top',
      toggleActions: 'play none reverse none',
      scrub: true,
    },
  });

  gsap.fromTo(
    '.rra-main-screen__heading-2',
    {
      yPercent: 55,
      opacity: 0,
    },
    {
      yPercent: -100,
      opacity: 1,
      ease: 'expo.out',
      duration: 1,

      scrollTrigger: {
        trigger: '.rra-main-screen__sprite-2',
        start: 'top top',
        toggleActions: 'play pause reverse pause',
        scrub: true,
      },
    }
  );
}

export function animateActionButtonOnInit() {
  gsap.fromTo(
    '.rra-main-screen__action-button',
    {
      x: 50,
      y: -50,
      rotateZ: '45deg',
      opacity: .05,
      scale: .5,
    },
    {
      x: 0,
      y: 0,
      rotateZ: '0deg',
      opacity: 1,
      scale: 1,
      ease: 'expo.in',
      duration: .8,
      delay: .2,
    }
  );
}
