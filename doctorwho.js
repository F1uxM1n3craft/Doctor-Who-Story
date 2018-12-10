/* This is a starter with examples.  Remove the examples once you have made your own versions. */

'use strict'
// core variables
var messages = []; // for a sequence of messages
var choices = [];
var answer = null;
// story function variables
var name = null;

var start = function () {
    setup(); // Helper Function
    discoverPoliceBox();  // Change this to fit your first scene
}

window.onload = start;  // Kicks off program

function checkAnswers(answer) {
    switch(answer) {
        case "Enter Police Box":
            inPoliceBox();
            break;
        case "Ignore it":
            ignoreBox();
            break;
	}
}

//Scenes are treaded like index values
 function discoverPoliceBox(){  // FIRST SCENE (Default (L1S0))- WELCOMES PLAYER
  var name = prompt("What is your name?(This will be important later):");
  story("You are walking home from school and you then hear a weird sound from the woods.\
\nSuddenly a strange blue police box comes into view.\
\nYou are not sure how it got there but you go up to it for a closer inspection.  What do you do?");
  
  choices = ["Enter Police Box", "Ignore it", "Examine it"];
  answer = setOptions(choices);
 }
  
//SCENE BREAK

function inPoliceBox() {  // L1S1
	story("You decide to go inside this stange box and inside...What’s this?...it's bigger on the inside?\
\nJust then you hear someone say “Welcome to my TARDIS, that\'s Time And Relative Dimensions in Space for short.\ 
\nI\'m The Doctor.” your not sure who this is but you ask \"Doctor Who?\". The Doctor then says \"Exactly so+name+Exactly so.\
\n So, all of time and space, where do you wanna start?\""); 
	choices = ["TIme Of NIM", "Time of MultiPractice", "Present day",];
	answer = setOptions(choices);    
 }
  
 
function ignoreBox() { // L1S2
	
 * }
 */
 
/* function examineBox() { // Message Example
 * messages=["so your too good to talk to me huh",
 *         "big old person too proud to talk to a pixie",
 *         " you hear the pixie fly away in disgust"];
 *    delayText(messages, 3000, field);
 * 
 * } 
 */

//SCENE BREAK
