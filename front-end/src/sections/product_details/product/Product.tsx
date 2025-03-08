import Button from "@/components/button/Button";
import Color from "@/components/color/Color";
import ProductImg from "@/components/product_img/ProductImg";
import Rating from "@/components/rating/Rating";
import Size from "@/components/size/Size";

import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";

const Product = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);

  const [product, setProduct] = useState<any>(null);

  console.log(product);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/products/${id}`
        );

        setProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  return product ? (
    <section className="p-4 md:px-25 flex flex-col md:flex-row md:gap-10">
      <article className="grid grid-cols-3 gap-2 md:grid-cols-[150px_1fr] md:gap-3 md:grid-rows-3 md:w-6/12">
        <ProductImg
          productImg={`http://localhost:3001/uploads/products/${product.product_img}`}
          styles="col-span-3 w-full h-full md:col-start-2 md:row-span-3"
        />
        <ProductImg
          productImg="/assets/image1_new.png"
          styles="md:col-start-1 md:row-start-1 md:h-12/12"
          selected
        />
        <ProductImg
          productImg="/assets/image1_new.png"
          styles="md:col-start-1 md:h-12/12"
        />
        <ProductImg
          productImg="/assets/image1_new.png"
          styles="md:col-start-1 md:h-12/12"
        />
      </article>

      <article className="md:w-6/12">
        <article className="flex flex-col gap-2 text-[clamp(14px,2vw,16px)] py-4 md:pt-0">
          <h1 className="text-[clamp(24px,3vw,40px)] pr-25 md:p-0">
          ${product.name_product}
          </h1>
          <ul className="flex">
            <Rating rating={product.rating} totalStars={5} />
            <li>
              <p className="ml-2 ">
              {product.rating}<span className="opacity-60">/5</span>
              </p>
            </li>
          </ul>
          <div className="flex gap-2">
            <p className="font-bold text-lg">{product.price_discount}</p>
            <p className="text-lg line-through opacity-60">{product.price}</p>
            <p className="text-xs bg-red-100 text-red-500 px-2 py-1 rounded-full">
              -{product.discount}%
            </p>
          </div>
          <p className="opacity-60">
          {product.description}
          </p>
        </article>

        <article className="py-4 border-y border-[rgba(0,0,0,0.1)] text-[clamp(14px,2vw,16px)]">
          <p className="opacity-60 mb-3">Select Colors</p>
          <ul className="flex gap-2">
            <Color selected color="bg-[#4F4631]" />
            <Color color="bg-[#314F4A]" />
            <Color color="bg-[#31344F]" />
          </ul>
        </article>

        <article className="py-4 border-b border-[rgba(0,0,0,0.1)] text-[clamp(14px,2vw,16px)]">
          <p className="opacity-60 mb-3">Choose Size</p>
          <ul className="flex gap-2">
            <Size content="Small" />
            <Size content="Medium" />
            <Size content="Large" selected />
            <Size content="X-Large" />
          </ul>
        </article>

        <article className="flex gap-3 pt-5 text-[clamp(14px,2vw,16px)]">
          <div className="flex h-[40px] md:h-[50px] w-5/12 md:w-3/12 items-center bg-[#F0F0F0] rounded-full px-4">
            <img src="/assets/Less.svg" alt="" className="w-[20px] h-[20px]" />
            <p className="w-3/3 h-[30px] flex items-center justify-center font-bold">
              1
            </p>
            <img src="/assets/More.svg" alt="" className="w-[20px] h-[20px]" />
          </div>
          <Button
            content="Add to Cart"
            href="/"
            bgColor="bg-black"
            contentColor="text-white h-[40px] md:h-[50px]"
            containerStyle="lg:mx-0"
          />
        </article>
      </article>
    </section>
  ) : (
    <p>Carregando...</p>
  );
};

export default Product;
