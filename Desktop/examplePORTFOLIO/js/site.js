// site svg 애니메이션 

const textPath = document.querySelector('#text-path');
const textContainer = document.querySelector('#text-container');
let path = document.querySelector(textPath.getAttribute('href'));
let pathLength = path.getTotalLength();

function updateTextPathOffset(offset) {
  textPath.setAttribute('startOffset', offset);
}

updateTextPathOffset(pathLength);

function onScroll() {
  requestAnimationFrame(function () {
    let rect = textContainer.getBoundingClientRect();
    let scrollPercent = rect.y / window.innerHeight;
    updateTextPathOffset(scrollPercent * 2 * pathLength);
  });

}

window.addEventListener('scroll', onScroll);

$(window).scroll(function () {
  let scroll = $(window).scrollTop();
  const sec_start1 = $('.text_sec').offset().top;
  if (scroll > sec_start1) {
    gsap.to(".site_list_title h3", { duration: 0.8, opacity: 1, y: 3, delay: 1.1 });
  }
});


//site slider
$('.slide-nav').on('click', function (e) {
  e.preventDefault();
  // get current slide
  let current = $('.flex--active').data('slide'),
    // get button data-slide
    next = $(this).data('slide');
  $('.slide-nav').removeClass('active');
  $(this).addClass('active');
  if (current === next) {
    return false;
  } else {
    $('.slider__warpper').find('.flex__container[data-slide=' + next + ']').addClass('flex--preStart');
    $('.flex--active').addClass('animate--end');
    setTimeout(function () {
      $('.flex--preStart').removeClass('animate--start flex--preStart').addClass('flex--active');
      $('.animate--end').addClass('animate--start').removeClass('animate--end flex--active');
    }, 800);
  }

});







