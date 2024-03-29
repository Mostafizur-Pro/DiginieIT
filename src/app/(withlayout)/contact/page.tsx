import { FaLinkedinIn, FaPhone, FaTwitter } from "react-icons/fa";
import { FaMapLocationDot, FaEnvelope, FaFacebook } from "react-icons/fa6";
import shapeImage from "@/assets/shape.png";
import Image from "next/image";

const Contact = () => {
    return (
        <section className="container mx-auto lg:px-16 px-4 md:my-32 my-16">
            <div className="grid lg:grid-cols-2">
                <div className="flex flex-col justify-between">
                    <div className="">
                        <h2 className="text-4xl">Get in touch</h2>
                        <div className="pt-10 space-y-2">
                            <p className="flex items-center gap-4">
                                <FaMapLocationDot className="md:text-2xl text-lg" />
                                <p className=" md:text-base text-sm">
                                    Nur Villa, House #17, Road #1, Mia Bazar,
                                    Ashulia, Saver, Dhaka
                                </p>
                            </p>
                            <p className="flex items-center gap-4">
                                <FaEnvelope className="md:text-2xl text-lg" />
                                <p className=" md:text-base text-sm">
                                    info@diginieit.com
                                </p>
                            </p>
                            <p className="flex items-center gap-4">
                                <FaPhone className="md:text-2xl text-lg" />
                                <p className=" md:text-base text-sm">
                                    +880 17200 51101
                                </p>
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center md:gap-6 lg:mt-0 mt-6">
                        <p className="md:block hidden">Social Link</p>
                        <div className="h-0.5 md:w-36 w-0 bg-white "></div>
                        <p className=" flex items-center gap-3 md:text-2xl text-lg">
                            <FaFacebook />
                            <FaLinkedinIn />
                            <FaTwitter />
                        </p>
                    </div>
                </div>
                <div className="lg:mt-0 mt-6">
                    <div className="2xl:ms-32 xl:ms-6 bg-primary relative">
                        <div className="md:p-20 p-8 space-y-6">
                            <div className="">
                                <label htmlFor="">Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Type your name here"
                                    className="w-full py-3 placeholder:text-sm placeholder:text-white/50 border-b bg-transparent"
                                />
                            </div>
                            <div className="">
                                <label htmlFor="">Your Phone Number</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Type your phone number here"
                                    className="w-full py-3 placeholder:text-sm placeholder:text-white/50 border-b bg-transparent"
                                />
                            </div>
                            <div className="">
                                <label htmlFor="">Your Email Address</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Type your email address here"
                                    className="w-full py-3 placeholder:text-sm placeholder:text-white/50 border-b bg-transparent"
                                />
                            </div>
                            <div className="">
                                <label htmlFor="">Message</label>
                                <textarea
                                    name=""
                                    placeholder="Type your message here"
                                    className="w-full py-3 placeholder:text-sm placeholder:text-white/50 border-b bg-transparent"
                                    id=""
                                    cols={30}
                                    rows={4}
                                ></textarea>
                            </div>
                            <div className="">
                                <button className="w-full bg-white text-black py-4 font-medium">
                                    Submit
                                </button>
                            </div>
                            <div className="absolute bottom-0 left-0">
                                <Image
                                    src={shapeImage}
                                    className="md:h-16 h-6 md:w-16 w-6 "
                                    alt="shape"
                                ></Image>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
