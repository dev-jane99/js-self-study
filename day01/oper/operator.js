//최()단++--산+-*/시관><>=<=!==리\\&&삼?:대

// 최우선
// 10 * 20 + 2 = 202;
// 10 * (20 + 2) = 220;

let number1 = 10 * 20 + 2;  //202
let number2 = 10 * (20 + 2); //220

// 이항연산자 (항 2 개)
// 산술연산 (+,-,*,/)
// 누적복합연산자 (+=, -=, *=, /=)

let number3 = 10;
number3 += 10;  //20
console.log(number3);

//관계연산자 (>, <, >=, <=, !==)
//== 동등 비교 : 값이 같은지 비교
//=== 일치비교 : 값과 자료형이 같은지 비교
//!= 부등비교 : 값이 다른지 비교
//!== 불일치 비교 : 값과 자료형이 다른지 비교

console.log(20 === "20");  //false
console.log(20 == "20");  //true


//논리 연산자
console.log(false || 100) // 100
console.log(false && 200) // false
console.log(true && 200) // 200
console.log(200 && false) // false

// 삼항연산자
// 조건 ? 실행할 문장 또는 값 : 실행할 문장 또는 값
let num1 = 20;
let result = 0;
num1 % 2 == 0 ? result += num1 : "";
console.log(result); //20

// 형변환
let result1 = String(10) // === "10";
let result2 = Number("10") // === 10;
let result3 = Boolean("true") // === true;

console.log(typeof(result1));
console.log(typeof(result2));
console.log(typeof(result3));

//자동 형변환
console.log(typeof(+"20")) //number
console.log(typeof("10" + "20")) //string
console.log(typeof(!10)) //boolean

// false 가 아닌데 false 취급을 받는 값
console.log(Boolean(100))  //true
console.log(NaN)  //NaN
console.log(null)  //null
console.log(undefined)  //undefined (type 을 모름)
console.log("")  //빈문자열


console.log(Boolean(100))  //true
console.log(Boolean(NaN))  //false
console.log(Boolean(null))  //false
console.log(Boolean(undefined))  //false
console.log(Boolean(""))  //false
console.log(Boolean(" "))  //true
