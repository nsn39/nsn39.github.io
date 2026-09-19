import Navbar from "../components/navbar";
import { Fragment } from "react";
import NavModal from "../components/navModal";

function InterestsAndExperience({ mobileNavMode, setMobileNavMode }) {
    return (
        <Fragment>
            <div className="min-h-screen bg-white text-gray-900">
                <Navbar setMobileNavMode={setMobileNavMode} />

                <main className="max-w-6xl mx-auto px-6 md:px-10 pb-12 pt-16">

                    {/* ================= HEADER ================= */}
                    <section className="mb-12">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-1 bg-red-600"></div>

                            <span className="uppercase tracking-[0.25em] text-xs font-semibold text-gray-500">
                                About me
                            </span>
                        </div>

                        <div className="mt-5 max-w-3xl">
                            <p className="text-lg md:text-xl text-gray-500 leading-relaxed">
                                Software engineer, computer science student,
                                machine learning enthusiast, and an unapologetic
                                cinephile.
                            </p>
                        </div>

                        <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-400">
                            <span>Fargo, North Dakota</span>
                            <span>•</span>
                            <span>Computer Science</span>
                            <span>•</span>
                            <span>Machine Learning</span>
                            <span>•</span>
                            <span>Web Development</span>
                        </div>
                    </section>


                    {/* ================= EDUCATION ================= */}
                    <section className="mb-20">

                        <div className="flex items-end justify-between mb-7">
                            <div>
                                <p className="text-red-600 font-semibold text-xs tracking-widest mb-1">
                                    01
                                </p>

                                <h2 className="font-playfair text-2xl md:text-3xl font-bold">
                                    Education
                                </h2>
                            </div>

                            <span className="hidden md:block text-gray-200 text-5xl font-playfair">
                                01
                            </span>
                        </div>


                        <div className="space-y-4">

                            {/* Bachelor's */}
                            <div className="group border border-gray-200 hover:border-red-300 transition-all duration-300 p-5 md:p-6 relative overflow-hidden">

                                <div className="absolute left-0 top-0 w-1 h-full bg-red-600"></div>

                                <div className="grid md:grid-cols-[150px_1fr] gap-4">

                                    <div>
                                        <p className="text-red-600 font-semibold text-sm">
                                            2018 — 2023
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="font-playfair text-xl md:text-2xl font-bold mb-1">
                                            Bachelor's in Computer Engineering
                                        </h3>

                                        <p className="text-gray-500 text-sm mb-3">
                                            Pulchowk Campus · Institute of Engineering
                                            <br />
                                            Tribhuvan University
                                        </p>

                                        <p className="text-gray-600 text-sm leading-relaxed max-w-2xl">
                                            My undergraduate journey into computer
                                            engineering, where I built the foundations
                                            in software development, algorithms,
                                            databases, computer systems, and artificial
                                            intelligence.
                                        </p>
                                    </div>

                                </div>
                            </div>


                            {/* Master's */}
                            <div className="group border border-gray-200 hover:border-red-300 transition-all duration-300 p-5 md:p-6 relative overflow-hidden">

                                <div className="absolute left-0 top-0 w-1 h-full bg-red-600"></div>

                                <div className="grid md:grid-cols-[150px_1fr] gap-4">

                                    <div>
                                        <p className="text-red-600 font-semibold text-sm">
                                            2026 — Present
                                        </p>

                                        <p className="text-xs text-gray-400 mt-1">
                                            CURRENT
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="font-playfair text-xl md:text-2xl font-bold mb-1">
                                            Master's in Computer Science
                                        </h3>

                                        <p className="text-gray-500 text-sm mb-3">
                                            North Dakota State University
                                        </p>

                                        <p className="text-gray-600 text-sm leading-relaxed max-w-2xl">
                                            Currently exploring computer science at a
                                            deeper level, with particular interest in
                                            systems, machine learning, computer vision,
                                            and natural language processing.
                                        </p>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </section>


                    {/* ================= WORK ================= */}
                    <section className="mb-20">

                        <div className="flex items-end justify-between mb-7">
                            <div>
                                <p className="text-red-600 font-semibold text-xs tracking-widest mb-1">
                                    02
                                </p>

                                <h2 className="font-playfair text-2xl md:text-3xl font-bold">
                                    Work Experience
                                </h2>
                            </div>

                            <span className="hidden md:block text-gray-200 text-5xl font-playfair">
                                02
                            </span>
                        </div>


                        <div className="relative">

                            {/* Timeline */}
                            <div className="absolute left-[6px] top-3 bottom-3 w-px bg-gray-200"></div>


                            {/* Naamche */}
                            <div className="relative pl-8 pb-10">

                                <div className="absolute left-0 top-1 w-[13px] h-[13px] rounded-full bg-red-600 ring-4 ring-red-50"></div>

                                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-2">
                                    <h3 className="font-playfair text-xl md:text-2xl font-bold">
                                        Applied ML Engineer
                                    </h3>

                                    <span className="text-xs text-gray-400">
                                        Jan 2023 — May 2024
                                    </span>
                                </div>

                                <p className="text-red-600 text-sm font-medium mb-2">
                                    Naamche <span className="text-gray-400">(reAlpha)</span>
                                </p>

                                <p className="text-gray-600 text-sm leading-relaxed max-w-3xl">
                                    Worked on real-estate based applications as an
                                    Applied Machine Learning Engineer, working with
                                    real-estate data and applying machine learning
                                    techniques to practical product problems.
                                </p>

                            </div>


                            {/* Ghostleads */}
                            <div className="relative pl-8 pb-10">

                                <div className="absolute left-0 top-1 w-[13px] h-[13px] rounded-full bg-red-600 ring-4 ring-red-50"></div>

                                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-2">
                                    <h3 className="font-playfair text-xl md:text-2xl font-bold">
                                        Full Stack Python Engineer
                                    </h3>

                                    <span className="text-xs text-gray-400">
                                        Jul 2024 — Jun 2026
                                    </span>
                                </div>

                                <p className="text-red-600 text-sm font-medium mb-2">
                                    Ghostleads
                                </p>

                                <p className="text-gray-600 text-sm leading-relaxed max-w-3xl">
                                    Built full-stack applications and backend systems
                                    for marketing technology, customer data analysis,
                                    and Agentic AI platforms. My work spanned both
                                    product development and the integration of
                                    AI-driven functionality into web applications.
                                </p>

                            </div>


                            {/* NDSU */}
                            <div className="relative pl-8">

                                <div className="absolute left-0 top-1 w-[13px] h-[13px] rounded-full bg-red-600 ring-4 ring-red-50"></div>

                                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-2">
                                    <h3 className="font-playfair text-xl md:text-2xl font-bold">
                                        Teaching Assistant
                                    </h3>

                                    <span className="text-xs text-gray-400">
                                        2026 — Present
                                    </span>
                                </div>

                                <p className="text-red-600 text-sm font-medium mb-2">
                                    North Dakota State University
                                </p>

                                <p className="text-gray-600 text-sm leading-relaxed max-w-3xl">
                                    Working as a Teaching Assistant for the Department
                                    of Computer Science alongside my Master's studies.
                                </p>

                            </div>

                        </div>
                    </section>


                    {/* ================= TECH ================= */}
                    <section className="mb-20">

                        <div className="flex items-end justify-between mb-7">
                            <div>
                                <p className="text-red-600 font-semibold text-xs tracking-widest mb-1">
                                    03
                                </p>

                                <h2 className="font-playfair text-2xl md:text-3xl font-bold">
                                    What I Work With
                                </h2>
                            </div>

                            <span className="hidden md:block text-gray-200 text-5xl font-playfair">
                                03
                            </span>
                        </div>


                        <div className="grid md:grid-cols-2 gap-4">

                            {/* Web */}
                            <div className="bg-gray-50 border border-gray-100 p-6 md:p-7">

                                <span className="text-red-600 text-xs font-semibold">
                                    01 / WEB
                                </span>

                                <h3 className="font-playfair text-2xl font-bold mt-3 mb-3">
                                    Web Development
                                </h3>

                                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                                    I mainly work on backend and full-stack web
                                    applications. My backend work is centered around
                                    Python technologies, while on the frontend I
                                    primarily work with React and TypeScript.
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {[
                                        "Python",
                                        "FastAPI",
                                        "Django",
                                        "React",
                                        "TypeScript",
                                    ].map((item) => (
                                        <span
                                            key={item}
                                            className="bg-white border border-gray-200 px-3 py-1 text-xs"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>


                            {/* ML */}
                            <div className="bg-gray-900 text-white p-6 md:p-7">

                                <span className="text-red-500 text-xs font-semibold">
                                    02 / ML
                                </span>

                                <h3 className="font-playfair text-2xl font-bold mt-3 mb-3">
                                    Machine Learning
                                </h3>

                                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                                    My ML experience has mostly been focused on
                                    building practical applications, from data
                                    engineering and LLM inference to RAG systems
                                    and speech technologies.
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {[
                                        "Data Engineering",
                                        "LLM Inference",
                                        "RAG",
                                        "Chatbots",
                                        "Text-to-Speech",
                                    ].map((item) => (
                                        <span
                                            key={item}
                                            className="border border-gray-700 px-3 py-1 text-xs text-gray-300"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>

                        </div>


                        <div className="mt-4 border-l-4 border-red-600 pl-5 py-2">
                            <p className="text-gray-600 text-sm leading-relaxed max-w-3xl">
                                <span className="font-semibold text-gray-900">
                                    Next up:
                                </span>{" "}
                                I want to explore system development and system
                                design more deeply, while diving further into
                                computer vision and natural language processing.
                            </p>
                        </div>

                    </section>


                    {/* ================= PERSONAL INTERESTS ================= */}
                    <section>

                        <div className="flex items-end justify-between mb-7">
                            <div>
                                <p className="text-red-600 font-semibold text-xs tracking-widest mb-1">
                                    04
                                </p>

                                <h2 className="font-playfair text-2xl md:text-3xl font-bold">
                                    Beyond Code
                                </h2>
                            </div>

                            <span className="hidden md:block text-gray-200 text-5xl font-playfair">
                                04
                            </span>
                        </div>


                        {/* Cinema */}
                        <div className="border-t-2 border-gray-900 pt-6 pb-10">

                            <div className="grid md:grid-cols-[150px_1fr] gap-6">

                                <div>
                                    <p className="text-red-600 font-semibold text-xs tracking-widest">
                                        CINEMA
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-3">
                                        A cinephile at heart
                                        <span className="text-red-600">.</span>
                                    </h3>

                                    <p className="text-gray-600 text-sm leading-relaxed max-w-3xl mb-5">
                                        I am a cinephile and love films that leave
                                        something to think about long after the credits.
                                        Some of my favorite directors are Satyajit Ray,
                                        Christopher Nolan, Stanley Kubrick, Martin
                                        Scorsese, Andrei Tarkovsky, Quentin Tarantino,
                                        and Akira Kurosawa.
                                    </p>

                                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-2">
                                        {[
                                            "Aranyer Din Ratri",
                                            "Interstellar",
                                            "Manchester By The Sea",
                                            "The Lunchbox",
                                        ].map((movie) => (
                                            <div
                                                key={movie}
                                                className="bg-gray-50 border border-gray-200 p-3 text-xs font-medium"
                                            >
                                                {movie}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </div>


                        {/* Music */}
                        <div className="border-t border-gray-200 pt-6 pb-10">

                            <div className="grid md:grid-cols-[150px_1fr] gap-6">

                                <div>
                                    <p className="text-red-600 font-semibold text-xs tracking-widest">
                                        MUSIC
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-3">
                                        An eclectic playlist
                                        <span className="text-red-600">.</span>
                                    </h3>

                                    <p className="text-gray-600 text-sm leading-relaxed max-w-3xl mb-5">
                                        My music taste is all over the place. From
                                        Pink Floyd and Iron Maiden to Kanye West,
                                        Ghulam Ali, Mehdi Hasan, Asha Bhosle, Bipul
                                        Chhetri, ABBA, and Cigarettes After Sex.
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {[
                                            "Kanye West",
                                            "Pink Floyd",
                                            "Ghulam Ali",
                                            "Mehdi Hasan",
                                            "Iron Maiden",
                                            "Asha Bhosle",
                                            "Bipul Chhetri",
                                            "ABBA",
                                            "Cigarettes After Sex",
                                        ].map((artist) => (
                                            <span
                                                key={artist}
                                                className="border border-gray-300 px-3 py-1.5 text-xs text-gray-600 hover:border-red-500 hover:text-red-600 transition"
                                            >
                                                {artist}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </div>


                        {/* Books */}
                        <div className="border-t border-gray-200 pt-6">

                            <div className="grid md:grid-cols-[150px_1fr] gap-6">

                                <div>
                                    <p className="text-red-600 font-semibold text-xs tracking-widest">
                                        BOOKS
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-3">
                                        Stories & ideas
                                        <span className="text-red-600">.</span>
                                    </h3>

                                    <p className="text-gray-600 text-sm leading-relaxed max-w-3xl mb-5">
                                        Here are some of my favorite novels I've read
                                        in the past.
                                    </p>

                                    <div className="space-y-0 border-t border-gray-200">
                                        {[
                                            "Wuthering Heights",
                                            "A Song of Ice and Fire",
                                            "Kafka on the Shore",
                                            "Project Hail Mary",
                                            "The Picture of Dorian Gray",
                                        ].map((book, index) => (
                                            <div
                                                key={book}
                                                className="flex items-center gap-4 py-3 border-b border-gray-200"
                                            >
                                                <span className="text-red-600 font-mono text-xs">
                                                    0{index + 1}
                                                </span>

                                                <span className="font-playfair text-base">
                                                    {book}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            </div>

                        </div>

                    </section>

                </main>
            </div>

            <NavModal
                isVisible={mobileNavMode}
                onClose={() => setMobileNavMode(false)}
            />
        </Fragment>
    );
}

export default InterestsAndExperience;