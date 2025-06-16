import CodingFactoryLogo from "./CodingFactoryLogo.tsx";
import {Link} from "react-router";

const Header = () => {
    return (
        <>
            <header className="bg-[#782024] fixed w-full">
                <div className="container mx-auto px-4 flex items-center justify-between">
                    <CodingFactoryLogo/>
                    <nav className="flex gap-4">
                        {/*<a className="text-white hover:underline hover:underline-offset-4" href="/">Home</a>*/}
                        {/*in order for the page to not reload*/}
                        <Link className="text-white hover:underline hover:underline-offset-4" to="/">Home</Link>
                        <Link className="text-white hover:underline hover:underline-offset-4" to="/examples/name-changer">Name Changer</Link>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header;