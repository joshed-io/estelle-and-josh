// JS Goes here - ES6 supported

var $ = window.jQuery;

$(document).ready(function() {
  $(".carousel").slick({
  });

  $(".get-married").animate({
    marginLeft: "0px"
  }, {
    duration: 1500,
    done: function() {
      window.confettify();
    }
  });
});
