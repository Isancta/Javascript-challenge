// varibale to hold data

var Aliens = data;

// Select the button
var submit = d3.select("#filter-btn");

submit.on("click", function() [{

	//d3.event.preventDefault();
  // Select the input element and get the raw HTML node
  var inputElement1 = d3.select("#datetime");
   
  // Get the value property of the input element
  var inputValue1 = inputElement1.property("value");

  console.log(inputValue1);
  console.log(Aliens);

  var filteredData1 = Aliens.filter(occurence =>occurence.datetime === inputValue1);
  console.log(filteredData1);
  
},

	{var inputElement2 = d3.select("#place");
var inputValue2 = inputElement2.property("value");
console.log(inputValue2);
var filteredData2 = Aliens.filter(occurence2 =>occurence2.place === inputValue2);
	},
	
	{var inputElement3 = d3.select("#location");
var inputValue3 = inputElement3.property("value");
console.log(inputValue3);
var filteredData3 = Aliens.filter(occurence3 =>occurence3.location === inputValue);	
	},
	
	{var inputElement4 = d3.select("#shape");
	var inputValue4 = inputElement4.property("value");
	console.log(inputValue4);
	var filteredData4 = Aliens.filter(occurence4 =>occurence4.shape === inputValue);
	}

]);