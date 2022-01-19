const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let name;
let favoriteActivity;
let listenActivity;
let favoriteMeal;
let thingToEat;
let favoriteSport;
let favoriteSuperPower;

let q1 = "What's your name? Nicknames are also acceptable :): ";
let q2 = "What's an activity you like doing?: ";
let q3 = "What do you listen to while doing that?: ";
let q4 = "Which meal is your favourite (eg: dinner, brunch, etc.): ";
let q5 = "What's your favourite thing to eat for that meal?: ";
let q6 = "Which sport is your absolute favourite?: ";
let q7 =
  "What is your superpower? In a few words, tell us what you are amazing at!: ";

rl.question(q1, (answer) => {
  name = answer;
  rl.prompt();
  rl.question(q2, (answer) => {
    favoriteActivity = answer;
    rl.prompt();
    rl.question(q3, (answer) => {
      listenActivity = answer;
      rl.prompt();
      rl.question(q4, (answer) => {
        favoriteMeal = answer;
        rl.prompt();
        rl.question(q5, (answer) => {
          thingToEat = answer;
          rl.prompt();
          rl.question(q6, (answer) => {
            favoriteSport = answer;
            rl.prompt();
            rl.question(q7, (answer) => {
              favoriteSuperPower = answer;
              console.log(
                `My name is ${name} my favorite activity is ${favoriteActivity}, while doing that i really like to listen ${listenActivity}. I love to eat ${favoriteMeal}, what i really love from that is ${thingToEat}. My absolute sports is ${favoriteSport}. I am really good at ${favoriteSuperPower}`
              );
              rl.close();
            });
          });
        });
      });
    });
  });
});
