import Image from "next/image";
import education from "../../../public/images/education.svg";
import government from "../../../public/images/hands.svg";
import medical from "../../../public/images/medical.svg";
import construction from "../../../public/images/union-1.svg";
import realState from "../../../public/images/house.svg";
import bank from "../../../public/images/bank.svg";
import transform from "../../../public/images/transport.svg";
import media from "../../../public/images/media.svg";
import retail from "../../../public/images/retail.svg";
import elearning from "../../../public/images/elearning.svg";
import ngo from "../../../public/images/ngo.svg";
import healthCare from "../../../public/images/healthcare.svg";
const Indusstry = () => {
  return (
    <div className="bg-blue-50 p-10">
      <div className="my-10">
        <h1 className="text-4xl text-center font-bold">Industry We Serve</h1>
        <h1 className="text-center">We are trusted by industry leaders</h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 lg:w-[1200px] xl:w-[1300px] mx-auto">
        <div className="w-[200px] my-5 mx-3 border border-slate-400 rounded-xl">
          <div className="flex justify-center p-3">
            <Image
              height={50}
              width={50}
              src={education}
              alt="Card image"
            ></Image>
          </div>
          <h1 className="text-lg text-center">Education</h1>
        </div>
        <div className="w-[200px] my-5 mx-3 border border-slate-400 rounded-xl">
          <div className="flex justify-center p-3">
            <Image
              height={50}
              width={50}
              src={government}
              alt="Card image"
            ></Image>
          </div>
          <h1 className="text-lg text-center">Government</h1>
        </div>
        <div className="w-[200px] my-5 mx-3 border border-slate-400 rounded-xl">
          <div className="flex justify-center p-3">
            <Image
              height={50}
              width={50}
              src={medical}
              alt="Card image"
            ></Image>
          </div>
          <h1 className="text-lg text-center">Medical</h1>
        </div>
        <div className="w-[200px] my-5 mx-3 border border-slate-400 rounded-xl">
          <div className="flex justify-center p-3">
            <Image
              height={50}
              width={50}
              src={construction}
              alt="Card image"
            ></Image>
          </div>
          <h1 className="text-lg text-center">Construction</h1>
        </div>
        <div className="w-[200px] my-5 mx-3 border border-slate-400 rounded-xl">
          <div className="flex justify-center p-3">
            <Image
              height={50}
              width={50}
              src={realState}
              alt="Card image"
            ></Image>
          </div>
          <h1 className="text-lg text-center">Real State</h1>
        </div>
        <div className="w-[200px] my-5 mx-3 border border-slate-400 rounded-xl">
          <div className="flex justify-center p-3">
            <Image height={50} width={50} src={bank} alt="Card image"></Image>
          </div>
          <h1 className="text-lg text-center">Bank</h1>
        </div>
        <div className="w-[200px] my-5 mx-3 border border-slate-400 rounded-xl">
          <div className="flex justify-center p-3">
            <Image
              height={50}
              width={50}
              src={transform}
              alt="Card image"
            ></Image>
          </div>
          <h1 className="text-lg text-center">Transport</h1>
        </div>
        <div className="w-[200px] my-5 mx-3 border border-slate-400 rounded-xl">
          <div className="flex justify-center p-3">
            <Image height={50} width={50} src={media} alt="Card image"></Image>
          </div>
          <h1 className="text-lg text-center">Media</h1>
        </div>
        <div className="w-[200px] my-5 mx-3 border border-slate-400 rounded-xl">
          <div className="flex justify-center p-3">
            <Image height={50} width={50} src={retail} alt="Card image"></Image>
          </div>
          <h1 className="text-lg text-center">Retail</h1>
        </div>
        <div className="w-[200px] my-5 mx-3 border border-slate-400 rounded-xl">
          <div className="flex justify-center p-3">
            <Image
              height={50}
              width={50}
              src={elearning}
              alt="Card image"
            ></Image>
          </div>
          <h1 className="text-lg text-center">E-Learning</h1>
        </div>
        <div className="w-[200px] my-5 mx-3 border border-slate-400 rounded-xl">
          <div className="flex justify-center p-3">
            <Image height={50} width={50} src={ngo} alt="Card image"></Image>
          </div>
          <h1 className="text-lg text-center">NGO</h1>
        </div>
        <div className="w-[200px] my-5 mx-3 border border-slate-400 rounded-xl">
          <div className="flex justify-center p-3">
            <Image
              height={50}
              width={50}
              src={healthCare}
              alt="Card image"
            ></Image>
          </div>
          <h1 className="text-lg text-center">Health Care</h1>
        </div>
      </div>
    </div>
  );
};

export default Indusstry;
