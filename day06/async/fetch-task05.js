

// https://jsonplaceholder.typicode.com/users
// city를 가져와서
// 모두 대문자로 바꾸고
// 알파벳 중에 A의 개수를 세서 콘솔 출력
const getCountA = async() => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if(!response.ok) return;
    const users = await response.json();
    return users;
}

getCountA()
  .then((users) => users.map((user) => user.address.city.toUpperCase()))
  .then((cities) => cities.join("").split(""))
  .then((chars) => chars.filter((c) => c === "A"))
  .then((Alist) => Alist.length)
  // .then((AList) => {
  //   let count = 0;
  //   for(a in AList){
  //     count++
  //   }
  //   return count;
  // })
  .then(console.log)
  

  
// cities
//  .then((cities) => cities.

// const getEmail = async() => {
//   const response2 = await fetch("https://jsonplaceholder.typicode.com/comments");
//   if(!response2.ok) return;
//   const datas2 = await response2.json();
//   return datas2;
// }
// const emails = getEmail().then((datas2) => datas2.map(({email}) => email));
// emails
//   .then((emails) => emails.slice(0,10))
//   .then((emails) => emails.map((email) => email.split("@")[0]))
//   .then(console.log)
//   .catch(console.error)

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     if(!response.ok){
//       throw new Error(`response Error ${response.status}`)}
//     return response.json()
//   })
//   .then((users) => {
//     if(!users){
//       throw new Error(`none result`)
//     }
//     return users.map((user) => user.address.zipcode)
//   })
//   .then(console.log)
//   .catch(console.error)