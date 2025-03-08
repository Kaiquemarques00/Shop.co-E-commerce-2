interface PropsColor {
    selected?: boolean;
    color: string
}

const Color = (props: PropsColor) => {
    return props.selected ? (
            <li className={`${props.color} flex justify-center items-center rounded-full w-[40px] h-[40px]`}>
                <img src="/assets/verify.svg" alt="Verify icon" />
            </li>
        ) : (
            <li className={`${props.color} rounded-full w-[40px] h-[40px]`}></li>
        )
}
 
export default Color;