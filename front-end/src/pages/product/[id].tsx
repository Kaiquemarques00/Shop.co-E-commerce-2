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
            <nav className="flex gap-1 px-5 md:px-25 pt-4 md:py-5 text-[clamp(14px,2vw,16px)]">
                <Link href="/home" className="opacity-60">
                    Home
                </Link>
                {`>`}
                <Link href="#" className="opacity-60">
                    Shop
                </Link>
                {`>`}
                <Link href="#" className="opacity-60">
                    Men
                </Link>
                {`>`}
                <Link href="#" className="font-bold opacity-100">
                    T-shirts
                </Link>
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