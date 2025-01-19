import { Outlet } from "react-router-dom";
import Header from "../Header/header";
import Footer from "../footer/Footer";


const Home = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Home;
