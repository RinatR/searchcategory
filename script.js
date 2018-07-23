function searchCategory() {
	getCategoryList();
}

function getCategoryList() {

  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'datacategory.json', false);
  xhr.send();
  if (xhr.status != 200) {
    alert( xhr.status + ': ' + xhr.statusText );
  }
  else {
    json = xhr.responseText;
    parseJSON(json);
  }
}

function parseJSON(json) {

  var data = JSON.parse(json);
  var rusNames = [];
  var engNames = [];
  var ids = [];

  for ( var i = 0; i < data.length; i++) {
   rusNames.push(data[i].name);
   engNames.push(data[i].englishName);
   ids.push(data[i].id);
  }

  findCategory(rusNames,engNames,ids)
}

function findCategory(rusNames,engNames,ids) {
  var searchValue = document.getElementById("search-field").value;
  var rusNamesFinal = [];
  var engNamesFinal = [];
  var idsFinal = [];
  var check = checkLanguage(searchValue);

  if(check) {
    for (var i = 0; i < rusNames.length; i++) {
      if(rusNames[i].indexOf(searchValue.toUpperCase()) > -1) {
        rusNamesFinal.push(rusNames[i]);
        idsFinal.push(ids[i])
      }
    }
    showCategory(rusNamesFinal,idsFinal)
  }
  else {
    for (var i = 0; i < engNames.length; i++) {
      if(engNames[i].indexOf(searchValue.toUpperCase()) > -1) {
        engNamesFinal.push(engNames[i]);
        idsFinal.push(ids[i])
      }
    }
    showCategory(engNamesFinal,idsFinal)
  }
}

function checkLanguage(text) {
  var regexp = /^[а-яё]+$/i;
    if(text.match(regexp)) {
        return true;
    }
}


function showCategory(names,idsFinal) {
  var row, cell, text;
  var table = document.getElementById("result-table");

  for (var i = 0; i < names.length; i++) {
    row = table.insertRow(1);
    cell1 = row.insertCell(0);
    cell2 = row.insertCell(1);
    text1 = document.createTextNode(names[i]);
    text2 = document.createTextNode(idsFinal[i]);
    cell1.appendChild(text1);
    cell2.appendChild(text2);
  }
}
