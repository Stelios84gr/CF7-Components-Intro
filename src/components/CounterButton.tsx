type ButtonProps = {
    onClick: () => void;
    disabled?: boolean; // optional - ?:αν δηλωθεί
    label: string;
    addClass?: string;
}

const CounterButton = ({onClick, disabled, label, addClass = "bg-black"}: ButtonProps) => {
    return (
        <>
            <button
                className={"disabled:bg-gray-600 text-white py-2 px-4 " + addClass}
                onClick={onClick}
                disabled={disabled}
            >
                {label}
            </button>
        </>
    )
}

export default CounterButton;