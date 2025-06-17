import {Link} from "react-router";

const ExamplesSection = () => {
    return (
        <>
            <div className="bg-gray-200 py-24">
                <ul className="container mx-auto flex justify-center space-x-4">
                    <li><Link to="/examples/name-changer">Name Changer</Link></li>
                    <li><Link to="/examples/online-status">Online Status</Link></li>
                </ul>
            </div>
        </>
    )
}

export default ExamplesSection;