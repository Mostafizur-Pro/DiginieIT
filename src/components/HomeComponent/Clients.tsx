/* eslint-disable @next/next/no-img-element */
"use clients"
import Marquee from "react-fast-marquee";

const Clients = () => {
  return (
    <div className="lg:w-[1150px] mx-auto">
      <div className="my-10">
        <h1 className="text-4xl text-center font-bold">Our Clients</h1>
        <h1 className="text-center">We are trusted by industry leaders</h1>
      </div>
    <Marquee>
      <div className="flex items-center">
        <div className=" my-5 mx-3">
          <img className=" w-[150px]" src="/images/swachhakasar.png" alt="" />
          
        </div>
        <div className=" my-5 mx-3">
        <img className=" w-[150px]" src="/images/NEDUBD.png" alt="" />
        </div>
        <div className=" my-5 mx-3">
        <img className=" w-[150px]" src="/images/IITAB-01.png" alt="" />
        </div>
        <div className=" my-5 mx-3">
        <img className=" w-[150px]" src="/images/business.png" alt="" />
        </div>
        <div className=" my-5 mx-3">
        <img className=" w-[150px]" src="/images/company1.jpg" alt="" />
        </div>
      </div>
    </Marquee>
    </div>
  );
};

export default Clients;
