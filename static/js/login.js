

function validate() {
    let email = document.getElementById("uLogin").value;
    let password = document.getElementById("uPassword").value;

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
    let arr = [];
    let a = new User('Abby', 'abby@gmail.com', 'adminpw', 'admin', false);
    let b = new User('Bob', 'bob@gmail.com', 'managerpw', 'manager', false);
    let c = new User('Charlie', 'charlie@gmail.com', 'founderpw', 'founder', false);

    arr.push(a);
    arr.push(b);
    arr.push(c);
    return arr;
}

let pos;
let validUsers = getValidUsers();
function isValidUser(uEmail, uPassword){
    let valid = false;
    for(let i = 0; i < validUsers.length; i++){
        if(validUsers[i].email === uEmail && validUsers[i].password === uPassword) {
            valid = true;
            validUsers[i].loggedIn = true;
            pos = i;
        }
    }
    if(valid){
        alert("Logged in status: " + validUsers[pos].loggedIn + "Pos:" + pos);

        if(validUsers[pos].type === "admin")
            window.location = "admin.html";
        else if(validUsers[pos].type === "manager")
            window.location = "manager.html";
        else
            window.location = "founder.html"
    }

    else
        alert("Your email and/or password is incorrect!");
}