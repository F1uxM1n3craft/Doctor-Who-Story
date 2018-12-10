/* This is a starter with examples.  Remove the examples once you have made your own versions. */

'use strict'
// core variables
var messages = []; // for a sequence of messages
var choices = [];
var answer = null;
// story function variables
var name = null;
var spin = 0;

var start = function () {
    setup(); // Helper Function
    discoverPoliceBox();  // Change this to fit your first scene
}

window.onload = start;  // Kicks off program

function checkAnswers(answer) {
    switch(answer) {
        case "Think some more":
            thinkSomeMore();
            break;
        case "go in":
            enterForest();
            break;
	}
}


 function discoverPoliceBox(){  // FIRST SCENE (Default)- WELCOMES PLAYER
  var name = prompt("what is your name?");
  story("You are walking home from school and you then hear a weird sound from the woods.\
\nSuddenly a strange blue police box comes into view.\
You are not sure how it got there but you go up to it for a closer inspection.  What do you do?");
  
  choices = ["Enter Police Box", "Ignore it", "Examine it"];
  answer = setOptions(choices);
 }
  
//SCENE BREAK

function inPoliceBox() {  // SET A SCENE
	story("You decide to go inside this stange box"); 
	choices = ["Candy house", "Fruit vender", "Field", "Hang out here", "spin in a circle"];
	answer = setOptions(choices);    
 }
  
 
/* function spinInCircle() { // CHANGE VALUE IF RETURN
 *     spin = spin + 1;
 *    if (spin == 3) {
 *         story("Why are you doing that?\
 *         \n It makes me a little nauseous just to watching you\n\n");
 *         forest();
 *     } else if (spin == 4) {
 *         story("Seriously, please stop\
 *         \nI can't keep watching this\n\n");
 *        forest();
 *    } else if (spin == 5) {
 *         story("Oh god I have to go\n\n");
 *         forest();
 *    } else if (spin > 5) {
 *         story("We are sorry but the narrator for this bit went home sick.\n\n");
 *         forest();
 *     } else {
 *        story("You let you arm fly freely at your side as you spin in a circle.\
 *         \nAround and around you go as the world blurs in front of you\
 *         \nyou get dizzy and fall to the ground\
 *         \nyou take a moment to gather your thoughts then you stand back up\n\n");
 *         forest();
 *     }
 * }
 */
 
/* function stayQuite() { // Message Example
 * messages=["so your too good to talk to me huh",
 *         "big old person too proud to talk to a pixie",
 *         " you hear the pixie fly away in disgust"];
 *    delayText(messages, 3000, field);
 * 
 * } 
 */

//SCENE BREAK
