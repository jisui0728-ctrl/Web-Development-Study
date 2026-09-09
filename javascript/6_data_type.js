var integer = 314; //number type
var double = 3.14; //number type
var negative = -1; //number type

console.log(integer);
console.log(double);
console.log(negative);

var infinity = 10 / 0; //Infinity 값의 type은 수학적인 무한대를 나타내기 위한 특수한 값이므로 number type이다.
var negativeInfinity = -10 / 0;

console.log(infinity);
console.log(negativeInfinity);

var string = "*";
console.log(string * 10); //NaN은 어떤 값이나 표현식을 number로 처리하는데 연산을 실패한 특수한 값이다.

var template1_string = "s\n\ttring";
console.log(template1_string);

var template2_vectical_string = `s 
    tring`;
console.log(template2_vectical_string); //template literal인 벡틱으로 문자열을 표현하면 줄바꿈과 공백이 허용 된다.

var first_name = "Ji-su";
var last_name = "Lee";

console.log("My name is " + first_name + " " + last_name + ".");

for (var i = 1; i <= 9 ; i++) { //for문은 나중에 학습.
    console.log(`2 x ${i} = ${2 * i}`); //템플릿 리터럴을 사용하여 문자열 표현식 삽입을 할 수 있다.
}

var foo = true;

console.log(foo); //true

foo = false;

console.log(foo); //false

var x;
console.log(x); //x변수가 준비단계에서 js엔진이 메모리상의 공간을 확보하고 암묵적으로 undefined로 초기화 후, 실행단계에서 나머지 값들의 할당이 이루어지고 실행되기 때문이다.
// var x = undefined; 같은 선언문은 의도적으로 개발자가 undefined로 재할당한 경우이여서,  undefined가 할당된 시점 측정의 혼란을 줄 수 있기 때문에 null로 초기화 하는 것이 원칙 이다.


var null_value = null; //null은 의도적으로 값이 없음을 나타내는 특수한 값 이다.
console.log(null_value);

var nomal_value1 = "value"; //일반적으로 같은 리터럴 값으로 할당된 변수는 같은 값으로 가진다.
var nomal_value2 = "value";

console.log(nomal_value1 == nomal_value2) //true

var symbol1 = Symbol("value"); //같은 value값 이지만, symbol은 고유한 식별자로 생성하므로 서로 다른 value값으로 생성된다.
var symbol2 = Symbol("value");

console.log(symbol1 == symbol2) //false

var key1 = Symbol("key");
var key2 = Symbol("key");

console.log(key1 == key2);
console.log(key1 === key2);

console.log(typeof key1); //symbol type

var example_value = 123;
console.log(typeof example_value); //number type

example_value = "string";
console.log(typeof example_value); //string type

example_value = true;
console.log(typeof example_value); //boolean type

//js는 동적 타이핑 언어이므로, 변수에 할당된 값으로 타입 추론을 하여 타입을 자동으로 결정한다.

console.log(typeof (typeof example_value)); //typeof 연산자는 피연산자의 타입을 문자열로 반환해주기 때문에 무조건 string type이 된다.
