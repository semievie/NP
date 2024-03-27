gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

ScrollSmoother.create({
wrapper: '.wrapper',
content: '.content',
smooth: 1.5,
effects:true
})

gsap.fromTo('.heros-section', { opacity: 1 }, {
    opacity: 0,
    scrollTrigger: {
      trigger: '.heros-section',
      start: 'center',
      end: '815',
      scrub: true
    }
})
let itemsL = gsap.utils.toArray('.gallery__left .gallery__item');

itemsL.forEach(item => {
  gsap.fromTo(item, {x: -100, opacity: 0 }, {
    opacity: 1, x: 0,
    scrollTrigger: {
      trigger: item,
      start: '-850',
      end: '-100',
      scrub: true
    }
  });
});


let itemsR = gsap.utils.toArray('.gallery__right .gallery__item');

itemsR.forEach(item => {
  gsap.fromTo(item, {x: 100, opacity: 0 }, {
    opacity: 1, x: 0,
    scrollTrigger: {
      trigger: item,
      start: '-850',
      end: '-100',
      scrub: true
    }
  });
});