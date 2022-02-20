'use strict';
console.log('Hello');
//Question 1:

let username= prompt('what is your name?').toLowerCase();
alert('Hello ' + username + ', Welcome to my page!');

//Question 2:

let doesAnyoneLikeChoclate = prompt('Do you like Choclate?');

if (doesAnyoneLikeChoclate.toLowerCase() === 'yes' || doesAnyoneLikeChoclate.toLowerCase() === 'y') {
 //console.log('Me too.');
 alert('Me too');
} 
else if(doesAnyoneLikeChoclate.toLowerCase() === 'no'|| doesAnyoneLikeChoclate.toLowerCase() === 'n') {
  //console.log('Yes, you do, you\'re in denial');
  alert('Yes, you do, you\'re in denial.');
}
else {
//console.log('You need to answer with \'yes\' or \'no\' ');
alert('You need to answer with \'yes\' or \'no\' ');
}


// //Question 3:

let age = prompt('How old are you?');
console.log(typeof age);
if (parseInt(age) >= 18) {
  //console.log('You are good to go');
  alert('You are good to go.');
 } 
 else if(parseInt(age) < 18) {
   //console.log('You are not old enough.');
   alert('You are not old enough.');
 }
 else {
 //console.log('you need to answer with numbers only.');
 alert('You need to answer with numbers only.');
 }

//Question 4

let user = prompt('Do you like Mac computer?');
if (user.toLowerCase() === 'yes' || user.toLowerCase()==='y'){
 // console.log('Me too.');
  alert('Me too');
}
else if (user.toLowerCase() === 'no' || user.toLowerCase()==='n'){
  // console.log('Yes, you do, you\'re in denial.');
  alert('Yes, you do, you\'re in denial.');
}

//Question 5

let temprature= prompt('What is the temprature now?');
if (temprature <= 45){
  //console.log('it is cold outside, Wear a Jacket')
  alert('It is cold outside, You should wear a Jacket.')
}
else if (temprature > 45){
  //console.log('it is a great weather outside, wear light weight cloth.')
  alert('The weather is great today, wear light weight cloth.');
}
else{
  alert('answer in numbers only')
}






//Question 6:

let userAttempts = 4;
for (let i = 0; i < userAttempts; i++) {
  let number = prompt('Guess a  my favourite number from 1-8.');
  let favNumber = 5;
  console.log(typeof (number));
  if (number == favNumber) {
    console.log('You are correct.');
    break;
  } else if (number > favNumber) {
    console.log('the numberis too high');
  } else if (number < favNumber) {
    console.log('the number is too low');
  }
}








// //Question 7
  let correctAnswer; {
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
      if (i !==6){
          alert(' try again');
      }
  }
  }

  correctAnswer();

alert('My favorite fruits are: apple, strawberry, orange, grape and watermelon');
