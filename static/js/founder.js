//for editing the top of the page -- the logo, name, description, email and site
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("modifyGeneralInfo").classList.add('hide');
    document.getElementById("modifyProgress").classList.add('hide')

});

//functions for editing General Info
function changeGeneralEditable() {
    document.getElementById("name").contentEditable = "true";
    document.getElementById("description").contentEditable = "true";
    document.getElementById("email").contentEditable = "true";
    document.getElementById("site").contentEditable = "true";

    document.getElementById("modifyGeneralInfo").classList.remove('hide')

}

function saveGeneralEdits() {

    document.getElementById("name").contentEditable = "false";
    document.getElementById("description").contentEditable = "false";
    document.getElementById("email").contentEditable = "false";
    document.getElementById("site").contentEditable = "false";
    document.getElementById("modifyGeneralInfo").classList.add('hide');

    //get the editable element
    var nameElem = document.getElementById("name");
    var descriptionElem = document.getElementById("description");
    var emailElem = document.getElementById("email");
    var siteElem = document.getElementById("site");

    //get the edited element content
    var userNewName = nameElem.innerHTML;
    var userNewDescription = descriptionElem.innerHTML;
    var userNewEmail = emailElem.innerHTML;
    var userNewSite = siteElem.innerHTML;
    document.getElementById("currentName").innerHTML = userNewName;
    document.getElementById("currentDescription").innerHTML = userNewDescription;
    document.getElementById("currentEmail").innerHTML = userNewEmail;
    document.getElementById("currentSite").innerHTML = userNewSite;

    //save the content to local storage
    localStorage.userEdits = userNewName;
    localStorage.userEdits = userNewDescription;
    localStorage.userEdits = userNewEmail;
    localStorage.userEdits = userNewSite;

}

//functions for editing Progress
function changeProgressEditable() {

    document.getElementById("fundingStatus").contentEditable = "true";
    document.getElementById("accelerator").contentEditable = "true";
    document.getElementById("agreements").contentEditable = "true";
    document.getElementById("patents").contentEditable = "true";
    document.getElementById("applications").contentEditable = "true";
    document.getElementById("partnerships").contentEditable = "true";


    document.getElementById("modifyProgress").classList.remove('hide')

}

function saveProgressEdits() {
    document.getElementById("fundingStatus").contentEditable = "false";
    document.getElementById("accelerator").contentEditable = "false";
    document.getElementById("agreements").contentEditable = "false";
    document.getElementById("patents").contentEditable = "false";
    document.getElementById("applications").contentEditable = "false";
    document.getElementById("partnerships").contentEditable = "false";


    document.getElementById("modifyProgress").classList.add('hide')
}

// Saving all edits
function checkEdits() {

    //find out if the user has previously saved edits
    if (localStorage.userEdits != null)
        document.getElementById("name").innerHTML = localStoragse.userEdits;
    document.getElementById("currentName").innerHTML = localStorage.userEdits;
    document.getElementById("description").innerHTML = localStorage.userEdits;
    document.getElementById("currentDescription").innerHTML = localStorage.userEdits;
    document.getElementById("email").innerHTML = localStorage.userEdits;
    document.getElementById("currentEmail").innerHTML = localStorage.userEdits;
    document.getElementById("site").innerHTML = localStorage.userEdits;
    document.getElementById("currentSite").innerHTML = localStorage.userEdits;

}