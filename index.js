'use strict';

const questions10 = [
	{
		africaQuestion: 'By land size, Africa is?',
		answer1: 'The largest continent',
		answer2: 'The second largest continent',
		answer3: 'The fourth largest continent',
		answer4: 'The sixth largest continent',
		rightAnswer: 'The second largest continent'
		
	},
	{
		africaQuestion: 'The largest religion in Africa is?',
		answer1: 'Islam',
		answer2: 'Christianity',
		answer3: 'Buddhism',
		answer4: 'Hinduism',
		rightAnswer: 'Islam'
	},
	{
		africaQuestion: 'How many languages are spoken in Africa?',
		answer1: 'around 50',
		answer2: 'around 500',
		answer3: 'around 1500',
		answer4: 'over 5000',
		rightAnswer: 'around 1500'
	},
	{
		africaQuestion: 'The deadliest animal in all of Africa is what?',
		answer1: 'black mamba',
		answer2: 'crocodile',
		answer3: 'lion',
		answer4: 'hippo',
		rightAnswer: 'hippo'
	},
	{
		africaQuestion: 'Over half the population of Africa is under the age of?',
		answer1: '17',
		answer2: '25',
		answer3: '35',
		answer4: '50',
		rightAnswer: '25'
	},
	{
		africaQuestion: 'Which animal does not live in Africa?',
		answer1: 'foxes',
		answer2: 'tiger',
		answer3: 'ostrich',
		answer4: 'lemur',
		rightAnswer: 'tiger'
	},
	{
		africaQuestion: 'How many countries are there in Africa?',
		answer1: '18',
		answer2: '28',
		answer3: '42',
		answer4: '54',
		rightAnswer: '54'
	},
	{
		africaQuestion: 'The Sahara desert is almost the size of?',
		answer1: 'New York',
		answer2: 'Texas',
		answer3: 'United States',
		answer4: 'Russia',
		rightAnswer: 'United States'
	},
	{
		africaQuestion: 'What is the largest city in Africa by population (11th largest in the world)?',
		answer1: 'Lagos, Nigeria',
		answer2: 'Giza, Egypt',
		answer3: 'Casablanca, Morocco',
		answer4: 'Cape Town, South Africa',
		rightAnswer: 'Lagos, Nigeria'
	},
	{
		africaQuestion: 'The Nile river, the longest in the world, is about as long as the distance from?',
		answer1: 'Seattle, Washington to Los Angeles, California',
		answer2: 'Seattle, Washington to Lincoln, Nebraska',
		answer3: 'Seattle, Washington to New York City, New York',
		answer4: 'Seattle, Washington to Bogota, Columbia',
		rightAnswer: 'Seattle, Washington to Bogota, Columbia'
	}
		

]

let questionNumber = 1;
let score = 0;

function questionTemplate (questionNumber){
	console.log(questionNumber);
	let question = questions10[questionNumber - 1];
	console.log(question);
	
		return `<h3>${question.africaQuestion}</h3>
				<form>
					<fieldset>
						<legend>Answers</legend>
						<label>
							<input type="radio" name="option" id="option1" value="${question.answer1}"> ${question.answer1} <br>
						</label>
					 	<label>	
							<input type="radio" name="option" id="option2" value="${question.answer2}" checked> ${question.answer2} <br>
						</label>
						<label>
							<input type="radio" name="option" id="option3" value="${question.answer3}"> ${question.answer3} <br>
						</label>
						<label>
							<input type="radio" name="option" id="option4" value="${question.answer4}" > ${question.answer4} <br>
						</label>
						
					</fieldset>
					<button class="submitButton"> Submit </button>
				</form>`
	
	
}

function start (){
	//let template = questionTemplate(questionNumber);
	$('.startButton').on('click', function (){
	console.log('start button works');
	$('.startPage').remove();
	$('.questionForm').html(questionTemplate(questionNumber));
	$('.questionNumberOutOf10').html(questionNumber);
	$('.score').html(score);
})
}


	$(document).on( 'click', '.submitButton', function (event){
	event.preventDefault();
	console.log('submit button works')
	let userSelected = $('input:checked').val()
	let question = questions10[questionNumber - 1];
	console.log(userSelected);
	let correctAnswer;
	if(userSelected === question.rightAnswer) {
		correctAnswer = true;
		score = score + 1;
		resultPage(correctAnswer);
	} else {
		correctAnswer = false;
		resultPage(correctAnswer);
	}
	$('.score').html(score);
})


// function nextPage(answer) {
// 	console.log(answer);
// 	console.log(questionNumber);
// 	//questionNumber = questionNumber + 1;
// 	let template = questionTemplate(questionNumber);
// 	$('.questionForm').html(questionTemplate(questionNumber));
// 	if (answer) {
// 		'is right';
// 	} else {
// 		'is wrong';
// 	}
// }
$('main').on('click', '.nextButton', function() {
	console.log("nextButton was clicked");
	console.log(questionNumber);
	console.log(score);
// 		//event.preventDefault();
		if (questionNumber < 10){
				questionNumber = questionNumber + 1;
				console.log((questionTemplate(questionNumber)));
				$('.questionForm').html(questionTemplate(questionNumber));
				$('.questionNumberOutOf10').html(questionNumber);
		} else {
			endPage();
	}
})



