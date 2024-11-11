import { NavLink } from "react-router-dom";
import MenuSVG from "../svg/menu";

function Navbar({setMobileNavMode}) {

    const onMenuClick = () => {
        setMobileNavMode(true);
    }

    let isLinkActive = ({ isActive }) => {
        let baseClass = "text-2xl "
        return isActive ? baseClass + "font-bold" : baseClass + "";
    };

    return (
        <div className="flex flex-col font-[Oswald] text-slate-700">
            <div className="w-full flex flex-col md:flex-row md:justify-around">
                <div className="flex flex-row md:items-center md:justify-center p-2">
                    <div onClick={onMenuClick} className="h-8 w-8 hover:bg-gray-200 flex md:hidden p-1 border-[0.5px] border-gray-300 rounded-lg cursor-pointer">
                        <MenuSVG className="h-6 w-6" />
                    </div>

                    <h2 className="text-2xl flex md:items-center ml-5 md:ml-0 md:justify-center">Nishan's Website</h2>
                </div>         
                
                <div className="hidden md:flex md:p-8 hover:bg-gray-100">
                    <NavLink to="/" className={isLinkActive}>Home</NavLink>
                </div>
                
                <div className="hidden md:flex md:p-8 hover:bg-gray-100">
                    <NavLink to="/portfolio" className={isLinkActive}>Portfolio</NavLink>
                </div>
                
                <div className="hidden md:flex md:p-8 hover:bg-gray-100"> 
                    <a href="/CV.pdf" className="text-2xl">Resume</a>
                </div>
                
                <div className="hidden md:flex md:p-8 hover:bg-gray-100">
                    <NavLink to="/articles" className={isLinkActive}>Articles</NavLink>
                </div>
                
                <div className="hidden md:flex md:p-8 hover:bg-gray-100">
                    <NavLink to="/publications"  className={isLinkActive}>Publications</NavLink>
                </div>
            </div>

            <div className="h-2 bg-red-600"></div>
            <div className="h-8 bg-black"></div>
        </div>
    );
}

export default Navbar;