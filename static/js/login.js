

function validate() {
    var email = document.getElementById("uLogin").value;
    var password = document.getElementById("uPassword").value;

    isValidUser(email,password);
}


function User(name, email, password, type, loggedIn){

    this.name = name;
    this.password = password;
    this.email = email;
    this.type = type;
    this.loggedIn = loggedIn;
}

function getValidUsers() {
    var arr = [];
    var a = new User('Abby', 'abby@gmail.com', 'adminpw', 'admin', false);
    var b = new User('Bob', 'bob@gmail.com', 'managerpw', 'manager', false);
    var c = new User('Charlie', 'charlie@gmail.com', 'founderpw', 'founder', false);

    arr.push(a);
    arr.push(b);
    arr.push(c);
    return arr;
}

var pos;
var validUsers = getValidUsers();
function isValidUser(uEmail, uPassword){
    var valid = false;
    for(var i = 0; i < validUsers.length; i++){
        if(validUsers[i].email == uEmail && validUsers[i].password == uPassword) {
            valid = true;
            validUsers[i].loggedIn = true;
            pos = i;
        }
    }
    if(valid){
        alert("Logged in status: " + validUsers[pos].loggedIn + "Pos:" + pos);

        if(validUsers[pos].type == "admin")
            window.location = "admin.html";
        else if(validUsers[pos].type == "manager")
            window.location = "manager.html"
        else
            window.location = "founder.html"
    }

    else
        alert("Your email and/or password is incorrect!");
}