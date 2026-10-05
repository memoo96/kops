var width = $(window).width();

$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();

  // $(function () {
  //     $("ul.dropdown-menu [data-toggle='dropdown']").on("click", function (event) {
  //         event.preventDefault();
  //         event.stopPropagation();

  //         $(this).siblings().toggleClass("show");

  //         if (!$(this).next().hasClass('show')) {
  //             $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
  //         }
  //         $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
  //             $('.dropdown-submenu .show').removeClass("show");
  //         });

  //     });
  // });

  $(document).on("click", ".dropdown-menu", function (e) {
    e.stopPropagation();
  });

  $(".dropdown").hover(
    function () {
      $(this).addClass("show");
      $(this).find(".dropdown-menu").addClass("show");
    },
    function () {
      $(this).removeClass("show");
      $(this).find(".dropdown-menu").removeClass("show");
    },
  );

  $(document).on("click", function (event) {
    if ($(this).width() <= 991) {
      var $trigger = $(".navbar");
      if ($trigger !== event.target && !$trigger.has(event.target).length) {
        $("#navbarContent").removeClass("show");
        $(".navbar-toggler").addClass("collapsed");
      }
    }
  });

  var scrollButton = $(".scroll_top");
  $(window).scroll(function () {
    if ($("body").css("direction") == "ltr") {
      if ($(this).scrollTop() > 500) {
        scrollButton.css({
          opacity: "1",
          visibility: "visible",
          left: "15px",
        });
      } else {
        scrollButton.css({
          opacity: "0",
          visibility: "hidden",
          left: "0px",
        });
      }
    } else {
      if ($(this).scrollTop() > 500) {
        scrollButton.css({
          opacity: "1",
          visibility: "visible",
          right: "15px",
        });
      } else {
        scrollButton.css({
          opacity: "0",
          visibility: "hidden",
          right: "0px",
        });
      }
    }
  });

  scrollButton.click(function () {
    $("html,body").animate({ scrollTop: 0 }, 1000);
  });

  $(window).scroll(function () {
    if ($(this).width() > 991) {
      var sc = $(this).scrollTop();
      if (sc > 10) {
        $(".headSection").css({ display: "none" });
        $(".navbar").css({
          top: "0",
        });
      } else {
        $(".headSection").css({ display: "block" });
        $(".navbar").css({
          top: "43px",
        });
      }
    } else {
      var sc = $(this).scrollTop();
      if (sc > 10) {
        $(".headSection").css({ display: "block" });
        $(".navbar").css({
          top: "0",
        });
        $(".navbar-light .navbar-toggler").css({
          top: "15px",
        });
      } else {
        $(".headSection").css({ display: "block" });
        $(".navbar").css({
          top: "43px",
        });
        $(".navbar-light .navbar-toggler").css({
          top: "55px",
        });
      }
    }
  });

  $(window).resize(function () {
    if ($(this).width() != width) {
      if ($(this).width() > 991) {
        var sc = $(this).scrollTop();
        if (sc > 10) {
          $(".headSection").css({ display: "none" });
          $(".navbar").css({
            top: "0",
          });
        } else {
          $(".headSection").css({ display: "block" });
          $(".navbar").css({
            top: "43px",
          });
        }
      } else {
        var sc = $(this).scrollTop();
        if (sc > 10) {
          $(".headSection").css({ display: "block" });
          $(".navbar").css({
            top: "0",
          });
          $(".navbar-light .navbar-toggler").css({
            top: "15px",
          });
        } else {
          $(".headSection").css({ display: "block" });
          $(".navbar").css({
            top: "43px",
          });
          $(".navbar-light .navbar-toggler").css({
            top: "55px",
          });
        }
      }
      width = $(window).width();
    }
  });

  $(document).ready(function () {
    $("select").niceSelect();
  });
});
