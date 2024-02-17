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
                        className="grid grid-cols-8 border justify-between gap-16 items-center mt-14 ps-16 me-4"
                        key={idx}
                    >
                        <div className=" col-span-1 border-white/30 flex gap-10 items-center">
                            <h2 className="text-8xl outline-title text-transparent font-semibold opacity-40">
                                0{project.id}
                            </h2>
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
                                            className="border rounded-full px-3 py-1.5 me-1 text-xs"
                                            key={idx}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="absolute -bottom-5">
                                <button className="px-6 py-2 border rounded-full bg-[#0F1110]">
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
        </section>
    );
};

export default Projects;
