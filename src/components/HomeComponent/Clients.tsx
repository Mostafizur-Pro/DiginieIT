import company01 from "@/assets/compnay/IITAB-01.png";
import company02 from "@/assets/compnay/NEDUBD.png";
import company03 from "@/assets/compnay/business.png";
import company04 from "@/assets/compnay/company1.png";
import company05 from "@/assets/compnay/swachhakasar.png";
import Image from "next/image";

const Clients = () => {
    return (
        <section className=" border-b border-white/40">
            <div className="container mx-auto lg:px-16 px-4 py-28">
                <h2 className="text-center mb-4">
                    We are trusted by industry leaders
                </h2>
                <div className="h-0.5 w-10 bg-gray-500 mx-auto mb-6"></div>
                <div className="flex items-end justify-evenly">
                    <Image
                        className="h-12 w-auto"
                        src={company01}
                        alt="Company 01"
                    ></Image>
                    <Image
                        className="h-12 w-auto"
                        src={company02}
                        alt="Company 01"
                    ></Image>
                    <Image
                        className="h-12 w-auto"
                        src={company05}
                        alt="Company 01"
                    ></Image>

                    <Image
                        className="h-12 w-auto"
                        src={company04}
                        alt="Company 01"
                    ></Image>
                    <Image
                        className="h-12 w-auto"
                        src={company03}
                        alt="Company 01"
                    ></Image>
                </div>
            </div>
        </section>
    );
};

export default Clients;
