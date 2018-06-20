// Print dimensions - good to keep ratios as variables throughout!
var cardH = 400;
var cardW = Math.round(cardH*1.636); // maintains aspect ratio throughout

// additional bleed and padding %
// use native JavaScript object Math to round - can't have decimals for pixels
var bleedPadW = Math.round(cardW*0.05);
var bleedPadH = Math.round(cardH*0.05);

// dimensions for bleed area
var bleedXmin = 0;
var bleedXmax = cardW + (bleedPadW*2);
var bleedYmin = 0;
var bleedYmax = cardH + (bleedPadH*2);

// dims for centered card area
var cardXmin = 0 + bleedPadW;
var cardXmax = cardW;
var cardYmin = 0 + bleedPadH;
var cardYmax = cardH;

// dims for centered padding area
var padXmin = cardXmin + bleedPadW;
var padXmax = cardXmax - bleedPadW*2;
var padYmin = cardYmin + bleedPadH;
var padYmax = cardYmax - bleedPadH*2;


function setup() {
	createCanvas(bleedXmax, bleedYmax); //width and height of my canvas
	fill("darkgrey");
	rect(bleedXmin, bleedYmin, bleedXmax-1, bleedYmax-1); // minus one to make it visible inside canvas
	fill("dimgrey");
	rect(cardXmin, cardYmin, cardXmax, cardYmax); // centered
	fill("lightgrey");
	ellipse(360, 220, 620, 420); // centered
	background(15, 25, 255, 10);
	noStroke();

	// careful! see textSize is used by p5.js library, so don't name it as a var
	var fontSizeA = Math.round(cardH/10);
	fill(55);
	textSize(36);
	textStyle(BOLD);
	textFont('Blackletter');
	text("Shih Chien University", padXmin+bleedPadW, padYmax*0.4)
	var fontSizeNorm = Math.round(cardH/14); // cmaintain aspect ratio with text too
	fill(75);
	textSize(30);
	textFont('MV Boli');
	text("Yumi Wang", padXmin+bleedPadW, padYmax*0.55);
	fill(0, 102, 153); // note color values - try to improve with cymk-style colors
    textSize(26);
	text("International Business", padXmin+bleedPadW, (padYmax*0.55)+fontSizeA);
	fill(0, 102, 153, 51); // note 4th value is alpha (transparency)
	text("P: 0972860609", padXmin+bleedPadW, (padYmax*0.55)+(fontSizeA*2));
	fill(102, 0, 153, 51);
	text("E: yooxala4286000@gmail.com", padXmin+bleedPadW, (padYmax*0.55)+(fontSizeA*3));
	fill(102, 153, 0, 51);
	text("", padXmin+bleedPadW, (padYmax*0.55)+(fontSizeA*4));

	// create graphic for CEO figure
	fill(170, 80, 100, 80);
	rectMode(CENTER); // center the rect at a location kind of like a circle instead of begining at a corner
	arc(550, 110, 180, 200, 0, PI + QUARTER_PI, PIE);
	fill(0, 0, 220, 30);
	quad(padXmax - (bleedPadW*3), padYmin + (bleedPadH*1.2), padXmin*5, padYmin, padXmin+(bleedPadW*3), padYmax*3, padXmin+bleedPadW, padYmax*1.2);
	
var img = createImage(50, 40);
img.loadPixels();
for (var i = 0; i < img.width; i++) {
  for (var j = 0; j < img.height; j++) {
    img.set(i, j, color(50, 50, 130, (i % img.width) * 2));
  }
}
img.updatePixels();
image(img, 17, 17);
image(img, 34, 34);

}

function draw() {


}