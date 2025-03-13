import Image from "next/image";

interface PropsRating {
  rating: number;
  totalStars: number;
  card?: boolean;
  style?: boolean;
}

const Rating = (props: PropsRating) => {
  const stars = Array.from({ length: props.totalStars }, (_, index) => {
    if (props.rating > index + 0.5) {
      // Se o rating for maior que o índice + 0.5, a estrela será cheia
      return "/assets/Full_star.svg";
    } else if (props.rating > index) {
      // Se o rating for maior que o índice, mas menor que o índice + 1, a estrela será metade
      return "/assets/Half_star.svg";
    } else {
      // Caso contrário, não renderiza nada
      return null;
    }
  });

  return (
    <>
        {stars.map((star, index) =>
          star ? (
            <li key={index} className={props.style ? "w-[19px] h-[19px] md:w-[25px] md:h-[25px]" : "w-[16px] h-[16px] md:w-[19px] md:h-[19px]"}>
                <Image src={star} alt="Star" className="star h-full" />
            </li>
          ) : null
        )}
    </>
  );
};

export default Rating;
