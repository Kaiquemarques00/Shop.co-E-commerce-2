import Button from "@/components/button/Button";
import ProductCard from "@/components/product_card/ProductCard";

const Arrivals = () => {
  return (
    <section className="flex flex-wrap justify-around mb-5 lg:flex-col">
      <h1 className="text-center py-10 text-[clamp(32px,4vw,48px)]">
        New Arrivals
      </h1>

      <article className="flex overflow-hidden justify-around mb-5">
        <ProductCard productImg="./assets/image1_new.png" title="T-shirt With Tape Details" rating={4.5} price="$ 120"/>
        <ProductCard productImg="./assets/image2_new.png" title="Skinny Fit Jeans" rating={3.5} price="$ 260" priceWithDiscount="$ 240" discount="-20%"/>
        <ProductCard productImg="./assets/image3_new.png" title="Checkered Shirt" rating={4.5} price="$ 180"/>
        <ProductCard productImg="./assets/image4_new.png" title="Sleeve Striped T-shirt" rating={4.5} price="$ 160" priceWithDiscount="$ 130" discount="-30%"/>
      </article>

      <Button content="View All" bgColor="bg-white" contentColor="text-black" href="#" border="border-1 border-[rgba(0,0,0,0.1)]"/>

      <div className="w-[90%] mx-auto pb-10 border-b border-gray-400"></div>
    </section>
  );
};

export default Arrivals;
