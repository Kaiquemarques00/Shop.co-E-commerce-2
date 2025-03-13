import Button from "@/components/button/Button";
import Color from "@/components/color/Color";
import ProductImg from "@/components/product_img/ProductImg";
import Rating from "@/components/rating/Rating";
import Size from "@/components/size/Size";

import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";
import Discount from "@/components/discount/Discount";
import Price from "@/components/price/Price";
import Modal from "@/components/modal/Modal";
import Image from "next/image";

const Product = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);

  const [product, setProduct] = useState<any>(null);

  const [src, setSrc] = useState("");
  const [selected, setSelected] = useState("");

  const [isModalOpen, setIsModalOpen] = useState<boolean>();

  const handleClickImg = (srcValue: string) => {
    setSrc(srcValue);
    setSelected(srcValue);
  };

  const handleClickAddCart = () => {
    setIsModalOpen(true);
    setTimeout(() => setIsModalOpen(false), 3000);
  };

  console.log(product);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://shop-co-e-commerce-2-1.onrender.com/products/${id}`
        );

        setProduct(response.data);
        setSrc(response.data.url_image);

        if (response.data && response.data.url_image) {
          setSelected(response.data.url_image);
        }
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
          productImg={
            src
              ? src
              : `https://res.cloudinary.com/dxry5frky/image/upload/v1741864205/tqmawz4hmb0hjapjm6ob.png`
          }
          styles={`col-span-3 w-full h-full md:col-start-2 md:row-span-3`}
        />
        <ProductImg
          productImg={product.url_image}
          styles={`md:col-start-1 md:row-start-1 md:h-12/12 h-[120px] w-[115px] lg:w-full`}
          onClick={handleClickImg}
          selected={selected}
        />
        <ProductImg
          productImg="https://res.cloudinary.com/dxry5frky/image/upload/v1741864610/wmbelbvojmeowkrfzifk.png"
          styles={`md:col-start-1 md:h-12/12 h-[120px] w-[115px] lg:w-full`}
          onClick={handleClickImg}
          selected={selected}
        />
        <ProductImg
          productImg="https://res.cloudinary.com/dxry5frky/image/upload/v1741864449/grobr0dju3qc3gvdegkz.png"
          styles={`md:col-start-1 md:h-12/12 h-[120px] w-[115px] lg:w-full`}
          onClick={handleClickImg}
          selected={selected}
        />
      </article>

      <article className="md:w-6/12">
        <article className="flex flex-col gap-2 text-[clamp(14px,2vw,16px)] py-4 md:pt-0">
          <h1 className="text-[clamp(24px,3vw,40px)] pr-25 md:p-0">
            {product.name_product}
          </h1>
          <ul className="flex">
            <Rating rating={product.rating} totalStars={5} style/>
            <li>
              <p className="ml-2 flex">
                {product.rating}
                <span className="opacity-60">/5</span>
              </p>
            </li>
          </ul>
          <div className="flex gap-2">
            {product.price_discount ? (
              <p className="font-bold text-[clamp(24px,2vw,32px)]">{product.price_discount}</p>
            ) : (
              <p className="hidden"></p>
            )}
            
            <Price price={product.price} discount={product.discount} style="text-[clamp(24px,2vw,32px)]"/>
            <Discount discount={product.discount} />
          </div>
          <p className="opacity-60">{product.description}</p>
        </article>

        <article className="py-4 border-y border-[rgba(0,0,0,0.1)] text-[clamp(14px,2vw,16px)]">
          <p className="opacity-60 mb-3">Select Colors</p>
          <ul className="flex gap-2">
            <Color selected color={`bg-[#4F4631]`} />
            <Color color={`bg-[#314F4A]`} />
            <Color color={`bg-[#31344F]`} />
          </ul>
        </article>

        <article className="py-4 border-b border-[rgba(0,0,0,0.1)] text-[clamp(14px,2vw,16px)]">
          <p className="opacity-60 mb-3">Choose Size</p>
          <ul className="flex gap-2">
            <Size content={product.size[0]} />
            <Size content={product.size[1]} />
            <Size content={product.size[2]} selected />
            <Size content={product.size[3]} />
          </ul>
        </article>

        <article className="flex gap-3 pt-5 text-[clamp(14px,2vw,16px)]">
          <div className="flex h-[40px] md:h-[50px] w-5/12 md:w-3/12 items-center bg-[#F0F0F0] rounded-full px-4">
            <Image src="/assets/Less.svg" alt="" className="w-[20px] h-[20px]" />
            <p className="w-3/3 h-[30px] flex items-center justify-center font-bold">
              1
            </p>
            <Image src="/assets/More.svg" alt="" className="w-[20px] h-[20px]" />
          </div>
          <Button
            content="Add to Cart"
            bgColor="bg-black"
            contentColor="text-white h-[40px] md:h-[50px]"
            containerStyle="lg:mx-0"
            onClick={handleClickAddCart}
          />
          {isModalOpen && (
            <Modal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              title="Produto Adicionado ao Carrinho"
              message="Seu produto foi adicionado com sucesso!"
            />
          )}
        </article>
      </article>
    </section>
  ) : (
    <p>Carregando...</p>
  );
};

export default Product;
