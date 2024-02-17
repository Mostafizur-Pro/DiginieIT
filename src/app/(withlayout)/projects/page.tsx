"use client";

import { useState } from "react";
import useGetProjects from "@/components/Hook/useGetProjects";
import Image from "next/image";

interface Project {
    id: number;
    name: string;
    details: string;
    technology: string[];
    image: string;
}

const Projects = () => {
    const [openDetails, setOpenDetails] = useState<boolean>(false); // State to manage drawer visibility
    const [selectedProject, setSelectedProject] = useState<Project | null>(
        null
    ); // State to store selected project
    const { projects, loading, error } = useGetProjects();

    const handleDetailsClick = (project: Project) => {
        setSelectedProject(project);
        setOpenDetails(true);
    };

    const handleCloseDetails = () => {
        setOpenDetails(false);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <section className="relative">
            {/* Project Details Drawer */}
            {openDetails && selectedProject && (
                <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex justify-center items-end">
                    <div className="bg-[#0F1110] p-8 rounded-lg w-full h-[96%] bottom-0">
                        <div className="container mx-auto lg:px-16 px-4 py-10">
                            <div className="grid grid-cols-12 items-start">
                                <div className="col-span-11">
                                    {" "}
                                    <h2 className="lg:text-6xl font-light md:text-2xl mb-10">
                                        {selectedProject.name} Details
                                    </h2>
                                </div>
                                <div className="col-span-1">
                                    <button
                                        className="mt-4 border-2 border-white/30 rounded-full px-3 py-1.5 text-xs"
                                        onClick={handleCloseDetails}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                            <p>{selectedProject.details}</p>
                        </div>
                    </div>
                </div>
            )}

            <div className="container mx-auto lg:px-16 px-4 py-32">
                <h2 className="2xl:text-6xl xl:text-4xl text-2xl  font-light">
                    Our Latest Creations
                </h2>
                <div className="my-10">
                    {projects.map((project, idx) => (
                        <div
                            className="grid grid-cols-8 border justify-between gap-16 items-center mt-14 ps-16 me-4"
                            key={idx}
                        >
                            {/* Project Card */}
                            <div className=" col-span-1 border-white/30 flex gap-10 items-center relative h-full">
                                <div className="bg-[#0F1110] z-20 py-5">
                                    <h2 className="text-8xl outline-title text-transparent font-semibold opacity-40 ">
                                        0{project.id}
                                    </h2>
                                </div>
                                <div className="w-0.5 h-full bg-white/30 absolute flex items-center justify-center left-16 z-10"></div>
                            </div>
                            <div className="col-span-4 relative h-full flex items-center">
                                <div className="">
                                    <h2 className="text-3xl font-">
                                        {project.name}
                                    </h2>
                                    <h2 className="text-sm opacity-60 pt-3">
                                        {project.details}
                                    </h2>
                                    <div className="mt-4">
                                        {project.technology.map((tech, idx) => (
                                            <span
                                                className="border-2 border-white/30 rounded-full px-3 py-1.5 me-2 text-xs"
                                                key={idx}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="absolute -bottom-5 px-3 rounded-full bg-[#0F1110]">
                                    <button
                                        className="px-6 py-2 border rounded-full bg-[#0F1110]"
                                        onClick={() =>
                                            handleDetailsClick(project)
                                        }
                                    >
                                        Details
                                    </button>
                                </div>
                            </div>

                            <div className=" col-span-3">
                                <Image
                                    height={400}
                                    width={400}
                                    src={project.image}
                                    className=" w-full h-96 object-cover"
                                    alt={project.name}
                                ></Image>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mx-auto text-center">
                    <button className="px-6 py-2 border rounded-full">
                        See More
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Projects;
