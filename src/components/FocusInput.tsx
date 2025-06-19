import {useRef} from "react";

const FocusInput = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        inputRef.current?.focus();
    };
    
    return (
        <>
            <div className="text-center space-x-4 mt-4">
                <input
                    ref={inputRef}  // declares that this is the reference element
                    type="text" className="border px-4 py-2 rounded"/>
                <button
                    onFocus={handleClick}
                    className="bg-cf-dark-gray text-white px-4 py-2 rounded">
                    Focus Input
                </button>
            </div>
        </>
    )
};

export default FocusInput;