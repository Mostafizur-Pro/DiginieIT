import planningImage01 from "@/assets/plan.jpg";
import shapeImage from "@/assets/shape.png";
import shapeImage02 from "@/assets/shape2.png";
import Image from "next/image";

const Header = () => {
    return (
        <section className="container mx-auto lg:px-16 px-4 md:my-32 my-16">
            <h2 className="xl:text-7xl lg:text-6xl md:text-5xl text-4xl max-w-5xl font-light">
                Get started today and watch your ideas come to life!
            </h2>
            <div className="mt-16">
                <div className=" relative">
                    <Image
                        src={planningImage01}
                        alt="Planning Image"
                        className="xl:h-[30rem] lg:h-96 w-full object-cover"
                    ></Image>
                    <div className="absolute bottom-0 left-0">
                        <Image
                            src={shapeImage}
                            className="md:h-32 h-20 md:w-32 w-20 "
                            alt="shape"
                        ></Image>
                    </div>
                    <div className="absolute bottom-0 right-0">
                        <Image
                            src={shapeImage02}
                            className="h-32 w-32 "
                            alt="shape"
                        ></Image>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;
