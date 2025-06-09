import {useState, useEffect} from "react";

const NameChanger = () => {
    const [name, setName] = useState("");

    useEffect(() => {
        document.title = name ? `Hello, ${name}!` : "Hello, Stranger!"
    }, [name])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);    // input field content
    }

    return (
        <>
            <h1 className="text-center text-xl pt-4">Hello, {name || "stranger"}</h1>
            <input
                type="text"
                value={name}
                onChange={handleChange}
                className="border px-4 py-2"
            />
        </>
    )
}

export default NameChanger;