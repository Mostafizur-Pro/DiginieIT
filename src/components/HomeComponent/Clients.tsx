import company01 from "@/assets/company/IITAB-01.png";
import company02 from "@/assets/company/NEDUBD.png";
import company03 from "@/assets/company/business.png";
import company04 from "@/assets/company/company1.png";
import company05 from "@/assets/company/swachhakasar.png";
import Image from "next/image";

const Clients = () => {
    return (
        <section className=" border-b border-white/40">
            <div className="container mx-auto lg:px-16 px-4 lg:py-28 py-16">
                <h2 className="text-center mb-4 lg:text-base text-sm">
                    We are trusted by industry leaders
                </h2>
                <div className="h-0.5 w-10 bg-gray-500 mx-auto mb-6"></div>
                <div className="flex items-end justify-evenly flex-wrap gap-5">
                    <Image
                        className="xl:h-12 lg:h-10 md:h-8 h-5 w-auto"
                        src={company01}
                        alt="Company 01"
                    ></Image>
                    <Image
                        className="xl:h-12 lg:h-10 md:h-8 h-5 w-auto"
                        src={company02}
                        alt="Company 01"
                    ></Image>
                    <Image
                        className="xl:h-12 lg:h-10 md:h-8 h-5 w-auto"
                        src={company05}
                        alt="Company 01"
                    ></Image>

                    <Image
                        className="xl:h-12 lg:h-10 md:h-8 h-5 w-auto opacity-60"
                        src={company04}
                        alt="Company 01"
                    ></Image>
                    <Image
                        className="xl:h-12 lg:h-10 md:h-8 h-5 w-auto"
                        src={company03}
                        alt="Company 01"
                    ></Image>
                </div>
            </div>
        </section>
    );
};

export default Clients;
