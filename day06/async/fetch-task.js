
//zipcode 만가져오기
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    if(!response.ok){
      throw new Error(`response Error ${response.status}`)}
    return response.json()
  })
  .then((users) => {
    if(!users){
      throw new Error(`none result`)
    }
    return users.map((user) => user.address.zipcode)
  })
  .then(console.log)
  .catch(console.error)


  //ES* async await
  // const printZipcode = () => {
  //   const response = fetch("https://jsonplaceholder.typicode.com/users");
  //   return users;
  // }

  // printZipcode().then((response) => response.json()).then(console.log)

  const printZipcode = async() => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    return users;
  }

  printZipcode()
    .then(console.log)
    .then(console.error)