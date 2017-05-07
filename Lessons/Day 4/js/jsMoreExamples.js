
var start = '("favColor","orange","FavSeason","fall")';

console.log(start);
var myObject = JSON.parse(start);

var strNewString = JSON.string(myObject);

var book = {
		title: "Harry Potter",
		year: 2001,
		author: {
			name: "JK",
			dob: 1965
		}
};

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.myjson.com/bins/kns3r', true);
xhr.send();

xhr.onreadystatechange = function () {
	console.log(xhr.readyState);
	console.log(xhr.status);	//if the path of files are incorrect status will be 404
	console.log(xhr.statusText);
}
var myStuff
xhr.onload = function(){
	if (xhr.status == 200){ //200 means the file was found
		myStuff = JSON.parse(xhr.responseText);
		console.log(myStuff);
	}
}

	// {"color":"orange","season":"fall"}
	
	// {"name1":"value1","name2":{
								// "":"",
								// "":"",
								// "":""
							// },
	// "":""}
	
var person = (fname:"Jim", lname:"Carter", age:16)
var text = "", x;
for (x in person){
	text += person(x);
}

