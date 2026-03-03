$(function () {
  // gsap.registerPlugin(ScrollTrigger);

  // // gsap.to(".sec01 .mv_title", {
  // //   // scrollTrigger: {
  // //   //   trigger: ".sec01", // 섹션 전체를 트리거
  // //   //   start: "top 60%", // 화면 60% 지점에서 시작
  // //   //   toggleActions: "play reverse play reverse",
  // //   //   // markers: true,
  // //   // },
  // //   y: 0,
  // //   opacity: 1,
  // //   duration: 1,
  // //   ease: "power2.out",
  // // });

  // // Timeline 사용해서 순차 애니메이션
  // let tl = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: ".sec02",
  //     start: "top 50%",
  //     end: "bottom 20%", // 스크롤 범위 지정
  //     toggleActions: "play reverse play reverse", // 올릴 때 play, 내릴 때 reverse
  //     // markers: true,
  //   },
  // });

  // // 1️⃣ 타이틀
  // tl.to(".sec02 .title", {
  //   y: 0,
  //   opacity: 1,
  //   duration: 1.5,
  //   ease: "power1.out", // 부드럽게
  // })
  //   // 2️⃣ 로고
  //   .to(
  //     ".sec02 .circle_logo",
  //     {
  //       scale: 1,
  //       opacity: 1,
  //       duration: 1.5,
  //       ease: "power1.out",
  //     },
  //     "-=1.2"
  //   ) // 살짝 겹치게 시작
  //   // 3️⃣ 서브 타이틀
  //   .to(
  //     ".sec02 .sub_title",
  //     {
  //       y: 0,
  //       opacity: 1,
  //       duration: 1.5,
  //       ease: "power1.out",
  //     },
  //     "-=1.2"
  //   ); // 겹치게 시작

  $(function () {
    gsap.registerPlugin(ScrollTrigger);

    // sec02 애니메이션
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".sec02",
        start: "top 50%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse",
        // markers: true,
      },
    });

    tl.to(".sec02 .title", {
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: "power1.out",
    })
      .to(
        ".sec02 .circle_logo",
        { scale: 1, opacity: 1, duration: 1.5, ease: "power1.out" },
        "-=1.2"
      )
      .to(
        ".sec02 .sub_title",
        { y: 0, opacity: 1, duration: 1.5, ease: "power1.out" },
        "-=1.2"
      );

    // 🔥 sec03 진입할 때 circle_box → history_slider 중앙 이동
    gsap.to(".sec02 .circle_box", {
      scrollTrigger: {
        trigger: ".sec03",
        start: "top 80%", // sec03 시작할 때
        end: "top 20%", // sec03 중간쯤까지
        scrub: 2, // 스크롤 연동 애니메이션
        // markers: true,
      },
      x: -10, // 직접 원하는 값
      y: 1155, // 직접 원하는 값
      scale: 1,

      ease: "power2.out",
    });

    // 👇 historySlider 나타날 때 circle_area만 사라지게
    gsap.to(".circle_area", {
      scrollTrigger: {
        trigger: ".historySlider",
        start: "top 85%",
        end: "top 60%",
        scrub: true,
        // markers: true,
        onEnter: () => {
          gsap.to(".circle_area", {
            opacity: 0,
            duration: 0.5,
            pointerEvents: "none",
          });
        },
        onLeaveBack: () => {
          gsap.to(".circle_area", {
            opacity: 1,
            duration: 0.5,
            pointerEvents: "auto",
          });
        },
      },
    });

    // gsap.to(".sec02 .circle_box", {
    //   scrollTrigger: {
    //     trigger: ".historySlider", // 👈 historySlider 진입 감지
    //     start: "top 100%", // 뷰포트 80% 지점에서 시작
    //     end: "top 20%", // 어느 정도 지나면 끝
    //     scrub: 2,

    //     onEnter: () => {
    //       const circleArea = document.querySelector(".circle_area");
    //       if (circleArea) circleArea.style.display = "none";
    //     },

    //     onLeaveBack: () => {
    //       const circleArea = document.querySelector(".circle_area");
    //       if (circleArea) circleArea.style.display = "block";
    //     },
    //   },

    //   x: -10,
    //   y: 1155,
    //   scale: 1,
    //   ease: "power2.out",
    // });
  });
  //   gsap.to(".sec02 .circle_box", {
  //     scrollTrigger: {
  //       trigger: ".sec03",
  //       start: "top 80%",
  //       end: "top 20%",
  //       scrub: 2,
  //       // markers: true,
  //       onEnter: () => {
  //         // sec03 진입할 때 circle_area 숨기기
  //         const circleArea = document.querySelector(".circle_area");
  //         if (circleArea) circleArea.style.display = "none";
  //       },
  //       onLeaveBack: () => {
  //         // 되돌아갈 때 circle_area 다시 보이게
  //         const circleArea = document.querySelector(".circle_area");
  //         if (circleArea) circleArea.style.display = "block";
  //       },
  //     },
  //     x: -10,
  //     y: 1155,
  //     scale: 1,
  //     ease: "power2.out",
  //   });
  // });
});
