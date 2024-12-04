const myPromise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Data Send Successfully");
  } else {
    reject("Data Not Send");
  }
});

myPromise
  .then((message) => console.log(message))
  .catch((error) => console.log(error));
