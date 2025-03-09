import Button from "@/components/button/Button";
import ProductCard from "@/components/product_card/ProductCard";

const Selling = () => {
  return (
    <div className="flex flex-wrap">
      <h1 className="w-full text-center py-10 text-4xl sm:text-5xl md:text-6xl">
        Top Selling
      </h1>

      <article className="flex w-full justify-around overflow-hidden mb-5 relative">
        <ProductCard productImg="./assets/image1_top.png" title="Vertical Striped Shirt" rating={5.0} price="$ 232" priceWithDiscount="$ 212" discount="-20%"/>
        <ProductCard productImg="./assets/image2_top.png" title="Courage Graphic T-shirt" rating={4.0} price="$ 145"/>
        <ProductCard productImg="./assets/image3_top.png" title="Loose Fit Bermuda Shorts" rating={3.0} price="$ 80"/>
        <ProductCard productImg="./assets/image4_top.png" title="Faded Skinny Jeans" rating={4.5} price="$ 211"/>
      </article>

      <Button content="View All" bgColor="bg-white" contentColor="text-black" href="#" border="border-1 border-[rgba(0,0,0,0.1)]"/>
    </div>
  );
};

export default Selling;
