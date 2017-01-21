$(document).ready(function(){
// =================================================================================
// scroll speed
// =================================================================================
	var scrollItem = $('.scroll-speeds');
	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();
		scrollItem.each(function(){
			var $this = $(this);
			var scrollspeed = parseInt($this.data('scroll-speed')),
							  offset = - scrollTop / scrollspeed;
							  $this.css('transform', 'translateY(' + offset + 'px)');
							  // $this.css('transition-timing-function', 'ease');
		})
	})

// =================================================================================
// click arrow to about div
// =================================================================================
	$('#scroll-down-arrow').click(function(){
    	$('body,html').animate({
        	scrollTop: $("#about-me-title").offset().top - 280
    	}, 500);
	})

// =================================================================================
// project list click scroll to divs
// =================================================================================
	$('.project-li').click(function(){
		var scrollAnchor = $(this).attr('data-scroll'),
            scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top - 100;

    	$('body,html').animate({
        	scrollTop: scrollPoint
    	}, 600);

    	return false;
	})

// =================================================================================
// scroll top and button fixed
// =================================================================================
	$(window).scroll(function(){
		var windowscroll = $(window).scrollTop();
		if(windowscroll >= 300) {
			$('#scroll-top-button').removeClass('absolute');
			$('#scroll-top-button').addClass('fixed');
		} else {
			$('#scroll-top-button').removeClass('fixed');
			$('#scroll-top-button').addClass('absolute');
		}
	})
	$('#scroll-top-button').click(function(){
		$('body,html').animate({
        	scrollTop: 0,
        	smooth: true
    	}, 800);
	})

})