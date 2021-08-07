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
 });

$(".Get-started ").on('click', function(e){   
      $(".Get-started").toggleClass("primary-btn2-hide");
      $(".Get-started span").toggleClass("fa-angle-double-down ");
       $("body").toggleClass("overlay")
});

$('.close-booking').on('click', function(e) {
			$(".Get-started span").addClass("fa-angle-double-down")
			$(".Get-started").toggleClass("primary-btn2-hide")

});

$('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('whatever') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text('New message to ' + recipient)
  modal.find('.modal-body input').val(recipient)
})

