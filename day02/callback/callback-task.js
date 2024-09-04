// function print(value){
//   console.log(value);
// }

// 1) 두 수를 더해서 출력하기
const add = (num1, num2, callback) => {
  callback (num1 + num2)
}

const print = (value) => {
  console.log(value)
}

add(2, 3, print);
// 2) 성과 이름을 받아서 연결하고 출력하기
const fullname = (surname, firstname, callback) => {
  callback (surname + firstname)
}
const printName = (value) => {
  console.log(value)
}
fullname("Ryo", "Jane", printName);
// 3) 두 정수의 곱셈 결과를 출력하기
const multiply = (num1, num2, callback) => {
  callback (num1 * num2)
}
const printNumber = (value) => {
  console.log(value)
}
multiply(3, 2, printNumber);
// 4) 성과 이름을 받아서 OOO님 환영합니다. 출력하기
const getName = (surname, firstname, callback) => {
  callback (surname + firstname)
}
const printGetName = (value) => {
  console.log(`${value}님 환영합니다.`)
}
fullname("Ryo", "Jane", printGetName);


// const hello = (fullname, callback) => {
//   callback(`${fullname}님 환영합니다.`)
// }

// getFullName("김", "세환", (fullName) => {
//   hello(fullName, print)
// })

// --------------------------------------------------------------
// 1) 두 수를 더하고 홀수인지 짝수인지 비교한 후 출력
// const addCheckOddEven = (num1, num2, callback) => {
//   callback (num1 + num2) % 2 == 0 ? "짝수" : "홀수";
// }
const addtwo = (num1, num2, callback) => {
  callback (num1 + num2);
}
const checkOddEven = (value, callback ) => {
  callback (value % 2 == 0 ? "짝수":"홀수");
}
const printNum = (value) => {
  console.log(value);
}
addtwo(3, 5, (result) => {
  checkOddEven(result, printNum)
});
// 2) 두 정수의 곱셉을 구한 뒤 결과에 2를 곱해서 출력

// 3) 두 정수의 값 중 작은 값을 반환하여 출력
// 4) 문자열을 받아서 순서를 반대로 바꾼 후 출력
// 5) 사용자가 입력한 값까지 누헙한 한 후 5의 배수인지 확인 후 출력
