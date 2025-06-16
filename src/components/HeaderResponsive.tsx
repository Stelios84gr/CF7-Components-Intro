import CodingFactoryLogo from "./CodingFactoryLogo.tsx";
import {Link} from "react-router";
import {useState} from "react";
import {Menu, X} from "lucide-react";

const HeaderResponsive = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <>
            <header className="bg-[#782024] fixed w-full">
                <div className="container mx-auto px-4 flex items-center justify-between">
                    <CodingFactoryLogo/>

                    <button
                        className="text-white md:hidden"    // md:hidden below a certain page width display:none
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <X size={36}/> : <Menu size={36}/>}

                    </button>


                    <nav
                        // className="flex gap-4"
                        className={`${
                            menuOpen ? "block" : "hidden"
                            } md:flex gap-4 bg-cf-dark-red text-white absolute top-24 left-0 w-full md:w-auto md:static p-4 md:p-0
                            `}
                    >
                        {/*<a className="text-white hover:underline hover:underline-offset-4" href="/">Home</a>*/}
                        {/*in order for the page to not reload*/}
                        <Link
                            className="block md-inline hover:underline hover:underline-offset-4"
                            to="/"
                            onClick={() => setMenuOpen(false)}  // so that hamburger appears again
                        >Home</Link>
                        <Link
                            className="block md-inline hover:underline hover:underline-offset-4"
                            to="/examples/name-changer"
                            onClick={() => setMenuOpen(false)}
                        >Name Changer</Link>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default HeaderResponsive;