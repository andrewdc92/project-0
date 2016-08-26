console.log('javascript works');

// $(document).ready(function() {



// });

/* GAMEPLAN & Game LOGIC
-Goal of game- get icon/player sybmol from bottom left corner (door) to top right corner (gate)
in X amount of time
.
 directional goals
-NSEW movement, probably gonna use x/y grid coordinates to track movement

a) form to input player name, select player after
b) can use either JPG/PNG imgs for player symbols or just html/class
c) want movement to be INITIATED by .keypress();
      -attach key press to document object, all i need is for players to alternate moving East
      -the event i want to intiate is moving right

$('.btn').click(function() {
  $( '.box' ).empty();
})
