new Promise((resolve, reject) => {
  resolve("OK");
}).then(
  (res) =>
    new Promise((resolve, reject) => {
      console.log("OK");
      resolve("OK");
    })
);
//comment
console.log("616");
//comment
console.log("180");
//comment
setTimeout(() => {
  new Promise((resolve, reject) => {
    resolve("OK");
  });
});

//>616
//> 180
//>OK
//MA: 15
//MI: 
