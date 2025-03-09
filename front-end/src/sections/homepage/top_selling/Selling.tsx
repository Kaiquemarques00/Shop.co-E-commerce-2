import axios from 'axios';
import { useEffect, useState } from 'react';

import Button from "@/components/button/Button";
import ProductCard from "@/components/product_card/ProductCard";

const Selling = () => {
  const [products, setProducts] = useState([]);

  console.log(products)

  useEffect(() => {
    axios.get('http://localhost:3001/products/tag/top-selling')
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="flex flex-wrap">
      <h1 className="w-full text-center py-10 text-4xl sm:text-5xl md:text-6xl">
        Top Selling
      </h1>

      <article className="flex w-full justify-around overflow-hidden mb-5 relative">
      {products.map((product: any) => (
          <ProductCard key={product.id} href={`/product/${product.id}`} productImg={`http://localhost:3001/uploads${product.images[0].url}`} title={product.name_product} rating={product.rating} price={product.price} discount={product.discount} priceWithDiscount={product.price_discount}/>
        ))}
      </article>

      <Button content="View All" bgColor="bg-white" contentColor="text-black" href="#" border="border-1 border-[rgba(0,0,0,0.1)]"/>
    </div>
  );
};

export default Selling;
