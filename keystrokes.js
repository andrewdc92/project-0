/* adding this to app.js file after i hash it out, keeping separate to build out functions, testing in console.
*/
console.log('javascript works');



function preloading()
{
	if (charImage.ready)
	{
		clearInterval(preloader);

		//game initiation
		facing = "East"; //N = North, E = East, S = South, W = West
		isMoving = false;

		gameloop = setInterval(update, TIME_PER_FRAME);
		document.addEventListener("keydown",keyDownHandler, false); // when a key is pressed
		document.addEventListener("keyup",keyUpHandler, false); // when a key is released
		// could use jquery, but since referencing whole document probably not going to use it
	}
}


function keyDownHandler(event)
{
	var keyPressed = String.fromCharCode(event.keyCode);
	// converts those obscure ASCII codes to string values
	// WDSA is the equivalent of the compass directions
	if (keyPressed == "W")
	{
		facing = "N";
		isMoving = true;
	}
	else if (keyPressed == "D")
	{
		facing = "E";
		isMoving = true;
	}
	else if (keyPressed == "S")
	{
		facing = "S";
		isMoving = true;
	}
	else if (keyPressed == "A")
	{
		facing = "W";
		isMoving = true;
	}
}

function keyUpHandler(event)
{
	var keyPressed = String.fromCharCode(event.keyCode);

	if ((keyPressed == "W") || (keyPressed == "A") ||
		(keyPressed == "S") || (keyPressed == "D"))
	{
		isMoving = false;
	}
}
