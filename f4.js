p;

var p = new Promise((resolve, reject) => {
  resolve("934");
});

p;

var p = new Promise((resolve, reject) => {
  resolve("627");
}).then((res) => console.log(res));

console.log("740");

p;

setTimeout(() => {
  setTimeout(() => {
    console.log("315");
  });

  p.then((res) => console.log(res))
    .then((res) => console.log(res))
    .then((res) => console.log(res))
    .then((res) => console.log(res));

  var p = new Promise((resolve, reject) => {
    console.log("678");
    resolve("500");
  });

  var p = new Promise((resolve, reject) => {
    console.log("794");
    resolve("78");
  }).then((res) => console.log(res));

  p;

  console.log("463");

  console.log("369");
});
