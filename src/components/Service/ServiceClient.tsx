"use clients"

import Image from "next/image";
import company01 from "@/assets/company/IITAB-01.png";
import company02 from "@/assets/company/NEDUBD.png";
import company03 from "@/assets/company/business.png";
import company04 from "@/assets/company/company1.png";
import company05 from "@/assets/company/swachhakasar.png";
import Marquee from "react-fast-marquee";

const ServiceClient = () => {
    return (
        <div className="lg:w-[1200px] mx-auto">
        <div className="my-10">
          <h1 className="text-center text-4xl">We are trusted by industry leaders</h1>
        </div>
      <Marquee>
        <div className="flex items-center">
          <div className=" my-5 mx-3">
            <Image height={200} width={200} src={company01} alt="Card image"></Image>
          </div>
          <div className=" my-5 mx-3">
            <Image height={200} width={200} src={company02} alt="Card image"></Image>
          </div>
          <div className=" my-5 mx-3">
            <Image height={200} width={200} src={company03} alt="Card image"></Image>
          </div>
          <div className=" my-5 mx-3">
            <Image height={200} width={200} src={company04} alt="Card image"></Image>
          </div>
          <div className=" my-5 mx-3">
            <Image height={200} width={200} src={company05} alt="Card image"></Image>
          </div>
        </div>
      </Marquee>
      </div>
    );
};

export default ServiceClient;