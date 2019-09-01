function nameValidations() {
    var value = document.getElementById('inName').value;

    if (value == "") {//
      alert('El nombre no puede estar en blanco.');
    }else if(validateSpecialCharacters(value)){
      alert('No debe tener caracteres especiales');
    }else if(!validateString(value)){
      alert('Debe tener entre 4 y 20 caracteres');
    }
}

function lastNameValidations() {
    var value = document.getElementById('inLastName').value;

    if (value == "") {//
      alert('El apellido no puede estar en blanco.');
    }else if(validateSpecialCharacters(value)){
      alert('No debe tener caracteres especiales');
    }else if(!validateString(value)){
      alert('Debe tener entre 4 y 20 caracteres');
    }
}

function validateString(element){
  var valRegEx = /^[a-zA-Z]{4,20}$/g

  //returns false if string doesn't match length requiered or it has special characters
  return element.match(valRegEx);

}

function validateSpecialCharacters(element){
  var valRegEx = /[@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g

  //true if string contains any of the regex characters
  return element.match(valRegEx);
}

function edadCheck() {
  var checked = document.getElementById('inCheckEdad').checked;
  if(checked){
    document.getElementById('inEdad').disabled = false;
  }else{
    document.getElementById('inEdad').disabled = true;
  }

}

function edadValidation(){
  var notNumbers = /[a-zA-Z]$/;
  var edad = document.getElementById('inEdad').value;

  if(edad.match(notNumbers)){
    alert('Solo se permiten numeros');
  }
}

function emailValidation() {
  var email = document.getElementById('inEmail').value;
  var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  var domains = [/@google.com\s*$/,/@icloud.com\s*$/,/@outlook.com\s*$/];

  if(email == ""){
    alert('Email no puede estar vacio');
  }

  if(email.match(mailFormat)){
    var exist = 0;

    domains.forEach(function (domain){
      if(email.match(domain)){
        exist++;
      }
    });

    if(exist == 0){
      alert('Dominio invalido');
    }

  }else{
    alert('Email invalido');
  }

}

function passwordValidation(){
  var passwordFormat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{9,20}$/
  var password = document.getElementById('inPwd').value;

  if(password == ""){
    alert('La contraseña no puede estar vacia');
  }

  if(!password.match(passwordFormat)){
    alert('La contraseña debe tener entre 9 y 20 caracteres,'
     + ' tener al menos una letra mayuscula y una minuscula,'
     + ' y debe contener al menos un numero.');
  }

}
