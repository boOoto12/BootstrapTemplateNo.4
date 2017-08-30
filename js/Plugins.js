/* Bootstrap Template No.4 */

$(document).ready(function () {
    
    "use strict";

	 $(window).scroll(function () { if ($(this).scrollTop() >= 100 ) 
 
 
 {
	 $(".navbar").addClass('nav-back');

	 
 } else
 
 
 {  $(".navbar").removeClass('nav-back');

           
 }
							                                  
});
	
	$('.project ul li').click(function(){
		
		$(this).addClass('selected').siblings('li').removeClass('selected');
		window.console.log($(this).data('class'));
	  $('.project .row .col-md-4').hide();
	  $('.' + $(this).data('class')).fadeTo(1200, 1);
	});
	
	$('.carousel .carousel-inner .icon-down').click(function(){
		
		$("html,body").animate({scrollTop: 650}, 2000);
	});
	
	
	$(window).scroll(function () { if (
        
        $(this).scrollTop() >= 300
        
    ) { $('.scroll-top').fadeIn();  } else { $('.scroll-top').fadeOut();
           
             }
                                  
        });
	
	$('.scroll-top').click(function(){
						   
		$("html,body").animate({scrollTop: 0}, 1000);					   
   });
	
	
	// Start Nice Scroll 
	
	$("body").niceScroll({
		cursorcolor:"#4bc5db",
		cursorwidth:"5px",
		cursorborderradius: "100px",
		cursorborder: "0",
		
		});
	
});



	
		        // Loading Page 
    
		$(window).on('load', function () {

			"use strict";

			$(".loading-overlay .spinner").fadeOut(2000, function(){
				
				
				
				$('.loading-overlay').fadeOut(1000);
			});
												  
												  
												   
		
		});


// Navbar White
 $(window).scroll(function () { if ($(this).scrollTop() >= 20 ) 
 
 
 {
	 $(".navbar-default").css("backgroundColor", "#FFF").end();
	 $(".navbar-inverse .navbar-toggle .icon-bar").css("backgroundColor", "#555").end();
	 
 } else
 
 
 {
	 $(".navbar-default").css("backgroundColor", "transparent").end();
  	$(".navbar-inverse .navbar-toggle .icon-bar").css("backgroundColor", "#FFF").end();
           
 }
							                                  
});






