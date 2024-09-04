// 1) 0, 1을 마구잡이로 5개 전달했을 때,
// 0과 1의 개수를 알려주는 함수
// ex) 0의 개수 OO개, 1의 개수 OO개
function getCount(num1, num2, num3, num4, num5){
  let countZero = 5;
  let countOne = 0;
  if(num1){countOne++};
  if(num2){countOne++};
  if(num3){countOne++};
  if(num4){countOne++};
  if(num5){countOne++};
  countZero -= countOne;
  return `0의 개수 ${countZero}, 1의 개수 ${countOne}`; 
}
console.log(getCount(1, 1, 0, 0, 1));



// function getCount(content, char){
//   let count = 0;
//   for(let i = 0; i < content.length; i++){
//     content.charAt(i) == char && count++
//   }
//   return count;
// }
// let result = getCount("so what? Do I know you?", "o");
// console.log(result)


// 2) 사용자가 0, 1을 마구잡이로 입력했을 때
// 0과 1의 개수를 알려주는 함수
// ex) 0의 개수 OO개, 1의 개수 OO개
function count(scan) {
  let zero = 0;
  let one = 0;

  for(let i = 0; i < scan.length; i++) {
    if (scan[i] === '0') {
      zero++;
    } else if (scan[i] === '1') {
      one++;
    }
  }
  console.log(`0의 개수 ${zero}개`,`1의 개수 ${one}개`);
}

count("0000111010");


function getCount(num){
  let count0 = 0;
  let count1 = 0;
  for(let i = 0; i < num.length; i++){
    if(num[i] == 0){
      count0++;
    }else if(num[i] == 1){
      count1++;
    }
  }
  console.log(count0, count1)
}
getCount([0,1,0,0,1])


function getCount(...numbers){
  let countZero = numbers.length;
  let countOne = 0;
  for(let i = 0; i < numbers.length; i++){
    countOne += numbers[i];  
  }
  countZero -= countOne;  
  return `0의 개수 ${countZero}, 1의 개수는 ${countOne}`
}
let result = getCount(0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0)
console.log(result);

// 1) 값을 2개 전달 받아서 큰 값, 작은 값을 알려주는 함수
function comp(num1, num2){
  let number = 0;
  if(typeof(num1) != "number" | typeof(num2) != "number"){return "정수를 입력해주세요"}
  if(num1 == num2){return "두 수가 같습니다"};
  if(num1 > num2){
    number = `큰값: ${num1}, 작은값: ${num2}`;
  }else {
    number = `큰값: ${num2}, 작은값: ${num1}`;
  }
  return number;
}
console.log(comp(10, 20));


function getMinAndMax(num1, num2){
  let min = 0;
  let max = 0;
  if(typeof(num1) != "number" | typeof(num2) != "number"){ return "정수를 입력해주세요."};
  if(num1 == num2){return "두 수가 같습니다."};
  if(num1 > num2){
    min = num2;
    max = num1;
  }else{
    min = num1;
    max = num2;
  }
  return `작은 값 ${min}, 큰 값 ${max}`;
}

console.log(getMinAndMax(20, 40))


// 2) 입력받은 3개 중 홀수만 모두 더해서 값을 주는 함수
function addOdd(num1, num2, num3){
  let number = 0;
  num1 % 2 == 1 && (number += num1);
  num1 % 2 == 1 && (number += num2);
  num1 % 2 == 1 && (number += num3);
  return number;
}
let resultOdd = addOdd(1, 2, 3)
console.log(resultOdd);
// 3) 입력 받은 수 까지 반복 후 짝수의 합을 모두 더해주는 함수
// ES6 화살표 함수
const sumEven = (limit) => {
  if(typeof(limit) != "number") return "정수를 입력하세요.";
  let result = 0;
  for(let i = 0; i <= limit; i++){
    if(i % 2 != 0) continue;
    result += i;
  }
  return result;
}

console.log(sumEven(10));

// 4) 입력한 값 중 a를 제거해주는 함수
// ex) "가a나a다a라a마a바" -> "가나다라마바"
let content = "가a나a다a라a마a바";
const removeA = (content) => {
  return content.split("a").join("");
}
console.log(removeA(content));


// 5) 입력한 값이 실수인지 정수인지 알려주는 함수
const isInteger = (num) => {
  return num == parseInt(num) ? "정수" : "실수"
}
console.log(isInteger(10));

// 6) 입력받은 문자를 뒤집어주는 함수
function reverse(str){
  return str.split('').reverse().join('');
}
let reversed = reverse("hello");
console.log(reversed);

const reverse = (content) => {
  let result = "";
  for(let i = 0; i < content.length; i++){
    result += content.charAt(content.length - i - 1);
  }
  return result;
}

console.log(reverse("안녕하세요"))

