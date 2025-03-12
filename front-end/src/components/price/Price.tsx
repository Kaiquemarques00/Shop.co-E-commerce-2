interface PropsPrice {
    price: string;
    discount?: boolean;
}

const Price = (props: PropsPrice) => {
    return props.discount ? (
        <p className="text-lg line-through opacity-60">{props.price}</p>
    ) : (
        <p className="font-bold text-lg">{props.price}</p>

    )
}
 
export default Price;