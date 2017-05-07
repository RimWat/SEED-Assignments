/*
	Pokemon JavaScript!
*/
console.log("Loading pokemon");

window.onload = function(){
	//Event Listener
	document.getElementById("pokeBtn").addEventListener("click",getPokemon);
}
//Function on Click of Btn

var pokemon;
function getPokemon(){
	console.log("getting pokemon!");
	//Get User input
	var pokemonId = document.getElementById("pokeId").value;
	console.log('user entered: ' + pokemonId);
	
	//request data - xhr = xml http request 
	var xhr = new XMLHttpRequest(); //Communicate with the Server
						//Hardly used with XML anymore, we now use JSON!
	xhr.onreadystatechange = function(){
		/**
		 * readyState 1 = Request is send
		 * readyState 2 = Request has been received by Server
		 * readyState 3 = Server Processing Request
		 * readyState 4 = Response received and ready to handle 
		 */
		console.log("readystate has changed, it now is: " + xhr.readyState );
		if(xhr.readyState == 4 && xhr.status == 200){
			//console.log(xhr.responseText);
			pokemon = JSON.parse(xhr.responseText);
			presentPoke(pokemon);
		}
	}
	/**
	 *		Request type, URL,	Using Asynchronize? -true
	 */
	xhr.open("GET", "http://pokeapi.co/api/v2/pokemon/" + pokemonId,true);
	xhr.send();
		
	//clear the user input
	document.getElementById("pokeId").value = "";
}

//Function to present the data
function presentPoke(poke){
	document.getElementById('pokeName').innerHTML = poke.name;
	document.getElementById('pokePic').setAttribute('src', pokemon.sprites.front_default);
}