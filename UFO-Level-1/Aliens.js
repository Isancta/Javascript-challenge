// varibale to hold data

var Aliens = data;

// Select the button
var submit = d3.select("#filter-btn");

submit.on("click", function() {

	//d3.event.preventDefault();
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(Aliens);

  var filteredData = Aliens.filter(occurence =>occurence.datetime === inputValue);

  console.log(filteredData);
});