import Navbar from "../components/navbar";
import { Fragment } from "react";
import NavModal from "../components/navModal";

function Articles({mobileNavMode, setMobileNavMode}) {
    return (
        <Fragment>
        <div>
            <Navbar setMobileNavMode={setMobileNavMode} />
            <h2 className="flex mt-20 items-center justify-center text-2xl font-bold font-playfair">Page currently empty.</h2>
        </div>

        <NavModal isVisible={mobileNavMode} onClose={() => setMobileNavMode(false)} />
        </Fragment>
    );
};

export default Articles;