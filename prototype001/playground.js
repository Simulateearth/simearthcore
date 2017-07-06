console.log('hi');

let state = {
  'flies': 100,
  'birthRate': 1.02,
  'deathRate': 0.999
}
let states = [];
function archiveState(step, state) {
  states[step] = state;
}

function nextStep(step, state) {
  console.log(state);
  const newState = Object.assign({}, state);

  newState.flies *= newState.birthRate;
  
  console.log(newState);

  newState.flies *= newState.deathRate;

  archiveState(step, newState);

  step++;
  if(step < 100) {
    nextStep(step, newState);
  }
}

let step = 0;
nextStep(step, state);