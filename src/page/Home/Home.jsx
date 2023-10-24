import AboutUs from "../../Components/AboutUs/AboutUs";
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import OurService from "../../Components/OurService/OurService";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <OurService></OurService>
            <Footer></Footer>
        </div>
    );
};

export default Home;