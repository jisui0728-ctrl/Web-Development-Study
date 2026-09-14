/**
 * 1. 산술 연산자
 */

// 1-1 이항 산술 연산자
console.log(5 + 2); //덧셈
console.log(5 - 2); //뺄셈
console.log(5 * 2); //곱셈
console.log(5 / 2); //나눗셈
console.log(5 % 2); //나머지
console.log(5 ** 2); //지수 --> Math.pow(밑,지수) 메서드를 이용해서 지수를 계산할 수 도 있다.
console.log(Math.pow(2,2)); //2**2 = 4 

console.log(5 - "Hello,World!"); /** NaN(Not a Number) 
--> 산술 연산이 숫자형으로 평가(연산,변환 등)가 되지 않는 경우, 
    즉 값이 유효한 숫자형으로 나타 낼 수 없음.
*/

// 1-2 단항 산술 연산자

var x = 2;

x++; // x = x + 1; --> 값을 1 증가 시킨다.
console.log(x); // 피연산자 

x--; // x = x - 1; --> 값을 1 감소 시킨다.
console.log(x);

// --> ++ , -- 연산자는 피연산자에 대한 부수효과가 있다.

var y1 = 2 , y2 = 2;
var result;

//선할당 후증가
result = y1++;
console.log(result,y1); // 2 3

//선증가 후할당
result = ++y1;
console.log(result,y1); // 4 4

//선할당 후감소
result = y2--;
console.log(result,y2); // 2 1

//선감소 후할당
result = --y2;
console.log(result,y2); // 0 0

/** +,- 단항 연산자
 * --> 숫자가 아닌 피연산자를 숫자 타입으로 변환을 시도하고 반환함.
 * */  

var a = "1";

//string(숫자형태의 문자열) -> number
console.log(a,+a,typeof a,typeof +a); // "1" 1 string number

//boolean -> number
a = true;
console.log(a,+a,typeof a,typeof +a); // true 1 boolean number

a = false;
console.log(a,+a,typeof a,typeof +a); // false 0 boolean number 

//string(숫자형태가 아닌 문자열) -/> number
a = "Hello,fucking World!";
console.log(+a,typeof a,typeof +a); /**NaN string number 
--> 숫자형태가 아닌 문자열은 숫자로 변환을 못하므로 NaN이 반환한다.
*/

//--> - 단항 연산자는 + 단항 연산자 결과값을 반전시켜 앞에 "-"부호를 붙여서 결과값이 반환된다.

var b = "10";

//string(숫자형태의 문자열) -> number
console.log(b,-b,typeof b,typeof -b); // "10" -10 string number

//boolean -> number
b = true;
console.log(b,-b,typeof b,typeof -b); // true -1 boolean number

b = false;
console.log(b,-b,typeof b,typeof -b); // false 0 boolean number 

//string(숫자형태가 아닌 문자열) -/> number
b = "Hello,fucking World!";
console.log(-b,typeof b,typeof -b); /**NaN string number 
--> 숫자형태가 아닌 문자열은 숫자로 변환을 못하므로 NaN이 반환한다.
*/

// 1-3 + 암묵적 타입 변환 

console.log("1" + 2); // "12" --> 숫자 2가 암묵적으로 변환되어 문자열 합 연산으로 적용. 
console.log("1" + true); //"1true"
console.log(1 + true); // 2 --> true가 암묵적으로 1로 변환되어 산술 연산이 진행됨.
console.log(1 + null); // 1 --> null이 암묵적으로 0으로 변환되어 산술 연산이 진행됨.

// -> 자세한 타입 변환은 9장에서 학습

/**
 * 2. 할당 연산자
 */

var c;

x = 10;
console.log(x); // "=" 연산자는 우항의 값을 변수에 할당한다.

x += 5; // x = x + 5;
console.log(x); 

x -= 5; // x = x - 5;
console.log(x);

x *= 5; // x = x * 5;
console.log(x);

x %= 5; // x = x % 5;
console.log(x);

x **= 5; // x = x ** 5;
console.log(x);

/**
 * 3. 비교 연산자
 */

// 3-1 동등/일치 비교 연산자

