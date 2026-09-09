var result = 10; // result로 식별된 주소로 메모리 공간을 확보하여 10 값을 할당함.

/**
 * var result; --> result 변수를 먼저 처리함 (준비 단계[실행 컨텍스트 준비])
 * result = 10; --> result 변수에 값 10을 할당함 (실행 단계[런타임])
 */


//console.log(a); --> ReferenceError(참조 에러): a is not defined.

console.log(result_1); //undefined --> value hoisting
var result_1 = 50; 
console.log(result_1)

/**
console.log(result_1);
var result_1;
result_1 = 50;
*/

console.log("--------------------");

var score;
score = 80;
// var score = 80;

console.log(score_1) //undefined

score_1 = 80;
var score_1;


console.log(score_1); //80

const camelCase = 1; //카멜 케이스
const snake_case = 2; //스네이크 케이스
const Fasker_Case = 3; //파스칼 케이스

