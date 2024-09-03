// if(){
//   true 실행할 문장;
// }

// if(){
//   true일때 실행할 문장
// }else{
//   아닐때 실행할 문장
// }

// if(){}else if(){}else{}

// 이름 : 류재은
// 국어 : 80점
// 수학 : 70점
// 영어 : 90점
// 과학 : 20점

// 평균, 총점 구하기
// if문으로 평균이 60점 이상인 학생은 합격, 60점 이하인 학생은 불합격 출력하기

// 최종 문장
// OOO님의 이번 총점은 OO, 평균은 OO점으로 (합격 또는 불합격)입니다.

let name = "류재은";
let korean = 80;
let math = 70;
let english = 90;
let science = 20;

let sum = korean + math + english + science;
let avg = sum/4;
let cutline = avg >= 60;
let pass = "합격"
let fail = "불합격"
let examResult = cutline ? pass : fail;
let result = `${name}님의 이번 총점은 ${sum}, 평균은 ${avg}점으로 ${examResult} 입니다.`

if(cutline){
  console.log(result);
} else {
  console.log(result);
}