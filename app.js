'use strict';

// первая (перенести данные из одного массива во второй);
const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];

for (let i = 0; i < arr.langth; i++ ) {
  result[i] = arr[i];
}
console.log(result);

// вторая (изменить данные массива. Число (*2), к строке добавиьт (- done));
const data = [5, 10, 'Shopping', 20, 'Homework'];
for (let i = 0; i < data.length; i++) {
  if (typeof(data[i]) === 'number') {
    data[i] = data[i] *2;
  } else {
    data[i] = data[i] + ' - done';
  }
}
console.log(data);

// третья (вывести массив наоборот);
const dataElse = [5, 10, 'Shopping', 20, 'Homework'];
const resultData = [];

// Почему если установить i=0 ответ => [ 'Homework', 20, 'Shopping', 10, '-1': undefined ]
// и как вообще так получилось. Строку подсмотрел => resultData[i - 1] = dataElse[dataElse.length - i];. 
for (let i=1; i < dataElse.length; i++) {
  resultData[i - 1] = dataElse[dataElse.length - i];
}
console.log(resultData);

