/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
type Service = {
  map(arg0: (service: any) => import("react").JSX.Element): import("react").ReactNode;
  _id:string;
  id: string;
  name: string;
  details: string;
  features: string[];
  technology: string[];
  tech_details: string;
  image: string;
  cover_img: string;
};
const HomeService = async () => {
  const services:Service=await fetch('https://diginie-it-server.vercel.app/services').then(res=>res.json())

  return (
    <div className="bg-gray-100 p-5">
      <div className="mb-16">
        <h1 className="text-2xl md:text-4xl font-bold text-center">Services</h1>
        <h4 className="text-center font-semibold mt-3">
          We Are Offering All Kinds of IT Solutions Services
        </h4>
      </div>
      {/* service card  */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:w-[1200px] mx-auto my-5 ">
        {services.map((service) => (
          <div
            key={service?.id}
            className="w-[300px] shadow-lg hover:shadow-2xl duration-500 p-5 border mx-2 rounded-xl bg-white hover:bg-blue-50"
          >
            <div className="flex justify-center my-5">
              <img className="h-[150px] w-[150px]" src={service?.image} alt="" />
            </div>
            <div>
              <h4 className="font-semibold text-lg text-center">
                {service?.name}
              </h4>
              <p className="mt-5 text-center">{service?.details}</p>

              <div className="flex justify-center">
                <Link href={`service/${service?._id}`}>
                  <button className="font-semibold flex  items-center mt-5">
                    <h4>Read More </h4>
                    <h4 className="ml-5">
                      <FaArrowRight />
                    </h4>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeService;



