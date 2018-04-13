$(document).ready(function() {
  var footerLeftCol = ".footer__nav";
  var mobileNavContainer = ".main-header__navigation--mobile";

  function showMobileNav(widthValue) {
    $(".mobile-nav").animate({ width: widthValue }, 800);
  }

  function mobileNav(delayStart, delayEnd, marginWidth, hide) {
    var delay_time = delayStart;
    $(".mobile-nav li").each(function(idx, li) {
      $(li)
        .delay(delay_time)
        .animate({ marginLeft: marginWidth, opacity: hide }, 500);
      delay_time -= delayEnd;
    });
  }

  $(footerLeftCol).click(function() {
    var $el = $(this);
    var isSelected = $el.attr("data-selected");

    function animateFooterNav(val) {
      $(footerLeftCol + " ul").animate({ height: val }, 500);
    }

    var firstFn = function() {
      animateFooterNav("170px");
      $(this)
        .find("strong")
        .addClass("animate-carrot");
    };

    var secondFn = function() {
      animateFooterNav("0");
    };

    if (isSelected != "true") {
      firstFn();
      $el.attr("data-selected", true);
    } else {
      secondFn();
      $el.attr("data-selected", false);
    }
  });

  $(mobileNavContainer).click(function(event) {
    var $el = $(this);
    var isSelected = $el.attr("data-selected");
    var firstFn = function() {
      $(mobileNavContainer)
        .find("span")
        .addClass("animate-close");

      showMobileNav("100vw");
      mobileNav(0, 500, "0", 1);
    };

    var secondFn = function() {
      $(mobileNavContainer)
        .find("span")
        .removeClass("animate-close");

      showMobileNav(0);
      mobileNav(0, 500, "-120px", 0);
    };

    if (isSelected != "true") {
      firstFn();
      $el.attr("data-selected", true);
    } else {
      secondFn();
      $el.attr("data-selected", false);
    }
  });
});

$(document).on("scroll", function() {
  var homepagePortHeader = ".homepage-port-header";
  var frontScreenShotImage = ".screenshot-front-image";
  var backScreenShotImage = ".screenshot-back-image";
  var gridContainerSec4 = ".screenshot-container";
  var animateFadeInTop = "animate-fade-in-top";
  var animateFadeInTopDelay = "animate-fade-in-top-delay";
  var animateFadeInBottom = "animate-fade-in-bottom";
  var animateMoveInRotate = "move-in-rotate";

  $(".svg-box")
    .children()
    .each(function(i, elm) {
      if ($(elm).visible(true, true)) {
        $(this).addClass(animateMoveInRotate);
      } else {
        $(this).removeClass(animateMoveInRotate);
      }
    });

  if ($(gridContainerSec4).visible(true)) {
    $(homepagePortHeader).addClass(animateFadeInBottom);
    $(frontScreenShotImage).addClass(animateFadeInTop);
    setTimeout(function() {
      $(backScreenShotImage).addClass(animateFadeInTop);
    }, 200);
    $(this)
      .delay(200)
      .queue(function() {
        $(backScreenShotImage).addClass(animateFadeInTop);
      });
  } else {
    $(homepagePortHeader).removeClass(animateFadeInBottom);
    $(frontScreenShotImage).removeClass(animateFadeInTop);
    $(backScreenShotImage).removeClass(animateFadeInTop);
  }
});
