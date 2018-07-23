var json;

function getCategoryList() {

  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'datacategory.json', false);
  xhr.send();
  if (xhr.status != 200) {
    alert( xhr.status + ': ' + xhr.statusText );
  }
  else {
    json = xhr.responseText;
  }
}

function searchCategory() {

  var data = JSON.parse(json);
  var rusNames = [];
  var ids = [];

  for ( var i = 0; i < data.length; i++) {
   rusNames.push(data[i].name);
   ids.push(data[i].id);
  }

	var searchValue = document.getElementById("search-field").value;
	var list = document.getElementById("result-list");
	var table = document.getElementById("result-table");
	var rusNamesFinal = [];
	var idsFinal = [];
		for (var i = 0; i < rusNames.length; i++) {
			if(rusNames[i].indexOf(searchValue.toUpperCase()) > -1) {
				console.log(rusNames[i] + " " + ids[i]);
				rusNamesFinal.push(rusNames[i]);
				idsFinal.push(ids[i])
			}
		}

	var row , cell, text;
	for (var i = 0; i < rusNamesFinal.length; i++) {
		// if(rusNamesFinal[i].charAt(0) == searchValue.charAt(0)) {
			row = table.insertRow(1);
			cell1 = row.insertCell(0);
			cell2 = row.insertCell(1);
			text1 = document.createTextNode(rusNamesFinal[i]);
			text2 = document.createTextNode(idsFinal[i]);
				cell1.appendChild(text1);
				cell2.appendChild(text2);
			// }
	}
}
