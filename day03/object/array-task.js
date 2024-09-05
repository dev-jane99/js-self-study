// 1) 1~10까지 Array 객체에 담은 후 짝수만 출력
const evenArr = new Array(10).fill(0)
evenArr.map((data, i) => i + 1).filter((data) => data % 2 == 0).forEach((data) => {console.log(data)});
// evenArr.filter(data => data % 2 == 0).forEach(data => console.log(data)); // 도 가능

// 2) 한글을 숫자로
// ex) "일이삼사" => "1234"
const kor = "공일이삼사오육칠팔구";
const input = "일이사팔".split("");
console.log(input.map(c => kor.indexOf(c)).join(""));

// 3) 숫자를 한글로
// ex) "1234" => "일이삼사"
const input3 = "1234".split("")
console.log(input3.map(num => kor.charAt(num)).join(""));
// console.log(input3.map(num => kor[num]).join("")); //도 가능

// 4) 1~100까지 합 출력
// const sum = new Array(100).
// console.log(sum);


// 5) 문자열 반대로 출력하기 .reverse() 사용
const word = "hello";
console.log(word.split("").reverse().join(""));

// 6) 전화번호를 파라미터로 받아서 파싱(데이터를 바꿔주는 작업)하기
// ex) 010-1234-5678
// result) 010-****-5678
const phoneNumber = "010-1234-5678"
console.log(phoneNumber.replaceAll("1234", "****"));