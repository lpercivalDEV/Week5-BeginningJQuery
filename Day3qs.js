/**
* Question 1
* Create an array of numbers using 1,2,3, and 4 as values. Use forEach to increase each value by 1 and store the value back in the array.
The end result should be an array of numbers with values 2,3,4,5
*/

var num =[1,2,3,4];
var up = [1]

num.forEach(function(e){
	up++;
	num = up;
	console.log(num);
});
	


/**
* Question 2
* Create an array of names with Will, Nevan, and Jessica as values. Append each of these names to the class-list element using forEach.
*/

var names=["Will","Nevan","Jessica"];
	
	names.forEach(function(e,i){
		$(".class-list").append("<li>"+e+"</li>");
		console.log(names);
	});
		




/**
* Question 3
* Using the array from Question 1, find the average of the numbers in the array (average=sum of all numbers/number of numbers). Store the average in q3.
*/


// var num =[1,2,3,4];

// num.forEach(function(e,i){
	
// 	var sum +=num[i];
// 	var q3 = (sum/4);
// 	console.log(q3);
// });


var num=[2,3,4,5];
var sum=0;

num.forEach(function(e){
	sum = sum+e;
});
q3=(sum/num.length);
console.log(q3);





/*====================================================================

Notes on Git:

Git is a versioning control system for coding
Git has things called branchers which allows teams to work independently and then merge those projects into one project at the end
Once your repository is uploaded, you can view changes your team has made, leave notes, etc.

~How to set up Github:
Open terminal
Install git
in terminal set global username and email:
	git--config --global user.name "John Doe"
	git--config --global user.email leon.a.noel+github@gmail.com

~How to push your code to github
Go to github and sign in. 
	Create new repository --> then go to terminal
	cd Desktop/
	ls-la
	carousel_mod
	git init
	git add .  //adds everything that's already there (css, html, and js will be added)
	git commit -m commits all the files you wanna push --> "first commit" - added everything
	then go back to github and use the pathcode given to you when you created the new repository
	git remote add origin https://github.com/leonnoel/2018-demo.git
	git push -u origin master
	enter your user name and password

~Terminal notes
	ls - list command
	-la - flag for list all
	any time you see a dash that's a flag
	to go up a level:  cd..
	to go to main: cd~
	to go to desktop cd Desktop/

Lab for today:
	attendance list
	app where you enter the room, leon can type in your name and it gets added to a list
	click a button to show all students who were on time
	another button to show all students who were tardy 
	2 inputs, 2 submit buttons, 2 arrays to show present and tardy lists USE JQUERY!!!




