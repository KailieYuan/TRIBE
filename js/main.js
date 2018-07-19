/* Your code starts here */

document.addEventListener('DOMContentLoaded', function(e){
	console.log('JS connected');

	e.preventDefault();
	scrollEvent();
	attachEvents();


	function addLinks(parent){ 
		parent.innerHTML += "<a href = '#news'>NEWS</a>"; 
		parent.innerHTML += "<a href = '#runway'>RUNWAY</a>";
		parent.innerHTML += "<a href = '#spinouts'>SPINOUTS</a>";
	}

		var sideNav = document.getElementById("mySideNav");
		addLinks(sideNav);

		scrollEvent();






	});


	var navOffset = $('#news').offset().top - 150;


	$('.modal-footer button').click(function(){
		var button = $(this);

		if ( button.attr("data-dismiss") != "modal" ){
			var inputs = $('form input');
			var title = $('.modal-title');
			var progress = $('.progress');
			var progressBar = $('.progress-bar');

			inputs.attr("disabled", "disabled");


			button.text("Close")
					.removeClass("btn-primary")
					.addClass("btn-success")
    				.blur()
					.delay(1)
					.fadeIn(function(){
						title.text("Log in is successful");
						button.attr("data-dismiss", "modal");
					});
		}
	});

	$('#myModal').on('hidden.bs.modal', function (e) {
		var inputs = $('form input');
		var title = $('.modal-title');
		var progressBar = $('.progress-bar');
		var button = $('.modal-footer button');

		inputs.removeAttr("disabled");

		title.text("Log in");

		progressBar.css({ "width" : "0%" });

		button.removeClass("btn-success")
				.addClass("btn-primary")
				.text("Ok")
				.removeAttr("data-dismiss");
                
	});



	$('.filterButton').click(function(e) {
			e.preventDefault();

			var filterAppear = $('.filter-container div');

			filterAppear.addClass("seefilter");	
			 console.log ('filter applied!!!'); 
			 
			
	 });



    
    $(window).scroll(function(){
			var scrollPos = $(window).scrollTop();



			var stickNav = $(".menubar nav");
			stickyMenu(stickNav);

			var stickMenu = $(".menubar");
			stickyMenu(stickMenu);


			function stickyMenu(navigation){
				if(scrollPos>= navOffset){
						navigation.addClass("fixed");
						
					}
				
				else{
					navigation.removeClass("fixed");

				}

			}	




		//THis is for change the color of the links in my navigation.
		var links = [$(".link1"),$(".link2"),$(".link3"),$(".link4"),$(".link5")];

		var filter = $(".filtermenu") ;

		var newsOff = $("#news").offset().top-80;
		var runwayOff = $("#runway").offset().top-80;
		var spinoutsOff = $("#spinouts").offset().top-80;

		//News Section
			if(scrollPos >= newsOff){
				links[0].addClass('purple');
				filter.removeClass('nodisappear');

				//// $(".t1").addClass('appear');
			}else{
				links[0].removeClass('purple');
				// $(".t1").removeClass('appear');

			}

		//Runway Section
			if(scrollPos >= runwayOff){
				links[0].removeClass('purple');
				links[1].addClass('purple');
				filter.addClass('nodisappear');

	//			$(".t2").addClass('appear');
				
			}else{
				links[1].removeClass('purple');

				//$(".t2").removeClass('appear');
			}

		//Spinouts Section
			if(scrollPos >= spinoutsOff){
				links[1].removeClass('purple');
				links[2].addClass('purple');
				filter.addClass('nodisappear');

	//			$(".t3").addClass('appear');
				
			}else{
				links[2].removeClass('purple');

				//$(".t3").removeClass('appear');
			}

	
		});



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


  	function scrollEvent(){

  		$('.sideNav a').click(function(e) {
			e.preventDefault();

	     	var myTarget = $(this.hash);
	     	myTarget = myTarget.length && myTarget
	      			
	        var targetOffset = myTarget.offset().top;
	       	$('html,body').animate({scrollTop: targetOffset}, 1000);

	       	closeNav();
	
	     });

  	}



	var mySideNav = document.getElementById("mySideNav");


	function openNav(){
		mySideNav.style.width="100vw";	

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






