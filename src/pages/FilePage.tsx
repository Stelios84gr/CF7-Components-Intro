import {useParams} from "react-router";

const FilePage = () => {

    const params = useParams();
    const filePath = params["*"];

    return (
        <>
            <h1>Document name: {filePath}</h1>
        </>
    )
}

export default FilePage;