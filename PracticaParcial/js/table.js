
function generateTable(){
    var columns = document.forms['inputs']['columns'].value;
    var rows = document.forms['inputs']['rows'].value;

    var table = document.querySelector('table');
    
    generateTHead(table,columns);
    generateTBody(table,rows,columns);
    
    return false;
}

function generateTHead(table,columns){
    var thead = table.createTHead();
    var th_row = thead.insertRow(-1);

    for(i = 0; i<columns; i++){
       var th = document.createElement('th');
       var textNode = document.createTextNode('Column ' + i);
       th.appendChild(textNode);
       th_row.appendChild(th);
    }
}

function generateTBody(table,rows,columns){
    var tbody = document.createElement('tbody');
    
    for(i = 0; i<rows; i++){
       var tb_row = tbody.insertRow(-1);
       for(j = 0; j<columns; j++){
            var cell = tb_row.insertCell(-1);
            var textNode = document.createTextNode('info ' + j);
            cell.appendChild(textNode);
       }
    }
    table.appendChild(tbody);
}