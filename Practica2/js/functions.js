function helloWorldbyId() {
  document.getElementById('myId').innerHTML = "Hello World";
}

function helloWorldByClassName(){
  document.getElementsByClassName('test')[0].innerHTML = "Hello World";
}

function helloWorldQuery() {
  var p = document.querySelector('.test');
  p.innerHTML = 'Hello World';
}

function insertRow() {
  var table = document.getElementsByTagName('table')[0];
  var row = table.insertRow();
  var cell = row.insertCell();
  cell.innerHTML = 'new cell';
}

function deleteRow(){
  document.getElementsByTagName('table')[0].deleteRow(-1);
}

function highlight(){
  var spanCollection = document.querySelectorAll('.myClass');
  
  spanCollection.forEach(span => {
    span.setAttribute('style','font-weight:bold;');
  });
}
