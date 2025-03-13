import Image from "next/image";

interface PropsProductImg {
  productImg: string;
  styles: string;
  onClick?: (src: string) => void;
  selected?: string;
}

const ProductImg = ({
  productImg,
  styles,
  onClick,
  selected,
}: PropsProductImg) => {
  const isSelected = selected === productImg;

  return (
    <Image
      src={productImg}
      alt="T-shirt"
      className={`rounded-[20px] border-1 ${
        isSelected ? "border-black" : "border-transparent"
      } ${styles}`}
      onClick={() => onClick && onClick(productImg)}
    />
  );
};

export default ProductImg;
