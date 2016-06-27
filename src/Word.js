var gibberish = document.getElementById("input");
var button = document.getElementById("enter");
var string;

button.addEventListener("click", function(event){
	string = gibberish.value;
	checkWordCount(string);

});

console.log("string", string);

function checkWordCount (string){
	var words = string.split(" ");
	if (words.length>100){
		return false;
		console.log("false", words);
	} else {
		return true;
		console.log("true", words);
	};
};

function duplicateCheck (string){
	
}