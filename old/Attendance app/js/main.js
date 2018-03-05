//Project Name: Attendance List
//Client Name: Leon Noel
//Author: Lilly Percival
//Dev @ RC in Boston

///------------------------------------------------///
///---------------PSEUDO---CODE--------------------///
///------------------------------------------------///
// User can click on buttons
// User can enter names to two lists - tardy and present
// User can see lists and inputs/buttons
// User expects names entered to sort to correct list and to view those lists when clicking right buttons
//
// When student is late, name is entered into the "tardy" input
// When student is on time, name is entered into the "on time" list
// When user wants to see which students are tardy, they click show all tardy button
// When user wants to see which students were on time, they click show all on time button
// When user wants to see all students who were on time and tardy, they click on show all button
// Need three buttons
// Need  2 inputs
// Need tardy list to appear when button is clicked
// Need on time list to appear when button is clicked
// Need an array to hold students names
///---------------------------------------------------------------------------------///
///~~~~~~~~~~~~~~~~~ACTUAL---CODE~~~~~~~~~~~~~~~~~~///
///-------------------------------------------------------------------------------///

$(document).ready(function(){
var present = [];
var tardy = [];

function presentList(){
    var value = $("#enter").val();
    present.push(value);
    $("#enter").on("click",function(){}).val("");
    present.forEach(function(e){
        $(".present-list").append("<li>"+e+"</li>");
        $('#enter').val= "";
        $('#enter').val('')
        $('.present-list').hide()
    })
}
function tardyList(){
    var values = $("#enter").val()
    tardy.push(values);
    $(".tardy-list li").remove();
    tardy.forEach(function(e){
        $(".tardy-list").append("<li>"+e+"</li>");
        $('#enter').val('')
        $('.tardy-list').hide()
    })
}
function allList(){
    $(".present-list, .tardy-list").toggle();
}

$("#present").on("click", presentList());
$("#tardy").on("click",tardyList());
$("#all").on("click",allList());
});





 // var students=["Tariquito", "Mannito", "Angelito", "El Chavo", "La Chilindrina", "Quico", "Patty", "Don Ramon"];

// 	students.forEach(function(e,i){
// 		var list1 = $("#onTime");
// 		var list2 = $("#tardy");
// 			if(e == list1){
// 				$("#onTimeList").append("<li>"+e+"</li>");
// 			}
// 			else{
// 				$("#tardyList").append("<li>"+e+"</li>");
// 		}
// 		console.log("#onTimeList");
// 		console.log("#tardyList")
// 	});

// 	$("#tardyBtn").on("click", function(){

// 	});

// 	$("#onTimeBtn")

/*____________________________________________
var peopleTardy=[];
var peopleOnTime=[];

$("#onTimeBtn").on("click",function(){
	//*var personOnTime = $("#onTime").val();
	peopleOnTime.push(personOnTime);
	console.log(peopleOnTime);//
	alert("yo");
});


$("#tardyBtn").on("click",function(){

});

$("showAll").on("click",function(){

});
_____________________________________*/
