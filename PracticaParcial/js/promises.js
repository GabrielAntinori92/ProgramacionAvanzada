//dado un array de palabras upper case la primera letra y luego sort() en orden alfabetico
//utilizar promesas encadenadas donde cada operacion sera una funcion que retorna una promesa
//si algunos de los elementos del array no es un string return error.

var arreglo = ['gabi','caro','nana','ana'];

upperCasePromise(arreglo)
    .then((result) =>{
        console.log(result);

        sortPromise(result)
        .then((sorted) => {
            console.log(sorted);
        })
        .catch((reason)=>{
            console.log(Error(reason));
        });
    })
    .catch((reason)=>{
        console.log(Error(reason));
    });

//-------------------------------------------------------------------------------------

function upperCasePromise(coleccion){
    return new Promise((resolve,reject)=>{
        try{
            coleccion.forEach((word,index) => {
                if(typeof(word) === 'string'){
                    var letter = word[0];//first letter
                    letter = letter.toUpperCase();
                    word = word.replace(word[0],letter);
                    coleccion[index] = word;
                }else{
                    throw new Error('Incorrect Type');
                }
            
            },coleccion);
            resolve(coleccion);
        }catch(error){
            reject(error);
        }
    })
}

function sortPromise(coleccion){
    return new Promise((resolve,reject)=>{
        try{
            resolve(coleccion.sort());
        }catch(error){
            reject(error);
        }
    })
}
