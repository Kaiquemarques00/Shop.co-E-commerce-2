interface PropsProductImg {
    productImg: string;
    styles: string;
    onClick?: any;
    selected?: string;
}

const ProductImg = (props: PropsProductImg) => {

    return (
        <img
            src={props.productImg}
                alt="T-shirt"
                className={props.styles ? `rounded-[20px] ${props.styles} ${props.selected}` : "rounded-[20px]"}
                onClick={() => props.onClick(props.productImg)}
        />
    )
}
 
export default ProductImg;