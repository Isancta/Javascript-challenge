var tableData = data;
console.log(tableData);
// Fill in data in the table
var tbody = d3.select("tbody");

tableData.forEach(function(AliensProof) {
console.log(AliensProof);

var row = tbody.append("tr");
Object.entries(AliensProof).forEach(function([key, value]) {
console.log(key, value);

var cell = row.append("td").text(value);
});
});

 