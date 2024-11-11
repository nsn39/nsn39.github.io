import Navbar from "../components/navbar";
import { Fragment } from "react";
import NavModal from "../components/navModal";

function Portfolio({mobileNavMode, setMobileNavMode}) {
    return (
        <Fragment>
        <div>
            <Navbar setMobileNavMode={setMobileNavMode} />
            <div className="flex flex-col">
                <h1 className="font-bold font-oswald text-3xl p-4 mb-3">
                    See some of the portfolio projects I've worked on.
                </h1>

                <div className="flex flex-col md:flex-row px-12">
                    <a href="https://twitter-clone-nishan.crabdance.com" target="_blank" rel="noreferrer">
                        <div className="flex flex-col p-2 border-2 border-slate-200 hover:border-sky-200 hover:shadow-2xl shadow-black rounded-xl cursor-pointer">
                            <img className="h-48 w-100" src="/twitter-clone-ss2.png"></img>
                            <p className="font-bold text-xl font-oswald border-t border-slate-300">Twitter clone full stack</p>
                            <p className="font-playfair text-slate-800">Made with React, FastAPI and Postgres.</p>
                        </div>
                    </a>
                </div>
            </div>
            <p className="flex justify-center font-oswald text-slate-700 text-xs mt-32 mb-4">© 2024 Nishan Poudel. Powered by React with Tailwind plugin.</p>
        </div>

        <NavModal isVisible={mobileNavMode} onClose={() => setMobileNavMode(false)} />
        </Fragment>
    );
};

export default Portfolio;