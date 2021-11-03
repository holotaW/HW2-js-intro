console.log('Пункт №5')

let a = 1;
let b = 2;
console.log(a + b)

a = 4;
b = 2;
console.log(a - b)

a = 5;
b = 6;
console.log(a * b)

a = 100;
b = 5;
console.log(a / b)

console.log('Пункт №6')

let i = 1;
 
while (i < 5) {  
    console.log(i);  
    i++; 
}
 
console.log(i)

console.log('Пункт №7')

i = 5;
 
while (i > 1) {  
    console.log(i);  
    i--; 
}
 
console.log(i)

console.log('Пункт №8')


function getMarkInfo(condition) {
    if (condition === 10) {
        console.log('У вас максимальный балл');
    } else {
        console.log('У вас средний балл');
    }
}
getMarkInfo(10)
getMarkInfo(1)

console.log('Пункт №9')

function getDayInfo(position) {
    switch (position) {
case 0:
    console.log( 'Sunday' );
    break;
  case 1:
    console.log( 'Monday' );
    break;
  case 2:
    console.log( 'Tuesday' );
    break;
case 3:
    console.log('Wednesday');
    break;
case 4:
    console.log('Thursday');
    break;
case 5:
    console.log('Friday');
    break;  
default:
    console.log('Wrong data');
}
}
getDayInfo(0)
getDayInfo(1)
getDayInfo(2)
getDayInfo(3)
getDayInfo(4)
getDayInfo(5)
getDayInfo(6)

console.log('Пункт №10')

let rowMassive = ['a', 'b', 'c']

rowMassive.push(1, 2, 3)

console.log(rowMassive)

console.log('Пункт №11')

let firstMassive = [1, 2, 3]
let secondMassive = [4, 5, 6]
let concatMassive = firstMassive.concat(secondMassive)

console.log(concatMassive)

console.log('Пункт №12')

function countNumber(number) {
let sum = 0;
for (i=1; i<= number; i++){
	sum = sum + i;
}
console.log(sum)
}
countNumber(3)
