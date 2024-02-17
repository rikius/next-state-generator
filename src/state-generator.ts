const stateGenerator = (
    stateDefinition: (string | number)[],
    currentState: (string | number)[],
    increaseState: number
): number[] => {
    const stateDefinitionSize = stateDefinition?.length;
    const output: number[] = [];

    for (let i = 0; i < stateDefinitionSize; i++) {
        const maxValue = parseInt(stateDefinition[i]?.toString(), 10);
        let singleItemState = parseInt(currentState[i]?.toString(), 10);

        if (
            isNaN(singleItemState) ||
            singleItemState >= maxValue ||
            singleItemState < 0
        ) {
            singleItemState = 0;
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

        output.push(nextState);
    }

    return output;
};

export default stateGenerator;
