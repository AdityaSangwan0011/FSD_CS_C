let greet = () => {
  console.log("say hello");
};

function processuserinput(callback) {
  let name = "john";
  callback(name);
}

processuserinput(greet);
