const stateGenerator = (
    stateDefinition: (string | number)[],
    currentState: (string | number)[],
    increaseState: number,
    currentIndex = 0,
    stateDefinitionSize = stateDefinition.length - 1,
    output: number[] = []
): number[] => {
    if (currentIndex > stateDefinitionSize) {
        return output;
    }

    const maxValue = parseInt(stateDefinition[currentIndex].toString(), 10) || 0;
    let singleItemState = parseInt(currentState[currentIndex].toString(), 10) || 0;

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
            [...output, singleItemState]
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
        [...output, nextState]
    );
};

export default stateGenerator;
