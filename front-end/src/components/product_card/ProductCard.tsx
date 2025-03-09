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
}

const ProductCard = (props: PropsProductCard) => {



    return (
        <article className="flex flex-col min-w-[198px] ml-4">
            <Link href={props.href}>
              <ProductImg productImg={props.productImg} styles="min-w-full h-[200px]"/>
            </Link>
          <h2 className="text-[clamp(16px,2vw,20px)]">
            {props.title}
          </h2>
          <ul className="flex my-1">
            <Rating  rating={props.rating} totalStars={5}/>
            <li>
              <p className="ml-2 text-[clamp(12px,2vw,14px)]">
                {props.rating}/<span className="opacity-60">5</span>
              </p>
            </li>
          </ul>
          {props.discount ? (
            <div className="flex gap-2">
            <p className="font-bold text-lg">{props.priceWithDiscount}</p>
            <p className="text-lg line-through opacity-60">{props.price}</p>
            <Discount discount={props.discount}/>
          </div>
          ) : (
            <p className="font-bold text-lg">{props.price}</p>
          )}
          
        </article>
    );
}
 
export default ProductCard;