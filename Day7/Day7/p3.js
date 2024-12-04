const fetchdata = new Promise((resolve, reject) => {
  let data = [
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "Ravi", age: 25 },
    { id: 3, name: "Rohan", age: 25 },
    { id: 4, name: "Ramesh", age: 25 },
  ];
  setTimeout(() => {
    resolve(data);
  }, 3000);
});

fetchdata
  .then((data) => {
    data.forEach((element) => {
      console.log(
        "Name is " +
          element.name +
          " Age is " +
          element.age +
          " Id is " +
          element.id
      );
    });
  })

  .catch((error) => console.log(error));
