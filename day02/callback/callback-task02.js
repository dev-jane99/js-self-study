
function print (value) {
  console.log(value)
}
// 1) 1~100까지 짝수만 더한 후 결과 값에 3을 곱한 후 출력
const addEven = (num, callback) => {
  let result = 0;
  for(let i = 0; i <= num; i++){
    i % 2 == 0 ? result += i : "";
  }
  callback(result);
}

const multiplyThree = (value, callback) => {
  callback(value * 3);
}

// const print = (value) => {
//   console.log(value);
// }

addEven(100, (value) => {multiplyThree(value, print)});
// -----------------------------------------------------------------
const addEven2 = (callback) => {
  let result = 0;
  for(let i = 0; i <= 100; i++){
    i % 2 == 0 ? result += i : "";
  }
  callback(result);
}

const multiplyThree2 = (value, callback) => {
  callback(value * 3);
}

addEven2((value) => {multiplyThree(value, print)});

// 2) 2개의 정수 중 최소 값과 최대 값을 비교한 후 큰 값에 10을 곱해서 출력
const compareNum = (num1, num2, callback) => {
  if(typeof(num1) != "number" || typeof(num2) != "number") return "숫자가 아닙니다.";
  if(num1 == num2) return "두 수가 같습니다.";
  callback (num1 > num2 ? num1 : num2);
}

const multiplyTen = (value, callback) => {
  callback(value * 10);
}

compareNum(1, 2, (value) => {
  multiplyTen(value, print)
});

// 3) 결제 상품의 이름과 결제 상태를 전달 받아서 
// 결제 상태가 true일 경우 결제 완료, false 인경 우 결제 취소를 출력
const payment = (productName, status, callback) => {
  let confirm = status ? "결제 완료" : "결제 취소";
  callback(`${productName}은(는) ${confirm}`);
}

payment("선풍기", true, printMessage)

// 4) 상품 가격과 총 구매한 가격의 합을 입력 받고 개수를 알아낸 뒤
// 개수가 5개 이하라면 true 아니라면 false 출력
// ex) 가격 1000원, 총 구매가격 5000원 == 구매 개수 5개
const getCount = (price, total, callback) => {
  let count = total / price;
  callback(count)
}

const checkCount = (count, callback) => {
  let result = count <= 5;
  callback(result);
}

getCount(1000, 6000, (count) => {
  checkCount(count, printMessage)
})

