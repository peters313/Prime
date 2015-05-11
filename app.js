alert("Welcome to Eric Peters' Prime Academy Resume")

function omsPlanner (){
	var phrase = prompt("Which job description would you like to view?");
	if (typeof(phrase) != "omsPlanner"){
			alert("That is not a valid job description!");
			return false;
	}
}

$(document).ready(main);
