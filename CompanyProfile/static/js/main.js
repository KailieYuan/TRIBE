/* Your code starts here */


// closeIcon
document.addEventListener('DOMContentLoaded', function(e){
	console.log('JS connected');

	document.getElementById("modifyGeneralInfo").classList.add('hide');



	document.getElementById("hide-contact").classList.add('hide');
	document.getElementById("currentEmail").classList.add('hide');
	document.getElementById("currentSite").classList.add('hide');

	// loadData();


	e.preventDefault();
	// scrollEvent();
	attachEvents();


	function addLinks(parent){ 
		parent.innerHTML += "<a href = 'resources.html'>Resources</a>"; 
		parent.innerHTML += "<a href = '#runway'>Make Request</a>";
		parent.innerHTML += "<a href = '#spinouts'>Email Report</a>";
		parent.innerHTML += "<a href = '#spinouts'>Report Issues</a>";
	}

		var sideNav = document.getElementById("mySide");
		addLinks(sideNav);

		// scrollEvent();

	});

	
	// function loadData() {
	// 	$.getJSON( "../spinouts.json", function( data ) {
	// 		// Write the data into our global variable.
	// 		$.each(data, function (index, item) {
 //       			console.log(item.companyname);

	//     });

	// 	});
	// }


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
    let nameElem = document.getElementById("name");
    let descriptionElem = document.getElementById("description");
    let emailElem = document.getElementById("email");
    let siteElem = document.getElementById("site");

    //get the edited element content
    let userNewName = nameElem.innerHTML;
    let userNewDescription = descriptionElem.innerHTML;
    let userNewEmail = emailElem.innerHTML;
    let userNewSite = siteElem.innerHTML;

    document.getElementById("currentName").innerHTML = userNewName;
    document.getElementById("currentDescription").innerHTML = userNewDescription;
    document.getElementById("currentEmail").innerHTML = userNewEmail;
    document.getElementById("currentSite").innerHTML = userNewSite;

    //save the content to local storage
    localStorage.name = userNewName;
    localStorage.description = userNewDescription;
    localStorage.email = userNewEmail;
    localStorage.site = userNewSite;

}

let i;
let content = "";


function checkEdits() {

    //find out if the user has previously saved edits
    if (localStorage.userEdits != null)
    document.getElementById("name").innerHTML = localStorage.name;
    document.getElementById("currentName").innerHTML = localStorage.name;
    document.getElementById("description").innerHTML = localStorage.description;
    document.getElementById("currentDescription").innerHTML = localStorage.description;
    document.getElementById("email").innerHTML = localStorage.email;
    document.getElementById("currentEmail").innerHTML = localStorage.email;
    document.getElementById("site").innerHTML = localStorage.site;
    document.getElementById("currentSite").innerHTML = localStorage.site;

}






	function attachEvents(){

  		$('nav a').click(function(e) {
			e.preventDefault();

	     	var myTarget = $(this.hash);
	     	myTarget = myTarget.length && myTarget
	      			
	        var targetOffset = myTarget.offset().top;
	       	$('html,body').animate({scrollTop: targetOffset}, 1000);
	
	     });

  	}






// NAVIGATION WITH HAMBERGUER MENU

	window.addEventListener('DOMContentLoaded', function(e){
	 	
	});


  	// function scrollEvent(){

  	// 	$('.sideNav a').click(function(e) {
			// e.preventDefault();

	  //    	var myTarget = $(this.hash);
	  //    	myTarget = myTarget.length && myTarget
	      			
	  //       var targetOffset = myTarget.offset().top;
	  //      	$('html,body').animate({scrollTop: targetOffset}, 1000);

	  //      	closeNav();
	
	  //    });

  	// }



	var mySideNav = document.getElementById("mySideNav");



	function openNav(){
		mySideNav.style.width="50vw";	

	}

	function closeNav(){
		mySideNav.style.width="0";
	}


	function closeModification(){
		document.getElementById("modifyGeneralInfo").classList.add('hide');
		// console.log ('close modification');
	}


	function showContact(){
		document.getElementById("hide-contact").classList.remove('hide');
		document.getElementById("currentEmail").classList.remove('hide');
		document.getElementById("currentSite").classList.remove('hide');
		document.getElementById("contact-us").classList.add('hide');
	}


	function hideContact(){
		document.getElementById("hide-contact").classList.add('hide');
		document.getElementById("currentEmail").classList.add('hide');
		document.getElementById("currentSite").classList.add('hide');
		document.getElementById("contact-us").classList.remove('hide');
	}




// /*------------------------------------------------*/
// 	//	Load the JSON
// /*------------------------------------------------*/
	
// 	function loadData() {
// 		$.getJSON( "../spinouts.json", function( data ) {
// 			// Write the data into our global variable.
// 			spinouts = data;
// 			console.log('JSON connected');

// 			// Call a function to create HTML for all the students.
// 			// generateAllStudentsHTML(spinouts);

// 			// Manually trigger a hashchange to start the app.
// 			// $(window).trigger('hashchange');
// 		});
// 	}






