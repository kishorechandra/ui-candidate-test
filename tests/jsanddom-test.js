/********************************
Unit Test Example
********************************/

test( "Example Test", 2, function() {
    // Verify the method exists
    equal( typeof divide, 'function', 'Must contain a divide function' ); 

    // Make sure the result from the divide function is valid
    equal( divide( 4, 2 ), 2);
});
/********************************
Please create your tests below...
********************************/

test( "reverse String", 2, function() {
    // Verify the method exists
    equal( typeof reverseString, 'function', 'Must contain a reverseString function' ); 

    // Make sure the result from the divide function is valid
    equal( reverseString( "john" ), "nhoj");
});

module( "minimum value Unit Test" );
test( "minimum value", 2, function(assert) {
    // Verify the method exists
    equal( typeof findMinValue, 'function', 'Must contain a findMinValue function' ); 
	var data = [1, 2, 3, 4, 5];
    // Make sure the result from the divide function is valid
     equal(findMinValue(data),1);
});


module( "splitListStrUsingComma Unit Test" );
test( "minimum value", 2, function(assert) {
    // Verify the method exists
    equal( typeof splitListStrUsingComma, 'function', 'Must contain a findMinValue function' ); 
	var data = "";
    // Make sure the result from the divide function is valid
     equal(splitListStrUsingComma(data),'[]');
	 
});

module( "isOnlyWhitespace Unit Test" );
test( "isOnlyWhitespace", 2, function(assert) {
    // Verify the method exists
    equal( typeof isOnlyWhitespace, 'function', 'Must contain a isOnlyWhitespace function' ); 
	var data = " ";
    // Make sure the result from the divide function is valid
     equal(isOnlyWhitespace(data),true);
	 
});

module( "sum Unit Test" );
test( "sum", 2, function(assert) {
    // Verify the method exists
    equal( typeof sum, 'function', 'Must contain a sum function' ); 
	var data = " ";
    // Make sure the result from the divide function is valid
     equal(sum(3,6),9);
	 
});







