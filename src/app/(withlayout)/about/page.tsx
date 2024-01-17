import Header from "../../../components/AboutComponent/header";

const About = () => {
  return (
    <div>
      <Header />

      <div className="grid grid-cols-1 lg:grid-cols-2 py-12 gap-5  mx-20">
        <div className="lg:mt-28 me-10">
          <div className="about-item">
            <h3 className="mb-5 text-2xl font-semibold">
              Who <span className="text-primary">We</span> Are
            </h3>
            <p className=" ">
              Incepted in 2015, <br /> Mediusware Ltd. has been serving as a leading IT
              Solution provider in Bangladesh. Our aim is to help businesses all
              around the world by providing the digital solutions according to
              their need. Serving a number of renowned companies from the USA,
              UK, and many other countries, we have already created a wide range
              of satisfied clients!
            </p>
          </div>
        </div>
        <div className="">
          <div className="img">
            <img
              className="w-full object-cover"
              src="https://mediusware.com/assets/about1.2322110a.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 py-12 gap-5  mx-20">
        <div className="">
          <div className="img">
            <img
              className="w-full object-cover"
              src="https://mediusware.com/assets/why-mediusware.0d0d58ba.png"
              alt=""
            />
          </div>
        </div>
        <div className="lg:mt-40 ">
          <div className="about-item">
            <h3 className="mb-5 text-2xl font-semibold">
              Why <span className="text-primary">Diginie IT</span>
            </h3>
            <p className="">
              Mediusware mounts its vast expertise, superior technical skills,
              and highest quality support services to provide scalable IT solutions to its clients. Our Milestone of satisfying 1000+ global
              clients shows our expertise and dedication to provide our clients
              with highest class digital services and solutions.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 py-12 gap-5  mx-20">
        <div className="lg:mt-28 me-10">
          <div className="about-item">
            <h3 className="mb-5 text-2xl font-semibold">
              Company <span className="text-primary">Growth</span>
            </h3>
            <p className="">
              Mediusware mounts its vast expertise, superior technical skills,
              and highest quality support services to provide scalable IT
              solutions to its clients. Our Milestone of satisfying 1000+ global
              clients shows our expertise and dedication to provide our clients
              with highest class digital services and solutions. scalable IT
              solutions to its clients
            </p>
          </div>
        </div>
        <div className="">
          <div className="img">
            <img
              className="w-full object-cover"
              src="https://mediusware.com/assets/company-growth.ae278813.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 py-12 gap-5  mx-20">
        <div className="">
          <div className="img">
            <img
              className="w-full object-cover"
              src="https://mediusware.com/assets/mission-vision.b767b120.png"
              alt=""
            />
          </div>
        </div>
        <div className="lg:mt-40">
          <div className="about-item">
            <h3 className="mb-5 text-2xl font-semibold">
              Our <span className="text-primary">Mission</span>
            </h3>
            <p className=" ">
              Leave a positive footprint by devoting our human resources,
              technologies and expertise to deliver top-of-the-line digital
              products, thereby contributing to the success of modern businesses
              around the globe.
            </p>
          </div>
          <div className="about-item">
            <h3 className="my-5 text-2xl font-semibold">
              Our <span className="text-primary">Vision</span>
            </h3>
            <p className="">
              Deliver one-of-a-kind digital solutions to facilitate global
              businesses, powered by innovation and guided by integrity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
