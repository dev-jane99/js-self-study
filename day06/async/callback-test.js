const DB = [];
// 회원가입 유저를 받아온다
// 그 다음 작업을 하기 위해 callback 함수를 받아온다

const register = (user) => {
  return saveDB(user, (user) => {
    return sendEmail(user, (user) => {
      return getResult(user);
    })
  })
}

const saveDB = (user, callback) => {
  DB.push(user);
  console.log(`save ${user.name} to DB`);
  return callback(user);
}

const sendEmail = (user, callback) => {
  console.log(`email to ${user.name}`);
  return callback(user);
}

const getResult = (user) => {
  return `success register ${user.name}`
}

const user = {
  name : "김세환",
  email : "codefuling@gmail.com"
}

const result = register(user);
console.log(result);