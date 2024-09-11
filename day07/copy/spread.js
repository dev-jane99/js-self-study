//spread (ES6)

const animals = {
  cat : "야옹이",
  dog : "누렁이",
  cow : "얼룩이",
  tiger : "어흥이",
}

// const animals2 = Object.assign({}, animals)
// animals2.camel = "낙둥이";

const animals2 = {...animals, camel : "낙둥이"};
animals2.cat = "네롱이"

console.log(animals);
console.log(animals2);

// const arr1 = [1, 2, 3]
// const arr2 = [4, 5, 6]
// const arr3 = [7, 8, 9]

// const arr4 = arr1 + arr2 + arr3;
//console.log(arr4.replaceAll(",", ""))
// const arr4 = [...arr1, ...arr2, ...arr3];
// console.log(arr4);


// --------------

//ES10 .flat(dep)
const arr5 = [[10, 20, 40], [10], [[50, 60], 10], 20, [[[30], 20], 10]];
// console.log(arr5.join().split(","))
console.log(arr5.flat(3))