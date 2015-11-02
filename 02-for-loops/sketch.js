var setup = function(){
	// create canvas(width, heigth)
	createCanvas(600, 400);
	background('rgb(241, 169, 160)');
};

var draw = function(){
	strokeWeight(10);
	stroke('rgb(164, 115, 109)');

	// F0ur Lines, No Loop
	// line(200, 100, 200, 300);
	// line(250, 100, 250, 300);
	// line(300, 100, 300, 300);
	// line(350, 100, 350, 300);
	// line(400, 100, 400, 300);

	// Horizontal Loop
	for (var i = 0; i < 10; i++){
		line(200 + 20*i, 100, 200 + 20*i, 300);
	}

	// Vertical Loop
	for (var i = 0; i < 9; i++){
		line(180, 120 + 20*i, 400, 120 + 20*i);
	}

	// Looping Circles
	// for (var i = 50; i < width; i+=50) {
	// 	for (var j = 50; j < height; j+=50){
	// 		fill('rgb(241, 190, 184)')
	// 		strokeWeight(4);
	// 		ellipse(i, j, 20, 20);
	// 	}
	// }

	var boardEl = document.getElementById('defaultCanvas0');
	boardEl.classList.add('container')
};