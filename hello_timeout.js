const timeOut = (words) => {
  words = words.split(" ");
  for (let i = 0; i < words.length; i++) {
    setTimeout(() => {
      console.log(words[i]);
    }, 1000 * i);
  }
};

timeOut("4311o th3r3 w0r1d");
