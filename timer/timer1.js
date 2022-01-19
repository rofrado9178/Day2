//array from user input
const args = process.argv.slice(2);
//function to do beep every second passed in array as long as its a number
const timerBeep = (args) => {
  //sort the number from the lowest to the biggest
  const sortArgs = args.sort((a, b) => a - b);
  //loop sortArgs and turn any string into number and assign to the new array
  const numbers = [];
  for (const num of sortArgs) {
    numbers.push(parseInt(num));
  }
  //loop through array of number and check if the number is positive number only
  //before call the beep for every second of element in array
  for (const num of numbers) {
    if (num > 0) {
      setTimeout(() => {
        process.stdout.write("\x07");
      }, num * 1000);
    }
  }
};

timerBeep(args);
