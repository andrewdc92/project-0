// comment out any code that I'm not using/broken code
// move all of that code below working code
// structure file so all vars on on top, followed by all of function defs, and then the calls below
// check indentations.

//part two- get the downclick handler going, downarrow to change y axis
// declare winner (if x = 900 declare winner etc), after each move check for winner like in tictactoe
// if BRAM_START_X = 900, display "alert"on.event

console.log('javascript works');
//canvas attributes/values

var STAGE_WIDTH = 900,
    STAGE_HEIGHT = 600,
    TIME_PER_FRAME = 30; // how often the loop executes per SECOND?! whoa.
                      // picked 30 to match FPS of "Bram" pixel character
  GAME_FONTS = "bold 20px sans-serif";

var TEXT_PRELOADING = "Loading ...",
	  TEXT_PRELOADING_X = 200,
	  TEXT_PRELOADING_Y = 200;

var PATH_BRAM = "imgs/bramchar.png"

var BRAM_WIDTH = 72,
  	BRAM_HEIGHT = 96,
  	BRAM_START_X = 000,
  	BRAM_START_Y = 000,
  	CHAR_START_X = 0,
  	CHAR_START_Y = 98,
  	IMG_WIDTH = 216;

    var stage = document.getElementById('board');
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
    context.fillRect(0,0,stage.width,stage.height); // this overlays grey rectangle starting from 0,0 x/y
    context.fillText(TEXT_PRELOADING, TEXT_PRELOADING_X, TEXT_PRELOADING_Y);
    var preloader = setInterval(preloading, TIME_PER_FRAME);
    var gameloop, charX, charY, isMoving, currX, currY, facing; // refers to canvas x/y coordinates

    // this function also runs at the rate of TIME_PER_FRAME, keeps checking if
    // Bram's image is ready to go, only will hit true when img is loaded!
    function preloading () {
    	if (bramImage.ready) {
    		clearInterval(preloader);

    		facing = "E";
    		isMoving = false;
        // ameloop = setInterval(status, TIME_PER_FRAME);


        status();
    		document.addEventListener("keydown",keyDownHandler, false); // when a key is pressed
    		document.addEventListener("keyup",keyUpHandler, false); // when a key is released
    	}
    }

    // this gets the right arrow firing in console
    $(document).keydown(function(e) {
       if (e.which === 39) {
         console.log("Right key is pressed");
         context.fillRect(0,0,stage.width,stage.height);
         BRAM_START_X = (BRAM_START_X + 10) // run that rectangle refresh function to keep the green from being refreshed
         context.drawImage(bramImage,currX,currY,BRAM_WIDTH,BRAM_HEIGHT,BRAM_START_X,BRAM_START_Y,BRAM_WIDTH*2,BRAM_HEIGHT*2);
       }
       else if (e.which === 40) {
        //  console.log("down key is pressed");
         context.fillRect(0,0,stage.width,stage.height);
         BRAM_START_Y = (BRAM_START_Y + 10) // run that rectangle refresh function to keep the green from being refreshed
         context.drawImage(bramImage,currX,currY,BRAM_WIDTH,BRAM_HEIGHT,BRAM_START_X,BRAM_START_Y,BRAM_WIDTH*2,BRAM_HEIGHT*2);
       }
       else if (e.which === 37) {
        //  console.log("left key is pressed");
         context.fillRect(0,0,stage.width,stage.height);
         BRAM_START_X = (BRAM_START_X - 10) // run that rectangle refresh function to keep the green from being refreshed
         context.drawImage(bramImage,currX,currY,BRAM_WIDTH,BRAM_HEIGHT,BRAM_START_X,BRAM_START_Y,BRAM_WIDTH*2,BRAM_HEIGHT*2);
       }
       else if (e.which === 38) {
        //  console.log("up key is pressed");
         context.fillRect(0,0,stage.width,stage.height);
         BRAM_START_Y = (BRAM_START_Y - 10) // run that rectangle refresh function to keep the green from being refreshed
         context.drawImage(bramImage,currX,currY,BRAM_WIDTH,BRAM_HEIGHT,BRAM_START_X,BRAM_START_Y,BRAM_WIDTH*2,BRAM_HEIGHT*2);
       }
     })
    function keyDownHandler(event) {
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

    function keyUpHandler(event) {
    	var keyPressed = String.fromCharCode(event.keyCode);

    	if ((keyPressed == "W") || (keyPressed == "A") ||
    		(keyPressed == "S") || (keyPressed == "D"))
    	{
    		isMoving = false;
    	}
    }

    // var counter = 0; // for initialization

    currX = CHAR_START_X;
    currY = CHAR_START_Y;

    // more definitions
    function status() {
    	context.fillStyle ="grey";
    	context.fillRect (0,0, stage.width, stage.height);
    	context.drawImage(bramImage,currX,currY,BRAM_WIDTH,BRAM_HEIGHT,BRAM_START_X,BRAM_START_Y,BRAM_WIDTH*2,BRAM_HEIGHT*2);

    	// currX += BRAM_WIDTH;
    	// if (currX >= IMG_WIDTH) {
    	// 				currX = 0;
      // }
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

// var COUNTER_X = 100,
//         COUNTER_Y = 100;
// $(document).ready(function() {




//  GAMEPLAN & Game LOGIC
// -Goal of game- get icon/player sybmol from bottom left corner (door) to top right corner (gate)
// in X amount of time
// .
//  directional goals
// -NSEW movement, probably gonna use x/y grid coordinates to track movement
//
// a) form to input player name, select player after
// b) can use either JPG/PNG imgs for player symbols or just html/class
// c) want movement to be INITIATED by .keypress();
//       -attach key press to document object, all i need is for players to alternate moving East
//       -the event i want to intiate is moving right
//
// $('.btn').click(function() {
//   $( '.box' ).empty();
// })
