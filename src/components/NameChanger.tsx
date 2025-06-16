import {useState, useEffect} from "react";

const NameChanger = () => {
    const [name, setName] = useState("");

    useEffect(() => {
        document.title = name ? `Hello, ${name}!` : "Hello, Stranger!"
    }, [name])  // function runs when dependency changes

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    return (
        <>
            <div className="w-full flex flex-col items-center mt-10">
                <h1 className="text-center text-xl pt-4">Hello, {name || "stranger"}</h1>
                <input
                    type="text"
                    value={name}
                    onChange={handleChange}
                    className="border px-4 py-2"
                />
            </div>
        </>
    )
}

export default NameChanger;