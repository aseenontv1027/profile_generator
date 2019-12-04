const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let inputData = [];

rl.question('What\'s your name? Nicknames are also acceptable :)\n', (answer) => {
    inputData.push(answer);
    console.log(`Your answer ${inputData}`);
    rl.question(`What's an activity you like doing?\n`, (answer) => {
      inputData.push(answer);
      console.log(`Your answer ${inputData}`);
      rl.question(`What do you listen to while doing that?\n`, (answer) => {
        inputData.push(answer);
        rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.)\n`, (answer) => {
          inputData.push(answer);
          rl.question(`What's your favourite thing to eat for that meal?\n`, (answer) => {
            inputData.push(answer);
            rl.question(`Which sport is your absolute favourite\n`, (answer) => {
              inputData.push(answer);
              rl.question(`What is your superpower? In a few words, tell us what you are amazing at!\n`, (answer) => {
                inputData.push(answer);

                console.log(`${inputData[0]} loves listening to ${inputData[2]} while ${inputData[1]}, devouring ${inputData[4]} for ${inputData[3]}, prefers ${inputData[5]} over any other sport, and is amazing at ${inputData[6]}.`);
                rl.close();
              });
            });
          });
        });
      });
    });
});