function resultPage(answer){
	console.log('result page working');
	let question = questions10[questionNumber - 1];
	if (answer) {
			$('.questionForm').html('<span class="correctFeedback">Correct</span><br><br><button type="button" class="nextButton">Next</button>');
	} else  {
			$('.questionForm').html(`<span class="incorrectFeedback">Incorrect</span><br><br><span class="correctAnswerInIncorrectFeedback">The correct answer is:   ${question.rightAnswer} </span><br><br><button type="button" class="nextButton">Next</button>`);
	}
}



function endPage () {
	$('.questionForm').html(`<span class="finalScore">Good job! You got ${score} correct.</span><br><br><button class="restartButton">Let's do it again!</button>`);
}




$('.questionForm').on('click', '.restartButton', function () {
		console.log('restart button works');
		questionNumber = 1;
		score= 0;
		console.log(score);
		console.log(questionNumber);
		$('.score').html("0");
		$('.questionNumberOutOf10').html(1);
		$('.questionForm').html(questionTemplate(questionNumber));
});




start();
// let questionNumber = 1;
// //let question = questions10[questionNumber - 1];
// let score = 0;
// // //console.log(question);
// // console.log(question.rightAnswer)




// function questionTemplate (questionNumber){
// 	console.log(questionNumber);
// 	let question = questions10[questionNumber - 1];
// 	console.log(question);
// 		return `<h3>${question.africaQuestion}-${questionNumber}</h3>
// 				<form>
// 					<input type="radio" name="option" id="option1" value="${question.answer1}"> ${question.answer1} <br>
// 					<input type="radio" name="option" id="option2" value="${question.answer2}"> ${question.answer2} <br>
// 					<input type="radio" name="option" id="option3" value="${question.answer3}"> ${question.answer3} <br>
// 					<input type="radio" name="option" id="option4" value="${question.answer4}" checked> ${question.answer4} <br><br>
// 					<button type="submit"  class="submitButton"> Submit </button>
// 				</form>`
// }	


// function startQuiz () {
// 	//when user hits start button it generates the first question onto screen
// 	$('.startButton').on('click', function (){
// 		console.log('start button works');
// 		//remove start page and replace with question page
// 		$('.startPage').remove();
// 		nextQuestion(1);
// 	})
// }	


// function nextQuestion (questionNumber) {
// 	console.log(questionNumber);
// 	console.log('nextQuestion works');
// 	questionTemplate(questionNumber);
// 	$('.questionForm').html(questionTemplate(questionNumber));
// 	// checkAnswer();
// }	


// function checkAnswer () {
// 	//$('.submitButton').on( 'click', function (event) {
// 	$('main').on('click', '.submitButton', function (event) {
		
// 		event.preventDefault();
// 		console.log('check Answer works');
// 		let userSelected = $('input:checked').val()
// 		console.log(userSelected);
// 		if(userSelected === question.rightAnswer) {
// 			rightPage();
// 		} else {
// 			wrongPage();
// 		}

// })
// 	}


// 	//function that displays the page if the user gets the answer right
// function rightPage () {
// 	console.log('rightpage function running')
// 	$('.questionForm').html(`<h1> That's right</h1>
// 	<button type="button" class="nextButton">Next</button>`);
// 	// handleNextButton();
	
// }


// //function that display the page if user gets the answer wrong
// function wrongPage () {
// 	console.log('wrongpage function running')
// 	$('.questionForm').html(`<h1> That's wrong</h1>
// 		<button type="button" class="nextButton">Next</button>`);
// 	// handleNextButton();
	
// }
// $('main').on('click', '.nextButton', function () {
// 	console.log('works');
// 	console.log(questionNumber);
// 	questionNumber = questionNumber + 1;
// 	nextQuestion(questionNumber);
// })



// // function handleNextButton () {
// // 	$('.questionForm').on('click', '.nextButton', function() {
// // 		console.log('next button works');
// // 		//incrementQuestionNumber();
// // 		nextQuestion();
// // 		updateQuestionNumberOutOf10();
// // 	});
// // }



// // function updateQuestionNumberOutOf10 () {
// // 	$(".questionNumberOutOf10").text(questionNumber + 1);
// // 	console.log('update question out of 10 working');
// // 	questionNumber = questionNumber + 1;
// // 	question = questions10[questionNumber + 1 - 1];
// // }












// //adds 1, so nextQuestion() calls the next question in the array
// // function incrementQuestionNumber () {
// // 	questionNumber ++;
// // }







// function updateScore () {

// }



// function quizFunctions (){
// 	startQuiz();
	
// }

// $(quizFunctions)
