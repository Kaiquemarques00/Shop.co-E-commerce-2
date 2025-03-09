interface PropsDiscount {
    discount: number;
}

const Discount = (props: PropsDiscount) => {
    return props.discount ? (
        <p className="text-xs bg-red-100 text-red-500 px-2 py-1 rounded-full">
              -{props.discount}%
        </p>
    ) : (
        <p></p>
    );
}
 
export default Discount;