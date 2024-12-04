const fetchdata = new Promise((resolve, reject) => {
  let data = [
    { id: 1, name: "rahul", age: 22 },
    { id: 2, name: "aditya", age: 23 },
    { id: 3, name: "shivaji", age: 24 },
    { id: 4, name: "kartik", age: 25 },
  ];
  setTimeout(() => {
    resolve(data);
  }, 3000);
});

fetchdata
  .then((data) => {
    data.forEach((element) => {
      console.log(
        " name is " +
          element.name +
          " age is " +
          element.age +
          " id is " +
          element.id
      );
    });
  })
  .catch((err) => console.log(err));
