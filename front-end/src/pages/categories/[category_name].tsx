import Filters from "@/sections/category/filters/Filters";
import Products from "@/sections/category/products/Products";
import Footer from "@/sections/footer/Footer";
import Header from "@/sections/header/Header";
import Link from "next/link";

const Category = () => {
  return (
    <>
      <Header />
      <nav>
                <Link href="/home">
                    Home
                </Link>
                {`>`}
                <Link href="#">
                    Casual
                </Link>
            </nav>
      <section className="lg:p-25 flex gap-5">
        <Filters />
        <Products />
      </section>

      <Footer />
    </>
  );
};

export default Category;
