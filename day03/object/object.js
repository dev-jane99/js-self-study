// const obj = {
//   name : "류재은",
//   age : 20
// }

// obj.key 접근법
// obj.name = "이소연";
// console.log(obj.name);

// obj[key] : 대괄호 접근법
// 객체의 key 값에 규칙성을 주고싶을때 사용하는 방법
// console.log(obj["name"]);

// const products = {
//   product1 : "지우개",
//   product2 : "키보드",
//   product3 : "마우스",
//   product4 : "노트북",
//   product5 : "샤프",
//   product6 : "신발",
// }

// for(let i = 0; i < products.length; i++){
//   products[`product${i}`]
// }

// 빠른 for~in문을 제공 (순서가 없는 객체의 반복문 돌리려면 사용)
// for(let key in products){
//   console.log(products[key]);
// }

// 빠른 for~in문을 제공 (순서가 있는 객체)
// for(let key of products){
//   console.log(key);
// }

const users = {
  user1 : {
    name : "류재은",
    age : 24,
    point : 20000,
  },
  user2 : {
    name : "이소연",
    age : 23,
    point : 1500,
  },
  user3 : {
    name : "이진아",
    age : 29,
    point : 9500,
  },
  user4 : {
    name : "안유림",
    age : 23,
    point : 4000,
  },
}

// for문을 이용하여 모든 유저의 point를 누적합한 후 화면에 출력하기
let result = 0;
for(let user in users){
  result += users[user].point
}
console.log(result);
// -------------------------------------------
const getUserPoint = (users, callback) => {
  let result = 0;
  for(let user in users){
    result += users[user].point;
  }
  callback(result)
}
const printPoint = (point) => {
  console.log(point)
}

getUserPoint(users, printPoint)
