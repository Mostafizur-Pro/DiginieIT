"use client";
import { GoArrowUpRight } from "react-icons/go";
import { useEffect, useState } from "react";
import Link from "next/link";
import shape from "@/assets/shape2.png";
import Image from "next/image";


interface TeamMember {
    name: string;
    designation: string;
    company: string;
    image: string;
    facebook: string;
    linkedin: string;
    github: string;
    portfolio: string;
  }

const Team = () => {
    const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
    const [loading, setLoading] = useState(false);

    async function getData() {
        const res = await fetch("data.json");
        const data = await res.json();
        setTeamMembers(data);
    }

    useEffect(() => {
        setLoading(true);
        getData();
        setLoading(false);
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    console.log(teamMembers);
    return (
        <section className="container mx-auto lg:px-16 px-4 py-32">
            {/* <div className="space-y-6">
                <h2 className="text-4xl  font-light">
                    The Driving Force Behind Diginite it
                </h2>
                <p className="text-sm w-6/12">
                    Meet the Dream Team that powers Diginite it&#39;s success.
                    Our dynamic group of individuals is more than just a team;
                    we&#39;re a collective force of creativity, innovation, and
                    dedication. Get acquainted with the people who turn ideas
                    into reality and navigate the digital realm with expertise
                    and passion.
                </p>
            </div> */}
            <div className="lg:mt-20">
                <div className="">
                    <div className="grid lg:grid-cols-6 md:gap-6 mb-16">
                        <div className="col-span-2 ">
                            <h2 className="2xl:text-4xl xl:text-3xl text-2xl  font-light">
                                Navigating Success: Meet Our Leadership Trio
                            </h2>
                            <p className="text-sm py-6 mb-4 opacity-60">
                                Discover the strategic minds behind Diginite it.
                                Our CEO, CTO, and CMO form a dynamic leadership
                                trio steering the course toward innovation and
                                success. Learn about their vision, expertise,
                                and the collective commitment driving Diginite
                                it to new heights.
                            </p>
                        </div>
                        <div className="col-span-4">
                            <div className="grid  md:grid-cols-3 gap-10">
                                {teamMembers.slice(0, 3).map((member, idx) => (
                                    <div className="relative" key={idx}>
                                        <div className="relative">
                                            <img
                                                src={member?.image}
                                                className="w-full "
                                                alt={member?.name}
                                            ></img>
                                            <Image
                                                src={shape}
                                                className="w-16 rotate-90 absolute bottom-0 -left-1"
                                                alt={member?.name}
                                            ></Image>
                                        </div>

                                        <div className="ps-8 py-2">
                                            <h1 className="text-xl font-light">
                                                {member?.name}
                                            </h1>
                                            <p className="text-xs">
                                                {member?.designation}
                                            </p>
                                        </div>
                                        <div className="absolute top-5 -right-4 flex justify-between items-end flex-col">
                                            <p className="text-sm opacity-75 ">
                                                <Link
                                                    className="flex items-center gap-2 text-black"
                                                    href={member?.facebook}
                                                >
                                                    facebook{" "}
                                                    <GoArrowUpRight className="text-white" />
                                                </Link>
                                            </p>
                                            <p className="text-sm opacity-75 ">
                                                <Link
                                                    className="flex items-center gap-2 text-black"
                                                    href={member.linkedin}
                                                >
                                                    linkedin{" "}
                                                    <GoArrowUpRight className="text-white" />
                                                </Link>
                                            </p>
                                            <p className="text-sm opacity-75 ">
                                                <Link
                                                    className="flex items-center gap-2 text-black"
                                                    href={member.github}
                                                >
                                                    github{" "}
                                                    <GoArrowUpRight className="text-white" />
                                                </Link>
                                            </p>
                                            <p className="text-sm opacity-75 text-end">
                                                <Link
                                                    className="flex items-center gap-2 text-black"
                                                    href={member.portfolio}
                                                >
                                                    portfolio{" "}
                                                    <GoArrowUpRight className="text-white" />
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-20">
                    <div className="grid lg:grid-cols-6 md:gap-6">
                        <div className="col-span-2">
                            <h2 className="2xl:text-4xl xl:text-3xl text-2xl  font-light">
                                Collaborative Brilliance: Our Dedicated Team
                            </h2>
                            <p className="text-sm py-6 mb-4 opacity-60">
                                Uncover the heart and soul of Diginite it. Our
                                diverse team, from designers to developers,
                                marketers to managers, is a powerhouse of talent
                                and creativity. Explore the profiles of the
                                individuals who make up the collaborative force,
                                weaving innovation and dedication into every
                                project.
                            </p>
                        </div>
                        <div className="col-span-4">
                            <div className="grid md:grid-cols-3 gap-10">
                                {teamMembers
                                    .slice(3, teamMembers.length)
                                    .map((member, idx) => (
                                        <div className="relative" key={idx}>
                                            <div className="relative">
                                                <img
                                                    src={member.image}
                                                    className="w-full "
                                                    alt={member.name}
                                                ></img>
                                                <Image
                                                    src={shape}
                                                    className="w-16 rotate-90 absolute bottom-0 -left-1"
                                                    alt={member.name}
                                                ></Image>
                                            </div>

                                            <div className="ps-8 py-2">
                                                <h1 className="text-xl font-light">
                                                    {member.name}
                                                </h1>
                                                <p className="text-xs">
                                                    {member.designation}
                                                </p>
                                            </div>
                                            <div className="absolute top-5 -right-4 flex justify-between items-end flex-col">
                                                <p className="text-sm opacity-75 ">
                                                    <Link
                                                        className="flex items-center gap-2 text-black"
                                                        href={member.facebook}
                                                    >
                                                        facebook{" "}
                                                        <GoArrowUpRight className="text-white" />
                                                    </Link>
                                                </p>
                                                <p className="text-sm opacity-75 ">
                                                    <Link
                                                        className="flex items-center gap-2 text-black"
                                                        href={member.linkedin}
                                                    >
                                                        linkedin{" "}
                                                        <GoArrowUpRight className="text-white" />
                                                    </Link>
                                                </p>
                                                <p className="text-sm opacity-75 ">
                                                    <Link
                                                        className="flex items-center gap-2 text-black"
                                                        href={member.github}
                                                    >
                                                        github{" "}
                                                        <GoArrowUpRight className="text-white" />
                                                    </Link>
                                                </p>
                                                <p className="text-sm opacity-75 text-end">
                                                    <Link
                                                        className="flex items-center gap-2 text-black"
                                                        href={member.portfolio}
                                                    >
                                                        portfolio{" "}
                                                        <GoArrowUpRight className="text-white" />
                                                    </Link>
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;
