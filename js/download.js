$(function () {
  // ScrollReveal().reveal(
  //   ".part_singer__pic12,.part_singer__pic13,.part_singer__pic17,.part_singer__pic19,.part_singer__pic20", {
  //     distance: "50px",
  //     duration: 500,
  //     easing: "ease-out",
  //     interval: 100,
  //     origin: "bottom",
  //   }
  // );

  // $(".part_singer__pic12,.part_singer__pic13,.part_singer__pic17,.part_singer__pic19,.part_singer__pic20")

  $(".download-list .download_list__item").mouseover(function () {
    $(this).addClass("current").siblings().removeClass("current");
  });

  $(".download-list .download_list__item").mouseout(function () {
    $(this).removeClass("current");
  });

  $(".download-list .download_list__item").click(function () {
    $(this).addClass("home").siblings().removeClass("home");
    var index = $(this).index();
    $(".wrap .wrap-item").eq(index).fadeIn(200).siblings().hide();
  });

  var picT = $('.part_singer').offset().top / 2;
  var picB = picT + $('.part_singer').height();
  $(window).on("scroll", function () {
    var topW = $(document).scrollTop();
    var top1 = $(".part_singer").offset().top;
    var top2 = $(".part_lyric").offset().top;
    var top3 = $(".part_like").offset().top;
    var top4 = $(".part_synchro").offset().top;
    if (topW > top1) {
      // $('.x').fadeOut().fadeIn()
    }
    if (topW > top2) {
      $(".lyric_phonebox").fadeIn(1000);
      $(".lyric_phone").fadeIn(2000);
      $(".lyric_phone2").fadeIn(4000);
    }
    if (topW >= top3) {
      $(".part_like__phone").fadeIn(1000);
      $(".like_phone").fadeIn(1000);
      $(".like_phonebox").fadeIn(1000);
    }
    if (topW >= top4) {
      $(".part_synchro__mac").fadeIn(2000);
      $(".part_synchro__phone").fadeIn(2000);
    }
    if (window.pageYOffset >= picT && window.pageYOffset <= picB) {
      fn();
    }
  });

  function fn() {
    if (window.pageYOffset >= picT && window.pageYOffset <= picB) {
      $(".part_singer__item").each(function (i, e) {
        switch (i % 6) {
          case 0:
            $(e).children().stop().fadeIn(700);
            break;
          case 1:
            $(e).children().delay(200).fadeIn(600);
            break;
          case 2:
            $(e).children().delay(400).fadeIn(400);
            break;
          case 3:
            $(e).children().delay(600).fadeIn(500);
            break;
          case 4:
            $(e).children().delay(800).fadeIn(800);
            break;
          case 5:
            $(e).children().delay(1000).fadeIn(800);
            break;
        }
      })
    }
  }

  fn()

});