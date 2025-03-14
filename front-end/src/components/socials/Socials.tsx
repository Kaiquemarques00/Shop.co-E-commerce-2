import Image from "next/image";
import Link from "next/link";

interface PropsSocials{
    href: string;
    imgSrc: string;
    imgAlt: string;
    status?: string;
    height?: string;
}

const Socials = (props: PropsSocials) => {
    return (
        <li className={`w-10 h-10 flex items-center justify-center rounded-full border border-black/20 ${props.status ? props.status : "bg-white"}`}>
            <Link href={props.href}>
              <Image
                src={props.imgSrc}
                alt={props.imgAlt}
                width={18}
                height={18}
                className={props.height}
              />
            </Link>
        </li>
    );
}
 
export default Socials;