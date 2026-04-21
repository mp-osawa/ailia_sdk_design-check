$(document).ready(function(){
  if (window.matchMedia('(max-width: 1023px)').matches) {

    $('.spNavBtn').on('click', function(){
      $('.navArea').toggleClass('active');
      $(this).toggleClass('active');

      if ($('.navArea').hasClass('active')) {
        $('.navArea .navList li').each(function(i){
          var $li = $(this);
          setTimeout(function(){
            $li.addClass('visible');
          }, i * 80);
        });
      } else {
        $('.navArea .navList li').removeClass('visible');
      }

      return false;
    });

  }
});