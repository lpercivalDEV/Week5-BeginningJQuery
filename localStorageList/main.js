//Project Name:
//Client Name:
//Author:
//Dev @ RC in Boston

///------------------------------------------------///
///---------------PSEUDO---CODE--------------------///
///------------------------------------------------///
//
// User can type in items to input, click button to submit, click button
//		to clear, and hover to edit or remove items
// User can see items, inputs, and buttons
// User expects items to appear when submitted, items to disappear when cleared or
//		removed, and items to change when edited
//
// First I will need to get the value from the input --> event listener
// Then I will need to add that value to the list --> append/appendto
// Then I will need to clear the input text box --> ? forgot - google
// Will need the ability to classify items as complete --> addClass
// Will need the ability to clear those items given the "complete" class
// Will need the ability to clear all the items
// Will need the ability to hover over items and see two options,
//		edit + remove --> onHover ? google+
// Will need ability to remove items when clicking "remove" --> google
// Will need ability to edit items when clicking on "edit" --> another input and form
//
//
///------------------------------------------------///
///~~~~~~~~~~~~~~~~~ACTUAL---CODE~~~~~~~~~~~~~~~~~~///
///------------------------------------------------///



/*
WHERE I LEFT OFF -->
	-COMPLETE- TRY TO ISOLATE EDIT AND REMOVE SO THEY ARE NOT CROSSED OUT WHEN CLICKED
	TRY TO GET EDIT BUTTON TO WORK
	TRY TO GET REMOVE BUTTON TO WORK
	TRY TO GET LOCAL STORAGE TO WORK
*/


$(document).ready(function(){

	 $("form").on("submit", function(e){
	 	e.preventDefault()
	 	var newItem = $("#input1").val();
	 	$("#list").append("<li class='listItem'><span class='itemText' class='listItem' > "+newItem+"</span></li>");


		//function to clear input after submit so a new item can be added later
		$("#input1").val("");
	 })

	 //hover function
		//options functions --> involves event delegation
		//---edit
		$(document).on("mouseenter", ".listItem", function(){
			$(this).append("<a id='edit' href='#'>"+"edit"+"</a>");
		}).on("mouseleave",".listItem", function(){
			$(this).children("a").remove();
			//might not need quotes for edit ^^^
				////somewhere in here (maybe) the functionality
				//for the edit and remove buttons can go....??
				 $("#edit").on("click", function(){
					 $(this).append("<input type='text'  placeholder='Edit entry...'>");
				// 	$(this).toggleClass(".editEntry")
				 })
		});

		//---remove
		$(document).on("mouseenter", ".listItem", function(){
			$(this).append(" <a id='remove' href='#'>"+"remove"+"</a>");
		}).on("mouseleave",".listItem", function(){
			$(this).children("a").remove();
		////somewhere in here (maybe) the functionality
			//for the edit and remove buttons can go....??
		});


	//mark completed
		//toggle class
	 $("#list").on("click",".itemText", function(e){
	 	// $(this).toggleClass('complete')
		$(this).toggleClass("completedItem")
	 });


	 //remove functions
		//remove completed
	$("#clearCompleted").on("click",function(){
		$(".completedItem").remove();
	})
	//remove all items
	$("#clearAll").on("click",function(){
		$("li").remove();
	})


//function for local storage
	//myStorage = window.localStorage;

});










///////////////////////////////////////////////
 		//	IGNORE BELOW -- ALL FAILURES
///////////////////////////////////////////////


// function clickSubmit (event){
//   event.preventDefault()
//   var item = $("#localStorage").val();
//   $("ul").append("<li>"+item+"</li>")
//   $("#localStorage").val("");
//   console.log(item)
//   };




 // // 	function stopReload(submit){
	// // 	submit.on("click",preventDefault(){
	// // };
	// 	var listItems = $("#localStorage");
	// 	var itemStore = [];

	// 	$("#localStorage").val()
	// 	$("#localStorage").append("itemStore");
	// 	$("ul").push["itemStore"];
	// 	console.log(itemStore);














//USE DOCUMENT READY GODDAMNIT! STOP FORGETTING THAT!!!!

// function zebra(){
// 	document.getElementById("form"){
// 		console.log("form");
// 	}
// };

// $(document).ready(){};
		// $("#localStorage").val(){
		// 	console.log("#localStorage");
		// 	//to prevent page from reloading --> submit.preventDefault();
		// 	// submit.preventDefault();
		// };




 //function to pull value from input and add to to do list
 // function addToList(){
// // 	$("#localStorage").val(){
// // 		//to prevent page from reloading --> submit.preventDefault();
// // 		submit.preventDefault();
// // 		}
// 		$("#firstInput").on("click",function){
 // 			//put append/to function here to add the item to the list
// 				$("ul").append("<li>"+e+"</li>");
// 					console.log("#localStorage");
// 					});

// }


// //this removes the text from the input so that new items can be added later
// function clearText(){
// 	$("#firstInput").val("");
// }

// //Hover function to show edit/remove options when hovering over item on list
// function hover(){
// 	$("ul").onHover("li",function(){
// 		//function to reveal edit option --> input

// 		//function to remove list item --> class to "hidden"? or reassign val to null?
// 	})
// }


// function clearList(){
// 	//function to clear only completed items --> change class and hide/remove/null?

// 	//function to clear all list items --> hide all li's?/innerHTML?/null?
// }


// };

// /*


// */
