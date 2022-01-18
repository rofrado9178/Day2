const args = process.argv.slice(2);

const timerBeep = (args) => {
  const sortArgs = args.sort((a, b) => a - b);
  const numbers = [];
  for (const num of sortArgs) {
    numbers.push(parseInt(num));
  }

  for (const num of numbers) {
    if (num > 0) {
      setTimeout(() => {
        process.stdout.write("\x07");
      }, num * 1000);
    }
  }
};

timerBeep(args);
