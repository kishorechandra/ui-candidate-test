     // Example unit test function
     function divide( a, b ) {
        // To see the test pass, uncomment the following line
        return a / b;
     }

     // Write a function that takes a single argument (a string) and returns the string reversed.
     function reverseString(str) {
         // FILL THIS IN
		    var reverse = '';
			var strLength = str.length;
			for (var i = strLength - 1; i >= 0; i--)
			reverse += str[i];
			return reverse;
     }

     // Write a function that takes an array of numbers and returns the minimum value
	 function findMinValue(values) {
         // FILL THIS IN
		 Array.prototype.min = function() {
			return Math.min.apply(null, values);
		};
		
		return values.min();
     }

     // Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
     function findDistinctValues(values) {
         // FILL THIS IN
		 //var values = [1,2,1,3,2,4];
		 var unique = values.filter( onlyUnique );
		function onlyUnique(value, index, self) { 
			return self.indexOf(value) === index;
		}
			
     }

     // Write a function that logs the numbers from 1 to 100 to the console.
     // For multiples of three print "Fizz" instead of the number.
     // For multiples of five print "Buzz".
     // For numbers which are multiples of both three and five print "FizzBuzz".
     function doFizzBuzz() {
         // FILL THIS IN
		 for(var i=1;i<=100;i++){
			 if((i%3 == 0) && (i%5 == 0)){
				 console.log("FizzBuzz"+i);
				 
			 }else if(i%3==0){
				 console.log("Fizz"+i);
			 }else if(i%5==0){
				 console.log("Buzz"+i);
			 }
			 
		 }
		 
     }

     // You have a master array of strings, where each element is a fruit name.
     // You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
     // For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
     // Write the function that will remove the values contained in fruitsToRemove from the array fruits.
     function removeFruits(fruits, fruitsToRemove) {
         // FILL THIS IN
		
		for (var i in fruits) {
			for (var j in fruitsToRemove) {
				if (fruits[i] == fruitsToRemove[j]) {
            //alert('found ' + list1[i] + ' in both lists');
				list1.splice(fruits.indexOf(fruits[i]),1);
				}
			}
		}
		 
     }

     // Write a function to push either a simple value or an array of values onto a specified array.
     // For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
     // If toPush is a simple value, it should be pushed onto array as an element.
     // If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
     function pushOntoArray(array, toPush) {
         // FILL THIS IN
		 array.push(toPush);
		 return array;
     }

     // Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
     function splitListStrUsingComma(sourceStr) {
         // FILL THIS IN
		 var splitValue="[]";
		 if(sourceStr.length==0){
			 return splitValue;
		 }else{
			 splitValue=sourceStr.split(",");
			 return splitValue;
		 }
     }

     // Write a function that will take any number of arguments and return their sum
     function sum(a,b) {
         // FILL THIS IN
		 return a+b;
     }

     // Write a function that will return true if a specified string consists of only whitespace.
     function isOnlyWhitespace(sourceStr) {
         // FILL THIS IN
		 if(sourceStr==" "){
			 return true;
		 }else{
			 return false;
		 }
     }

     // write an example of a javascript closure
	 function closureAdd(x) {
		return function(y) {
			return x + y;
		};
	}

     // define a json object that represents a collection of people.
     // each person should have the following properties
     // - first name
     // - last name
     // - city
     // - state
     // - zip
     // - a collection of phone numbers (home, work, mobile)
	/*{
    "person": [
        {
            "first name": "kishore",
            "last name": "chandra",
			"city": "ballwin",
			"state": "MO",
			"zip": "63017",
			"phone numbers": {
								"home":"8999998781"
								"work":"9403433333",
								"mobile":"2304564534"

							}
        },
        {
			"first name": "Joseph",
            "last name": "Dange",
			"city": "chesterfield",
			"state": "MO",
			"zip": "63017",
			"phone numbers": {
								"home":"8999998781"
								"work":"1403344333",
								"mobile":"5304564534"

							}
        },
        {
           "first name": "john",
            "last name": "dang",
			"city": "Chicago",
			"state": "IL",
			"zip": "43015",
			"phone numbers": {
								"home":"7922998781"
								"work":"8403431133",
								"mobile":"6304564534"

							}
			}
		]
	}*/

     // Create a javascript object (DataTable) with the following:
     // A private columns property (string array)
     // A private rows property (string array)
     // A public method addRows that adds an item to the rows array
     // A public method addColumns that adds an item to the columns array
     // A public method getData that returns the a json object representation of the DataTable
     // Note: the row object should be a hash of the column name and row item value
     // Example:
     // .addColumns('column1', 'column2', 'column3');
     // .addRow('value1A', 'value1B', 'value1C');
     // .addRow('value2A', 'value2B', 'value2C');
	 

     // within div1, programatically create a
     // SELECT element (with multiple items) and a button.
     // when the button is clicked write out the name and value of the selected item to the console.
	 function getDropDownList(optionList) {
		var combo = $("<select></select>").attr("id", "select").attr("name", "data");

		$.each(optionList, function (i, ol) {
			combo.append("<option>" + ol + "</option>");
		});

		$("#div1").append(combo);
		
		 var button= $('<input/>').attr({ type: 'button', id:'btn1', value:'Click'});
		 $("#div1").append(button);
		 
		 $('#btn1').on("click",function() {
			console.log("selected Value is "+$('#select').val()); 
		});
	}

     // Write 5 different jQuery selectors to retrieve the
     // sample anchor in the markup below.
	 
	/* $(".link")
	 $("a")	
	 $("a:first")
	 $("a[target!='_blank']")
	 $("#test")*/

     // Programatically create an array with 5 items.  Create a list item for each item in the array
     // and add the list items to the unordered list with an id of "list1".
	 function addLiToUl(optionList){
	
		$.each(optionList, function (i, ol) {

			$("#list1").append('<li>'+ol +'</li>');
			
		});
	
	}

     // Use javascript to add a list of checkboxes and 2 links
     // to the div with an id of "foobar"
     // When the first link is clicked, all the checkboxes should be checked (i.e. check all)
     // When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)
	 function addCheckBox(optionList){
	
	
		$.each(optionList, function (i, ol) {

			$('#foobar').append('<input type="checkbox" class="myCheckbox" />');
			$('#foobar').append('<label>'+ol+'</label>');
			
		});
	
		$('#foobar').append('<a href="#" id="selectAll">Select All</a>');
		$('#foobar').append('<a href="#" id="removeAll">Remove All</a>');
	
		$('#selectAll').on("click",function() {
				$(".myCheckbox").prop('checked', true);
		});
		
		$('#removeAll').on("click",function() {
				$(".myCheckbox").prop('checked', false);
		});
	
	
	
	}
