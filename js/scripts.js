(function($) {
	"use strict";


    


    // $('#header').next().html('<div style="height: 103px"></div>');


    var width = $(window).width();
    var shrinkHeader = 300;

    var shrink = $('#header').next();

	shrink.css('margin-top', 103);

    if ((width>=768)) {
    	

	    // $('.shrinkHeader').css('margin-top', 103);

	    $(window).scroll(function() {
	        var scroll = getCurrentScroll();
	        if (scroll >= shrinkHeader) {
	            $('.header').addClass('shrink');
	        } else {
	            $('.header').removeClass('shrink');

	        }
	    });
    }

    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }
})(jQuery);

(function($) {
	"use strict";

	// var easing = 'jswing';

	var RedQ = {

		redQ_init : function() {
			// RedQ.redQ_nav_hover();
			RedQ.redQ_small_submenu();
			// RedQ.redQ_navbar_toggle();
		},

		// redQ_nav_hover : function() {
		// 	$('.dropdown').on('mouseenter', function() {
		// 		var self = $(this);

		// 		self.find('.dropdown-menu').stop().slideDown(300, easing);
		// 	});

		// 	$('.dropdown').on('mouseleave', function() {
		// 		var self = $(this);

		// 		self.find('.dropdown-menu').stop().slideUp(300, easing);
		// 	});
		// },
		redQ_small_submenu: function() {
			var sel = $('li.dropdown ul.sub-menu li.dropdown');
			sel.addClass('has-caret');
			sel.append('<span class="sub-caret fa fa-caret-right"></span>');

			// var caret = $('.has-caret').on('click', function(e) {
			// 	e.preventDefault();
			// 	console.log('work');
			// 	$(this).find('.sub-menu').css('display', 'block');
			// });
		},
		redQ_navbar_toggle: function() {
			// $('.navbar-toggle').on('click', function() {
			// 	console.log('hello');
			// 	$('.collapse.navbar-collapse').toggleClass('in');
			// });
		},


	};

	RedQ.redQ_init();

})(jQuery);


 $(document).ready(function(){
    $(".video-embed").fitVids();
  });