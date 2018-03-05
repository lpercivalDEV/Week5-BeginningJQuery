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
//		edit + remove --> onHover ? google
// Will need ability to remove items when clicking "remove" --> google
// Will need ability to edit items when clicking on "edit" --> another input and form
//
//
///------------------------------------------------///
///~~~~~~~~~~~~~~~~~ACTUAL---CODE~~~~~~~~~~~~~~~~~~///
///------------------------------------------------///


//USE DOCUMENT READY GODDAMNIT! STOP FORGETTING THAT!!!!

$(document).ready(function(){
//function to pull value from input and add to to do list
function addToList("submit"){
	$("#firtInput").val(){
		//to prevent page from reloading --> submit.preventDefault();
		submit.preventDefault();

		$("#firstInput").on("click",function){
			//put append/to function here to add the item to the list
		}
	}
};


//this removes the text from the input so that new items can be added later
function clearText(){
	$("#firstInput").val("");
};

//Hover function to show edit/remove options when hovering over item on list
function hover(){
	$("ul").onHover("li",function(){
		//function to reveal edit option --> input

		//function to remove list item --> class to "hidden"? or reassign val to null?
	})
};

//
// function clearList(){
// 	//function to clear only completed items --> change class and hide/remove/null?
//
// 	//function to clear all list items --> hide all li's?/innerHTML?/null?
// };
});
