
const stateGenerator = (
    stateDefinition, 
    currentState, 
    increaseState, 
    currentIndex = 0, 
    stateDefinitionSize = stateDefinition.length - 1, 
    output = []
  ) => {

  if ( currentIndex > stateDefinitionSize) {
    return output;
  }

  const maxValue = stateDefinition[currentIndex];
  let singleItemState = parseInt(currentState[currentIndex], 10) || 0;

  if (singleItemState >= maxValue || singleItemState < 0) {
    singleItemState = 0;
  }

  if (!increaseState) {
    return stateGenerator(
      stateDefinition, 
      currentState, 
      increaseState, 
      currentIndex + 1, 
      stateDefinitionSize, 
      output.concat(singleItemState.toString())
    );
  }

  let nextState = singleItemState + increaseState;

  if (nextState >= 0 && nextState < maxValue) {
      increaseState = 0; // next state is not needed to increase/descrease
  }

  if (nextState >= maxValue || maxValue < 2) {
    nextState = 0;
  }
  
  if (nextState < 0) {
    nextState = maxValue - 1;
  }

  return stateGenerator(
    stateDefinition, 
    currentState, 
    increaseState, 
    currentIndex + 1, 
    stateDefinitionSize, 
    output.concat(nextState.toString())
  );
};

export default stateGenerator;