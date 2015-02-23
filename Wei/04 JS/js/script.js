var textClosure = function() {
	var x = 4;
	var closeX = function() {
		return x;
	}
	return closeX;
}

// try first

textClosure();
textClosure()();