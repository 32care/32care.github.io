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
								jQuery(document).ready(function($) {
				  var alterClass = function() {
				    var ww = document.body.clientWidth;
				    if (ww < 991) {
				      $('.single-footer-widget').addClass('row');
				    } else if (ww >= 767) {
				      $('.single-footer-widget').removeClass('row');
				    };
				  };
				  $(window).resize(function(){
				    alterClass();
				  });
				  //Fire it when the page first loads:
				  alterClass();
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

   
   		$( 'body').on( 'click','#login-otp', function( e ) {
   			var isChckd = $( '#login-otp')[0].checked;

   			if(isChckd){
   				$( '#otp' ).toggleClass('d-none');
   				$( '#password' ).toggleClass('d-none');
   				$( '.forgot-p' ).toggleClass('d-none');
   				$( '.remember-me' ).toggleClass('d-none');
   			} else {
   				$( '#otp' ).toggleClass('d-none');
   				$( '#password' ).toggleClass('d-none');
   				$( '.forgot-p' ).toggleClass('d-none');
   				$( '.remember-me' ).toggleClass('d-none');
   			}

     	} );

   		// Get the button that opens the modal and bind event
   		$( 'body').on( 'click','.my-find-dentist', function( e ) {
			var modal = document.getElementById("myModal");    			// Get the modal
			modal.style.display = "block";
     	});

     	// Get the button that opens the modal and bind event
   		$( 'body').on( 'click','.close-find', function( e ) {
			var modal = document.getElementById("myModal");    			// Get the modal
			modal.style.display = "none";
     	});

});

				$(".join ").on('click', function(e){
				     $(this).addClass('my-focused-link')
				      $(".wwd").addClass('d-none');
				      $(".cpp").removeClass('d-none');
				      $(".find").removeClass('my-focused-link')

				 });

				$(".find ").on('click', function(e){
				      $(this).addClass('my-focused-link')
				      $(".wwd").removeClass('d-none');
				      $(".cpp").addClass('d-none');
				      $(".join").removeClass('my-focused-link')

				 });



		$(".Get-started  ").on('click', function(e){   
        	$(".primary-btn2").addClass(" primary-btn-clicked ");
        	$(".Get-started span").toggleClass("fa-caret-down       fa-tooth");
    	})

		$(".close  ").on('click', function(e){   
        	$(".primary-btn2").removeClass(" primary-btn-clicked ");
        	$(".primary-btn5").removeClass(" primary-btn-clicked ");
        	$(".Get-started span").toggleClass("fa-caret-down       fa-tooth");
    	})

    	$(".Get-started2  ").on('click', function(e){   
        	$(".primary-btn5").addClass(" primary-btn-clicked ");
        	$(".Get-started span").toggleClass("fa-caret-down       fa-tooth");
    	})



/*$(".Get-started, .confirm-booking, .close-booking   ").on('click', function(e){
     
      $("#appoinment").toggleClass('appoinment-hide');
      $("#overlay").toggleClass('overlay');

 });

$(".appoinment2   ").on('click', function(e){
      
      $("#appoinment").toggleClass('appoinment-hide');
      
      $("#overlay").toggleClass('overlay');
       $("#booking-btn ").removeClass("  hide-it");
       $("#confmed-btn").addClass(" hide-it");
       $("#booking-btn ").addClass(" zi-up");
       $(" #new-book").addClass(" hide-it ");


 });


$(".Get-started2 , .close-consult, .consult-now  ").on('click', function(e){
      
      $("#consult").toggleClass('consult-hide');
      $("#overlay").toggleClass('overlay');

 });



$(".Get-started ").on('click', function(e){   
        $("#booking-btn").toggleClass("   zi-up ");
        $(".Get-started span").toggleClass("fa-caret-down       fa-tooth");

       
});

$("#new-book").on('click', function(e){ 
      $("#appoinment").toggleClass('appoinment-hide');
      $("#overlay").toggleClass('overlay');  
        $("#booking-btn").toggleClass(" hide-it zi-up");
        $("#confmed-btn , #new-book").toggleClass(" hide-it ");
        $(".Get-started span").toggleClass("fa-caret-down  fa-tooth");

       
});

$(".Get-started2 ").on('click', function(e){   
        $("#consult-btn").toggleClass("   zi-up ");
        $(".Get-started span").toggleClass("fa-caret-down       fa-tooth");
         
       
});



$(".confirm-booking").on('click', function(e){   
         
         $(".Get-started span").toggleClass("fa-caret-down    fa-tooth");
          $("#booking-btn ").toggleClass(" hide-it zi-up ");
          $("#confmed-btn , #new-book").toggleClass(" hide-it ");
          
         
        

});
$(".consult-now").on('click', function(e){   
         $(".Get-started2").toggleClass("zi-up    ");
         $(".Get-started2 span").toggleClass("fa-caret-down    fa-tooth");
        
        

});



$('.close-booking').on('click',   function(e){
			$(".Get-started span").toggleClass("fa-caret-down    fa-tooth");
			$("#booking-btn").toggleClass("zi-up");

			

});
$('.close-consult').on('click',   function(e){
			$(".Get-started2 span").toggleClass("fa-caret-down    fa-tooth");
			$("#consult-btn").toggleClass("zi-up");

			

});*/

$('.primary-btn').on('click',   function(e){
			$(".primary-btn span").removeClass("fa fa-caret-right fadeOut")
			$(".primary-btn").addClass("hide-it")
			$(".sbm-btn").removeClass("hide-it")

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


$('.menu-bar').on('click', function(){
	$('.menu-bar').toggleClass('open');
});


$('body').on("click", function(event){
	var myClickedElement = $(event.target);
    if(
    	!myClickedElement.hasClass("main-menubar") 
    	&& myClickedElement.closest(".main-menubar").length == 0
    	&& !myClickedElement.hasClass("menu-bar") 
    	&& myClickedElement.closest(".menu-bar").length == 0

    	){
        $(".main-menubar-extended").addClass("hide");
        $(".menu-bar").removeClass('open');
        
    }

});

