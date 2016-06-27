describe ("word check", function () {

	it ("should have a word count checker", function(){
		expect(checkWordCount).toBeDefined();
	});

	it ("should return false if over 100 words", function(){
		expect(checkWordCount("This is a test string This is a test string This is a test string This is a test string This is a test string This is a test string This is a test string This is a test string This is a test string This is a test string This is a test string This is a test string This is a test string This is a test string This is a test string This is a test string This is a test string This is a test string This is a test string This is a test string This is a test string TEST")).toBe(false);
			expect(checkWordCount("This is a test string")).toBe(true);
			
	});

	it ("should have duplicate word checker", function(){
		expect(duplicateCheck).toBeDefined();
	});

	it ("return false if string has duplicate words", function(){
			expect(duplicateCheck("This is a test string")).toBe(true);
			expect(duplicateCheck("This is a test test string")).toBe(false);
	});

	it ("should have nonalpha linter", function(){
		expect(verifyAlphaNumeric).toBeDefined();
	});

	it ("return false if any non-alphanumeric characters", function (){
		expect(verifyAlphaNumeric("Th15 15 a t35t 5tr1n6")).toBe(true);
		expect(verifyAlphaNumeric("Th1$ i$ @ t#s# 5tr!n6:")).toBe(false);
	});
});
