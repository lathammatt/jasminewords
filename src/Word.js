var gibberish = document.getElementById("input");
var button = document.getElementById("enter");
var string;

button.addEventListener("click", function(event){
	string = gibberish.value;
	checkWordCount(string);
	duplicateCheck(string);
	verifyAlphaNumeric(string);
});


function checkWordCount (string){
	var words = string.split(" ");
	if (words.length>100){
		return false;
	} else {
		return true;
	};
};

function duplicateCheck (string){
	var sorted = string.split(" ").sort();
	var noDupes = true;
	for (var i = 0; i < sorted.length; i++) {
		if (sorted[i+1] === sorted[i]){
			noDupes = false;
		} 
	};
	return noDupes;
};

function verifyAlphaNumeric (string){
	var allowed = /^[A-Za-z0-9\s]+$/;
	var splitup = string.split("");
	var allGood = true;
	for (var i = 0; i < splitup.length; i++) {
		if (splitup[i].match(allowed)){
		} else {
			allGood = false;
		};
	};
	return allGood;
};