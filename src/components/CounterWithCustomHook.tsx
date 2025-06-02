import CounterButton from "./CounterButton.tsx";
import {useCounter} from "../hooks/useCounter.ts";
// import {useAdvancedCounter} from "../hooks/useAdvancedCounter.ts";

const CounterWithCustomHook = () => {

    // custom hook function
    const { count, increase, decrease, reset } = useCounter();

    // advanced alternative
    // const { count, increase, decrease, reset, lastAction, time } = useAdvancedCounter();

    return (
        <>
            <div className="space-y-4 text-2xl pt-12">
                <h1 className="text-center">Count is {count}</h1>
                <div className="text-center space-x-4">
                    <CounterButton onClick={increase} label="Increase"/>
                    <CounterButton onClick={decrease} disabled={count === 0} label="Decrease"/>
                    <CounterButton onClick={reset} disabled={count === 0} label="Reset"
                                   addClass="bg-cf-dark-red"/>
                </div>
            </div>
            {/*with advanced hook*/}
            {/*<p>Last change: <strong>{lastAction} at {time}</strong></p>*/}
        </>
    )
}

export default CounterWithCustomHook;