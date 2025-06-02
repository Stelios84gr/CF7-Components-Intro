import {useState} from "react";

// directly exported from the get-go
// props, not direct values, so it can be reused with different initial values, e.g., useCounter(5)
export const useCounter = (initialValue: number = 0) => {

    const [count, setCount] = useState(initialValue);

    const increase = () => {
        setCount(count + 1);
    }

    const decrease = () => {
        if (count > 0) {
        setCount(count - 1);
    }
    }

    const reset = () => {
        setCount(initialValue); // μιας και initialValue = 0
    }

    // JSX not returned
    return {
        count,
        increase,
        decrease,
        reset
    }
}