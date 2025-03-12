interface PropsProductImg {
    productImg: string;
    styles: string;
    onClick?: (src: any) => void;
    selected?: string;
    selectedLoad?: boolean;
}

const ProductImg = (props: PropsProductImg) => {

    const handleClick = () => {
        if (props.onClick) {
          props.onClick(props.productImg); // Chama onClick apenas se estiver definido
        }
      };

    return props.selectedLoad ? (
        <img
            src={props.productImg}
                alt="T-shirt"
                className={props.styles ? `rounded-[20px] border-1 border-black ${props.styles} ${props.selected}` : "rounded-[20px] border-1 border-black"}
                onClick={handleClick}
        />
    ) : (
        <img
            src={props.productImg}
                alt="T-shirt"
                className={props.styles ? `rounded-[20px] ${props.styles} ${props.selected}` : "rounded-[20px]"}
                onClick={handleClick}
        />
    )
}
 
export default ProductImg;