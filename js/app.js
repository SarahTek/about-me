'use strict';
console.log('Hello');


let username= prompt('what is your name?').toLowerCase();
alert('Hello ' + username + ', Welcome to my page!');
let score = 0;

//Question 1:

function favoriteChocolate(){
  let doesAnyoneLikeChoclate = prompt('Do you like Choclate?');

  if (doesAnyoneLikeChoclate.toLowerCase() === 'yes' || doesAnyoneLikeChoclate.toLowerCase() === 'y') {
    //console.log('Me too.');
    alert('Me too');
    score++;

  }
  else if(doesAnyoneLikeChoclate.toLowerCase() === 'no'|| doesAnyoneLikeChoclate.toLowerCase() === 'n') {
  //console.log('Yes, you do, you\'re in denial');
    alert('Yes, you do, you\'re in denial.');

  }
  else {
    //console.log('You need to answer with \'yes\' or \'no\' ');
    alert('You need to answer with \'yes\' or \'no\' ');
  }
}
favoriteChocolate();

// //Question 2:

function ageQuestion(){
  let age = prompt('How old are you?');
  console.log(typeof age);
  if (parseInt(age) >= 18) {
  //console.log('You are good to go');
    alert('You are good to go.');
    score++;

  }
  else if(parseInt(age) < 18) {
    //console.log('You are not old enough.');
    alert('You are not old enough.');
  }
  else {
  //console.log('you need to answer with numbers only.');
    alert('You need to answer with numbers only.');
  }
}
ageQuestion();

//Question 3

function favoriteMac(){
  let user = prompt('Do you like Mac computer?');
  if (user.toLowerCase() === 'yes' || user.toLowerCase()==='y'){
  // console.log('Me too.');
    alert('Me too');
    score++;

  }
  else if (user.toLowerCase() === 'no' || user.toLowerCase()==='n'){
  // console.log('Yes, you do, you\'re in denial.');
    alert('Yes, you do, you\'re in denial.');
  }
}
favoriteMac();

//Question 4

function tempatureScale(){
  let temprature= prompt('What is the temprature now?');
  if (temprature <= 45){
  //console.log('it is cold outside, Wear a Jacket')
    alert('It is cold outside, You should wear a Jacket.');
    score++;
  }
  else if (temprature > 45){
  //console.log('it is a great weather outside, wear light weight cloth.')
    alert('The weather is great today, wear light weight cloth.');
  }
  else{
    alert('answer in numbers only');
  }
}
tempatureScale();






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
favoriteNumber();







//Question 6
  let attemptsRemaining = 6; 
  let favFruit = ['kiwi', 'pineapple', 'orange', 'grape', 'watermelon'];
 

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
     // console.log(`you have ${i - 1} attempts remaining.`);
        alert(`you have ${attemptsRemaining - i - 1} attempts remaining.`);
        //
        //attemptsRemaining--;
       score++;
        
      }
  }

  alert('Great job'  + ' ' + username);
  alert('Nice Job, you got ' + score + ' out of 7');











































//   correctAnswer();

// // alert('My favorite fruits are: apple, strawberry, orange, grape and watermelon');
// let favFruit = ['orange','pineapple','grapes','watermelon','banana','strawberry','kiwi'];

// let attempsremaining = 7;
//  for (let i = 0; i < favFruit.length; i++); {
//    let fruit = prompt('can you guess my favourite fruits?');{
//       if(fruit === favFruit[i]){
//        //console.log('You are correct.');
//        alert('You are correct.');
//        score++;
//        break;
//      }
//      else if (fruit !== favFruits){
//        //console.log('please try again.');
//        alert(`you have ${attemptsRemaining - 1} attempts remaining,try again`);
//        attemptsRemaining--;
//      }
//    }
//  }
 

// alert('your final score is '+ score + 'out of 7. please try again later.');
