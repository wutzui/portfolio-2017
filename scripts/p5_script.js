window.onload = function(){


	var points = [];
	var x, y;
	var lines_length = 8;
	var x_spacing = y_spacing = lines_length * 2 - 2;

	function setup(){
		
		var myCanvas = createCanvas(windowWidth, windowHeight);
		myCanvas.parent('myCanvas');

		colorMode(RGB, 100);

		for(x = 0; x < width / x_spacing; x++){
			for(y = 0; y < height / y_spacing; y++){
				points.push(createVector(x * x_spacing, y * y_spacing));
			}
		}
	}

	function draw(){
		background(100);
		points.forEach(function(point){
			drawVectorFromPoint(point);
		})
	}

	function drawVectorFromPoint(anchorLocation){
		var mouse = createVector(mouseX, mouseY);
		var lineVector = p5.Vector.sub(mouse, anchorLocation); //sub = subtract. (a, b)=> a-b
		lineVector.setMag(lines_length);
		var hue = map(mouseX, 0, width, 40, 100);
		var vectorStroke = map(mouseY, 0, height, 1, 6);
		strokeWeight(vectorStroke);
		stroke(hue, 100, 100);
		line(anchorLocation.x, 
			 anchorLocation.y,
			 anchorLocation.x + lineVector.x, 
			 anchorLocation.y + lineVector.y);
	}

};

