// javascript의 try-catch 문은 동기적으로 작동한다
// setTimeout() : 몇초뒤에 시작 비동기
// setInterval() : 몇초마다 시작 비동기
// try{
//   setTimeout(() => {
//     ABCD;
//   }, 2000)
//   setInterval()
  
// }catch(e){
 // // console.log(e.name)
 // // console.log(e.message)
// // console.log(e.stack)
//   console.log("잘못된 값을 입력!🥲")
// }finally{

// }

setTimeout(() =>{
  try{
    ABC;
  }catch (error){
    console.log("잘못된입력")
  }
}, 2000)