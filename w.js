 var p = new Promise((resolve, reject) => {
  resolve("622");
}).catch((res) => console.log(res));

Promise.reject("ERR").then((res) => {
  console.log(res);
  return new Promise((resolve, reject) => {
    console.log("787");
    resolve("284");
  });
});

p.then((res) => {
  console.log(res);
  return new Promise((resolve, reject) => {
    console.log("813");
    resolve("635");
  });
});

var p = new Promise((resolve, reject) => {
  console.log("268");
  resolve("372");
});

Promise.reject("ERR");
