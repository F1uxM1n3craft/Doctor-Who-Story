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
var targets = [];
var answer = null;
var options = [];
var data = [];
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
			break;
		case "test":
			testNim();
			break;
		case "Time of NIM":
			timeSetNim();
			break;
		case "Simple Version":
			nimSimple()
			break;
		case (answer == "1" || answer =="2" || answer == "3"):
			nimSimple(answer,0);
			answer = playerTurn
	}
}

// Scenes are treated like index values
function discoverPoliceBox(){  
// FIRST SCENE (Default (L1S0))- WELCOMES PLAYER
	name = prompt("What is your name? This will be important later:");
	story("You are walking home from school and you then hear a weird sound from the woods.<br><br> Suddenly a strange blue police box comes into view.<br><br> You are not sure how it got there but you go up to it for a closer inspection.  What do you do?");
	targets = ["Enter Police Box", "Ignore it", "Examine it"];
	answer = setOptions(targets);
 }
  
//SCENE BREAK; DEFAULT

function inPoliceBox() {  // L1S1
	story("You decide to go inside this strange box and inside...What\'s this?...it\'s bigger on the inside?<br><br> Just then you hear someone say \"Welcome to my TARDIS, that\'s Time And Relative Dimensions in Space for short. I\'m The Doctor.\" <br><br> You\'re not sure who this is but you ask \"Doctor? Doctor Who?\". The Doctor then says \"Exactly so, "+name+" Exactly so. So tell me, all of time and space, where do you wanna start?");
	targets = ["Time of NIM", "Time of MultiPractice", "Stay in Present"];
	answer = setOptions(targets);    
 }
 
function ignoreBox() {  // L1S2
	story("You decide that it isn't the best thing to worry about and you go home. You didn’t choose to go on an adventure. Maybe if its still there you can be on a great adventure.<br><br>*The Next Morning*<br><br>You wake up suddenly from a familiar sound and check outside your bedside window. What’s this? It's the same police box from the forest! How did it get there? You grab your coat and things and go outside your house to investigate the box. What do you do now?")
	targets = ["Go Back Inside", "Examine it"];
	answer = setOptions(targets);
}
 
function examineBox() {  // L1S3
	story("When you go up to the blue box then you see the words POLICE Public Call BOX on the front. Do you want to check inside to see if its a normal standard police box?")
	targets = ["Go inside box", "Go back"];
	answer = setOptions(targets);
}



//SCENE BREAK; 1ST THREE CHOICE SCENES

function timeSetNim() {  // L1S4
	story("You travel through time and space with the Doctor and you reach the time where Nim was first made. \"We\'re here!\" says the Doctor. You and the Doctor exit the TARDIS and explore the time. After awhile you find the creator of Nim. They ask \"do you choose to play a simple version of Nim or would you like to practice?");
	targets = ["Simple Version", "Tutor Version", "Present day"];
	answer = setOptions(targets);   
}


 
function nimSimple() {  // L1S5: Controls Nim
	story("\"You chose to do the simple version. You may choose to pick 1, 2 or 3 to get to 21. So what will it be?\" Says the creator of Nim.")
	targets = ["1","2","3"]
	count+=parseInt(playerTurn);
	while (count<21) {
		// Check if player loses, and prevent CPU from taking turn if so
		// Ask for CPU input and say current count, add to count
		cpuTurn=Math.floor(Math.random()*3)+1;
		if (cpuTurn+count>20) cpuTurn=1;
		count+=cpuTurn;
		if (count == 21) {
			alert("You knew what i was doing.");
			break;
		}
		else { 
			alert("I will count "+cpuTurn+". The current count is now "+count);
		}
		playerTurn = parseInt(prompt("Now, you count how many?"));
		count+=playerTurn;
		if (count>20) {
			alert("You are not good at my game. please try your luck again and maybe i'll let you win")
		}
		else {
			alert("The current count is now "+count);
		}
	}
	answer = setOptions(targets);
}
 
// function examineBox() {  // L1S6
	// story("When you go up to the blue box then you see the words POLICE Public Call BOX on the front. Do you want to check inside to see if its a normal standard police box?")
	// targets = ["Go inside box", "Go back"];
	// answer = setOptions(targets);
// }