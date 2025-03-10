import PageCard from "@/components/page_card/PageCard";
import ProductCard from "@/components/product_card/ProductCard";

import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Products = () => {
  const router = useRouter();
  const { category_name } = router.query;

  const [category, setCategory] = useState<any>([]);
  const [products, setProducts] = useState<any>([]);

  console.log(category_name);
  console.log(category);
  console.log(products);

  useEffect(() => {
    const fetchData= async () => {
      try {
        const responseCategory = await axios.get(
          `http://localhost:3001/categories/${category_name}`
        );

        setCategory(responseCategory.data);

        const responseProduct = await axios.get(
          `http://localhost:3001/products/category/${responseCategory.data[0].id}`
        );

        setProducts(responseProduct.data);

      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [category_name]);

  return (
    <section className="w-full">
      <article className="flex justify-between mb-5 items-end">
        <h2 className="text-[clamp(24px,3vw,32px)]">Casual</h2>
        <div className="flex gap-2 items-center">
          <p className="opacity-60">Showing 1-10 of 100 Products</p>
          <p className="opacity-60">Sort By:</p>
          <p className="font-bold">Most Popular</p>
          <img
            src="/assets/Down_arrow.svg"
            alt="Arrow Dowm icon"
            className="w-[16px] h-[16px]"
          />
        </div>
      </article>

      <article className="grid grid-cols-3 gap-5 gap-y-10 pb-10 border-b border-black/10">
      {products.map((product: any) => (
          <ProductCard key={product.id} href={`/product/${product.id}`} productImg={`http://localhost:3001/uploads${product.images[0].url}`} title={product.name_product} rating={product.rating} price={product.price} discount={product.discount} priceWithDiscount={product.price_discount}/>
        ))}
      </article>

      <article className="flex justify-between py-5 items-center">
        <div className="flex gap-3 p-2 border border-black/10 rounded-lg">
          <img src="/assets/Arrow_left.svg" alt="Arrow left" />
          <p>Previous</p>
        </div>
        <div>
          <ul className="flex gap-2">
            <PageCard content="1" />
            <PageCard content="2" />
            <PageCard content="3" />
            <PageCard content="..." />
            <PageCard content="8" />
            <PageCard content="9" />
            <PageCard content="10" />
          </ul>
        </div>
        <div className="flex gap-3 p-2 border border-black/10 rounded-lg">
          <p>Previous</p>
          <img src="/assets/Arrow_right.svg" alt="Arrow right" />
        </div>
      </article>
    </section>
  );
};

export default Products;
