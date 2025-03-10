import PageCard from "@/components/page_card/PageCard";
import ProductCard from "@/components/product_card/ProductCard";

const Products = () => {

  return (
    <section className="w-full">
      <article className="flex justify-between mb-5 items-end">
        <h2 className="text-[clamp(24px,3vw,32px)]">Casual</h2>
        <div className="flex gap-2 items-center">
          <p className="opacity-60">Showing 1-10 of 100 Products</p>
          <p className="opacity-60">Sort By:</p>
          <p className="font-bold">Most Popular</p>
          <img src="/assets/Down_arrow.svg" alt="Arrow Dowm icon" className="w-[16px] h-[16px]" />
        </div>
      </article>

      <article className="grid grid-cols-3 gap-5 gap-y-10 pb-10 border-b border-black/10">
        <ProductCard
          href="/"
          productImg="/assets/image1_new.png"
          title="Polo With Contrast Trims"
          rating={4.0}
          priceWithDiscount="$212"
          price="$242"
          discount={20}
        />
        <ProductCard
          href="/"
          productImg="/assets/image1_new.png"
          title="Polo With Contrast Trims"
          rating={4.0}
          priceWithDiscount="$212"
          price="$242"
          discount={20}
        />
        <ProductCard
          href="/"
          productImg="/assets/image1_new.png"
          title="Polo With Contrast Trims"
          rating={4.0}
          priceWithDiscount="$212"
          price="$242"
          discount={20}
        />
        <ProductCard
          href="/"
          productImg="/assets/image1_new.png"
          title="Polo With Contrast Trims"
          rating={4.0}
          priceWithDiscount="$212"
          price="$242"
          discount={20}
        />
        <ProductCard
          href="/"
          productImg="/assets/image1_new.png"
          title="Polo With Contrast Trims"
          rating={4.0}
          priceWithDiscount="$212"
          price="$242"
          discount={20}
        />
        <ProductCard
          href="/"
          productImg="/assets/image1_new.png"
          title="Polo With Contrast Trims"
          rating={4.0}
          priceWithDiscount="$212"
          price="$242"
          discount={20}
        />
        <ProductCard
          href="/"
          productImg="/assets/image1_new.png"
          title="Polo With Contrast Trims"
          rating={4.0}
          priceWithDiscount="$212"
          price="$242"
          discount={20}
        />
        <ProductCard
          href="/"
          productImg="/assets/image1_new.png"
          title="Polo With Contrast Trims"
          rating={4.0}
          priceWithDiscount="$212"
          price="$242"
          discount={20}
        />
        <ProductCard
          href="/"
          productImg="/assets/image1_new.png"
          title="Polo With Contrast Trims"
          rating={4.0}
          priceWithDiscount="$212"
          price="$242"
          discount={20}
        />
      </article>

      <article className="flex justify-between py-5 items-center">
        <div className="flex gap-3 p-2 border border-black/10 rounded-lg">
            <img src="/assets/Arrow_left.svg" alt="Arrow left"/>
            <p>Previous</p>
        </div>
        <div>
            <ul className="flex gap-2">
                <PageCard content="1"/>
                <PageCard content="2"/>
                <PageCard content="3"/>
                <PageCard content="..."/>
                <PageCard content="8"/>
                <PageCard content="9"/>
                <PageCard content="10"/>
            </ul>
        </div>
        <div className="flex gap-3 p-2 border border-black/10 rounded-lg">
            <p>Previous</p>
            <img src="/assets/Arrow_right.svg" alt="Arrow right"/>
        </div>
      </article>
    </section>
  );
};

export default Products;
