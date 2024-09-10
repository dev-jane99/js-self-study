//promise ES6
const promise = new Promise(function(resolve, reject){
  let check = false;
  if(check){
    resolve("성공");
  }else{
    reject("실패")
  }
})

// promise.then((result) => {console.log(result)})
promise.then(console.log).catch(console.log);