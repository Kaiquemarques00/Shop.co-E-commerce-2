interface PropsPrice {
    price: string;
    discount?: boolean;
    style?: string;
}

const Price = (props: PropsPrice) => {
    return props.discount ? (
        <p className={`text-lg line-through opacity-60 ${props.style}`}>{props.price}</p>
    ) : (
        <p className={`font-bold text-lg ${props.style}`}>{props.price}</p>

    )
}
 
export default Price;