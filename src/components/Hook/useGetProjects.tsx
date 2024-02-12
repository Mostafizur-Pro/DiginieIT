"use client";
import { useState, useEffect } from "react";

interface Project {
    id: number;
    name: string;
    details: string;
    technology: string[];
    image: string;
    demoLink: string;
    githubLink: string;
}

const useGetProjects = (): {
    projects: Project[];
    loading: boolean;
    error: string | null;
} => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await fetch("projects.json");
                if (!res.ok) {
                    throw new Error("Failed to fetch projects");
                }
                const data: Project[] = await res.json();
                setProjects(data);
                setLoading(false);
            } catch (err) {
                setLoading(false);
            }
        };

        fetchProjects();

        return () => {
            // Cleanup function
        };
    }, []);

    return { projects, loading, error };
};

export default useGetProjects;
