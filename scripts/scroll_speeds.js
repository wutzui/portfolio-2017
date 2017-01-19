$(document).ready(function(){
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

	//click arrow to about div
	$('#scroll-down-arrow').click(function(){
    	$('body,html').animate({
        	scrollTop: $("#about-me-title").offset().top - 300
    	}, 500);
	})


	$('.project-li').click(function(){
		var scrollAnchor = $(this).attr('data-scroll'),
            scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top - 28;

    	$('body,html').animate({
        	scrollTop: scrollPoint
    	}, 600);

    	return false;
	})
})