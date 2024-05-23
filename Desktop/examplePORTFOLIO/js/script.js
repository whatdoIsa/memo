// 가로스크롤 + 패럴랙스 효과 

gsap.registerPlugin(ScrollTrigger);
const scroll_panels = gsap.utils.toArray('.horizontal-scroll .horizontal-panel');
const pin_panels = gsap.utils.toArray('.horizontal-pin .horizontal-panel');

gsap.to(scroll_panels, {
  xPercent: -100 * (scroll_panels.length - 1),
  ease: 'none',
  scrollTrigger: {
    trigger: '.horizontal-scroll',
    pin: true,
    scrub: 0.6,
    end: () => "+=" + document.querySelector('.horizontal-scroll').offsetWidth * scroll_panels.length
  }
});

pin_panels.forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    pin: true,
    pinSpacing: false,
    start: 'top top'
  });
});

// 텍스트 애니메션
gsap.to('.marquee-track.l h4', {
  scrollTrigger: {
    trigger: '.marquee-track.l h4',
    start: 'top bottom',
    end: '400% top',
    scrub: 0.6
  },
  xPercent: 25,
  duration: 3,
  ease: 'linear'
});

gsap.to('.marquee-track.r h4', {
  scrollTrigger: {
    trigger: '.marquee-track.r h4',
    end: 'bottom top',
    scrub: 0.6
  },
  xPercent: -25,
  duration: 3,
  ease: 'linear'
});

// svg 애니메이션
$(function () {
  $(window).scroll(function () {
    let sec3_top = $('.pl_two').offset().top;
    if ($(this).scrollTop() >= Math.ceil(sec3_top)) {
      $(".circle_point2_path").addClass("active_dash");
    } else {
      $(".circle_point2_path").removeClass("active_dash");
    }
  });
});

