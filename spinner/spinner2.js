const spinner = (char, time) => {
  for (let i = 0; i < char.length; i++) {
    setTimeout(() => {
      process.stdout.write(char[i]);
    }, i * time);
  }
};
const array = [
  "\r|  ",
  "\r/  ",
  "\r-  ",
  "\r\\  ",
  "\r|  ",
  "\r/  ",
  "\r-  ",
  "\r\\  ",
  "\r|  ",
  "\r|  ",
];
spinner(array, 200);
