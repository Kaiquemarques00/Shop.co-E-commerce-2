import axios from 'axios';
import { useEffect, useState } from 'react';

import Button from "@/components/button/Button";
import ProductCard from "@/components/product_card/ProductCard";

const Arrivals = () => {

  const [products, setProducts] = useState([]);

  console.log(products)

  useEffect(() => {
    axios.get('http://localhost:3001/products/tag/new-arrivals')
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, []);


  return (
    <section className="flex flex-wrap justify-around mb-5 lg:flex-col">
      <h1 className="text-center py-10 text-[clamp(32px,4vw,48px)]">
        New Arrivals
      </h1>

      <article className="flex overflow-hidden justify-around mb-5">
        {products.map((product: any) => (
          <ProductCard key={product.id} href={`/product/${product.id}`} productImg={`http://localhost:3001/uploads/products/${product.product_img}`} title={product.name_product} rating={product.rating} price={product.price} discount={product.discount} priceWithDiscount={product.price_discount}/>
        ))}
      </article>

      <Button content="View All" bgColor="bg-white" contentColor="text-black" href="#" border="border-1 border-[rgba(0,0,0,0.1)]"/>

      <div className="w-[90%] mx-auto pb-10 border-b border-[rgba(0,0,0,0.1)]"></div>
    </section>
  );
};

export default Arrivals;
