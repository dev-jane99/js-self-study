// 선언
// const arr1 = [];
// const arr2 = new Array();
// const arr3 = new Array(10);
// const arr4 = new Array(10).fill(0);
// const arr5 = Array.of("초기값1", "초기값2");

// console.log(arr1)
// console.log(arr2)
// console.log(arr3.length)  //10
// console.log(arr4)
// console.log(arr5)


// .split(), string
// const phoneNumber = "010-9999-5555";
// console.log(phoneNumber.split("-"));

// .join(), array
// console.log(phoneNumber.split("-").join(""));

// .replace(), string (지정한 값을 원하는 형태로 바꾸어 보여줌)
// console.log(phoneNumber.replaceAll("9", "*"));

// .push(), array (기존 배열에 값을 마지막 인덱스 칸에 추가함)
// const arr = ["류재은", "홍길동", "장보고"]
// arr.push("마피아", "흰둥이", "대마왕")
// console.log(arr)

// .concat(), array
// 두개의 배열을 [새로운 배열] 로 리턴한다.
// const arr1 = ["짱구", "고길동"]
// const arr2 = ["철수", "영희"]
// const arr3 = arr1.concat(arr2);
// console.log(arr1);
// console.log(arr1.concat(arr2));

// 마지막의 인덱스에 있는 요소를 제거하고 그 값을 반환한다.
// .pop(), array
// const arr4 = [10, 20, 30, 40];
// console.log(arr4.pop());
// console.log(arr4)

// 맨 앞의 요소를 추가하는 메소드
// .unshift(), array
// const arr5 = [10, 20, 30, 40];
// arr5.unshift(200)
// console.log(arr5)

// 맨 앞의 요소를 제거하는 메소드
// .shift(), array
// console.log(arr5.shift());
// console.log(arr5)

// .slice(start, end), array
// start 인덱스부터 end 인덱스 까지 요소를 1depth 복사하여 새로운 배열을 반환한다.
// const arr6 = [10, 20, 30, 40, 50, 60 , 70, 80, 90, 100];
// console.log(arr6.slice(4, 7));
// console.log(arr6.slice(-4, -1));
//매개변수를 한개만 전달하면 끝까지 가져온다 (100)
// console.log(arr6.slice(-4));
// console.log(arr6.slice(4));


// .splice(startIndex, deleteCount), array
// 2번부터 3개 제거 및 수정
// const arr7 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// console.log(arr7.splice(2, 3));
// 수정(전 값 빼버리고 새 값으로 바꿔치기) (몇번째 인덱스, 몇번째 까지, 뭐로) (startIndex, deleteCount, ...pushIndex)
// console.log(arr7.splice(3, 1, 400));
// 추가
// console.log(arr7.splice(3, 1, 400, 400, 400, 400));
// console.log(arr7);


// 정렬
// .sort()
// const arr8 = [100, 20, 30, 40, 80, 90];
// console.log(arr8.sort((a, b) => a - b));
// .reverse() 로 반대로
// console.log(arr8.sort((a, b) => a - b).reverse());

// 포함
// .includes(), string, array
// console.log(arr8.includes(100)); // true

// .some(), array
// 조건식을 하나라도 만족하면 true
// console.log(arr8.some((data) => data % 2 == 0)); //true

// ----------------------------------------------------------
// 배열의 고차함수 (메서드)
const arr9 = [100, 200, 300, 400, 500, 600, 700];

// .forEach(callback(data, i, datas)) : 반복문
// 반복을 돌아서 각각 하나의 값에 접근하여 필요한 기능을 실행 시킬수 있다. 
// arr9.forEach((data, i, datas) => {
//   console.log(datas)
// });

// arr9.forEach((data, i, datas) => {
//   datas[i] += data*data;
//   // datas[i] *= datas[i];
// });

// console.log(arr9); //[10100,  40200, 90300, 160400, 250500, 360600,490700]


// .map(callback(data, i, datas))
// 값을 저장해서 [새로운 배열]로 리턴 한다.
// 반드시 리턴값이 있어야 한다.
const arr10 = arr9.map(data => data + 20);
console.log(arr10);

// .filter((data) => 조건식)
// 조건식이 true 인 값만 모아서 [새로운 배열] 로 리턴한다.
// 값이 바뀌지 않는다. 
// 반드시 리턴값이 있어야 한다.
// arr10.filter(data => data % 3 == 0).forEach(data => console.log(data)); //3 의 배수인 친구들만 나옴
arr10.filter(data => data % 3 == 0).forEach(console.log);
// 3개 고차함수중에 .forEach() 제일 마지막

// .indexOf
// .find
// .from
// .reduce
