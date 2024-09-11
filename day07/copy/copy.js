// 얕은 복사
const animals = {
  cat : "야옹이",
  dog : "누렁이",
  cow : "얼룩이",
  tiger : "어흥이",
}

const animals2 = animals;

// animals2.dog = "멍뭉이"

// console.log(animals) //멍뭉이
// console.log(animals2) // 멍뭉이 로 둘다 같은 객체를 쉐어해서 
// //원본까지 바뀐값으로 나옴


//깊은 복사(1dep 부터)
const animals3 = Object.assign({}, animals);

animals3.dog = "흰둥이"

console.log(animals); //누렁이
console.log(animals3); //흰둥이
