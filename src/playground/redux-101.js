import { createStore } from 'redux';

// Action generators

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
}); 

const decrementBy = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const resetCount = () => ({
    type: 'RESET',
    count: 0
})

const setCount = ({ count } = {}) => ({
    type: 'SET',
    count
});

// Reducers
// 1. Results depend entirely on input. Doesn't use anything or change anything outside of the function scope
// 2. Never change state or action - read of both inputs - return a new object

const countReducer = ((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return {
                count: action.count
            }
        case 'SET':
            return {
                count: action.count
            }
        default:
            return state;
    }
});

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 17}));
store.dispatch(incrementCount({ }));
store.dispatch(incrementCount());


store.dispatch(resetCount());

store.dispatch(decrementBy({ decrementBy: 6 }));
store.dispatch(decrementBy());

store.dispatch(setCount({ count: 333 }));