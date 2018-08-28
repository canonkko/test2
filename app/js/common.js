$(function() {

  $(".roadmap__item").click(function() {
  	$(this).addClass('active').siblings().removeClass('active');
  });

});
