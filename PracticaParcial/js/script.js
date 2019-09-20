//Eliminar elementos duplicados de un array
var elements = ['1','2','2','4','5','4','7','3','6'];

console.log(elements);

function removeRepeated(){

    for(i = 0; i<elements.length; i++){//i represents the position to evaluate
        var j = i+1;//j is used to evaluate the rest of the array

        for(j; j<elements.length; j++){

            if(elements[i] == elements[j]){
                elements.splice(j,1);
            }
        }
    }

    console.log(elements);
}

//Verificar si N° es biciesto

var anios = [1992,2000,1900];

anios.forEach(year => {
    isBiciesto(year);
})

function isBiciesto(year){
    if(year%4 == 0){

        if(year%100 == 0){

            if(year%400 == 0){
                console.log('Es biciesto.')
            }else{
                console.log('No es biciesto.')
            }

        }else{
            console.log('No es biciesto.')
        }

    }else{
        console.log('No es biciesto.')
    }
}

//Crear Objeto Persona y ordenar un array de dicho objeto usando el metodo Sort()
//teniendo en cuenta la edad de la persona

var Persona = function(nombre,apellido,edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

var persona1 = new Persona();
persona1.nombre = 'Luis';
persona1.apellido = 'Antinori';
persona1.edad = 27;

var persona2 = new Persona()
persona2.nombre = 'Gabriel';
persona2.apellido = 'Antinori';
persona2.edad = 19;

var persona3 = new Persona();
persona3.nombre = 'Ana';
persona3.apellido = 'Percara';
persona3.edad = 26;

var personas = [];
personas.push(persona1);
personas.push(persona2);
personas.push(persona3);

console.log(personas);

console.log(personas.sort((a,b) => {
    return a.edad - b.edad;
}));
