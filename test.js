var op = require('./')

describe ('Hello module', function() {

    // set of test
    it ('should return result of accumulation two numbers', function() {
	var result = op.add(1, 2);
	result.should.equal(3);

    });

    it ('should return result of accumulation two numbers', function() {
        var result = op.kurang(1, 2);
        result.should.equal(-5);

    });

});
