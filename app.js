alert("Welcome to Eric Peters' Prime Academy Resume")

 // open for image//
 var main = function() {
  $('.icon-menu').click(function() {
    $('.photo').animate({
      right: "0px"
    }, 200);

    $('body').animate({
      right: "285px"
    }, 200);
  });

  //close for image//
    $('.icon-close').click(function() {
    $('.menu').animate({
      right: "-285px"
    }, 200);

    $('body').animate({
      right: "0px"
    }, 200);
  });
};

$(document).ready(main);
