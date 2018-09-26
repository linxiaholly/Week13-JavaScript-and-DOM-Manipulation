// from data.js
var tableData = data;
var tbody = d3.select("tbody");
// create a init function get all data in the webpage
function init() {
tableData.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });
};

// Select the submit button
var submit = d3.select("#filter-btn");

// Complete the click handler for the form
submit.on("click", function() {
    // Prevent the page from refreshing
     d3.event.preventDefault();
  
    // Select the input element and get the raw HTML node
    d3.select("tbody").html("");
    var inputElement_1 = d3.select("#datetime");
    var inputElement_2 = d3.select("#state");
    // Get the value property of the input element
    var inputValue_1 = inputElement_1.property("value");
    var inputValue_2 = inputElement_2.property("value");
    console.log(inputValue_1);
    console.log(inputValue_2);
    // clear the input value
    d3.select("#datetime").node().value = "";
    d3.select("#state").node().value = "";
    //filter Data
    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue_1 && tableData.state === inputValue_2) ;
  
    console.log(filteredData);
    

    // get the value into datatable
    var tbody = d3.select("tbody");
    filteredData.forEach((ufoReport) => {
        var row = tbody.append("tr");
        Object.entries(ufoReport).forEach(([key, value]) => {
          var cell = tbody.append("td");
          cell.text(value);
        });
      });
  });
init();