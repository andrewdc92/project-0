
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

// timer set up
var sec = 0;
    function pad ( val ) { return val > 9 ? val : "0" + val; }
    setInterval(function(){
        document.getElementById("seconds").innerHTML=pad(++sec%60);
        // document.getElementById("minutes").innerHTML=pad(parseInt(sec/60,10));
    }, 1000);

    var stage = document.getElementById('board');
    stage.width = STAGE_WIDTH;
    stage.height = STAGE_HEIGHT; // mess around with var. definitions in app.js
    														// to get canvas to the right proportions
    var context = stage.getContext("2d");
    context.fillStyle = "white";
    context.font = GAME_FONTS;

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
    var charX, charY, isMoving, currX, currY; // refers to canvas x/y coordinates

    // this function also runs at the rate of TIME_PER_FRAME, keeps checking if
    // Bram's image is ready to go, only will hit true when img is loaded!
    function preloading() {
    	if (bramImage.ready) {

        status();
    	}
    }

      $('.btn').click(function() {
      window.location.reload();
      })

    // declare winner function based off x/y coordinates
    function declareWinner(x,y) {
      if (BRAM_START_X >= 670 && BRAM_START_Y >= 475)
        sweetAlert("You Won! Hit Reset to Play Again.");
    }

    // function youLose (x,y) {
    //     if (BRAM_START_X >= 280 && BRAM_START_Y >= 300)
    //       alert("You Lose!")
    //         if (BRAM_START_X == 300 && BRAM_START_Y == 300)
    //           alert("You Lose!")
    //             else if (BRAM_START_X == 500 && BRAM_START_Y == 500)
    //               alert("You Lose!")
    // }
    // sets the reset each time character moves and calls winner function in all directions
    $(document).keydown(function(e) {
       if (e.which === 39) {
         console.log("Right key is pressed");
         context.fillRect(0,0,stage.width,stage.height);
         BRAM_START_X = (BRAM_START_X + 10) // run that rectangle refresh function to keep the green from being refreshed
         context.drawImage(bramImage,currX,currY,BRAM_WIDTH,BRAM_HEIGHT,BRAM_START_X,BRAM_START_Y,BRAM_WIDTH*2,BRAM_HEIGHT*2);
         declareWinner(BRAM_START_X, BRAM_START_Y);
         youLose(BRAM_START_X, BRAM_START_Y);
       }
       else if (e.which === 40) {
        //  console.log("down key is pressed");
         context.fillRect(0,0,stage.width,stage.height);
         BRAM_START_Y = (BRAM_START_Y + 10) // run that rectangle refresh function to keep the green from being refreshed
         context.drawImage(bramImage,currX,currY,BRAM_WIDTH,BRAM_HEIGHT,BRAM_START_X,BRAM_START_Y,BRAM_WIDTH*2,BRAM_HEIGHT*2);
         declareWinner(BRAM_START_X, BRAM_START_Y);
         youLose(BRAM_START_X, BRAM_START_Y);
       }
       else if (e.which === 37) {
        //  console.log("left key is pressed");
         context.fillRect(0,0,stage.width,stage.height);
         BRAM_START_X = (BRAM_START_X - 10) // run that rectangle refresh function to keep the green from being refreshed
         context.drawImage(bramImage,currX,currY,BRAM_WIDTH,BRAM_HEIGHT,BRAM_START_X,BRAM_START_Y,BRAM_WIDTH*2,BRAM_HEIGHT*2);
         declareWinner(BRAM_START_X, BRAM_START_Y);
         youLose(BRAM_START_X, BRAM_START_Y);
       }
       else if (e.which === 38) {
        //  console.log("up key is pressed");
         context.fillRect(0,0,stage.width,stage.height);
         BRAM_START_Y = (BRAM_START_Y - 10) // run that rectangle refresh function to keep the green from being refreshed
         context.drawImage(bramImage,currX,currY,BRAM_WIDTH,BRAM_HEIGHT,BRAM_START_X,BRAM_START_Y,BRAM_WIDTH*2,BRAM_HEIGHT*2);
         declareWinner(BRAM_START_X, BRAM_START_Y);
         youLose(BRAM_START_X, BRAM_START_Y);
       }
     })


    currX = CHAR_START_X;
    currY = CHAR_START_Y;
    var monster1 = document.getElementById("monster1");
    var winnerImage = document.getElementById("finishLine");
    // more definitions
    function status() {
    	context.fillStyle ="white";
    	context.fillRect (0,0, stage.width, stage.height);
    	context.drawImage(bramImage,currX,currY,BRAM_WIDTH,BRAM_HEIGHT,BRAM_START_X,BRAM_START_Y,BRAM_WIDTH*2,BRAM_HEIGHT*2);
      context.drawImage(winnerImage, 800, 500);
      context.drawImage(monster1, 300, 300);
      context.drawImage(monster1, 500, 500);
      context.drawImage(monster1, 500, 100);
    }
