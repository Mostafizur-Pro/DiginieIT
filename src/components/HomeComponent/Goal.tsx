import Image from "next/image";
import IDEATE from "../../../public/images/light.svg";
import design from "../../../public/images/pen.svg";
import dev from "../../../public/images/dev.svg";
import rocket from "../../../public/images/rocket.svg";

const Goal = () => {
  return (
    <div className="p-20">
      <div>
        <h1 className="text-4xl text-center font-bold">
          How we reach Your Goal
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:w-[1200px] mx-auto">
        <div className="w-[300px]  hover:shadow-lg duration-500 p-5 mx-2 rounded-lg">
          <div className="flex justify-center items-center border bg-blue-500 rounded-full w-[200px] h-[200px] my-5 mx-3">
            <Image
              className="rounded-full bg-white h-[150px] w-[150px] p-2"
              height={50}
              width={50}
              src={IDEATE}
              alt="Card image"
            ></Image>
          </div>
          <div>
            <h1 className="text-xl text-center">IDEATE</h1>
            <p className="text-center">
              <small>Turning your ideas into concepts</small>
            </p>
          </div>
        </div>
        <div className="w-[300px]  hover:shadow-lg duration-500 p-5 mx-2 rounded-lg">
          <div className="flex justify-center items-center border bg-teal-300 rounded-full w-[200px] h-[200px] my-5 mx-3">
            <Image
              className="rounded-full bg-white h-[150px] w-[150px] p-2"
              height={50}
              width={50}
              src={design}
              alt="Card image"
            ></Image>
          </div>
          <div>
            <h1 className="text-xl text-center">Design</h1>
            <p className="text-center">
              <small>Sketching out the requirements</small>
            </p>
          </div>
        </div>
        <div className="w-[300px]  hover:shadow-lg duration-500 p-5 mx-2 rounded-lg">
          <div className=" flex justify-center items-center border bg-blue-500 rounded-full w-[200px] h-[200px] my-5 mx-3">
            <Image
              className="rounded-full bg-white h-[150px] w-[150px] p-2"
              height={50}
              width={50}
              src={dev}
              alt="Card image"
            ></Image>
          </div>
          <div>
            <h1 className="text-xl text-center">DEVELOPMENT</h1>
            <p className="text-center">
              <small>Converting designs into reality</small>
            </p>
          </div>
        </div>
        <div className="w-[300px]  hover:shadow-lg duration-500 p-5 mx-2 rounded-lg">
          <div className=" flex justify-center items-center border bg-teal-300 rounded-full w-[200px] h-[200px] my-5 mx-3">
            <Image
              className="rounded-full bg-white h-[150px] w-[150px] p-2"
              height={50}
              width={50}
              src={rocket}
              alt="Card image"
            ></Image>
          </div>
          <div>
            <h1 className="text-xl text-center">DEPLOY</h1>
            <p className="text-center">
              <small>Launching the service to the market</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goal;
