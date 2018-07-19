
var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate() {
    var email = document.getElementById("uLogin").value;
    var password = document.getElementById("uPassword").value;

    isValidUser(email,password);
}


function User(name, email, password, type){

    this.name = name;
    this.password = password;
    this.email = email;
    this.type = type;
}
var arr = [];
function getValidUsers() {

    var a = new User('Abby', 'abby@gmail.com', 'adminpw', 'admin');
    var b = new User('Bob', 'bob@gmail.com', 'managerpw', 'manager');
    var c = new User('Charlie', 'charlie@gmail.com', 'founderpw', 'founder');

    arr.push(a);
    arr.push(b);
    arr.push(c);
    return arr;
}

function isValidUser(uEmail, uPassword){
    var validUsers = getValidUsers();
    var valid = false;
    for(var i = 0; i < validUsers.length; i++){
        if(validUsers[i].email == uEmail && validUsers[i].password == uPassword)
            valid = true;
    }
    if(valid)
        window.location = "home.html";
    else
        alert("Your email and/or password is incorrect!");
}
