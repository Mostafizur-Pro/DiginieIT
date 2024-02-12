"use client";

import useGetProjects from "@/components/Hook/useGetProjects";
import Image from "next/image";

const Projects = () => {
    const { projects, loading, error } = useGetProjects();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    console.log(projects);

    return (
        <section className="container mx-auto lg:px-16 px-4 py-32">
            <h2 className="2xl:text-6xl xl:text-4xl text-2xl  font-light">
                Our Latest Creations
            </h2>
            <div className="my-10">
                {projects.map((project, idx) => (
                    <div
                        className="flex border justify-between gap-16 items-center mt-10 ps-16"
                        key={idx}
                    >
                        <div className=" border-white/30 flex gap-10 items-center">
                            <h2 className="text-8xl font-semibold opacity-40">
                                0{project.id}
                            </h2>
                            <div className="">
                                <h2 className="text-2xl font-semibold">
                                    {project.name}
                                </h2>
                                <h2 className="text-sm opacity-60 pt-3">
                                    {project.details}
                                </h2>
                                <div className="mt-4">
                                    {project.technology.map((tech, idx) => (
                                        <span
                                            className="border rounded-full px-3 py-1.5 me-1 text-xs"
                                            key={idx}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <img
                                src={project.image}
                                className=" w-96 h-96 object-cover"
                                alt={project.name}
                            ></img>
                            <div className="h-10 w-64 border-b bg-transparent -rotate-45 absolute top-0 -left-32 "></div>
                            <div className="h-10 w-64 border-b bg-transparent -rotate-45 absolute bottom-0 -right-16 "></div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mx-auto text-center">
                <button className="px-6 py-2 border rounded-full">
                    See More
                </button>
            </div>
        </section>
    );
};

export default Projects;
