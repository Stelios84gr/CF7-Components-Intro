import {NavLink} from "react-router";

const ExamplesSection = () => {
    return (
        <>
            <div className="bg-gray-200 py-24">
                <ul className="container mx-auto flex justify-center space-x-4">
                    <li>
                        <NavLink
                            to="/examples/name-changer"
                            className={( {isActive}) =>
                            isActive ? "text-cf-dark-red underline underline-offset-5" : "text-cf-gray" }
                        >
                            Name Changer
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/examples/online-status"
                            className={( {isActive}) =>
                            isActive ? "text-cf-dark-red underline underline-offset-5" : "text-cf-gray" }
                        >
                            Online Status
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/examples/file/*"
                            className={( {isActive}) =>
                                isActive ? "text-cf-dark-red underline underline-offset-5" : "text-cf-gray" }
                        >
                            File Page
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/examples/auto-redirect"
                            className={( {isActive}) =>
                                isActive ? "text-cf-dark-red underline underline-offset-5" : "text-cf-gray" }
                        >
                            Auto-redirect Page
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/examples/auto-redirect-advanced"
                            className={( {isActive}) =>
                                isActive ? "text-cf-dark-red underline underline-offset-5" : "text-cf-gray" }
                        >
                            Auto-redirect Advanced Page
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default ExamplesSection;