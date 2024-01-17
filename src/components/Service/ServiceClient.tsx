"use clients"

import Image from "next/image";
import c1 from '../../../public/images/swachhakasar.png'
import c2 from '../../../public/images/NEDUBD.png'
import c3 from '../../../public/images/IITAB-01.png'
import c4 from '../../../public/images/business.png'
import c5 from '../../../public/images/company1.jpg'
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
            <Image height={200} width={200} src={c1} alt="Card image"></Image>
          </div>
          <div className=" my-5 mx-3">
            <Image height={200} width={200} src={c2} alt="Card image"></Image>
          </div>
          <div className=" my-5 mx-3">
            <Image height={200} width={200} src={c3} alt="Card image"></Image>
          </div>
          <div className=" my-5 mx-3">
            <Image height={200} width={200} src={c4} alt="Card image"></Image>
          </div>
          <div className=" my-5 mx-3">
            <Image height={200} width={200} src={c5} alt="Card image"></Image>
          </div>
        </div>
      </Marquee>
      </div>
    );
};

export default ServiceClient;