var var1 = 3;
var var2 = 4;

console.log(var1 == var2); // false
console.log(var1 != var2); // true
console.log(var1 > var2); // false
console.log(var1 < var2); // true
console.log(var1 >= var2); // false
console.log(var1 <= var2); // true

var var3 = "3";
var var4 = 3;

console.log(var3 == var4); // true --> 두 값의 타입이 다를 경우, 암묵적 타입 변환이 일어나 타입을 일치 시킨다. 
// --> 타입을 일치시키면 동등한 값이 된다.
console.log(var3 === var4); // false --> 암묵적 타입 변환 x
// --> js에서는 == 연산자보다 === 연산자를 사용하는 것을 선호한다.
console.log(var3 !== var4); // true

// == 비교 연산자의 단점
console.log('0' == ''); // false
console.log(0 == ''); // true --> ''이 암묵적으로 0인 숫자형으로 변환.
console.log(false == 'false'); // false --> 타입이 다르므로 암묵적 타입 변환이 일어나지 않음.
// --> 예측 할 수 없는 결과가 나올 수 있으므로 === 연산자를 사용해야 한다!!

//Number.isNaN(),Object.is() 함수

//Number.isNaN() 함수: 파라미터 값이 NaN인지 확인 후 불리언 값으로 반환.
console.log(NaN === NaN); // false --> NaN은 유효한 숫자를 나타낼 수 없는 특수한 값이기 때문이다.
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(10)); // false
console.log(Number.isNaN(+"Hello,World!")); //true

//Object.is() 함수: 두 값이 동일한 값인지 정확한 확인 후 불리언 값으로 반환.
// --> === 연산자에 더 정확하고 명시적인 엄격한 비교를 수행한다.

console.log(-0 === +0); // true
console.log(Object.is(-0, +0)); // false
console.log(Object.is(NaN, NaN)); // true

/**
 * 4. 삼항 조건 연산자
 * 
 * (조건식) ? (true일 경우 실행문) : (flase일 경우 실행문)
 * --> 삼항 조건 연산자는 실행문의 결과값을 평가하므로 표현식이다. (변수 할당 가능)
 */

var age = 20;

var result = (age >= 20) ? "성인" : "민짜";
console.log(result); // 성인 --> age가 20 이상인 조건이 참 이므로 "성인" 값으로 평가되어 result 변수에 할당된다.


/**
 * 5. 논리 연산자
 * 
 * 1.AND 연산자(&&) : 조건식 A B 둘 다 true이면, true 반환.
 * 2.OR 연산자(||) : 조건식 A B 중 하나 이상 true이면, true 반환.
 * 3.NOT 연산자(!) : 조건식 A가 true이면, 부정 연산으로 false 반환.
 */

console.log(true && true);
console.log(true && false);
console.log(false && false);
console.log(6 > 7 && 3 < 4);
console.log(1 == true && 1 !== "1");

console.log(true || false);
console.log(false || false);
console.log(6 > 7 || 3 < 4);
console.log(1 == true && 1 !== "1");

console.log(!true);
console.log(!false);

//단축 평가
/**
 * 1. A && B 에서 A가 true이면, B 반환.
 * 2. A && B 에서 A가 false이면, A 반환.
 * 3. A || B 에서 A가 true이면, A 반환.
 * 4. A || B 에서 A가 false이면, B 반환.
 * 
 * --> 9장에서 자세히 학습
 * 
 * null 병합 연산자(??)
 * 
 * A ?? B --> A가 null 또는 undefined 상태인 경우, B를 반환, 아닌 경우 A 반환
   -->부수 효과가 존재한다. 
*/

console.log(1 && "참") // "참"
console.log(0 && "거짓"); // 0
console.log(true || "참"); // true
console.log(false || "거짓"); // "거짓"


var result = null ?? "null 맞음."; 
console.log(result);

var result1 = undefined ?? "undefined 맞음";
console.log(result1);

var result2;

result2 ??= "undefined 맞음요."; // result2 = result2 ?? "undefined 맞음요."
console.log(result2);

