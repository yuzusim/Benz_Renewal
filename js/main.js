$(function () {
  // 메인 썸네일 Swiper
  var thumbSwiper = new Swiper(".thumbSwiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });

  // 메인 Swiper + 네비 + 썸네일 연동
  var mvSwiper = new Swiper(".mvSwiper", {
    loop: true,
    spaceBetween: 0,
    speed: 1000, // 전환 속도 (부드럽게)
    effect: "fade",
    fadeEffect: { crossFade: true },
    autoplay: {
      delay: 1500, // 2.5초에 한 번씩 변경
      disableOnInteraction: false, // 클릭해도 autoplay 유지
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: thumbSwiper, // ✅ 여기 연결이 핵심
    },
  });

  // 헤더 스크롤 이벤트
  $(window).scroll(function () {
    var sct = $(window).scrollTop();
    var sec04Top = $(".sec04").offset().top; // sec04 시작점
    var sec04End = sec04Top + $(".sec04").outerHeight(); // sec04 끝점

    // 기본 fix 처리
    if (sct >= 87) {
      $("#header").addClass("fix");
    } else {
      $("#header").removeClass("fix");
    }

    // sec04 구간일 때만 .ms 클래스 부여
    if (sct >= sec04Top && sct < sec04End) {
      $("#header").addClass("ms");
    } else {
      $("#header").removeClass("ms");
    }
  });
});
