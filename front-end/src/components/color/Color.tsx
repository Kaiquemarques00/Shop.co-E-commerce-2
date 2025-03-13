import Image from "next/image";

interface PropsColor {
    selected?: boolean;
    color: string
}

const Color = (props: PropsColor) => {
    return props.selected ? (
            <li className={`${props.color} flex justify-center items-center rounded-full w-[37px] h-[37px] md:w-[40px] md:h-[40px] border border-black/20`}>
                <Image src="/assets/verify.svg" alt="Verify icon" />
            </li>
        ) : (
            <li className={`${props.color} rounded-full w-[37px] h-[37px] md:w-[40px] md:h-[40px] border border-black/20`}></li>
        )
}
 
export default Color;