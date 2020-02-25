# Next and previous state generator.

state explanation:

* all negatives numbers and 0, 1 numbers are converted to 1 this means that we will have only one state
* 2 - will have two states 0 and 1.
* 3 - will have three states 0, 1 and 2 
* ..

Example we are having state definition: `3 2 6 8 30 0 1 15 9`

if current state is `0 0 0 0 0 0 0 0 0`
next state from current state wil be `1 0 0 0 0 0 0 0 0`

if current state is `0 0 0 0 0 0 0 0 0`
previous state will be `2 1 5 7 29 1 1 14 8`

if current state is `2 0 0 0 0 0 0 0 0`
next state will be `0 1 0 0 0 0 0 0`

if current state is `2 0 0 0 0 0 0 0 0`
previous state will be `1 0 0 0 0 0 0 0`

## code examples

### next state

```javascript
const stateInitializer = [3, 2, 6, 8, 30, 0, 1, 15, 9];
const currentState = [0, 0, 0, 0, 0, 0, 0, 0, 0];
const result = stateGenerator(stateInitializer, currentState, 1);
// result [1, 0, 0, 0, 0, 0, 0, 0, 0]
```

```javascript
const stateInitializer = [3, 2, 6, 8, 30, 0, 1, 15, 9];
const currentState = [2, 1, 5, 7, 29, 0, 0, 14, 8];
const result = stateGenerator(stateInitializer, currentState, 1);
// result [0, 0, 0, 0, 0, 0, 0, 0, 0]
```

### previous state

```javascript
const stateInitializer = [3, 2, 6, 8, 30, 0, 1, 15, 9];
const currentState = [0, 0, 0, 0, 0, 0, 0, 0, 0];
const result = stateGenerator(stateInitializer, currentState, -1);
// result [2, 1, 5, 7, 29, 0, 0, 14, 8]
```

```javascript
const stateInitializer = [3, 2, 6, 8, 30, 0, 1, 15, 9];
const currentState = [2, 1, 5, 7, 29, 0, 0, 14, 8];
const result = stateGenerator(stateInitializer, currentState, -1);
// result [1, 1, 5, 7, 29, 0, 0, 14, 8]
```
