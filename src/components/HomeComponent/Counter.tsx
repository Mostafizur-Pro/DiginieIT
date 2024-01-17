/* eslint-disable @next/next/no-img-element */


const Counter = () => {
  return (
    <div className="lg:w-[1200px] mx-auto mt-[-100px] mb-[50px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <div className=" p-2 mx-2">
        <div className="flex justify-center my-5">
          <img className="h-[50px] w-[50px]" src="/images/c-1.svg" alt="" />
        </div>
        <div>
          <h1 className="text-4xl text-center mt-3 font-bold text-blue-500">2+</h1>
          <p className="text-center ">Years Of Experience</p>
        </div>
      </div>
      <div className=" p-2 mx-2">
        <div className="flex justify-center my-5">
        <img className="h-[50px] w-[50px]" src="/images/c-2.svg" alt="" />
        </div>
        <div>
          <h1 className="text-4xl text-center mt-3 font-bold text-blue-500">5+</h1>
          <p className="text-center ">Countries Serve</p>
        </div>
      </div>
      <div className=" p-2 mx-2">
        <div className="flex justify-center my-5">
        <img className="h-[50px] w-[50px]" src="/images/c-3.svg" alt="" />
        </div>
        <div>
          <h1 className="text-4xl text-center mt-3 font-bold text-blue-500">15+</h1>
          <p className="text-center ">IT Professionals </p>
        </div>
      </div>
      <div className=" p-2 mx-2">
        <div className="flex justify-center my-5">
        <img className="h-[50px] w-[50px]" src="/images/c-4.svg" alt="" />
        </div>
        <div>
          <h1 className="text-4xl text-center mt-3 font-bold text-blue-500">100+</h1>
          <p className="text-center ">Projects Completes</p>
        </div>
      </div>
    </div>
  );
};

export default Counter;
