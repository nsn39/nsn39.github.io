import { NavLink } from "react-router-dom";

function NavModal({isVisible, onClose}) {
    if (!isVisible) {
        return null;
    }

    const handleClose = (e) => {
        if (e.target.id == "wrapper") onClose();
    }

    let isLinkActive = ({ isActive }) => {
        let baseClass = "text-2xl "
        return isActive ? baseClass + "font-bold" : baseClass + "";
    };

    return (
        <div onClick={handleClose} id="wrapper" className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex flex-col">
            <div className="w-[75%] h-screen bg-white flex flex-col p-4 font-oswald">
                <div className="flex md:p-8 hover:bg-gray-100 py-2">
                    <a href="/" className="text-2xl">Home</a>
                </div>
                
                <div className="flex md:p-8 hover:bg-gray-100 py-2">
                    <a href="/portfolio" className="text-2xl">Portfolio</a>
                </div>
                
                <div className="flex md:p-8 hover:bg-gray-100 py-2"> 
                    <a href="/CV.pdf" className="text-2xl">Resume</a>
                </div>
                
                <div className="flex md:p-8 hover:bg-gray-100 py-2">
                    <a href="/articles" className="text-2xl">Articles</a>
                </div>
                
                <div className="flex md:p-8 hover:bg-gray-100 py-2">
                    <a href="/publications"  className="text-2xl">Publications</a>
                </div>
            </div>
        </div>
    );
};

export default NavModal;