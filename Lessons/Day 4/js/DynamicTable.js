console.log("Is this page loaded")

window.onload = function(){
	document.getElementById("addStudentBtn").addEventListener("click",addStudent);
}

function addStudent(){
	//Grabbing the value from user based on ID
	var sID = document.getElementById("studentID").value;
	var sName = document.getElementById("studentName").value;
	var sMajor = document.getElementById("studentMajor").value;
	
	console.log("value of sID && sName && sMajor ");
	if (sID && sName && sMajor){
		console.log(sID + sName + sMajor);
		
		var sRow = document.createElement("tr");
		var sIDInput = document.createElement("td");
		var sNameInput = document.createElement("td");
		var sMajorInput = document.createElement("td");
		
		sIDInput.value = sID;
		sNameInput.value = sName;
		sMajorInput.value = sMajor;
		
		sIDInput.textContent = sID;
		sNameInput.textContent = sName;
		sMajorInput.textContent = sMajor;
		sRow.appendChild(sIDInput);
		sRow.appendChild(sNameInput);
		sRow.appendChild(sMajorInput);
		
		document.getElementById("studentTable").appendChild(sRow)
		
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

