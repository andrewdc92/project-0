Andrew Cordivari
github.com/andrewdc92
public link to game : http://adcproject0.bitballoon.com/


### Project 0: The Game ("HOLD THE DOOR!")

The objective of the game was to get the 3 characters from one side of the screen to the other as fast as possible. Once I achieved linear motion, I build out multi-directional functionality and declared the winner based upon reaching a specified range of x & y coordinates. The inspiration of the game comes from the end of Game of Thrones Season 6 where Bran is unconscious while the whitewalkers encroach and desperate measures are taken to ensure his safety (no spoilers!). 


### Overview
The first interesting element of the game design was learning about the <canvas> element, which is really an API by it's broad functionality. Perhaps to maximize the array of features at this particular stage in the unit, I should have utilized something more familiar like a board id, but it was fun and challenging to learn and adapt. There were certain concepts that I had trouble applying to the canvas that might have been easier on a regular <div> element or something similiar. I ultimately chose to use canvas after researching an conceptual game design strategies, as it was utilized in dozens of examples. 

### TECHNOLOGIES USED

----SweetAlert so I could use those obnoxious alert triggers in JS but make it more enjoyable and cohesive to the user expereince.
----jQuery for a few general document selectors. 

----Mostly javascript, as at least for now I didn't mind the longer yet more imperative version of Javascript syntax over jQuery. For example, I was referencing so many different variables that  using statements like 'getElementById provided extra semantic definition to make things clear for me. 


---Bootstrap for the Reset button and to style the timer font


---Mostly mentioned above, but uisng the context selector to add animations and "draw" images on the canvas api was cool.

---I googled 8bit online images and converters to make and download the character image files.


---Got one bit of OOP in here I believe...didn't really go into it like we did in class examples, ie no prototype methods were implemented.

var bramImage = new Image(); // got ONE piece of OOP in here! creates object for Image
bramImage.ready = false;
bramImage.onload = setReady; // when Bram(img) is loaded, setReady function fires
bramImage.src = PATH_BRAM;

---

### APPROACH
I defined most of the variables initially in a seperate JS file, and then combined them at the end.

var BRAM_WIDTH = 72,
BRAM_HEIGHT = 96,
BRAM_START_X = 000,
BRAM_START_Y = 000,
CHAR_START_X = 0,
CHAR_START_Y = 98,
IMG_WIDTH = 216;

Most of the setup involved setting the dimensions of the 2d canvas and learning/exploring the XY coordinate system. I set the movements based off the ASCII codes and the keyDown event listener as follow: 

