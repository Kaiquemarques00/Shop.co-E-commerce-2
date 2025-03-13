import Link from "next/link";
import Rating from "../rating/Rating";
import ProductImg from "../product_img/ProductImg";
import Discount from "../discount/Discount";

interface PropsProductCard {
  productImg: string;
  title: string;
  rating: number;
  price: string;
  discount?: number;
  priceWithDiscount?: string;
  href: string;
  style?: string;
  styleImg?: string;
}

const ProductCard = (props: PropsProductCard) => {
  return (
    <article className={`flex flex-col lg:py-10 ml-4 lg:m-0 transition-transform transform hover:scale-105 rounded-lg overflow-hidden ${props.style ? props.style : "min-w-[198px]"}`}>
      <Link href={props.href}>
        <ProductImg productImg={props.productImg} styles={`min-w-full h-[200px] ${props.styleImg}`} />
      </Link>
      <h2 className="text-[clamp(16px,2vw,20px)] font-bold pt-4">
        {props.title}
      </h2>
      <ul className="flex my-1">
        <Rating rating={props.rating} totalStars={5} />
        <li>
          <p className="ml-2 text-[clamp(12px,2vw,14px)]">
            {props.rating}/<span className="opacity-60">5</span>
          </p>
        </li>
      </ul>
      {props.discount ? (
        <div className="flex gap-2 items-center">
          <p className="font-bold text-lg text-[clamp(20px,2vw,24px)]">{props.priceWithDiscount}</p>
          <p className="text-lg line-through opacity-60 text-[clamp(20px,2vw,24px)]">{props.price}</p>
          <Discount discount={props.discount} />
        </div>
      ) : (
        <p className="font-bold text-lg text-[clamp(20px,2vw,24px)]">{props.price}</p>
      )}
    </article>
  );
};

export default ProductCard;
