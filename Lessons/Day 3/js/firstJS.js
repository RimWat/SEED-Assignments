
var a, b;
//alert('Hello World');
/*
	This is Multi line comment
*/
//console.log('Hello World');
a = 100;
b = 200;
//console.log(a + b);

//console.log(typeof(a), typeof(b), typeof(e), typeof(g));

console.log(a);
if (--a > 99){
	console.log("a is greater than 99");
} else if (a == 99){
	console.log("a is equal to 99");
} else{
	console.log("a is less than 99");
}

var playerOne = 100;
var playerTwo = 120;
if (playerOne > playerTwo){
	console.log("high scorer is playerOne");
}else{
	console.log("high scorer is playerTwo");
}

//var highscore = (playerOne>playerTwo) ? playerOne : playerTwo
 
var x = "5";
var (x == 5){
	console.log("== : x is 5");		//print
} else{
	console.log("== : x is not 5");
}
if (x === 5){
	console.log("=== : x may not be 5");
} else{
	console.log("=== : x is strictly 5");	//print
}
if (x != "5"){
	console.log("!= : x is not a string");
} else{
	console.log("!= : may be it is a string");	//print
}
if (x !== "5"){
	console.log("!== : x is not a string");
} else{
	console.log("!== : may be it is a string");	//print
}

//var aNum = "10";
if(aNum ="10"){
	console.log("10 is 10");
} 
if(aNum =="10"){
	console.log("10 is 10");
} 
if(aNum ==="10"){
	console.log("10 is 10");
} else{
	console.log("10 is not 10");
}

//false 0 null undefined NaN ""

//While loop
/*	var a = 1;
	if (a < 10){
		console.log(a);
	}

	var a = 1;
	while (a < 10){
		console.log(a);
	} indefinite loop
var a = 1;
while (a < 10){
	console.log(a);
	a++;
}*/

var a = 0;
while (a < 10){
	//console.log("value of a is " + a);
	a++;
}

var b = 0;
do {
	b++;
	//console.log("value of b is " + b);
} while (b < 10);

for (i=0; i<10; i++){
	//console.log("value of i is " + i);
}

for (i=0; i<10; i++){
	if (i == 5)	break;
	//console.log("value of i is " + i);
}

for (i=0; i<10; i++){
	if (i == 5)	continue;
	//console.log("value of i is " + i);
}

function printName(x){
	var newString = "Hello " + x;
	console.log(newString);
}

//printName("Auros");

var a, b;
function returnSomething(a, b){
	var c = a * b;
	//console.log("Value of c " + c);
	//return (a * b);
	return c;
}


var newVariable = returnSomething(12,56);
console.log(newVariable);

// function daysofweek(){
	
// }


function add(a , b){
	c = a + b;
	console.log("value of c " + c);
}

add ( 10, 20);
add (10, " hello");
add ( "hello ", " world!");
add ( "", null);
add ( undefined, false);
add ( NaN, 0);
add ( null, 20);
add ( "", 20);

var d = "He said that's 'fine', has the feedback";

var changeDisplay = document.getElementById("results");
// console.log("changeDisplay " + changeDisplay );
// console.log(changeDisplay.innerHTML);
changeDisplay.innerHTML = "<p>JavaScript has change this section</p>";
