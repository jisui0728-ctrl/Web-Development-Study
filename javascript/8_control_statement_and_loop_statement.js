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
표현식과 일치한 case문 부터 마지막 case,default문 까지 모든 명령문을 수행하는 역할을 한다.
이를 풀스루(full through)라 한다. 
따라서 해당되는 case문만 실행하고 싶으면 break를 넣어줘야 switch문을 종료하여 빠져 나온다.
*/

/**
 * 8-3 반복문(loop statement)
 */

/** 8-3-1 for문  
 * 
 * for (초기화구문; 조건문; 증감문) {
 *    statement;
 * }
 * 
 * 조건식이 참일동안 statement 문을 반복 실행한다.
*/

for (var i = 1; i <= 10; i++ ) {
    console.log(i);
}

for (var i = 1; i >= 0; i--) {
    console.log(i);
}
//무한 루프
// for (;;) {
//     console.log("this is infinity loop.");
// }

/** --> 초기문,조건문과 증감문 모두 옵션이므로 
반드시 사용 할 필요는 없다.
다만, 정상적인 활용을 위하여 외부에서 반드시 제어와 선언을 해줘야 한다.
*/

//조건식이 없을경우,js엔진에서 true으로 인식한다.

var a = 0;
for (; a !== 10; ) {
    console.log(a);
    a++;
}

// for (var a = 0; a !== 10; a++) {
//     console.log(a);
// }

/**
 * 8-3-2 while문
 * 
 * while (조건식) {
 *    statement;
 * }
 * 
 * --> 조건식이 true일때만, statement문을 반복 실행한다.
 */

var number = 0;

while (number < 10) {
    console.log(number);
    number = number + 2;
} // 0 2 4 6 8

//while (1) {
//  console.log("this is infinity loop.");
//}

//1은 불리언 강제 타입 변환 하면 true로 판별되기 때문이다.

var number2 = 0;

while (true) {
    console.log(number2)
    if (number2 === 67) {
        break;
    }
    number2++;
}

/**
 * 8-3-3 do while문
 * 
 * do {
 *     statement;
 * } while (조건문);
 * 
 * --> do문을 처음으로 실행한뒤 조건문이 true인 동안
 * 계속 do문을 반복 실행한다.
 * [do문은 최소 1회 이상 실행되어야 한다.]
 */

var number3 = 0;

do {
    number3 += 1;
    console.log(number3);
} while (number3 < 5);

/**
 * 8-4 break문
 * 
 * label문,반복문,switch문 등 코드 블록을 탈출할때 사용.
 * 
 */

/**label문 
 * 
 * keyword_label: code_block or loop_statement
 * 
 * --> 프로그램 순서를 제어하거나 중첩된 반복 루프에서
 * 전체 루프를 탈출 하고 싶을때 사용한다.
 * 탈출: break keyword_label;
 * 
 * 일반적으로 label문은 프로그램 흐름이 복잡해지고 가독성이 나빠져
 * 일반적으로 사용 권장하지 않는다.
 * 
*/

example_1: {
    console.log("Hello,World!");
    break example_1;
    console.log("Done.");
}

example_2: for (var i = 2; i < 10; i++) {
    for (var j = 1; j < 10; j++) {
        if (i*j === 54) {
            break example_2; //전체 반복 루프 탈출.
        }
        console.log(`${i} x ${j} = ${i*j}`);
    }
}

/**
 * 8-5 continue문
 * 
 * 반복문 또는 레이블문의 코드 블록 내에서 현시점 실행을 중단하고 곧 바로
 * 코드 블록 또는 바깥 반복문(처음 반복문)처음 부분부터 다시 실행한다.
 */

i = 0;
n = 0; // 1 + 2 + 4 + 5
while (i < 5) {
  i++;
  if (i == 3) {
    continue;
  }
  n += i;
}

console.log(n);

checkiandj: while (i < 4) {
  console.log(i);
  i += 1;
  checkj: while (j > 4) {
    console.log(j);
    j -= 1;
    if (j % 2 == 0) {
      continue checkj;
    }
    console.log(j + " is odd.");
  }
  console.log("i = " + i);
  console.log("j = " + j);
}

//for in과 for of는 19장에서 자세히 학습.