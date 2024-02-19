// GSAP Animation
const tl = gsap.timeline();
tl.to(".p-logo", {
  opacity: 1,
  duration: 1,
  delay: 0.5,
});

tl.to("#navbar ul li a", {
  opacity: 1,
  y: 0,
  duration: 0.5,
  delay: 0.2,
  stagger: 0.3,
});

tl.to(".item", {
  opacity: 1,
  y: 0,
  duration: 0.5,
  delay: 0.2,
  stagger: 0.3,
  scrollTrigger: {
    scroller: "body",
    trigger: ".item",
    start: "top 70%",
    end: "bottom 50%",
    scrub: 1,
    ease: "power1. inOut",
    toggleActions: "play none none reverse",
    // markers: true,
  },
});
tl.to(".onlinetemp", {
  opacity: 1,
  x: 0,
  duration: 0.6,
  delay: 0.5,
  scrollTrigger: {
    scroller: "body",
    trigger: ".onlinetemp",
    start: "top 70%",
    end: "bottom 50%",
    scrub: 1,
    ease: "power1. inOut",
    toggleActions: "play none none reverse",
    // markers: true,
  },
});
tl.to(".onlinetemp1", {
  opacity: 1,
  x: 0,
  duration: 0.6,
  delay: 0.5,
  scrollTrigger: {
    scroller: "body",
    trigger: ".onlinetemp1",
    start: "top 70%",
    end: "bottom 50%",
    scrub: 1,
    ease: "power1. inOut",
    toggleActions: "play none none reverse",
    // markers: true,
  },
});
