/* This is a starter with examples.  Remove the examples once you have made your own versions. */
window.onload = start;

function start() {
    setup();
	/** CHANGE THE FIRST FUNCTION FOR TESTING **/
    discoverPoliceBox();
}
'use strict'
// core variables
var messages = []; // for a sequence of messages
var choices = [];
var answer = null;
// story function variables
var name = null;

function checkAnswers(answer) {
    switch(answer) {
        case "Enter Police Box":
            inPoliceBox();
            break;
        case "Ignore it":
            ignoreBox();
            break;
		 case "Examine it":
            examineBox();
            break;
	}
}

// Scenes are treaded like index values
function discoverPoliceBox(){  
// FIRST SCENE (Default (L1S0))- WELCOMES PLAYER
	//var name = prompt("What is your name? This will be important later:");
	story("You are walking home from school and you then hear a weird sound from the woods.<br><br> Suddenly a strange blue police box comes into view.<br><br> You are not sure how it got there but you go up to it for a closer inspection.  What do you do?");
	choices = ["Enter Police Box", "Ignore it", "Examine it"];
	answer = setOptions(choices);
 }
  
//SCENE BREAK

function inPoliceBox() {  // L1S1
	story("You decide to go inside this strange box and inside...What\'s this?...it\'s bigger on the inside?<br><br> Just then you hear someone say \"Welcome to my TARDIS, that\'s Time And Relative Dimensions in Space for short. I\'m The Doctor.\" <br><br> You\'re not sure who this is but you ask \"Doctor Who?\". The Doctor then says \"Exactly so.\" <br><br> So, all of time and space, where do you wanna start?");
	choices = ["Time Of NIM", "Time of MultiPractice", "Present day",];
	answer = setOptions(choices);    
 }
 
function examineBox() {  // L1S1
}
 
function ignoreBox() {  // L1S3
}



//SCENE BREAK