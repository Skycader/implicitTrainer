setTimeout(() => {
  Promise.resolve(48)
    .then((res) => console.log(res))
    .finally((res) => {
      console.log(res);
      return 142;
    });
});

console.log("498");
