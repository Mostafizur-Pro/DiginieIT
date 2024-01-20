import shape03 from "@/assets/shape/shape03.png";
import Image from "next/image";

const Goal = () => {
    return (
        <section className="overflow-hidden pb-28">
            <div className="container mx-auto lg:px-16 px-4 pt-28">
                <div className="grid grid-cols-2">
                    <div className=""></div>
                    <div className="">
                        <div className="">
                            <h2 className="text-6xl uppercase">
                                Our customized Work Flow.
                            </h2>
                            <div className="flex items-center gap-16 text-sm py-16">
                                <div className="h-0.5 w-36 bg-white"></div>
                                <p className="">
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
                                <div className="">
                                    <p className="">01</p>
                                    <h2 className="text-5xl uppercase">
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
                                    <h2 className="text-5xl uppercase">
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
                                <div className=""></div>
                                <div className="">
                                    <p className="">03</p>
                                    <h2 className="text-5xl uppercase">
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
                                <div className=""></div>
                                <div className=""></div>
                                <div className="ms-auto">
                                    <p className="">04</p>
                                    <h2 className="text-5xl uppercase">
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
                            <div className="w-4/12">
                                <h2 className="text-4xl uppercase text-green-300">
                                    Elevate Your Vision: Diginie It
                                </h2>
                                <p className=" mt-6 text-sm opacity-75 font-light">
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
                    <div className="grid grid-cols-4 py-10">
                        <div className="mt-3 opacity-60">
                            <h3 className="text-5xl py-3 px-10 border border-white/30 rounded-full inline ">
                                02+
                            </h3>
                            <p className="mt-8 ps-2">
                                Years of working experience
                            </p>
                        </div>

                        <div className="mt-3 opacity-60">
                            <h3 className="text-5xl py-3 px-10 border border-white/30 rounded-full inline ">
                                05+
                            </h3>
                            <p className="mt-8 ps-2">Countries we serve</p>
                        </div>

                        <div className="mt-3 opacity-60">
                            <h3 className="text-5xl py-3 px-10 border border-white/30 rounded-full inline ">
                                15+
                            </h3>
                            <p className="mt-8 ps-2">IT Professionals</p>
                        </div>

                        <div className="mt-3 opacity-60">
                            <h3 className="text-5xl py-3 px-10 border border-white/30 rounded-full inline ">
                                100+
                            </h3>
                            <p className="mt-8 ps-2">
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