$(document).keydown(function(e) {
if (e.which === 39) {
console.log("Right key is pressed");
context.fillRect(0,0,stage.width,stage.height);
BRAM_START_X = (BRAM_START_X + 10) // run that rectangle refresh function to keep the green from being refreshed
context.drawImage(bramImage,currX,currY,BRAM_WIDTH,BRAM_HEIGHT,BRAM_START_X,BRAM_START_Y,BRAM_WIDTH*2,BRAM_HEIGHT*2);
declareWinner(BRAM_START_X, BRAM_START_Y);
youLose(BRAM_START_X, BRAM_START_Y);
}
else if (e.which === 40) {.....ETC 

The context.fillRect function served as a reset to the canvas every time the image moved.

I believe that if I had used a container or div element instead of canvas, setting up collision detection would have been a bit easier, as I could reference tangible ids and classes instead of the drawn animations that were already influeced by a handful of variables. It was looking quite laborous involving trial and error to set collision detection based off specicic X and Y coordinates, and even doing boolean ranges was tough without knowing exactly where the X and Y axis values fell within the canvas. 

The function I initally created that set off "You LOSE" if you bumped into a whitewalker looked like this: 

function youLose (x,y) {
if (BRAM_START_X >= 280 && BRAM_START_Y >= 300)
alert("You Lose!")
if (BRAM_START_X == 300 && BRAM_START_Y == 300)
alert("You Lose!")
else if (BRAM_START_X == 500 && BRAM_START_Y == 500)
alert("You Lose!")


### WHAT I WOULD HAVE DONE DIFFERENTLY/WILL IMPLEMENT IN THE FUTURE

-set an initiating countdown that triggers the clock to start only when the user makes the first move (admittedly the function I used to generate the clock seemed a bit wonky, but it was easy to get it in the position I wanted to I kept it.) 
-Set collion detection for all 3 of the white walkers
-Make sure the "winning" event is tied to the reset button so the user doesn't need to press reset automatically

- Although I know alerts are not good practice, I must say I thought the plugin I found to stylize the alerts looks pretty good :) 
### Technical Requirements

Your app must:

* **Render a game in the browser**
* **Include logic for winning** & **visually display which player won**
* **Include separate HTML, CSS, and JavaScript files**
* Stick with **KISS (Keep It Super Simple)** and **DRY (Don't Repeat Yourself)** principles
* Use **native Javascript or jQuery** for **DOM manipulation**
* Be **deployed publicly online**, where the rest of the world can access it (using a github pages project page or bitballoon)
* Use **semantic markup** for HTML and CSS (adhere to best practices)
* Include **custom styling** to convey the state of the game visually (and differentiate your project from any CSS libraries used)
* Demonstrate attention to code quality with **"clean" (well-indented, appropriately commented, organized) code**

---

### Deliverables


* A **working game, built by you**, hosted somewhere on the internet.
* A **git repository hosted on Github**, with a link to your hosted game, and frequent commits dating back to the very beginning of the project
* **A `readme.md` file** with a short description of the project, a list of which technologies you used for which parts of the app, an explanation of your approach (share some part of the code), and optionally a list of unsolved problems,  screenshots, etc.  See the [example readme](https://github.com/sf-wdi-31/readme-example).
* A **link to your hosted working game** in your game's Github repo.
* A **link to your hosted working game** on your personal website.

---

### Getting Started

* **Break the project down into different components** Create user-stories, draw wireframes, and write pseudocode! Spend a significant amount of time on these planning steps so you can debug issues before you get to code.
* **Start simple** Build the simplest possible version of your game first, then add extra features or more complex rules.
* **Use your Development Tools** (debugging, global variables, console.log, etc) to solve problems.
* **Reference notes** in class & ask questions to the teaching team when you need to!
* **Commit often!** Commit *at least* every time to complete a user story. Then you don’t have to be afraid to break something, as you can always go back in time to older version.
* **Consult documentation resources** (MDN, jQuery, etc.) to better understand what you’ll be getting into.
* **Don’t be afraid to write code that you know you will have to remove later.** For example, you are encouraged to create temporary elements (buttons, links, etc) that trigger game events if real data is not available. For example, if you’re trying to figure out how to change some text when the game is over but you haven’t solved the win/lose game logic, you can create a button to simulate it until then.

---

### Game Types

####Racing Game

**We suggest and expect that most of you will build a racing game**. Two or more players should be able to use the keyboard to move their "cars" across the browser window.

<img src="https://media.giphy.com/media/mHChlbqGMndYY/giphy.gif" width="60%">


#### Something Else

If you're comfortable with the technologies we're using and you have a fully-fledged plan, you can build a substantially different game. Definitely only build a game that you are familiar with. Make sure you get your plan approved by an instructor if you want to build a non-racing game.

<details><summary>Click this paragraph to see other potential game ideas.</summary>

##### Trivia
Test your wits & knowledge with whatever-the-heck you care about. The player can guess answers and have the computer validate them!

##### Typing Train
The player types letters that appear one-by-one on the screen. They score points for every correct letter and advance a train (or whatever) across the screen!

##### Blackjack
The player bets money (or points) on guessing which card the computer will deal next. The computer deals randomly.

##### Flash Cards

Create a deck of flash cards that have prompts on one side and answers on the other.  After seeing each answer, a player can choose to either keep the card in the deck for more practice or decide they remember it well and remove it from the deck. Once the player has remembered all cards in the deck, they get a win screen.


##### Battleship

The player can challenge the computer, each taking turns trying to sink the other's ships. The one who sinks the other's ships first wins! The game board should show the player's fleet with hit trackers. It should also show a map of where the player's guesses have hit and missed.


**Hints**
* Start with just one size of ship.  
* Start by building a one-dimensional battleship game.  
* Don't let the player decide where to place their ships, to start.

</details>

---

### Extra Challenge Ideas

These are some ideas that could take your game "above and beyond." **Don't focus on them until you've hit the core requirements.**

* Add **movement through CSS** with hover effects, transitions, or keyframe animations.
* Integrate **Object Oriented Programming** design patterns.
* Keep track of **multiple game rounds** with a win counter.
* Allow **customized players** (name, symbol, color, avatar, etc.).
* Use [`localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) to **keep track of game state**, even if the user refreshes the page.
* Add **timers** like a countdown timer ("3, 2, 1, Go!"), track the winning time, or track the best time across multiple rounds.
* **Play against a bot**.
* Integrate with a **3rd party API**: flickr, youtube, spotify, giphy, etc.

---

### Resources

* **[MDN Javascript Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)** _(the best reference for all things Javascript, CSS, and HTML)_
* **[jQuery Docs](http://api.jquery.com)** _(if you're using jQuery)_
* **[GitHub Pages](https://pages.github.com/)** project site or **[Bit Balloon](https://www.bitballoon.com/docs)** _(hosting the game)_

---

### Project Feedback

* __Project Workflow__: Did you complete the user stories, wireframes, task tracking, and frequent commit schedule as specified above? Did you use source control as expected for the phase of the program you’re in (detailed above)?

* __Technical Requirements__: Did you deliver a project that met all the technical requirements? Given what the class has covered so far, did you build something that was reasonably complex?

* __Creativity__: Did you add a personal spin or creative element into your project submission? Did you deliver something of value to the end user (not just a login button and an index page)?

* __Code Quality__: Did you follow code style guidance and best practices covered in class, such as spacing, modularity, and semantic naming? Did you comment your code as your instructors have in class?

* __Deployment__: Did you deploy your application to a public url using GitHub Pages?

* __Total__: Your instructors score each category above on the following scale:

    Score | Expectations
    ----- | ------------
    **0** | _Incomplete (not attempted)._
    **1** | _Does not meet expectations. Work on this._
    **2** | _Meets expectations, good job!_
    **3** | _Exceeds expectations, wow!_

 You will receive a total score that is a composite of these scores. This will serve as a helpful overall gauge of whether you met the project goals, but __the more important scores are the individual ones for each category__ above, which can help you identify where to focus your efforts for the next project!
