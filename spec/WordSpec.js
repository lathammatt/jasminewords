describe ("word check", function () {

	it ("should have a word count checker", function(){
		expect(checkWordCount).toBeDefined();
	});

	it ("should return false if over 100 words", function(){
			checkWordCount(string){
				var words = string.split(" ");
				expect(words.length>100).toBeFalsy();
			};
	});


});