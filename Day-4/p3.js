const myPromise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("data send sucessfully");
  } else {
    reject("data not send");
  }
});

myPromise
  .then((message) => console.log(message))
  .catch((err) => console.log(err));
