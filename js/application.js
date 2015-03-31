$(document).ready(function(){

var question = "";
var questionToPrint = "";
var anwser = 0;
var userInput;
var secondsLeft = 10;
var timer;
var streak = 0;
var num1, num2, maxNum;
var operations = "";

var opSelect = function() {
  operations = "";
  var op = $('.checkbox:checked');
  for (i=0; i<op.length; i++) {
    operations += $(op[i]).val();
  } 
  console.log(operations);
  return operations;
}

var play = function(maxNum) {
  num1 = Math.ceil(Math.random()*maxNum);
  num2 = Math.ceil(Math.random()*maxNum);
  addition(num1,num2);
  // minize(num1,num2);
  // multiply(num1,num2);
  // divide(num1,num2);
  // square(num1);
  // root(num1);
  $('#question-box').html(questionToPrint); 
};

var addition = function(x,y) {
  question = x.toString() + "+" + y.toString();
  questionToPrint = question;
  answer = eval(question);
  console.log(answer);
}
var minize = function(x,y) {
  question = x.toString() + "-" + y.toString();
  questionToPrint = question;
  answer = eval(question);
  console.log(answer);
}
var multiply = function(x,y) {
  question = x.toString() + "*" + y.toString();
  questionToPrint = question.replace('\*','&#215;');
  answer = eval(question);
  console.log(answer);
}
var divide = function(x,y) {
  question = x.toString() + "/" + y.toString();
  questionToPrint = x.toString() + '&#247;' + y.toString();
  answer = eval(question);
  console.log(answer);
}
var square = function(x) {
  questionToPrint = x.toString() + '&#178;';
  answer = Math.pow(x,2);
  console.log(answer);
}
var root = function(x) {
  questionToPrint = '&#8730;' + Math.pow(x,2).toString();
  answer = x;
  console.log(answer);
}

var getUserInput = function() {
  userInput = Number($('#user-input').val());
  // console.log(userInput);
  return userInput;
}

var clearUserInput = function() {
  $('#user-input').val('');
}

var countDown = function() {
  if (secondsLeft <= 0) {
    //stop the timer
    console.log('stop the timer');
    clearInterval(timer);
    $('.restart').toggleClass('hide');
    $('.anwser-box').toggleClass('hide');
    $('.question-box').toggleClass('hide');
  } else {
    // console.log(secondsLeft);
    secondsLeft = secondsLeft - 1;
    $('#timer').text(Math.round(secondsLeft));
  }
}

var addTime = function() {
  secondsLeft = (secondsLeft + 1.3).toFixed(1);
}

var start = function () {
  // begins the count down
  if (userInput == answer && streak == 0) {
    timer = setInterval(countDown, 1000);
    play(10);
    clearUserInput();
    streak++;
  } else if (userInput == answer) {
    addTime();
    play(10);
    clearUserInput();
    streak++;
  }
}
var restart = function() {
  $('#timer').text(10);
  secondsLeft = 9;
  streak = 0;
  play(10);
  $('.restart').toggleClass('hide');
  $('.anwser-box').toggleClass('hide');
  $('.question-box').toggleClass('hide');
}

$(document).on('keyup','#user-input', function() {
  getUserInput();
  start();
})

$(document).on('click','#restart', function() {
  restart();
})

play(10);

})