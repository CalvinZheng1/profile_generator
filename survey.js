const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);

rl.question('What is your Name?\n',  (name) => {
  console.log(`${name}`);
  
rl.question('What is your job?\n',  (job) => {
  console.log(`${job}`);

rl.question('What is your favorite music?\n',  (music) => {
  console.log(`${music}`);
  
rl.question("What's an activity you like doing?\n",  (activity) => {
  console.log(`${activity}`);

rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)\n",  (meal) => {
  console.log(`${meal}`);

rl.question("What's your favourite thing to eat for that meal?\n",  (favMeal) => {
  console.log(`${favMeal}`);

rl.question("Which sport is your absolute favourite?\n",  (sports) => {
  console.log(`${sports}`);

rl.question("What is your superpower? In a few words, tell us what you are amazing at!\n",  (superpower) => {
  console.log(`${superpower}`);

rl.close();
})
})
})
})
})
})
})
})
});
  