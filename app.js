alert("Welcome to Eric Peters' Prime Academy Resume")
var main = function() {
  $('.bestbuy').click(function() {
    $('.bestbuy').removeClass('current');
    $('.description').hide();

    $(this).addClass('current');
    $(this).children('.description').show();
  });


$(document).ready(main);
