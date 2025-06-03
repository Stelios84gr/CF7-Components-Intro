import { useReducer } from 'react';

type CounterState ={
    count: number;
    lastAction: string;
    time: string;
}

type Action =
    | {type: "INCREASE"}
    | {type: "DECREASE"}
    | {type: "RESET"};

const initialState: CounterState = {
    count: 0,
    lastAction: "",
    time: "",
}

const getCurrentTime = () => new Date().toLocaleTimeString();

// takes state and action for parameters
// 2nd CounterState refers to return; if return was different, another type would have to be declared above
function reducer(state:CounterState, action:Action): CounterState {
    switch (action.type) {
        case "INCREASE":
            return {
                count: state.count + 1,
                lastAction: "Increase",
                time: getCurrentTime(),
            };
        case "DECREASE":
            return state.count > 0
                ? {
                    count: state.count - 1,
                    lastAction: "Decrease",
                    time: getCurrentTime(),
                }
                : state;
        case "RESET":
            return {
                count: 0,
                lastAction: "Reset",
                time: getCurrentTime(),
            };
        default:
            return state;
    }
}

export const useCounterWithReducer = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const increase = () => dispatch({type: "INCREASE"});
    const decrease = () => dispatch({type: "DECREASE"});
    const reset = () => dispatch({type: "RESET"});

    // state refers to the state of the case used
    return {
        count: state.count,
        lastAction: state.lastAction,
        time: state.time,
        increase,
        decrease,
        reset,
    };
};

