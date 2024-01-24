import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo2.png";
import Divider from "@/assets/divider.svg";
import {
    FaFacebook,
    FaLinkedinIn,
    FaTwitter,
    FaEnvelope,
    FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="xl:mt-16 pb-16">
            <Image
                src={Divider}
                className="text-primary w-full"
                alt="Divider"
            ></Image>
            <div className="container mx-auto lg:px-16 px-4 lg:py-28 py-16">
                <div className="grid md:grid-cols-4 gap-5">
                    <div className="">
                        <Image
                            src={logo}
                            alt="diginite it"
                            className="h-12 w-auto"
                        ></Image>
                        <p className=" text-xs text-white/70 pt-6 ps-1">
                            © 2024 Diginite It. All Rights Reserved.
                        </p>
                    </div>
                    <div className="pt-3">
                        <h4 className="text-xl pb-6">Our Service</h4>
                        <div className="text-sm opacity-70 space-y-2">
                            <p className="">
                                <Link href={"/"}>Website Development</Link>
                            </p>
                            <p className="">
                                <Link href={"/"}>Mobile App Development</Link>
                            </p>
                            <p className="">
                                <Link href={"/"}>
                                    Ecommerce-site Development
                                </Link>
                            </p>
                            <p className="">
                                <Link href={"/"}>UI/UX Design & Dev</Link>
                            </p>
                            <p className="">
                                <Link href={"/"}>API Integration</Link>
                            </p>
                            <p className="">
                                <Link href={"/"}>Digital Marketing</Link>
                            </p>
                        </div>
                    </div>
                    <div className="pt-3">
                        <h4 className="text-xl pb-6">Important Links</h4>
                        <div className="text-sm opacity-70 space-y-2">
                            <p className="">
                                <Link href={"/about"}>About Us</Link>
                            </p>
                            <p className="">
                                <Link href={"/terms"}>Terms and condition</Link>
                            </p>
                            <p className="">
                                <Link href={"/contact"}>Contact Us</Link>
                            </p>
                            <p className="">
                                <Link href={"/projects"}>Projects</Link>
                            </p>
                            <p className="">
                                <Link href={"/career"}>
                                    Careers Opportunity
                                </Link>
                            </p>
                            <p className="">
                                <Link href={"/team"}>Our Team</Link>
                            </p>
                        </div>
                    </div>
                    <div className="pt-3">
                        <h4 className="text-xl pb-6">Contact Info</h4>
                        <div className="text-sm opacity-70 space-y-2">
                            <p className="flex items-center gap-3">
                                <FaEnvelope /> <span>info@diginieit.com</span>
                            </p>
                            <p className="flex items-center gap-3">
                                <FaPhoneAlt /> <span>+880 1970 706676</span>
                            </p>

                            <p className=" flex items-center gap-3 text-xl pt-3">
                                <FaFacebook />
                                <FaLinkedinIn />
                                <FaTwitter />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
