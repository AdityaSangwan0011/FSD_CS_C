let greet = () => {
  console.log("Say Hello");
};
function processuserinput(callback) {
  let name = "john";
  callback(name);
}
processuserinput(greet);
