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

  var sec = 0;
  function pad ( val ) { return val > 9 ? val : "0" + val; }
  setInterval( function(){
      document.getElementById("seconds").innerHTML=pad(++sec%60);
      // document.getElementById("minutes").innerHTML=pad(parseInt(sec/60,10));
  }, 1000);

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

        status();
    	}
    }

    $('.btn').click(function() {
      window.location.reload();
    })

    function declareWinner(x,y) {
      if (BRAM_START_X >= 670 && BRAM_START_Y >= 475)
        alert("You Won!");
    }

  //   if (BRAM_START_X === 670 && BRAM_START_Y === 500)
  //     alert("You Won!");
  // }
    // this gets the right arrow firing in console
    $(document).keydown(function(e) {
       if (e.which === 39) {
         console.log("Right key is pressed");
         context.fillRect(0,0,stage.width,stage.height);
         BRAM_START_X = (BRAM_START_X + 10) // run that rectangle refresh function to keep the green from being refreshed
         context.drawImage(bramImage,currX,currY,BRAM_WIDTH,BRAM_HEIGHT,BRAM_START_X,BRAM_START_Y,BRAM_WIDTH*2,BRAM_HEIGHT*2);
         declareWinner(BRAM_START_X, BRAM_START_Y);
       }
       else if (e.which === 40) {
        //  console.log("down key is pressed");
         context.fillRect(0,0,stage.width,stage.height);
         BRAM_START_Y = (BRAM_START_Y + 10) // run that rectangle refresh function to keep the green from being refreshed
         context.drawImage(bramImage,currX,currY,BRAM_WIDTH,BRAM_HEIGHT,BRAM_START_X,BRAM_START_Y,BRAM_WIDTH*2,BRAM_HEIGHT*2);
         declareWinner(BRAM_START_X, BRAM_START_Y);
       }
       else if (e.which === 37) {
        //  console.log("left key is pressed");
         context.fillRect(0,0,stage.width,stage.height);
         BRAM_START_X = (BRAM_START_X - 10) // run that rectangle refresh function to keep the green from being refreshed
         context.drawImage(bramImage,currX,currY,BRAM_WIDTH,BRAM_HEIGHT,BRAM_START_X,BRAM_START_Y,BRAM_WIDTH*2,BRAM_HEIGHT*2);
         declareWinner(BRAM_START_X, BRAM_START_Y);
       }
       else if (e.which === 38) {
        //  console.log("up key is pressed");
         context.fillRect(0,0,stage.width,stage.height);
         BRAM_START_Y = (BRAM_START_Y - 10) // run that rectangle refresh function to keep the green from being refreshed
         context.drawImage(bramImage,currX,currY,BRAM_WIDTH,BRAM_HEIGHT,BRAM_START_X,BRAM_START_Y,BRAM_WIDTH*2,BRAM_HEIGHT*2);
         declareWinner(BRAM_START_X, BRAM_START_Y);
       }
     })


    currX = CHAR_START_X;
    currY = CHAR_START_Y;

    var winnerImage = document.getElementById("finishLine");
    // more definitions
    function status() {
    	context.fillStyle ="grey";
    	context.fillRect (0,0, stage.width, stage.height);
    	context.drawImage(bramImage,currX,currY,BRAM_WIDTH,BRAM_HEIGHT,BRAM_START_X,BRAM_START_Y,BRAM_WIDTH*2,BRAM_HEIGHT*2);
      context.drawImage(winnerImage, 800, 500);
    }



    	// counter++;
    	// context.fillStyle = "#AAA"; // should be a lightish neutral color
    	// context.fillRect(0, 0, stage.width, stage.height);
    	// context.fillStyle = "white";
    	// context.fillText("Time allotted: "+counter, COUNTER_X, COUNTER_Y);

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
