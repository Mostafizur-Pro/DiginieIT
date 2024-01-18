import planningImage01 from "@/assets/plan.jpg";
import shapeImage from "@/assets/shape.png";
import Image from "next/image";

const Header = () => {
    return (
        <section className="container mx-auto lg:px-16 px-4 my-32">
            <h2 className="text-7xl max-w-5xl font-light">
                Get started today and watch your ideas come to life!
            </h2>
            <div className="mt-16">
                <div className=" relative">
                    <Image
                        src={planningImage01}
                        alt="Planning Image"
                        className="h-[30rem] w-full object-cover"
                    ></Image>
                    <div className="absolute bottom-0 left-0">
                        <Image
                            src={shapeImage}
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
