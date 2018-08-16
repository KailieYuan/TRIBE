/* Your code starts here */


// closeIcon
document.addEventListener('DOMContentLoaded', function(e){
	console.log('JS connected');


	loadData();


	e.preventDefault();
	// scrollEvent();
	attachEvents();


	function addLinks(parent){ 
		parent.innerHTML += "<a href = 'company.html'>Company Profile</a>"; 
		parent.innerHTML += "<a href = '#runway'>Make Request</a>";
		parent.innerHTML += "<a href = '#spinouts'>Email Report</a>";
		parent.innerHTML += "<a href = '#spinouts'>Report Issues</a>";
	}

		var sideNav = document.getElementById("mySide");
		addLinks(sideNav);

		// scrollEvent();

	});

	

	function loadData() {
		$.getJSON( "../spinouts.json", function( data ) {

		
		// for (var key in data) {
		//     for (var i = 0; i < data[key].length; i++) {
		//         //HTML logic
		//     }
		// }	


		// for (var data) {
    	
    	for (var i = 0; i < data.length; i++) {

        var title = data[i].companyname;
        var desc = data[i].shortdescription;
        var url = data[i].websiteurl;

        var badge = document.createElement('div');
        badge.className = 'badge';
        badge.innerHTML =
            '<h1>' + title + '</h1>' +
            "<div class='company-descriptions'><p>" + desc + "</p></div>" +
            "<a class='website' href='http://"+url+"' target='_blank' rel='external' data-direction='reverse'>"+url+"</a>"
            // '<a class="service-provider-call" href="http://price" target="_blank"> '+ price + '</a>';
        //I gave the div the same ID's as the keys in the object for ease
        document.getElementById('addName').appendChild(badge);
    // }
}


			console.log(data);
			// Write the data into our global variable.

			// $.each(data, function (index, item) {
   //     			console.log(item.companyname);
       		

   //     		var newName = document.getElementById("addName");
			// addName(newName);	

   //     		 function addName(name){ 
   //     		 	name.innerHTML += "<p>"item.companyname"</p>";


   //     		 }	


	    // });

			

		});
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






