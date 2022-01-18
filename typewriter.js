const sentence = "hello there from lighthouse labs";
const printChar = () => {
  for (let i = 0; i < sentence.length; i++) {
    setTimeout(() => {
      process.stdout.write(sentence[i]);
    }, i * 100);
  }
};

console.log(printChar());
