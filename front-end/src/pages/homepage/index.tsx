import Banner from "@/sections/homepage/banner/Banner";
import Browse from "@/sections/homepage/browse/Browse";
import Header from "@/sections/header/Header";
import Arrivals from "@/sections/homepage/new_arrivals/Arrivals";
import Reviews from "@/sections/homepage/reviews/Reviews";
import Selling from "@/sections/homepage/top_selling/Selling";
import Footer from "@/sections/footer/Footer";

const home = () => {
    return ( 
        <>
            <Header/>
            <Banner />
            <Arrivals />
            <Selling />
            <Browse />
            <Reviews />
            <Footer />
        </>
    );
}
 
export default home;