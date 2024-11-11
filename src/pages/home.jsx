import Navbar from "../components/navbar";
import EmailSVG from "../svg/email";
import GithubSVG from "../svg/github";
import TwitterSVG from "../svg/twitter";
import LocationSVG from "../svg/location";

import NavModal from "../components/navModal";
import { Fragment } from "react";

function Home({mobileNavMode, setMobileNavMode}) {
    return (
        <Fragment>
        <div className="flex flex-col">
            <Navbar setMobileNavMode={setMobileNavMode} />
            
            <div className="w-full p-4 flex flex-col md:flex-row">
                <div className="md:w-[25%] flex flex-col font-playfair">
                    <img src="/nishan_dp.jpg" className="h-52 w-52 rounded-full"></img>

                    <div className="flex flex-col ml-5 ">
                        <h3 className="font-oswald font-bold text-2xl mt-3">Nishan Poudel</h3>
                        <h4 className="my-3">Fullstack Web Developer</h4>

                        <p  className="flex flex-row mb-2">
                            <LocationSVG className="h-6 w-6 mr-1" />
                            <p className="hover:animate-bounce hover:text-xl hover:ml-2">Kathmandu, Nepal</p>
                        </p>

                        <a href="mailto:heyitsnishan2020@gmail.com" className="flex flex-row mb-2">
                            <EmailSVG className="h-6 w-6 mr-1" />
                            <p className="hover:animate-bounce hover:text-xl hover:ml-2">Email</p>
                        </a>

                        <a href="https://github.com/nsn39" className="flex flex-row mb-2">
                            <GithubSVG className="h-6 w-6 mr-1 " />
                            <p className="hover:animate-bounce hover:text-xl hover:ml-2">Github</p>
                        </a>

                        <a href="https://twitter.com/ooshaaan" className="flex flex-row mb-2">
                            <TwitterSVG className="h-6 w-6 mr-1 " />
                            <p className="hover:animate-bounce hover:text-xl hover:ml-2">Twitter</p>
                        </a>
                    </div>

                    
                </div>

                <div className="md:w-[50%] flex flex-col font-playfair text-slate-900">
                    <h2 className="mb-4">
                        Hi, I'm a software engineer from Kathmandu, Nepal. I graduated with a Bachelor's in Computer Engineering from Pulchowk Campus, Tribhuvan University in 2023. Since then, I've worked for several startups on roles related to Web Development and Machine Learning. 
                    </h2>

                    <h1 className="font-bold text-2xl mb-2">Interests and Experience</h1>

                    <h2 className="mb-4">
                        I started out as an Applied Machine Learning Intern at a startup where I continued working as a full-time engineer from May 2023 to May 2024. My main interests lie in Web Development and Machine Learning. As a Web Developer, I mainly work with technologies such as ReactJS, Tailwindcss, FastAPI, Django, Opensearch, Amazon Web Services(AWS), Postgresql, Docker, Nginx etc. As a Machine Learning Engineer, I've worked with many Large Language Models such as GPTs, Claude, Gemini to build applications based on them and conduct experiments for their usability as Conversational Agents. I've also worked with Computer Vision and Image Generative AI models such as Stable Diffusion, Dall-E and built applications based on them.
                    </h2>

                    <h2>
                        <span className="font-bold">Current:</span> I'm looking for gigs as a Full stack Web developer. If you'd like to see some of my Web Design and Development portfolio click on the 'Portfolio' section on the navigation bar and If you'd like to hire me please E-mail me or reach out to my Twitter DM.
                    </h2>
                </div>
            </div>

            <p className="flex justify-center font-oswald text-slate-700 text-xs mt-16 mb-4">© 2024 Nishan Poudel. Powered by React with Tailwind plugin.</p>
        </div>

        <NavModal isVisible={mobileNavMode} onClose={() => setMobileNavMode(false)} />
        </Fragment>
    );
};

export default Home;