import {useEffect} from "react";
import AutoRedirectAdvanced from "../components/AutoRedirectAdvanced.tsx";


const AutoRedirectAdvancedPage = () => {
    useEffect(() => {
        document.title = "CF Auto Redirect Example";
    }, []);

    return (
        <>
            <AutoRedirectAdvanced/>
        </>
    )
};

export default AutoRedirectAdvancedPage;