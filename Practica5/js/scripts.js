//Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

//Open a new connection, using the GET request on the URL endpoint
request.open('GET','https://utn-2019-avanzada2-tp5.herokuapp.com/records',true);


request.onload = function(){
    var tbody = document.getElementById('tableid').getElementsByTagName('tbody')[0];

    //Begin accessig JSON data here
    var data = JSON.parse(this.response);

    data.forEach(person =>{
        addPerson(tbody,person);
    });
}

//Send request
request.send();

function addPerson(tbody,person){
    var row = tbody.insertRow(-1);
    var attributes = personToArray(person);
    var index = 0;

    attributes.forEach(attribute => {
        var cell = row.insertCell(index);
        var cellText = document.createTextNode(attribute);
        cell.appendChild(cellText);
        index++;
    });

    console.log(row);
}

function personToArray(person){
    var attributes = [];

    attributes.push(person.id);
    attributes.push(person.first_name);
    attributes.push(person.last_name);
    attributes.push(person.email);
    attributes.push(person.gender);
    attributes.push(person.last_connected_id);

    return attributes;
}