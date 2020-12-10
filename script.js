 
const random =    // Create random number

const getRandEvent = () => {
  // return 'Marathon' or 'Triathlon' or 'Pentathlon' randomly;

};

// The scope of `days` is too tight 
const getTrainingDays = condition => {

// decide the day according to the condition, write a conditional;

return days;
};

const logEvent = condition => {
  const name = 'Nala';
  console.log(`${name}'s condition is: ${condition}`);
};

const logTime = days => {
  const name = 'Nala';
  console.log(`${name}'s time to train is: ${days} days`);
};

const condition = getRandEvent();
const days = getTrainingDays(condition);


logEvent(condition);
logTime(days);
