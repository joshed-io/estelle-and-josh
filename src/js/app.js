// JS Goes here - ES6 supported

var $ = window.jQuery;

$(document).ready(function() {
  $(".carousel").slick({
    infinite: false,
    centerMode: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000
  });

  $(".get-married h1").animate({
    marginLeft: "0px"
  }, {
    duration: 1500,
    done: function() {
      $(".i-left, .i-right").css({
        visibility: "visible"
      });
      $(".i-right, .i-left").animate({
        left: 0
      }, {
        duration: 1000,
        done: function() {
          window.confettify();
        }
      });
    }
  });
});
