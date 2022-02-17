'use strict';
console.log('Hello');

let username= prompt('what is your name?').toUpperCase();
alert('HELLO ' + username + '!');

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

let age = prompt('how old are you?');
console.log(typeof age);
if (parseInt(age) >== 18) {
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



//  let (result)= prompt('what is 12 * 6?'?);
//  if (result = 72) {
//    //console.log('You \'re right.');
//    alert('You are Right.');
//  }
// //  }
//  else if(result === 72) {
// //console.log('try again.');
// alert('that is not the right answer,try again.');
//  }





let temprature= prompt('what is the temprature now?');
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
