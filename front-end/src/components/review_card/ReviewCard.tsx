import Image from "next/image";

import Rating from "../rating/Rating";

interface PropsReviewCard {
  name: string;
  comment: string;
  rating: number;
  blur?: string;
}

const ReviewCard = (props: PropsReviewCard) => {
  return (
    <article className={`border border-gray-300 p-5 lg:p-8 rounded-[30px] transition-transform duration-500 ease-in-out lg:min-w-2/7 ${props.blur}`}>
      <ul className="flex gap-1 mb-3">
        <Rating rating={props.rating} totalStars={5}  style/>
      </ul>
      <div className="flex items-center w-[150px] mb-3">
        <h2 className="text-[clamp(16px,2vw,20px)] mr-2">{props.name}</h2>
        <figure>
          <Image
            src="/assets/Checked.svg"
            alt="Checked icon"
            width={20}
            height={20}
          />
        </figure>
      </div>
      <blockquote className="text-[clamp(14px,2vw,16px)] opacity-60">
        {`"${props.comment}"`}
      </blockquote>
    </article>
  );
};

export default ReviewCard;
