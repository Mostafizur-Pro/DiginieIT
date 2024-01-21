import shape03 from "@/assets/shape/shape03.png";
import Image from "next/image";

const Goal = () => {
    return (
        <section className="overflow-hidden md:pb-28 pb-16">
            <div className="container mx-auto lg:px-16 px-4 pt-28">
                <div className="grid md:grid-cols-2 mb-5 md:mb-0">
                    <div className=""></div>
                    <div className="">
                        <div className="">
                            <h2 className="xl:text-6xl lg:text-5xl md:text-4xl text-3xl uppercase">
                                Our customized Work Flow.
                            </h2>
                            <div className="flex items-center lg:gap-16 gap-6 text-sm lg:py-16 py-10">
                                <div className="h-0.5 w-36 bg-white"></div>
                                <p className="md:text-base text-xs">
                                    find effective digital reach or your
                                    business, powered by human behavior, driven
                                    byt data.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="rotate-6 -m-16 mb-16">
                    <div className=" py-6 hover:text-green-300">
                        <div className="container mx-auto lg:px-16 px-4">
                            <div className="grid grid-cols-4">
                                <div className="md:hidden block"></div>
                                <div className="">
                                    <p className="">01</p>
                                    <h2 className="lg:text-5xl text-4xl uppercase">
                                        Concept
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-white/40 py-6 hover:text-green-300">
                        <div className="container mx-auto lg:px-16 px-4">
                            <div className="grid grid-cols-4">
                                <div className=""></div>
                                <div className="">
                                    <p className="">02</p>
                                    <h2 className="lg:text-5xl text-4xl uppercase">
                                        Design
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-white/40 py-6 hover:text-green-300">
                        <div className="container mx-auto lg:px-16 px-4">
                            <div className="grid grid-cols-4">
                                <div className=""></div>
                                <div className="hidden md:block"></div>
                                <div className="">
                                    <p className="">03</p>
                                    <h2 className="lg:text-5xl text-4xl uppercase">
                                        Development
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-white/40 py-6 hover:text-green-300">
                        <div className="container mx-auto lg:px-16 px-4">
                            <div className="grid grid-cols-4 ">
                                <div className=""></div>
                                <div className="hidden md:block"></div>
                                <div className="hidden md:block"></div>
                                <div className="ms-auto">
                                    <p className="">04</p>
                                    <h2 className="lg:text-5xl text-4xl uppercase">
                                        Result
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto lg:px-16 px-4">
                    <div className="">
                        <div className="flex gap-6 relative mb-6">
                            <p className="text-4xl">00.</p>
                            <div className="xl:w-4/12 lg:w-6/12">
                                <h2 className="lg:text-4xl text-2xl uppercase text-green-300">
                                    Elevate Your Vision: Diginie It
                                </h2>
                                <p className=" mt-6 lg:text-sm text-xs opacity-75 font-light">
                                    At Diginie It, we specialize in transforming
                                    your dreams into reality. With creative
                                    solutions, strategic planning, and
                                    cutting-edge technologies, our dynamic team
                                    is dedicated to elevating your vision.
                                    Welcome to unparalleled success with Diginie
                                    It.
                                </p>
                            </div>
                            <Image
                                src={shape03}
                                alt="shape"
                                className="absolute w-10 -left-10 -top-6"
                            ></Image>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-4 grid-cols-2 py-10 gap-5">
                        <div className="mt-3 opacity-60">
                            <h3 className="lg:text-5xl text-3xl py-3 px-10 border border-white/30 rounded-full inline ">
                                02+
                            </h3>
                            <p className="mt-8 ps-2 md:text-base text-xs">
                                Years of working experience
                            </p>
                        </div>

                        <div className="mt-3 opacity-60">
                            <h3 className="lg:text-5xl text-3xl py-3 px-10 border border-white/30 rounded-full inline ">
                                05+
                            </h3>
                            <p className="mt-8 ps-2 md:text-base text-xs">
                                Countries we serve
                            </p>
                        </div>

                        <div className="mt-3 opacity-60">
                            <h3 className="lg:text-5xl text-3xl py-3 px-10 border border-white/30 rounded-full inline ">
                                15+
                            </h3>
                            <p className="mt-8 ps-2 md:text-base text-xs">
                                IT Professionals
                            </p>
                        </div>

                        <div className="mt-3 opacity-60">
                            <h3 className="lg:text-5xl text-3xl py-3 md:px-10 px-8 border border-white/30 rounded-full inline ">
                                100+
                            </h3>
                            <p className="mt-8 ps-2 md:text-base text-xs">
                                Projects completes all over the world
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Goal;
