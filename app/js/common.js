$(function() {

  $(".roadmap__item").click(function() {
  	$(".roadmap__list-row").removeClass('active');
  	$(".roadmap__item").removeClass('active');
  	$(this).parents(".roadmap__list-row").addClass('active');
  	$(this).addClass('active').siblings().removeClass('active');
  });

});
