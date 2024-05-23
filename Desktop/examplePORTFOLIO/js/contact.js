// 햄버거 메뉴  

const body = $("body");

$(".icon-wrap").click(function () {
  $(".icon").toggleClass("animation");

  if (!$("body").hasClass('open')) {
    body.addClass('open');
    body.removeClass('close');
  } else {
    body.removeClass('open');
    body.addClass('close');
  }
});

// page transition
setTimeout(function () {
  document.getElementById("cover").classList.add("cover-left");
});

function pageClick() {
  document.querySelectorAll(".page_click").forEach((elem) => {
    elem.addEventListener("click", (e) => {
      e.preventDefault();
      const dataName = elem.getAttribute('data-name');
      document.getElementById("cover").classList.add("cover-right");
      setTimeout(() => {
        window.location.href =
          dataName + ".html";
      }, 2000);
    });
  });
}
pageClick();

//커서 움직임 효과

$(document).mousemove(function (e) {
  gsap.to(".cursor", { duration: 0.4, left: e.pageX - 5, top: e.pageY - 5 });
});

//커서 오버 효과1
$(".intro .main_cont ").hover(function () {
  $(".cursor").addClass("active");
}, function () {
  $(".cursor").removeClass("active");
});

//커서 오버 효과

$(".next_area ").hover(function () {
  $(".cursor").addClass("active2");
}, function () {
  $(".cursor").removeClass("active2");
});

// contact 애니메이션 

Splitting();
TweenMax.staggerFrom('.char', 1.3, {
  y: 70,
  delay: 1.2,
  rotation: 90,
  rotationX: -50,
  opacity: 0,
  transformOrigin: "50% 50%",
  ease: Back.easeInOut.config(1.3)
}, 0.05);

let img_bg = gsap.timeline();
img_bg.from(".contact_img_wrap img", 0.8, {
  opacity: 0,
  x: -70,
  delay: 2.4,
  duration: 3,
  ease: Back.easeOut.config(1.3)
});



let email = gsap.timeline();
email.from(".info_list dl:nth-child(1)", 0.8, {
  opacity: 0,
  y: -20,
  delay: 2.9,
  duration: 3,
  ease: Back.easeOut.config(1.3)
});

let github = gsap.timeline();
github.from(".info_list dl:nth-child(2)", 0.8, {
  opacity: 0,
  y: -20,
  delay: 3.3,
  duration: 3,
  ease: Back.easeOut.config(1.3)
});



let gitbook = gsap.timeline();
gitbook.from(".info_list dl:nth-child(3)", 0.8, {
  opacity: 0,
  y: -20,
  delay: 3.6,
  duration: 3,
  ease: Back.easeOut.config(1.3)
});

let CodePen = gsap.timeline();
CodePen.from(".info_list dl:nth-child(4)", 0.8, {
  opacity: 0,
  y: -20,
  delay: 3.9,
  duration: 3,
  ease: Back.easeOut.config(1.3)
});


let left_nav = gsap.timeline();
left_nav.from(".left-nav, .icon-wrap", 0.5, {
  opacity: 0,
  delay: 4.2,
  duration: 3,
  ease: Back.easeOut.config(1.3)
});

