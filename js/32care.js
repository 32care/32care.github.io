$(document).ready(function(){
	$(window).scroll(function () {
			if ($(this).scrollTop() > 50) {
				$('#back-to-top').fadeIn();
			} else {
				$('#back-to-top').fadeOut();
			}

			if ($(this).scrollTop() > 100) {
				$('body').addClass('win-scrolled-100');
			} else {
				$('body').removeClass('win-scrolled-100');
			}

		});
		// scroll body to 0px on click
		$('#back-to-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 1000);
			return false;
		});
});
$(".Get-started, .confirm-booking").on('click', function(e){
      /*e.preventDefault();//*/
      $("#appoinment").toggleClass('appoinment-hide');

     
  });

$(".Get-started").on('click', function(e){
      
      $(".Get-started").toggleClass("primary-btn2-hide");
      $("span", this).toggleClass("fa-angle-double-down fa-angle-double-up");
      
  });
