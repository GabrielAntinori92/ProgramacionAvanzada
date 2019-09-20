function getFormvalue(){
    var fname = document.forms['form']['fname'].value;
    var lname = document.forms['form']['lname'].value;

    if(fname == ""){
        alert('Name cannot be empty.');
        return false;
    }

    if(lname == ""){
        alert('Last Name cannot be empty.');
        return false;
    }
}