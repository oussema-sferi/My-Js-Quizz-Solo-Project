// Welcome page beginning:

var myWelcomeText = "This is a Web Development Front-end Quizz so that you can test your Javascript and jQuery skills. Are you a beginner, a junior or a senior developer? Let's see :)";
var z = 0;


$("#welcome").fadeIn(5000, function() {

	var typeWriter = setInterval(function() {

		document.getElementById("writer").textContent += myWelcomeText[z];	
		z++;
		if(z > myWelcomeText.length - 1) {
			clearInterval(typeWriter);
			$("#go").fadeIn(3500);
		}
	},80);
	
});

///////////// timer

$("#go").click(function() {


	var time = setInterval(function() {
		seconds ++;
		document.getElementById("elapsedtime").textContent = "Elapsed time: " + seconds;	
		
		if(userAnswers.length === quizz.length) {
			clearInterval(time);		
		}
	},1000);
	


	var c =$("input[type='radio'][name='answ']:checked").val();
	$("input[type='radio']").prop("checked", false); //reset the radio buttons
	$("#welcome").fadeOut();
	$("#quizz").slideDown(2000, function() {

	$(".questions").html("Question 1/" + quizz.length + ": " + quizz[0].question);
	$("#1").html(quizz[0].answers.a);
	$("#2").html(quizz[0].answers.b);
	$("#3").html(quizz[0].answers.c);
	$("#4").html(quizz[0].answers.d);

	});

	$("#elapsedtime").slideDown(1000);
})

// Welcome page end:


// Timer function


var seconds = -1;




// Quizz page beginning:

var quizz = [
{
	question: "How do you write 'Programming Languages' in an alert box?",
	answers: {a: "msgBox('Programming Languages')", b: "alert('Programming Languages')",c: "alertBox('Programming Languages')",d: "msg('Programming Languages')"},
	rightAnswer: "b"
},

{
	question: "How do you create a function in JavaScript?",
	answers: {a: "function = myFunction", b: "function:myFunction",c: "function myFunction",d: "function(myFunction)"},
	rightAnswer: "c"
},

{
	question: "Which of the below is used in Javascript to insert special characters?",
	answers: {a: "&", b: "\\",c: "-",d: "%"},
	rightAnswer: "b"
},

{
	question: "What's Jquery?",
	answers: {a: "programming language", b: "Javascript library",c: "Javascript framework",d: "markup language"},
	rightAnswer: "b"
},

{
	question: "Which of the following is correct to write 'Keep trying' on the web page using Javascript?",
	answers: {a: "System.out.println('Keep trying')", b: "print('Keep trying')",c: "document.write('Keep trying')",d: "response.write('Keep trying')"},
	rightAnswer: "c"
},

{
	question: "Which attribute needs to be changed to make elements invisible?",
	answers: {a: "visibile", b: "visibilty",c: "invisibility",d: "invisible"},
	rightAnswer: "b"
},

{
	question: "How to append a value to an array of Javascript?",
	answers: {a: "arr[arr.length] = value", b: "arr[arr.length+1] = new Arrays()",c: "arr[arr.length-1] = value",d: "arr[arr.length*1] = value"},
	rightAnswer: "a"
},

{
	question: "How do you transform the number 7.25 to its nearest greater integer?",
	answers: {a: "Math.floor(7.25)", b: "Math.ceil(7.25)",c: "Math.round(7.25)",d: "Math.pow(7.25)"},
	rightAnswer: "b"
},

{
	question: "Which event occurs when the user clicks on an HTML element?",
	answers: {a: "onclick", b: "onmouseclick",c: "onmouseover",d: "onchange"},
	rightAnswer: "a"
},

{
	question: "What would be the result of 'typeof [ ]' in the console?",
	answers: {a: "'array'", b: "'collection'",c: "'NaN'",d: "'object'"},
	rightAnswer: "d"
},

{
	question: "We use element1.append(element2) in jQuery to?",
	answers: {a: "add element1 to the end of element2 ", b: "add element2 to the beginning of element1",c: "add element1 just after element2",d: "add element2 to the end of element1"},
	rightAnswer: "d"
},

{
	question: "How to create a copy of this array: numbers = [3,22,6,8] and assign it to another variable?",
	answers: {a: "var c = numbers.splice()", b: "var s = numbers.copy()",c: "var j = numbers",d: "var z = numbers.slice()"},
	rightAnswer: "d"
}
	];




var userAnswers = [];



 var $quest = $(".questions"); 
 var $answers = $(".answers");

 var counterQuest = 1;

$("input[type='radio']").change(function() {
$(".next").prop('disabled', false);

})

	


$(".next").click(function() {
	// var x = generateRandomIndex();
	
	$(".next").prop('disabled', true);

	var c =$("input[type='radio'][name='answ']:checked").val();
	$("input[type='radio']").prop("checked", false); //reset the radio buttons

	

	userAnswers.push(c); // add the answer of the user to the userAnswers array

	$(".progressbar").addClass("rightpos").animate({width:"+=" + ((1/quizz.length) * 100) + "%"}, 700, function() {
		$(this).html("<span>" + Math.round((($(".progressbar").width()) / ($(".progbarcontainer").width()))*100) + "%</span>");
	}); // the advancement of the progress bar
	
			var numQ = counterQuest + 1;
			if(counterQuest < quizz.length) {
			// the export of the question and answers from the quizz array to the html quizz form
				$(".questions").html("Question " + numQ + "/" + quizz.length + ": " + quizz[counterQuest].question);
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
				$(this).fadeOut();
				$("#elapsedtime").css('visibility','hidden');
				$(".progressbar").after("<h2 style='padding: 20px;font-size: 30px;text-align: center;'>100% Completed</h2>");
				$(".a, .b, .c, .d, label, .questions, form").remove();
				$("#movetoresult").fadeIn(2000).css({"font-size": "30px", "padding": "25px 0", "width": "100%"});
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



function convertToMin(x) {

	if(x < 60) {
		return x + " seconds"
	} else if(x >= 60 && x < 119) {
		return Math.floor(x / 60) + " minute and " + (x % 60) + " seconds";
	} 
		return Math.floor(x / 60) + " minutes and " + (x % 60) + " seconds";
}

$("#movetoresult").click(function() {
	var resultMessage;
	var scorePercent = (userScore()/quizz.length) * 100;
	$("#quizz").fadeOut();
	$("#final").fadeIn(2500);
	$("#final p").html(userScore() + " Out Of " + quizz.length + " in " + convertToMin(seconds));
////////////
	if(scorePercent >= 80) {
		resultMessage = "Congratulations! you look a senior skilled developer";
	} else if(scorePercent < 80 && scorePercent >= 50) {
		resultMessage = "Medium! You must improve your skills a little bit";
	} else {
		resultMessage = "Unfortunately! You must work more on your technical skills";
	}
////////////////
	$("#final p").append("<p>" + Math.round(scorePercent) + "% of right answers</p><p>" + resultMessage + "</p>");
	$("#final button").show();
	
})

$("#retry").click(function() {
	
	location.reload();

})







  

