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
		case "Go inside box":
			inPoliceBox();
	}
}

// Scenes are treated like index values
function discoverPoliceBox(){  
// FIRST SCENE (Default (L1S0))- WELCOMES PLAYER
	var name = prompt("What is your name? This will be important later:");
	story("You are walking home from school and you then hear a weird sound from the woods.<br><br> Suddenly a strange blue police box comes into view.<br><br> You are not sure how it got there but you go up to it for a closer inspection.  What do you do?");
	choices = ["Enter Police Box", "Ignore it", "Examine it"];
	answer = setOptions(choices);
 }
  
//SCENE BREAK; DEFAULT

function inPoliceBox() {  // L1S1
	story("You decide to go inside this strange box and inside...What\'s this?...it\'s bigger on the inside?<br><br> Just then you hear someone say \"Welcome to my TARDIS, that\'s Time And Relative Dimensions in Space for short. I\'m The Doctor.\" <br><br> You\'re not sure who this is but you ask \"Doctor? Doctor Who?\". The Doctor then says \"Exactly so,\"+name+\"Exactly so.\" <br><br> So, all of time and space, where do you wanna start?");
	choices = ["Time Of NIM", "Time of MultiPractice", "Present day",];
	answer = setOptions(choices);    
 }
 
function ignoreBox() {  // L1S2
	story("You decide that it isn't the best thing to worry about and you go home. You didn’t choose to go on an adventure. Maybe if its still there you can be on a great adventure.<br><br>*The Next Morning*<br><br>You wake up suddenly from a familiar sound and check outside your bedside window. What’s this? It's the same police box from the forest! How did it get there? You grab your coat and things and go outside your house to investigate the box. What do you do now?")
	choices = ["Go Back Inside", "Examine it"];
	answer = setOptions(choices);
}
 
function examineBox() {  // L1S3
	story("When you go up to the blue box then you see the words POLICE Public Call BOX on the front. Do you want to check inside to see if its a normal standard police box?")
	choices = ["Go inside box", "Go back"];
	answer = setOptions(choices);
}



//SCENE BREAK; 1ST THREE CHOICE SCENES

// function inPoliceBox() {  // L1S4
	// story("You decide to go inside this strange box and inside...What\'s this?...it\'s bigger on the inside?<br><br> Just then you hear someone say \"Welcome to my TARDIS, that\'s Time And Relative Dimensions in Space for short. I\'m The Doctor.\" <br><br> You\'re not sure who this is but you ask \"Doctor? Doctor Who?\". The Doctor then says \"Exactly so,\"+name+\"Exactly so.\" <br><br> So, all of time and space, where do you wanna start?");
	// choices = ["Time Of NIM", "Time of MultiPractice", "Present day",];
	// answer = setOptions(choices);    
 // }
 
// function ignoreBox() {  // L1S5
	// story("You decide that it isn't the best thing to worry about and you go home. You didn’t choose to go on an adventure. Maybe if its still there you can be on a great adventure.<br><br>*The Next Morning*<br><br>You wake up suddenly from a familiar sound and check outside your bedside window. What’s this? It's the same police box from the forest! How did it get there? You grab your coat and things and go outside your house to investigate the box. What do you do now?")
	// choices = ["Go Back Inside", "Examine it"];
	// answer = setOptions(choices);
// }
 
// function examineBox() {  // L1S6
	// story("When you go up to the blue box then you see the words POLICE Public Call BOX on the front. Do you want to check inside to see if its a normal standard police box?")
	// choices = ["Go inside box", "Go back"];
	// answer = setOptions(choices);
// }