import Footer from "@/sections/footer/Footer";
import Header from "@/sections/header/Header";
import MoreProducts from "@/sections/product_details/more_products/MoreProducts";
import Product from "@/sections/product_details/product/Product";
import ReviewsProd from "@/sections/product_details/reviews/ReviewsProd";
import Tabs from "@/sections/product_details/tabs/Tabs";

import Link from "next/link";

const productDetails = () => {
    return ( 
        <>
            <Header />
            <nav>
                <Link href="/homepage">
                    Home
                </Link>
                {`>`}
                <Link href="#">
                    Shop
                </Link>
                {`>`}
                <Link href="#">
                    Men
                </Link>
                {`>`}
                <Link href="#">
                    T-shirts
                </Link>
                {`>`}
            </nav>
            <Product/>
            <Tabs />
            <ReviewsProd />
            <MoreProducts />
            <Footer />
        </>
     );
}
 
export default productDetails;