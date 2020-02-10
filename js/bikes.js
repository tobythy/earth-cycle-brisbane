$(document).ready(function() {

  $('.color-choose input').on('click', function() {
      var bikesColor = $(this).attr('data-image');

      $('.active').removeClass('active');
      $('.left-column img[data-image = ' + bikesColor + ']').addClass('active');
      $(this).addClass('active');
  });

});
