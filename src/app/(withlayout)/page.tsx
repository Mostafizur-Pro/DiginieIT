import Clients from "@/components/HomeComponent/Clients";
import Goal from "@/components/HomeComponent/Goal";
import Header from "@/components/HomeComponent/Header";
import HomeService from "@/components/HomeComponent/HomeService";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <HomeService></HomeService>
            <Clients></Clients>
            <Goal></Goal>
        </div>
    );
};

export default Home;
