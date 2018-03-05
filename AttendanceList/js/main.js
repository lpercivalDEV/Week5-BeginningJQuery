//Project Name: Attendance List
//Client Name: Leon Noel
//Author: Lilly Percival
//Dev @ RC in Boston

///-----------------------------------------------------------///
///---------------PSEUDO---CODE--------------------///
///---------------------------------------------------------///
//User can click on buttons
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
//
///--------------------------------------------------------------------------------///
///~~~~~~~~~~~~~~~~~ACTUAL---CODE~~~~~~~~~~~~~~~~~~///
///-------------------------------------------------------------------------------///


$(document).ready(function(){
$("#present").on("click",onTimeList);
$("#tardy").on("click",tardyList);
$("#all").on("click",showAllList);
});

var present = [];
var tardy = [];

function onTimeList(){
var value = $("#enter").val()
    present.push(value);
    $(".onTime li").remove();
    present.forEach(function(e){
        $(".onTime").append("<li>"+e+"</li>");
        $("#enter").val= "";
        $("#enter").val('')
        $(".onTime").hide()
    })
}

function tardyList(){
    var values = $("#enter").val()
    tardy.push(values);
    $(".lateList li").remove();
    tardy.forEach(function(e){
        $(".lateList").append("<li>"+e+"</li>");
        $("#enter").val('')
        $(".lateList").hide()
    })
}

function showAllList(){
    $(".onTime, .lateList").toggle();
}
