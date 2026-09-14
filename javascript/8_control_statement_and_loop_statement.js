/**
 * 8.1 블록문(block_statement)
 * 
 * {
 *      statement_1;
 *      statement_2;
 *      ...
 *      statement_n;
 * }
 * --> 0개 이상의 문을 중괄호로 묶은것.
 */

{
    console.log("this is block statement.");
}

var a = 5;
var b = 10;

if (a+b == 15) {
    console.log("equalltiy.");
} else {
    console.log("wrong.");
}

function plus(x,y) {
    return x+y;
}

const minus = (m,n) => {
    return m-n;
}
//-> 일반적으로 블록문 끝에는 세미콜론을 붙이지 않는다.

/**
 * 8.2 조건문
 */

/**
 * 8.2.1 if...else문
 * 
 * if (조건식) {
 *    //조건식 ture이면, 이 코드 블록 실행
 * } else {
 *    //조건식 false이면, 이 코드 블록 실행
 * }
 * 
 * if (조건식1) {
 *    //statement_1;
 * } else if (조건식2) {
 *    //statement_2;
 * } else if (조건식n) {
 *    //statement_n;
 * } else {
 *   //statement_last;
 * }
 * 
 * --> else if는 최상위 조건(if)이 false인 경우,
 * 다음 조건으로 판별되어 실행한다.
 * [else는 모든 조건이 false인 경우 예외적으로 실행.]
 *
 */

var number1 = 10;
var number2 = 10;

var condition_1 = number1 === number2;
var condition_2 = number1 > number2;

if (condition_1) {
    console.log(condition_1); //boolen으로 평가 되기 때문이다.
} else {
    console.log(condition_1);
}

if (condition_2) {
    console.log(condition_2); //boolen으로 평가 되기 때문이다.
} else {
    console.log(condition_2);
}

if (condition_2) {
    console.log("X");
} else if (condition_1) {
    console.log("else if example.");
} else {
    console.log("모든 조건 거짓일 경우 실행.");
}

if (1) {
    console.log("1은 암묵적 타입 변환으로 true로 평가된다.");
} else {
    console.log("무조건 true");
}

if (0) {
    console.log("0은 암묵적 타입 변환으로 false로 평가된다.")
} else {
    console.log("false");
}

/**
 * 8.2.2 switch 문
 * 
 * switch (expression) {
 *    case label_1:
 *       statement_1;
 *       break;
 *    case label_2:
 *       statement_2;
 *       break;
 *    ...
 *    default:
 *       statement_default;
 *       break;
 * }
 * 
 * 1.case는 switch문에서 실행을 시작할 위치를 
 * 지정한다. 일치하는 case를 찾으면 그 지점부터
 *  실행한다.
 * 2.default문은 모든 case와 일치 하지 않았을때 마지막으로 실행 할 문이다.
 * [default문은 제외하여 실행 해도 된다.]
 * 3.break문은 해당 코드 블록을 벗어나 실행을 멈추는 문이다.
 * 
 */

var month = 9;
var monthName;

switch (month) {
    case 1:
        monthName = "1월";
    case 2:
        monthName = "2월";
    case 3:
        monthName = "3월";
    case 4:
        monthName = "4월";
    case 5:
        monthName = "5월";
    case 6:
        monthName = "6월";
    case 7:
        monthName = "7월";
    case 8:
        monthName = "8월";
    case 9:
        monthName = "9월"; //여기서 부터 모든 case문 실행됨.
    case 10:
        monthName = "10월";
    case 11:
        monthName = "11월";
    case 12:
        monthName = "12월";
    default:
        monthName = "?";
}

console.log(monthName);

var value = 1;

switch (value) {
    case 1:
        console.log("1");
    case 2:
        console.log("2");
    default:
        console.log("default");
}
// 1 -> 2 -> default

/**break가 없는 한,
표현식과 일치한 case문 부터 마지막 case,default문 까지
모든 명령문을 수행하는 역할을 한다. 따라서 해당되는 case문만 
실행하고 싶으면 break를 넣어줘야 switch문을 종료하여 빠져 나온다.
*/
