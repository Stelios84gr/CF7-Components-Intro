import {useState, useEffect} from "react";

const OnlineStatus = () => {

    // navigator.onLine: boolean - returns whether app is online
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(() => {
        // updates state with latest online status
        const handler = () => setIsOnline(navigator.onLine);

        // in case throttling: offline doesn't work for some browsers
        // const pollingId: number = setInterval(handler, 5000);


        window.addEventListener("online", handler); // when the app goes online, it updates the state
        window.addEventListener("offline", handler);

        return () => {
            // clearInterval(pollingId);
            window.removeEventListener("online", handler);
            window.removeEventListener("offline", handler);
        };
    }, [])

    return (
        <>
            <div className={`text-white text-center mt-12 mx-4 p-4 rounded ${ isOnline ? "bg-green-500" : "bg-cf-dark-red"}`}>
                { isOnline ? "You are online!" : "You are offline!" }
            </div>
        </>
    )
}

export default OnlineStatus;