window.onload = function(){

	// =================================================================================
	// Logo Area mouseover-mouseleave functions.
	// =================================================================================

	// define div in logoArea.
	var logoTextContainer = document.getElementById('logo-text-container');
	var logoBorder = document.getElementById('logo-border');
	var logoBorder_dot = document.getElementById('logo-border-dot');
	var logoBorderRotat_dot = document.getElementById ('logo-border-rotate-dot');
	var logoText = document.getElementById('logo-text');

	// function when mouseover.
	var rotateLogoDot_in = function(){
		logoBorder.style.backgroundColor = 'black';
		logoBorder_dot.style.backgroundColor = 'transparent';
		logoBorder_dot.style.border = 'solid 0px transparent';
		logoBorder_dot.style.transition = '0.5s ease-in';
		logoBorderRotat_dot.style.backgroundColor = 'black';
		logoBorderRotat_dot.style.transition = '0.5s ease-in';
		logoText.style.transform = 'skewX(5deg)';
		logoText.style.color = 'white';
	}

	// function when mouseout.
	var rotateLogoDot_out = function(){
		logoBorder.style.backgroundColor = 'white';
		logoBorder_dot.style.backgroundColor = 'white';
		logoBorder_dot.style.border = 'solid 1px white';
		logoBorder_dot.style.transition = '0.5s ease-in';
		logoBorderRotat_dot.style.backgroundColor = 'white';
		logoBorderRotat_dot.style.transition = '0.5s ease-in';
		logoText.style.transition = '0.5s ease-in';
		logoText.style.transform = 'skewX(-5deg)';
		logoText.style.color = 'black';
	}

	// addEventlistener for mouse movements.
	logoTextContainer.addEventListener('mouseover', rotateLogoDot_in, false);
	logoTextContainer.addEventListener('mouseleave', rotateLogoDot_out, false);
}
