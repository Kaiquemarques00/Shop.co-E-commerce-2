interface PropsDiscount {
    discount: number;
}

const Discount = (props: PropsDiscount) => {
    return props.discount ? (
        <p className="text-[clamp(10px,2vw,12px)] bg-red-100 text-red-500 px-2 h-[30px] rounded-full flex items-center">
              -{props.discount}%
        </p>
    ) : (
        <p></p>
    );
}
 
export default Discount;