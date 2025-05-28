import {useState} from "react";

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

    return {
        count,
        increase,
        decrease,
        reset
    }

}