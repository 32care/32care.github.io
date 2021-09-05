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
		quikr.init();
		quikr.action("my_blog_teaser_move", function(data){
			var elem = this;
			var params = data;
			quikr.applyTmpl(
				$("#my_blog_teaser").attr("url-html",
					'https://www.32care.com/' + (elem.dataset.next || elem.dataset.prev)
				)[0]
			)

			//do something.
			console.log("Go PRef",this,	 elem.dataset.next, elem.dataset.prev)
		});
});

$(".Get-started, .confirm-booking, .close-booking ").on('click', function(e){
      /*e.preventDefault();//*/
      $("#appoinment").toggleClass('appoinment-hide');
      $("#overlay").toggleClass('overlay');

 });

$(".Get-started ").on('click', function(e){   
        $("#booking-btn").toggleClass("primary-btn2-hide    primary-btn2");
        $(".Get-started span").toggleClass("fa-caret-down       fa-tooth");
       /*$("body").toggleClass("overlay")*/
});


$(".Get-started2 ").on('click', function(e){   
        $("#booking-btn").toggleClass("primary-btn2-hide    primary-btn2");
        $(".Get-started span").toggleClass("fa-caret-down       fa-tooth");
       
});



$(".confirm-booking").on('click', function(e){   
         $(".Get-started").toggleClass("primary-btn2-hide ");
         $(".Get-started span").toggleClass("fa-caret-down    fa-tooth");
          $("#booking-btn").addClass(" confmed-btn");
        

});



$('.close-booking').on('click',   function(e){
			$(".Get-started span").toggleClass("fa-caret-down    fa-tooth");
			$("#booking-btn").toggleClass("primary-btn2-hide primary-btn2");
			/*$("#confmed-btn").addClass(" confmed-btn");*/

});

$('.primary-btn').on('click',   function(e){
			$(".primary-btn span").removeClass("fa fa-caret-right fadeOut")
			$(".primary-btn").removeClass("primary-btn")
			$(".sbm-btn").addClass("sbm-btn")

});

/*
function myFunction() {
  document.getElementById("mySubmit").value = "Submitted";
}*/
/*
  $(document).ready(function() {
         
         $(".hide-menubar").click(function(){
         $(":checkbox").prop("checked", false);
         
         });*/

$('.hide-menubar').on('click',   function(e){
			$("#nav-icon1").toggleClass("open");
			

});


$(document).ready(function(){
	$('.menu-bar').click(function(){
		$(this).toggleClass('open');
	});
});

