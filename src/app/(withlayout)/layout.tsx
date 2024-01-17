import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="min-h-screen">{children}</div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;