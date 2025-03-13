import Image from "next/image";
import Link from "next/link";

interface PropsCategoryCard {
    categoryImg: string;
    title: string;
    alt: string;
    href: string;
    containerStyle?: string;
}

const CategoryCard = (props: PropsCategoryCard) => {
  return (
    <article className={`${props.containerStyle ? `w-full ${props.containerStyle}` : "w-full"}`}>
      <Link href={`/categories/${props.href.toLowerCase()}`} className="relative w-11/12 w-full mx-auto h-[190px] sm:h-[240px] md:h-[310px] md:mx-0">
        <Image
            src={props.categoryImg}
            alt={props.alt}
            className="w-full h-full object-cover h-[190px] md:h-[310px] rounded-xl"
          />
          <p className="absolute bottom-0 left-4 top-4 font-bold text-xl sm:text-3xl bg-opacity-50 p-4">
            {props.title}
            </p>
      </Link>
    </article>
  );
};

export default CategoryCard;
