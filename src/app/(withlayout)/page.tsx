import Clients from "@/components/HomeComponent/Clients";
import Counter from "@/components/HomeComponent/Counter";
import Goal from "@/components/HomeComponent/Goal";
import Header from "@/components/HomeComponent/Header";
import HomeService from "@/components/HomeComponent/HomeService";
import Indusstry from "@/components/HomeComponent/Indusstry";
import Partner from "@/components/HomeComponent/Partner";

const Home = () => {
    return (
        <div>
            <Header></Header>
            {/* <Counter></Counter> */}
            <HomeService></HomeService>
            <Clients></Clients>
            <Indusstry></Indusstry>
            <Goal></Goal>
            <Partner></Partner>
        </div>
    );
};

export default Home;
