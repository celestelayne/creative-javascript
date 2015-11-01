function setup(){
	// set up code goes here
	createCanvas(650, 480);
}

function draw(){
	// background
	background(255, 204, 0);

	// ellipse
	fill('rgb(64, 123, 255)');
	noStroke();
	ellipse(450, 190, 85, 85);
	// rectangle
	fill('rgb(226, 106, 106)');
	noStroke();
	rect(150, 150, 85, 85);

}