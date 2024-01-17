/* eslint-disable @next/next/no-img-element */
import image from "../../../public/images/login-image.png";

const Partner = () => {
  return (
    <div className="lg:w-[1200px] mx-auto">
      <div className="md:flex justify-around items-center">
        <div className="lg:w-[50%]">
          <h1 className="text-4xl mx-2 font-bold my-10">
            Join Our Partner Network
          </h1>
          <p className=" my-5 mx-2">
            Our ultimate goal is to expand our expertise and resources all
            around the world. If you think you have the capability to complement
            our brand ethics and reputation, then we are looking for you!
          </p>
        </div>
        <div className="flex justify-center p-3 lg:w-[50%]">
        <img src="/images/login-image.png"  className="h-[600px] w-[600px]" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Partner;
