'use strict';
console.log('Hello');


let username= prompt('what is your name?').toLowerCase();
alert('Hello ' + username + ', Welcome to my page!');
let score = 0;
function sevenQuestion(){
  favoriteChocolate();
  ageQuestion();
  favoriteMac();
  temperatureScale();
  favoriteNumber();
  favoriteFruits();
  favoriteFoods();
}
sevenQuestion();
//Question 1:

function favoriteChocolate(){
  let doesAnyoneLikeChoclate = prompt('Do you like Choclate?');
  if (doesAnyoneLikeChoclate.toLowerCase() === 'yes' || doesAnyoneLikeChoclate.toLowerCase() === 'y') {
    alert('Me too');
    score++;
  }
  else if(doesAnyoneLikeChoclate.toLowerCase() === 'no'|| doesAnyoneLikeChoclate.toLowerCase() === 'n') {
    alert('Yes, you do, you\'re in denial.');
  }
  else {
    alert('You need to answer with \'yes\' or \'no\' ');
  }
}


//Question 2:

function ageQuestion(){
  let age = prompt('How old are you?');
  console.log(typeof age);
  if (parseInt(age) >= 18) {
    alert('You are good to go.');
    score++;
  }
  else if(parseInt(age) < 18) {
    alert('You are not old enough.');
  }
  else {
    alert('You need to answer with numbers only.');
  }
}


//Question 3

function favoriteMac(){
  let user = prompt('Do you like Mac computer?');
  if (user.toLowerCase() === 'yes' || user.toLowerCase()==='y'){
    alert('Me too');
    score++;
  }
  else if (user.toLowerCase() === 'no' || user.toLowerCase()==='n'){
    alert('Yes, you do, you\'re in denial.');
  }
}


//Question 4

function temperatureScale(){
  let temprature= prompt('What is the temperature now?');
  if (temprature <= 45){
    alert('It is cold outside, You should wear a Jacket.');
    score++;
  }
  else if (temprature > 45){
    alert('The weather is great today, wear light weight cloth.');
  }
  else{
    alert('answer in numbers only');
  }
}


//Question 5:

function favoriteNumber(){
  let userAttempts = 4;
  for (let i = 0; i < userAttempts; i++) {
    let number = prompt('Guess my favourite number from 1-8.');
    let favNumber = 5;
    console.log(typeof (number));
    if (number == favNumber) {
      alert('You are correct.');
      score++;
      break;
    } else if (number > favNumber) {
      alert('the numberis too high');
    } else if (number < favNumber) {
      alert('the number is too low');
    }
  }
}

//Question 6

function favoriteFruits(){
  let attemptsRemaining = 6; 
  let favFruit = ['kiwi', 'pineapple', 'orange', 'grapes', 'watermelon'];


  for (let i = 0; i < 6; i++) {
    let userAnsw = prompt('Can you guess my favorite fruit?');
    let guess = userAnsw.toLowerCase();
    for (let j = 0; j < favFruit.length; j++){
      if (guess === favFruit[j]) {
        alert('You are correct!');
        score++;
        i = 6;
        break;
      }
    }
    if (i !== 6){
      alert(`you have ${attemptsRemaining - i - 1} attempts remaining.`);
      score++;
    }
  }
}


// //Question 7.
function favoriteFoods(){

  let favFoods = ['lasagna','injera','parm chicken','pizza','spagetti'];
  let attemptsRemaining7 = 6; 
  let correctAnswers = false;
  
    for (let j = 0; j < 6; j++){
      let userAnswer7 = prompt('can you guess my favourite foods?').toLowerCase();
      for (let j = 0; j < favFoods.length; j++){
      if (userAnswer7 === favFoods[j]){
      alert('That is correct.');
      correctAnswers = true;
      score++;
      break;
      }
    }  if (correctAnswers === false){
      alert(`That is not correct.You have ${attemptsRemaining7 -j -1} attempts remaining!`);
      }else if (attemptsRemaining7 = 0) {
      alert('opps you run out of attempts, try again later');
     break;
    }
  }
}
  alert('Great job'  + ' ' + username + ' ' + 'You got ' + score + ' out of 7');
