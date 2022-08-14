'use strict';

// const hamburger = 5;
// const fries = null;

// if (hamburger && fries) {
//     console.log('я сыт!!');
// } 


// const hamburger = 3;
// const fries = 1;
// const cola = 1;

//  console.log(hamburger === 3 && cola && fries);

//  console.log(1 && 0);
//  console.log(1 && 5);
//  console.log(null && 5);
//  console.log(0 && 'qwee');

// if (hamburger === 3 && cola === 1 && fries) {
//   console.log('все сыты');
// } else {
//   console.log('мы уходим');
// } 

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if (hamburger === 3 && (cola === 2 || fries === 3) && nuggets) {
//   console.log('все довольны');
// } else {
//   console.log('мы уходим');
// } 

// console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets);

// let jhonReport, alexReport, samReport, mariaReport = 'done';

// console.log(jhonReport || alexReport || samReport || mariaReport);

// let num = 50;
//  while (num <= 55) {
//   console.log(num);
//   num++;
//  }

//  do {
//   console.log(num);
//   num++;
//  }

//  while (num < 55);

//  for (let i = 1; i < 10; i++) {
//   if (i === 6) {
//     break;
//   }
//   console.log(i);
//  }

// for (let i = 0; i < 3; i++) {
//   console.log(i);

//   for (let j = 0; j < 3; j++) {
//     console.log(j);
//   }
// }

// let result = '';
// const length = 9;

// for (let i = 1; i < length; i++) {
//   for (let j = 0; j < i; j++) {
//     result += '*';
//   }

//   result += '\n';
// }

// console.log(result);



first: for (let i = 0; i < 3; i++) {
  console.log(`first level: ${i}`);

  for (let j = 0; j < 3; j++) {
    console.log(`second level: ${j}`);

    for (let k = 0; k < 3; k++) {
      if (k === 2) {
        break first;
      }

      console.log(`third level: ${k}`);
    }
  }
}


// Место для первой задачи
for (let i = 5; i < 11; i++) {
  console.log(i);}

// Место второй задачи 
for (let i = 20; i > 9; i--) {
  console.log(i);
  if (i === 13 ) {
    break;
  } 
}

// Место третьей задачи 
for (let i = 2; i < 11; i++) {
  console.log(i);}

  // Место четвёртой задачи 
let num = 3;
for(num; num < 16; num +2) {
  console.log(num+2);
}


// Место пятой задачи

// const arr = [];
// for (i=5; i<10; i++) {
//   arr[i-5] = i;
// }
// console.log(i);