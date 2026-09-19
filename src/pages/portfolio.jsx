import Navbar from "../components/navbar";
import { Fragment } from "react";
import NavModal from "../components/navModal";

function Portfolio({mobileNavMode, setMobileNavMode}) {
    const projects = [
        {
            name: "Mini Postgres",
            description:
                "A Toy implementation of Postgres database made using AI for educational purposes.",
            tech: ["Python"],
            github: "https://www.github.com/nsn39/mini-pg",
        },
        {
            name: "Online Bookshop",
            description:
                "A Fullstack implementation of an e-commerce store for Bookshop.",
            tech: ["ReactJS", "NextJS", "DjangoDRF", "Postgres", "Scrapy"],
            github: "https://www.github.com/nsn39/online-bookshop",
        },
        {
            name: "Twitter Clone",
            description:
                "A Fullstack implementation of minimal Twitter-like web application.",
            tech: ["ReactJS", "TailwindCSS", "FastAPI", "Postgres"],
            github: "https://www.github.com/nsn39/twitter-clone",
        },
        {
            name: "User Management Microservice",
            description:
                "A microservice that handles all the user logins, sessions and user data management.",
            tech: [
                "FastAPI",
                "Postgres",
                "RabbitMQ",
                "Neo4j",
                "Redis",
                "Prometheus",
                "Grafana",
            ],
            github: "https://www.github.com/nsn39/user-management-microservice",
        },
        {
            name: "MNIST Digits Classification",
            description:
                "Implementing MNIST Digits classification using Neural Networks from scratch in Octave.",
            tech: ["Octave"],
            github: "https://github.com/nsn39/mnist-digits",
        },
        {
            name: "Forest Roads Simulation",
            description:
                "Implementing 3D simulation visuals of forest scenes using OpenGL and C.",
            tech: ["OpenGL", "C"],
            github: "https://github.com/nsn39/forest-road-simulation",
        },
        {
            name: "Snake Game",
            description:
                "Recreating the classic Nokia's Snake Xenzia game using C++ and SDL.",
            tech: ["C++", "SDL Library", "Make"],
            github: "https://github.com/nsn39/snake-game",
        },
        {
            name: "Facial Recognition",
            description:
                "A rudimentary facial recognition and user-data saving pipeline built using Facenet model.",
            tech: ["OpenCV", "Python"],
            github: "https://github.com/nsn39/FaceRecognition",
        },
    ];

    return (
        <Fragment>
        <div>
            <Navbar setMobileNavMode={setMobileNavMode} />
            <div className="flex flex-col">
                <h1 className="font-bold font-oswald text-3xl p-4 mb-3 pl-8">
                    See some of the projects I've worked on.
                </h1>

            </div>

            <div>
                <div className="px-6 md:px-12 mt-4 mb-16">
                    <div className="font-oswald grid grid-cols-1 md:grid-cols-2 gap-5 max-w-6xl">
                        {projects.map((project) => (
                            <div
                                key={project.name}
                                className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg"
                            >
                                <div>
                                    <h3 className="font-oswald text-xl font-bold text-slate-800">
                                        {project.name}
                                    </h3>

                                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                                        {project.description}
                                    </p>

                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700 border border-sky-100"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mt-5 inline-flex w-fit items-center gap-2 rounded-lg bg-slate-800 px-3 py-2 text-xs font-medium text-white transition-colors hover:bg-sky-600"
                                >
                                    <svg
                                        className="h-4 w-4"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.776.418-1.305.762-1.605-2.665-.303-5.466-1.332-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 6.006 0c2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.624-5.48 5.921.43.372.823 1.103.823 2.222v3.293c0 .322.216.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z" />
                                    </svg>
                                    View on GitHub
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <p className="flex justify-center font-oswald text-slate-700 text-xs mt-32 mb-4">© 2024 Nishan Poudel. Powered by React with Tailwind plugin.</p>
        </div>

        <NavModal isVisible={mobileNavMode} onClose={() => setMobileNavMode(false)} />
        </Fragment>
    );
};

export default Portfolio;