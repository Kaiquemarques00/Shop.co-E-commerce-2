import Filters from "@/sections/category/filters/Filters";
import Products from "@/sections/category/products/Products";
import Footer from "@/sections/footer/Footer";
import Header from "@/sections/header/Header";
import Link from "next/link";

const Category = () => {
  return (
    <>
      <Header />
      <nav className="flex gap-1 px-5 md:px-25 pt-4 md:py-5 text-[clamp(14px,2vw,16px)]">
                <Link href="/home" className="opacity-60">
                    Home
                </Link>
                {`>`}
                <Link href="#" className="font-bold opacity-100">
                    Casual
                </Link>
            </nav>
      <section className="lg:px-25 flex gap-5">
        <Filters />
        <Products />
      </section>

      <Footer />
    </>
  );
};

export default Category;
