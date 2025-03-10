import ProductCard from "@/components/product_card/ProductCard";

const MoreProducts = () => {
    return (
        <section className="md:px-25 mb-20">
            <article className="py-5 px-18 text-center">
                <h1 className="text-[clamp(32px,2vw,48px)]">You Might Also Like</h1>
            </article>
            <article className="flex overflow-hidden justify-between mb-5">
                <ProductCard href="/" productImg="/assets/image1_new.png" title="Polo With Contrast Trims" rating={4.0} priceWithDiscount="$212" price="$242" discount={30}/>
                <ProductCard href="/" productImg="/assets/image1_new.png" title="Gradient Graphic T-shirt" rating={3.5} price="140"/>
                <ProductCard href="/" productImg="/assets/image1_new.png" title="Polo With Tipping Details" rating={4.5} price="180"/>
                <ProductCard href="/" productImg="/assets/image1_new.png" title="Black Striped T-shirt" rating={5.0} priceWithDiscount="$120" price="$150" discount={30}/>
            </article>
        </section>
    );
}
 
export default MoreProducts;