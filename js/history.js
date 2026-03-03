$(function () {
  const historyData = [
    {
      className: "slide_1",
      year: "1950",
      text: "The Legend<br>Begins",
      img: "./images/slider_1.png",
      afterText: "Benz 50’s",
      beforeImg: "./images/Benz_logo.png",
    },
    {
      className: "slide_2",
      year: "1954",
      text: "Wings of<br>Innovation",
      img: "./images/slider_2.png",
      afterText: "Benz 50’s",
      beforeImg: "./images/Benz_logo.png",
    },
    {
      className: "slide_3",
      year: "2025",
      text: "Vision<br>One-Eleven",
      img: "./images/slider_3.png",
      afterText: "Benz 2025",
      beforeImg: "./images/Benz_logo.png",
    },
    {
      className: "slide_1",
      year: "1950",
      text: "The Legend<br>Begins",
      img: "./images/slider_1.png",
      afterText: "Benz 50’s",
      beforeImg: "./images/Benz_logo.png",
    },
    {
      className: "slide_2",
      year: "1954",
      text: "Wings of<br>Innovation",
      img: "./images/slider_2.png",
      afterText: "Benz 50’s",
      beforeImg: "./images/Benz_logo.png",
    },
    {
      className: "slide_3",
      year: "2025",
      text: "Vision<br>One-Eleven",
      img: "./images/slider_3.png",
      afterText: "Benz 2025",
      beforeImg: "./images/Benz_logo.png",
    },
  ];

  const wrapper = document.querySelector(".historySlider .swiper-wrapper");

  historyData.forEach((item) => {
    wrapper.innerHTML += `
    <div class="swiper-slide ${item.className}" style="background-image:url('${item.img}');">
      <div class="history_txt">
        <h2 class="year on">${item.year}</h2>
        <p>${item.text}</p>
        <div class="beforeIcon" style="background-image: url('${item.beforeImg}')"></div>
       <span class="afterText">${item.afterText}</span>
      </div>
    </div>
  `;
  });

  // 동적 css 생성
  // let cssRules = "";

  // historyData.forEach((item) => {
  //   cssRules += `
  //   .${item.className} .history_txt::after {
  //     content: "${item.afterText}";
  //     position: absolute;
  //     bottom: -30%;
  //     left: 40%;
  //     font-size: 22px;
  //     color: #fff;
  //     opacity: 0.8;

  //   }

  //   .${item.className} .history_txt::before {
  //     content: "";
  //     position: absolute;
  //     display: block;
  //     bottom: -25%;
  //     left: 45%;
  //     width: 40px;
  //     height: 40px;
  //     background: url("${item.beforeImg}") center/contain no-repeat;
  //     background-color: #000;
  //     border-radius: 50%;
  //     margin-bottom: 30px;
  //   }
  // `;
  // });

  // // DOM에 삽입
  // const styleTag = document.createElement("style");
  // styleTag.innerHTML = cssRules;
  // document.head.appendChild(styleTag);

  // historySlider
  var swiper = new Swiper(".historySlider", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    // loopedSlides: 10, // 실제 슬라이드 개수 이상으로!
    // initialSlide: 1,
    loopedSlides: historyData.length,
    initialSlide: 0, // ★ 0번 인덱스부터 시작
    // speed: 500,
    grabCursor: true,
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
    on: {
      init: function () {
        updateSlides(this);
      },
      slideChangeTransitionStart: function () {
        updateSlides(this);
      },
    },
  });

  function updateSlides(swiper) {
    const slides = swiper.slides;
    const activeIndex = swiper.activeIndex;

    slides.forEach((slide, i) => {
      const year = slide.querySelector(".year");
      const content = slide.querySelector("p");
      if (!year) return;

      // slidesPerView에 따라 중앙 슬라이드 감지
      let isCenter = false;
      if (swiper.params.slidesPerView === 3) {
        if ((i - activeIndex + slides.length) % slides.length === 1) {
          isCenter = true;
        }
      } else {
        // 1개 슬라이드에서는 activeIndex만 중앙
        isCenter = slide.classList.contains("swiper-slide-active");
      }

      if (isCenter) {
        slide.style.transform = "scale(1)";
        slide.style.zIndex = "10";
        year.style.opacity = "1";
        content.style.opacity = "1";
      } else {
        slide.style.transform = "scale(0.7)";
        slide.style.zIndex = "1";
        year.style.opacity = "0";
        content.style.opacity = "1";
      }
    });
  }
});
