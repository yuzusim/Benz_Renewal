$(function () {
  const modelsData = [
    {
      name: "Sedan",
      titleTop: "S", // dt에 들어갈 텍스트
      titleBottom: "Class", // dd에 들어갈 텍스트
      icon: "./images/icon_sedan.png",
      img: "./images/sclass.png",
      specs: [
        { label: "복합연비", value: "9.9km/L[1]" },
        { label: "제로백", value: "5.0s", sub: "0에서 100 km/h 가속" },
        { label: "최고출력(ps/rpm)", value: "381 / 5,800-6,100" },
        { label: "최고 속도", value: "250 km/h", sub: "최대" },
      ],
    },
    {
      name: "SUV",
      titleTop: "G",
      titleBottom: "Class",
      icon: "./images/icon_suv.png",
      img: "./images/suv.png",
      specs: [
        { label: "1회 충전 주행거리", value: "392km[1]" },
        { label: "모터 최고 출력", value: "432kW / 5,500-6,000" },
        { label: "배터리 용량(kWh)", value: "118kWh" },
      ],
    },
    {
      name: "Hatchback",
      titleTop: "A",
      titleBottom: "Class",
      icon: "./images/icon_hatch.png",
      img: "./images/hatchback.png",
      specs: [
        { label: "복합연비", value: "12.2km/L[1]" },
        { label: "제로백", value: " 6.9s", sub: "0에서 100 km/h 가속" },
        { label: "최고출력(ps/rpm)", value: "190 / 5,000-6,100" },
        { label: "최고 속도", value: "240 km/h", sub: "최대" },
      ],
    },
    {
      name: "Coupé",
      titleTop: "CLA",
      titleBottom: "Coupé",
      icon: "./images/icon_coupe.png",
      img: "./images/coupe.png",
      specs: [
        { label: "복합연비", value: "12km/L[1]" },
        { label: "제로백", value: "6.4s", sub: "0에서 100 km/h 가속" },
        { label: "최고출력(ps/rpm)", value: "224 / 5,500-6,100" },
        { label: "최고 속도", value: "250 km/h", sub: "최대" },
      ],
    },
    {
      name: "Cabrio & Roadster",
      titleTop: "CLE",
      titleBottom: "Cabriolet",
      icon: "./images/icon_cabriolet.png",
      img: "./images/cabrio.png",
      specs: [
        { label: "복합연비", value: "10.7km/L[1]" },
        { label: "제로백", value: "4.7s", sub: "0에서 100 km/h 가속" },
        { label: "최고출력(ps/rpm)", value: "381 / 5,800-6,100" },
        { label: "최고 속도", value: "250 km/h", sub: "최대" },
      ],
    },
  ];

  // 슬라이더 생성
  const wrapper = document.querySelector(".model-slider .swiper-wrapper");

  wrapper.innerHTML = modelsData.map((model) => {
    return `
      <div class="swiper-slide">
        <div class="img-area">
          <div class="imgwrap">
            <img src="${model.img}" alt="${model.name}" />
          </div>
        </div>
        <div class="text-box">
          <dl class="bigTitle">
            <dt>${model.titleTop || ""}</dt>
            <dd>${model.titleBottom || ""}</dd>
          </dl>
          ${model.specs
            .map(
              (spec) =>
                `<dl>
                  ${spec.sub ? `<dd class="small">${spec.sub}</dd>` : ""}
                  <dt class="big">${spec.value}</dt>
                  <dd>${spec.label}</dd>
                </dl>`
            )
            .join("")}
        </div>
      </div>
    `;
  });

  // 모델 버튼 생성
  const btnWrapper = document.querySelector(".modeList");
  btnWrapper.innerHTML = modelsData
    .map(
      (model, i) =>
        `<li ${i === 0 ? "class='on'" : ""}">
        <button type="button">
          <img src="${model.icon}" alt="${model.name}" />
          <span>${model.name}</span>
        </button>
      </li>`
    )
    .join("");

  // models 슬라이더
  var mainCon2 = new Swiper(".model-slider", {
    slidesPerView: 1,
    spaceBetween: 0,
    effect: "fade",
    fadeEffect: { crossFade: true },
    // navigation: {
    //   nextEl: ".nextPointer",
    //   prevEl: ".prevPointer",
    // },
    // pagination: {
    //   el: ".model-slider .pagination",
    //   clickable: true,
    // },
    loop: true,
    observer: true,
    observeParents: true,

    on: {
      slideChange: function () {
        var idx = this.realIndex; // 0~4
        $(".modeList li").eq(idx).addClass("on").siblings().removeClass("on");
      },
    },
  });

  $(".modeList button").on("click mouseenter", function () {
    var index = $(this).parent().index();
    $(this).parent().addClass("on").siblings().removeClass("on");
    mainCon2.slideToLoop(index, 800);
  });

  // modeList 모바일 슬라이더 추가
  let modeSwiper = null;

  function initModeSwiper() {
    if (window.innerWidth <= 767 && !modeSwiper) {
      $(".modeList").addClass("swiper-wrapper");
      $(".modeList li").addClass("swiper-slide");

      if (!$(".modeList").parent().hasClass("modeListSwiper")) {
        $(".modeList").wrap('<div class="modeListSwiper swiper"></div>');
      }

      modeSwiper = new Swiper(".modeListSwiper", {
        slidesPerView: "auto",
        spaceBetween: 12,
        freeMode: true,
      });
    }

    if (window.innerWidth > 767 && modeSwiper) {
      modeSwiper.destroy();
      modeSwiper = null;

      $(".modeList li").removeClass("swiper-slide");
      $(".modeList").removeClass("swiper-wrapper");

      if ($(".modeList").parent().hasClass("modeListSwiper")) {
        $(".modeList").unwrap(".modeListSwiper");
      }
    }
  }

  initModeSwiper();
  window.addEventListener("resize", initModeSwiper);
});
