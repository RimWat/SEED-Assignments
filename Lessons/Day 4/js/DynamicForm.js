console.log("Is this page loaded")

window.onload = function(){
	document.getElementById("addStudentBtn").addEventListener("click",addStudent);
}

function addStudent(){
	//Grabbing the value from user based on ID
	var sID = document.getElementById("studentID").value;
	var sName = document.getElementById("studentName").value;
	var sMajor = document.getElementById("studentMajor").value;
	
	console.log("value of sID && sName && sMajor " + )
	if (sID && sName && sMajor){
		console.log(sID + sName + sMajor);
		
		var sIDInput = document.createElement("input");
		var sNameInput = document.createElement("input");
		var sMajorInput = document.createElement("input");
		var sBR = document.createElement("br");
		
		sIDInput.value = sID;
		sNameInput.value = sName;
		sMajorInput.value = sMajor;
		
		var sForm = document.getElementById("studentForm");
		sForm.appendChild(sBR);
		sForm.appendChild(sIDInput);
		sForm.appendChild(sNameInput);
		sForm.appendChild(sMajorInput);	
		clearFormValues();
	} else if (sID){
		alert("value of sID " + sID);
	} else if (sName){
		alert("value of sName " + sName);
	} else if (sMajor){
		alert("value of sMajor " + sMajor);
	}
}
function clearFormValues(){
	//clearing the input values in the form
	document.getElementById("studentID").value = "";
	document.getElementById("studentName").value = "";
	document.getElementById("studentMajor").value = "";
}

