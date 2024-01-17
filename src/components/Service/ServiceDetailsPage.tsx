/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import React from "react";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import ServiceClient from "./ServiceClient";
import MoreService from "./MoreService";
interface IService {
  id: string;
  name: string;
  details: string;
  features: string[];
  technology: string[];
  tech_details: string;
  image: string;
  cover_img: string;
}

interface ServiceDetailsPageProps {
  service: IService;
}

const ServiceDetailsPage: React.FC<ServiceDetailsPageProps> = ({ service }) => {
  return (
    <div>
      <div>
        {/* part 1 */}
        <div className="w-full p-20 bg-cover bg-center bg-gradient-to-r from-cyan-200 to-blue-800">
          <h1 className="text-4xl md:text-5xl font-bold">{service?.name}</h1>
          <div className="flex items-center">
            <div>
              <Link href="/">
                <h1 className="text-black mt-5 hover:underline">Home</h1>
              </Link>
            </div>
            <div className="mt-5 ml-3">
              <FaArrowRight />{" "}
            </div>
            <div>
              <Link href={`/service/${service?.id}`}>
                <h1 className="text-black mt-5 hover:underline ml-3">
                  {service?.name}
                </h1>
              </Link>
            </div>
          </div>
        </div>
        {/* part 2 */}
        <div className="md:flex justify-around">
          <div className="mx-5">
            <img className="w-[500px]" src={service?.cover_img}
              alt={`${service?.name} image`} />
          </div>
          <div className="mx-5">
            <h1 className="text-5xl font-bold my-5 text-cyan-500 text-center">
              Featured
            </h1>
            <ul>
              {service?.features.map((feature, i) => (
                <li className="flex items-center mt-2 text-lg" key={i}>
                  <FaCheckCircle className="mr-2 text-cyan-500" /> {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* part 3 */}

        <div className="md:flex items-center py-16 bg-gray-50">
          <div className="p-10 md:w-1/2">
            <h1 className="text-5xl font-bold ">Technology we Used</h1>
            <p className="text-lg mt-10">{service?.tech_details}</p>
          </div>
          <div className="md:w-1/2 grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-5">
            
               {/* eslint-disable-next-line @next/next/no-img-element */}
              {service?.technology.map((tech,i)=><img className="w-20 h-16 mx-2 border-2 border-indigo-500 rounded-xl p-2" key={i} src={tech} alt={`${service.name} image`}></img>)}
            
          </div>
        </div>

        {/* part 4  */}
       <ServiceClient></ServiceClient>
       {/* part 5  */}
       <MoreService></MoreService>
      </div>
    </div>
  );
};

export default ServiceDetailsPage;