/**
 * 6. 비트 연산자
 * 
 * JS에서 숫자를 32비트 정수 형태로 취급 
 * 
 * 1. 비트 AND(a & b) : 두 값의 이진수 각 자리 비트 값을 AND 연산 시킨 결과값.
 * 2. 비트 OR(a | b) : 두 값의 이진수 각 자리 비트 값을 OR 연산 시킨 결과값.
 * 3. 비트 NOT(~ a) : 값의 각 자리 비트값을 NOT 연산 시키고 그 비트를 2의 보수법으로 표현한 결과값.
 * --> 성질: ~a = -a-1 이 성립한다.
 * 4. 비트 XOR(a ^ b) : 두 값의 이진수 각 자리 비트 값을 XOR 연산 시킨 결과값.
 * --> XOR 연산자는 A B가 서로 같으면 false, 다르면 true을 반환한다.
 * 5. 왼쪽 시프트 연산자(a<<count) : 값의 이진수 자리를 왼쪽으로 count 만큼 이동하여 나타낸 비트값.
 * 6. 오른쪽 시프트 연산자(a>>count) : 값의 이진수 자리를 오른쪽으로 count 만큼 이동 후 
 * 오른쪽으로 넘치는 비트는 버리고, 왼쪽은 최상위(첫번째 비트값)으로 채워 나타낸 비트값.
 * 7. 부호 없는 오른쪽 시프트 연산자 (a>>>count) : 값의 이진수 자리를 오른쪽으로 count 만큼 이동 후 
 * 오른쪽으로 넘치는 비트는 버리고, 왼쪽은 0으로 채워 양수인 비트로 생성.
*/

var bit_and1 = 1; // 0001
var bit_and2 = 2; // 0010

console.log(bit_and1 & bit_and2); // 0000 -> 0

var bit_or1 = 1; // 0001
var bit_or2 = 2; // 0010

console.log(bit_or1 | bit_or2) // 0011 -> 3

var bit_not = 1; //  00000000 00000000 00000000 00000001
console.log(~bit_not); /**  11111111 11111111 11111111 11111110 -> 00000000 00000000 00000000 00000001 + 1 
= 00000000 00000000 00000000 00000010  -> 2 -> -2(-1-1 = -2) */
// 십진수로 다시 변환할때 원래 값인 1의 이진수에 1을 더한 후 앞에 - 부호를 붙여주면 -2가 된다.(00000000 00000000 00000000 00000010)

var bit_xor1 = 1; // 0001
var bit_xor2 = 2; // 0010

console.log(bit_xor1 ^ bit_xor2); // 0011 -> 3 

var bit_left_shift = 1; //0001
console.log(bit_left_shift<<3); // 0001 -> 1000 -> 8

var bit_right_shift = 2; //0010
console.log(bit_right_shift >> 1) // 0001 -> 1
console.log(bit_right_shift >> 2) // 0000 -> 0
console.log(bit_right_shift >> 3) // 0000 -> 0
// shift 할때 버릴 비트 값이 없으면 0으로 처리된다.

console.log(-9>>2); // -3
console.log(-9>>>2); // 1073741821

/** --추가 개념: 보수 변환-- 
 * --> 음의 정수를 컴퓨터에서 이진수로 표현하기 위한 변환법.
 * 
 * -9를 32비트로 이진수로 나타낼려면, 절댓값인 9의 이진수를 비트 NOT 연산 시킨다.
 * 이때 그 값이 1의 보수 변환된 이진수 표현이고, 1을 더한 그 값이 2의 보수 변환된 이진수 표현이다.
 * 마지막으로 앞에 -부호를 붙여주면 음의 정수를 나타 낼 수 있다. 
 * 
 * -->참고로 이진수 맨 앞자리 비트가 0이면 양수, 1이면 음수로 정의하고 있고, 
 *    js에서는 음의 정수를 32비트인 2의 보수로 표현한다.
 * 
 * 1.값 절댓값의 이진수 비트 NOT 연산 진행.
 * 2.1의 보수 변환은 그대로, 2의 보수 변환은 그 이진수에 1을 더함.
 * 3.부호(-)를 붙여준다. --> 십진수로 나타 낼 때.
 * 
*/

