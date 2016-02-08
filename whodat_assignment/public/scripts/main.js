/* ----- */
// Replace YOUR NAME with yours

var NAME = "Allegra";
console.log( "/*****************/\n" + NAME +"'s submission \nfor Whodat Assignment" + "\n/*****************/\n");



/*
 * CHALLENGES
 *
 * Complete as many of the following challenges 
 * that you can. Simply put your code where indicated
 * and when you have completed a challenge
 * the delete the not in the 'not completed' message
 * if you try and don't get it then change the log message to 
 * something else. (e.g. 'attempted', 'attempted but javascript stinks', 
 * 'attempted but the instructor stinks', ...)
 */




/* -=-=-=-			=-=-=-=-=			-=-=-= 	*/
/*  Ch1											*/	
/*	Change the color of the wings on  			*/	
/*	1st owl to a different color				*/	
/* -=-=-=-			=-=-=-=-=			-=-=-= 	*/
console.log('...challenge 1...');

var wing1 = document.getElementsByClassName("wing_L");
wing1 = wing1[0];
wing1.style.backgroundColor = "pink";
var wing2 = document.getElementsByClassName("wing_R");
wing2 = wing2[0];
wing2.style.backgroundColor = "pink";


/* -=-=-=-			=-=-=-=-=			-=-=-= 	*/
/*  Ch2											*/	
/*	Change the background color of the cage  	*/	
/*	on the 1st row at the end					*/	
/* -=-=-=-			=-=-=-=-=			-=-=-= 	*/
console.log('...challenge 2...');
var cage3 = document.getElementsByClassName("cage column-4");
var cage3 = cage3[2];
cage3.style.backgroundColor = "skyblue";




/* -=-=-=-			=-=-=-=-=			-=-=-= 	*/
/*  Ch3											*/	
/*	Change the length of the beak for the owl	*/	
/*	at the end of the second row				*/	
/* -=-=-=-			=-=-=-=-=			-=-=-= 	*/

/** 		HINT		 **/
// to change the length of the beak you need to change
// the pixel value of:
// border-top
// e.g.
// changing:
// border-top: 60px solid goldenrod;
// to
// border-top: 120px solid goldenrod;
// would double the length of the beak.
/** ---		----	---	 **/

console.log('...challenge 3...');
var beak6 = document.getElementsByClassName("beak");
beak6 = beak6[5];
beak6.style.borderTop = "30px solid goldenrod";



/* -=-=-=-			=-=-=-=-=			-=-=-= 	*/
/*  Ch4											*/	
/*	Write a function that takes a number		*/	
/*  and returns the cage on the page that 		*/
/* 	corresponds to that number 					*/
/* 		e.g. calling 							*/
/*				getCage(0)						*/
/*		would return <section class="cage" ...	*/
/*					 </section>					*/
/*												*/					
/*				html Tag for the first cage     */					
/* -=-=-=-			=-=-=-=-=			-=-=-= 	*/
console.log('...challenge 4...');

function getCage(cageNumber) {
cageNumber = cageNumber - 1; 
var selectedCage = document.getElementsByClassName('cage column-4')[cageNumber];
return selectedCage;
}





/* -=-=-=-			=-=-=-=-=			-=-=-= 	*/
/*  Ch5											*/	
/*	Change the colors of the cages and owls		*/	
/*	in the middle column to be the same			*/
/*												*/	
/*												*/	
/*  HINTkey: "value", 							*/
/*  If you got Ch4 then you should be able to 	*/
/* 	you should be able to use that function to 	*/
/*	assist you 									*/
/* -=-=-=-			=-=-=-=-=			-=-=-= 	*/
console.log('...challenge 5...');
console.log('\tnot completed')
//paste your code here...






/* -=-=-=-			=-=-=-=-=			-=-=-= 	*/
/*  Ch6											*/	
/*	Write functions that take an owl element	*/	
/* 	as an argument and return the html sections */
/*	of different body parts						*/
/*												*/	
/*	see functions below for hints				*/	
/*												*/	
/* -=-=-=-			=-=-=-=-=			-=-=-= 	*/
console.log('...challenge 6...');
console.log('\tnot completed')
//paste your code here...

function getWings(anOwl) {
	return wings;
}

function getBeak(anOwl) {
	return wings;
}

function getEyes(anOwl) {
	return eyes;
}

function getBody(anOwl) {
	return body;
}

function getPupils(anOwl) {

}


