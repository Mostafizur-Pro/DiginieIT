import serviceImage from "@/assets/service2.png";
import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

const HomeService = async () => {
    const services = [
        {
            serviceName: "Innovative Custom Web Design",
            description:
                "Crafting tailored designs that authentically capture your brand essence and meaningfully engage your audience. Our team of creative professionals ensures your website stands out prominently in the dynamic digital landscape.",
            features: [
                "Unique and captivating designs",
                "Responsive layouts for all devices",
                "User-centric approach",
            ],
        },
        {
            serviceName: "Strategic SEO Optimization and Enhancement",
            description:
                "Elevate your online visibility and reach your target audience strategically. Our comprehensive SEO optimization strategies ensure that your website ranks higher in search engine results, driving organic traffic and maximizing your online presence.",
            features: [
                "Keyword research and optimization",
                "Content strategy for search engines",
                "Analytics and performance tracking",
            ],
        },
        {
            serviceName: "Comprehensive E-Commerce Solutions",
            description:
                "Providing powerful and secure e-commerce platforms that elevate your online store into a revenue-generating machine. We create seamless shopping experiences for your customers, ensuring transactions are both smooth and secure.",
            features: [
                "Robust online storefronts",
                "Payment gateway integration",
                "Inventory management",
            ],
        },
        {
            serviceName: "End-to-End Website Development Services",
            description:
                "Full-stack development services designed to bring your website to life. Our experts utilize cutting-edge technologies to ensure optimal performance, functionality, and scalability. Your digital presence is in capable hands.",
            features: [
                "Custom coding and development",
                "Content Management System (CMS) integration",
                "Scalable architecture",
            ],
        },
    ];

    return (
        <section className="bg-primary my-32">
            <div className="container mx-auto lg:px-16 px-4 py-32">
                <div className="grid grid-cols-7">
                    <div className="col-span-3">
                        <h2 className="text-6xl uppercase">
                            We offer best service for our customer.
                        </h2>
                        <div className="flex items-center gap-16 text-sm py-16">
                            <div className="h-0.5 w-36 bg-white"></div>
                            <p className="">
                                find effective digital reach or your business,
                                powered by human behavior, driven byt data.
                            </p>
                        </div>
                    </div>
                    <div className=""></div>
                    <div className="col-span-3  ">
                        <Image src={serviceImage} alt="service image"></Image>
                    </div>
                </div>
                <div className="mt-16">
                    <div className="grid grid-cols-4 gap-10">
                        {services.map((service, idx) => (
                            <div key={idx} className="">
                                <h5 className="border-b-2 text-lg">
                                    0{idx + 1}.
                                </h5>
                                <div className="pt-6">
                                    <h3 className="uppercase text-3xl">
                                        {service.serviceName}
                                    </h3>
                                </div>
                                <div className="pt-4">
                                    <Link href={"/"}>
                                        <span
                                            className="flex
                                        items-center gap-6"
                                        >
                                            <p className="">Details </p>
                                            <p className="bg-black w-10 h-10 flex items-center justify-center rounded-full">
                                                <MdArrowOutward className="" />
                                            </p>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeService;
