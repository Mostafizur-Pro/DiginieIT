"use client";

import useGetProjects from "@/components/Hook/useGetProjects";

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
            Hello
        </section>
    );
};

export default Projects;
