interface PropsProductImg {
    productImg: string;
    styles: string;
    onClick?: (src: any) => void;
    selected?: string;
}

const ProductImg = (props: PropsProductImg) => {

    const handleClick = () => {
        if (props.onClick) {
          props.onClick(props.productImg); // Chama onClick apenas se estiver definido
        }
      };

    return (
        <img
            src={props.productImg}
                alt="T-shirt"
                className={props.styles ? `rounded-[20px] ${props.styles} ${props.selected}` : "rounded-[20px]"}
                onClick={handleClick}
        />
    )
}
 
export default ProductImg;