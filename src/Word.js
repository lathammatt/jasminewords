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
		console.log("false", words);
		return false;
	} else {
		console.log("true", words);
		return true;
	};
};

function duplicateCheck (string){
	var sorted = string.split(" ").sort();
	for (var i = 0; i < sorted.length; i++) {
		if (sorted[i+1] === sorted[i]){
			console.log("duped", sorted);
			return false;
		} else {
			// console.log("no dupes", sorted);
		};
	};
};

function verifyAlphaNumeric (string){
	var re = new RegExp("^([A-Za-z0-9])$");
	if (re.test(string)) {
	// var allowed = /^[A-Za-z0-9]+$/;
	// var splitup = string.split("");
	// for (var i = 0; i < splitup.length; i++) {
	// 	if (splitup[i].match(allowed)){
			console.log("alpha", string);
			return true;
		} else {
			console.log("not alpha", string);
			return false;
		};
	};
// };