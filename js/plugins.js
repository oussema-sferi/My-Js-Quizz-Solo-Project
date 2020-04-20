// Welcome page:
var myWelcomeText = "This is a Web Development Front-end Quizz so that you can test your Html, Css and Javascript skills.Are you a beginner, a junior or a senior developer?Let's see :)";
var z = 0;


$("#welcome").fadeIn(3000, function() {

	var typeWriter = setInterval(function() {

		document.getElementById("writer").textContent += myWelcomeText[z];	
		z++;
		if(z > myWelcomeText.length - 1) {
			clearInterval(typeWriter);

		}
	},80);
	
});
















 
var quizz = [
{
	question: "How old are you?",
	answers: {a: 31, b: 32,c: 33,d: 34},
	rightAnswer: "b"
},

{
	question: "What's your name?",
	answers: {a: "oussema", b: "ahmed",c: "salma",d: "elyes"},
	rightAnswer: "a"
},

{
	question: "Where are you from?",
	answers: {a: "france", b: "united kingdom",c: "libya",d: "tunisia"},
	rightAnswer: "d"
},

{
	question: "What's Jquery?",
	answers: {a: "programming language", b: "library",c: "framework",d: "markup language"},
	rightAnswer: "b"
},

{
	question: "How many seconds in one hour?",
	answers: {a: 780, b: 2100,c: 3600,d: 4000},
	rightAnswer: "c"
}

	];

var userAnswers = [];

function generateRandomIndex() {
 	return Math.floor(Math.random() * quizz.length);
}

var x = generateRandomIndex()

 var $quest = $(".questions"); 
 var $answers = $(".answers");

 

$(".next").click(function() {


	var x = generateRandomIndex();

	$(".questions").html(quizz[x].question);

	$("#1").html(quizz[x].answers.a);
	$("#2").html(quizz[x].answers.b);
	$("#3").html(quizz[x].answers.c);
	$("#4").html(quizz[x].answers.d);
	
	var c =$("input[type='radio'][name='answ']:checked").val();

	$("input[type='radio']").prop("checked", false);

	userAnswers.push(c);

	
	$(".progressbar").animate({width:"+=" + 20 + "%"}, 1000);
	
 })













  

