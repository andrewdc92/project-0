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
  	BRAM_START_X = 200,
  	BRAM_START_Y = 200,
  	CHAR_START_X = 0,
  	CHAR_START_Y = 98,
  	IMG_WIDTH = 216;

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
