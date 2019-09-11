
var url1 = 'https://utn-2019-avanzada2-tp5.herokuapp.com/records';

loadTable(url1)
    .then((response) => {
        
        var tbody = document.getElementById('tableid').getElementsByTagName('tbody')[0];
        var data = JSON.parse(response);

        data.forEach(person =>{
            addPerson(tbody,person);
        });
    })
    .catch((reason) => {
        console.log(Error(reason));
    })
//--------------------------------------------------------------------------

function loadTable(url){
    return new Promise((resolve,reject)=>{
        //Create a request variable and assign a new XMLHttpRequest object to it.
        var request = new XMLHttpRequest();

        //Open a new connection, using the GET request on the URL endpoint
        request.open('GET',url,true);

        request.onload = function(){
            //Begin accessig JSON data here
            if(request.status == 200){
                resolve(request.response)
            }else{
                reject(Error('Data couldnt be loaded. Error: ' + request.statusText));
            }
        }

        request.onerror = function(){
            reject(Error('There was an network error.'));
        }

        //Send request
        request.send();
    });
}


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

 



