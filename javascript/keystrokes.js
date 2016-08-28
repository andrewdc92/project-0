/* adding this to app.js file after i hash it out, keeping separate to build out functions, testing in console.
*/
console.log('javascript works');

var stage = document.getElementById("canvas");
stage.width = STAGE_WIDTH;
stage.height = STAGE_HEIGHT; // mess around with var. definitions in app.js
														// to get canvas to the right proportions
var context = stage.getContext("2d");
context.fillStyle = "grey";
context.font = GAME_FONTS;

// before loop kicks in, gotta do the equivalent of the $document.ready function
// so the imgs can load
var bramImage = new Image(); // got ONE piece of OOP in here! creates object for Image
bramImage.ready = false;
bramImage.onload = setReady; // when Bram(img) is loaded, setReady function fires
bramImage.src = PATH_BRAM;

function setReady () {
	this.ready = true;
}

context.fillStyle = "000";
context.fillRect(0,0,stage.width,stage.height);
context.fillText(TEXT_PRELOADING, TEXT_PRELOADING_X, TEXT_PRELOADING_Y);
var preloader = setInterval(preloading, TIME_PER_FRAME);
var gameloop, currX, currY; // refers to canvas x/y coordinates

// this function also runs at the rate of TIME_PER_FRAME, keeps checking if
// Bram's image is ready to go, only will hit true when img is loaded!
function preloading () {
	if (bramImage.ready) {
		clearInterval(preloader);
	 	gameloop = setInterval(status, TIME_PER_FRAME);
	}
}

// var counter = 0; // for initialization

currX = CHAR_START_X;
currY = CHAR_START_Y;

// more definitions
function status () {
	context.fillStyle ="grey";
	context.fillRect (0,0, stage.width, stage.height);
	context.drawImage(bramImage,currX,currY,BRAM_WIDTH,BRAM_HEIGHT,BRAM_START_X,BRAM_START_Y,BRAM_WIDTH*2,BRAM_HEIGHT*2);

	currX += BRAM_WIDTH;
	if (currX >= IMG_WIDTH)
					currX = 0;
}

// 	counter++;
// 	context.fillStyle = "#AAA"; // should be a lightish neutral color
// 	context.fillRect(0, 0, stage.width, stage.height);
// 	context.fillStyle = "white";
// 	context.fillText("Time allotted: "+counter, COUNTER_X, COUNTER_Y);
// }
//
//
// function preloading()
// {
// 	if (bramImage.ready)
// 	{
// 		clearInterval(preloader);
//
// 		//game initiation
// 		facing = "East"; //N = North, E = East, S = South, W = West
// 		isMoving = false;
//
// 		gameloop = setInterval(update, TIME_PER_FRAME);
// 		document.addEventListener("keydown",keyDownHandler, false); // when a key is pressed
// 		document.addEventListener("keyup",keyUpHandler, false); // when a key is released
// 		// could use jquery, but since referencing whole document probably not going to use it
// 	}
// }
//
//
// function keyDownHandler(event)
// {
// 	var keyPressed = String.fromCharCode(event.keyCode);
// 	// converts those obscure ASCII codes to string values
// 	// WDSA is the equivalent of the compass directions
// 	if (keyPressed == "W")
// 	{
// 		facing = "N";
// 		isMoving = true;
// 	}
// 	else if (keyPressed == "D")
// 	{
// 		facing = "E";
// 		isMoving = true;
// 	}
// 	else if (keyPressed == "S")
// 	{
// 		facing = "S";
// 		isMoving = true;
// 	}
// 	else if (keyPressed == "A")
// 	{
// 		facing = "W";
// 		isMoving = true;
// 	}
// }
//
// function keyUpHandler(event)
// {
// 	var keyPressed = String.fromCharCode(event.keyCode);
//
// 	if ((keyPressed == "W") || (keyPressed == "A") ||
// 		(keyPressed == "S") || (keyPressed == "D"))
// 	{
// 		isMoving = false;
// 	}
// }
