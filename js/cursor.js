$(function () {
  // var cursor = $(".cursor"); // 기본 커서
  var cursorDrag = $(".cursor-dragPointer");
  var cursorClick = $(".cursor-clickPointer");
  var cursorPlay = $(".cursor-playPointer");

  if (cursorDrag.length && $(window).width() >= 767) {
    var posX = 0,
      posY = 0;
    var mouseX = 0,
      mouseY = 0;
    TweenMax.to({}, 0.01, {
      repeat: -1,
      onRepeat: function () {
        posX += (mouseX - posX) / 9;
        posY += (mouseY - posY) / 9;
        TweenMax.set(cursorDrag, {
          css: {
            left: mouseX - 30,
            top: mouseY - 30,
          },
        });
      },
    });

    // 커서가 활성화되는 영역
    $("html,body")
      .on("mousemove", function (e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
      })
      .on("mouseenter", function (e) {
        $(".cursor").css("opacity", 1);
      })
      .on("mouseleave", function (e) {
        $(".cursor").css("opacity", 0);
      });

    // 특정 클래스에 HOVER하면 STYLE이 바뀝니다
    $(".drag__area")
      .on("mouseenter", function () {
        cursorDrag.addClass("active");
      })
      .on("mouseleave", function () {
        cursorDrag.removeClass("active");
      });

    $(".scrollZone")
      .on("mouseenter", function () {
        cursor.addClass("scroll");
      })
      .on("mouseleave", function () {
        cursor.removeClass("scroll");
      });
  }
});
