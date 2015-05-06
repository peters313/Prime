alert("Welcome to Eric Peters' Prime Academy Resume")

 // open for image//
 var main = function() {
  $('.icon-menu').click(function() {
    $('.bestbuy').animate({
      right: "0px"
    }, 200);

    $('body').animate({
      right: "285px"
    }, 200);
  });

  //close for image//
    $('.icon-close').click(function() {
    $('.bestbuy').animate({
      right: "-285px"
    }, 200);

    $('body').animate({
      right: "0px"
    }, 200);
  });
};
var myWindow = window.open("", "", "width=200, height=100");

$(document).ready(main);
