var main = function() {
  $('.notification').click(function() {
    $(this).toggleClass('active');
  });

  $('.more-btn').click(function() {
    $(this).next().toggle();
  });

  $('.share').click(function() {
    $(this).next().toggle();
  });
};

$(document).ready(main); 
