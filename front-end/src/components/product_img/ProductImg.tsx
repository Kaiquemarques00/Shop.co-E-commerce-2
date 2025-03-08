interface PropsProductImg {
    productImg: string;
    styles: string;
    selected?: boolean;
}

const ProductImg = (props: PropsProductImg) => {
    return props.selected ? (
        <img
            src={props.productImg}
                alt="T-shirt"
                className={props.styles ? `rounded-[20px] border-1 border-black ${props.styles}` : "rounded-[20px] border-1 border-black"}
        />
    ) : (
        <img
            src={props.productImg}
                alt="T-shirt"
                className={props.styles ? `rounded-[20px] ${props.styles}` : "rounded-[20px]"}
        />
    )
}
 
export default ProductImg;