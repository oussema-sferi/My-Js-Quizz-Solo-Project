// Welcome page beginning:

var myWelcomeText = "This is a Web Development Front-end Quizz so that you can test your Html, Css and Javascript skills. Are you a beginner, a junior or a senior developer? Let's see :)";
var z = 0;


$("#welcome").fadeIn(2000, function() {

	var typeWriter = setInterval(function() {

		document.getElementById("writer").textContent += myWelcomeText[z];	
		z++;
		if(z > myWelcomeText.length - 1) {
			clearInterval(typeWriter);
			$("#start").fadeIn(2000);
		}
	},5);
	
});

$("#start").click(function() {

	$("#welcome").fadeOut();
	$("#quizz").fadeIn(3000, function() {

	$(".questions").html(quizz[0].question);
	$("#1").html(quizz[0].answers.a);
	$("#2").html(quizz[0].answers.b);
	$("#3").html(quizz[0].answers.c);
	$("#4").html(quizz[0].answers.d);

	});
})

// Welcome page end:



// Quizz page beginning:

var quizz = [
{
	question: "How old are you?",
	answers: {a: 31, b: 32,c: 33,d: 34},
	rightAnswer: "a"
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

 var counterQuest = 1;

$(".next").click(function() {
	// var x = generateRandomIndex();

	var c =$("input[type='radio'][name='answ']:checked").val();
	$("input[type='radio']").prop("checked", false); //reset the radio buttons

	userAnswers.push(c); // add the answer of the user to the userAnswers array

	$(".progressbar").animate({width:"+=" + ((1/quizz.length) * 100) + "%"}, 700); // the advancement of the progress bar

			if(counterQuest < quizz.length) {
			// the export of the question and answers from the quizz array to the html quizz form
				$(".questions").html(quizz[counterQuest].question);
				$("#1").html(quizz[counterQuest].answers.a);
				$("#2").html(quizz[counterQuest].answers.b);
				$("#3").html(quizz[counterQuest].answers.c);
				$("#4").html(quizz[counterQuest].answers.d);

				counterQuest++; //the index will increment by one after every click on the next button

			} else if(counterQuest === quizz.length) {

			
				
				// $(this).val("See My Results").css({"font-size": "30px", "padding": "25px 0"}).animate({width: "100%"}, 2500);
				// $(this).click(function() {
				// 	$("#quizz").fadeOut(2000);
				// 	$("#final").fadeIn(1000);
				// })
				$(this).fadeOut(3000);
				$(".progressbar").after("<h2 style='padding: 20px;font-size: 30px;text-align: center;'>100% Completed</h2>");
				$(".a, .b, .c, .d, label, .questions").remove();
				$(".seeresult").fadeIn(3200).css({"font-size": "30px", "padding": "25px 0"}).animate({width: "100%"}, 2500);
			}
	
 })

// Quizz page end:

function userScore() {

var result = 0;

	for(var j = 0; j < quizz.length; j++) {

		if(userAnswers[j] === quizz[j].rightAnswer) {

			result++;

		}

	}
return result;
}


$(".seeresult").click(function() {
	$("#quizz").fadeOut();
	$("#final").fadeIn(2500);
	$("#final p").html(userScore() + " Out Of " + quizz.length);
})








  

