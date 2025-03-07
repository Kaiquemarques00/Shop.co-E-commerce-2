import Link from "next/link";

interface PropsButton {
  content: string;
  href: string;
  bgColor: string;
  contentColor: string;
  border?: string;
  contentStyle?: string;
  containerStyle?: string;
}

const Button = (props: PropsButton) => {

  return (
    <div className={`${props.containerStyle ? `w-11/12 mx-auto z-10 lg:w-2/12 ${props.containerStyle}` : "w-11/12 mx-auto z-10 lg:w-2/12"}`}>
        <Link className={`${props.contentStyle ? props.contentStyle : 
        `block h-12 ${props.bgColor} rounded-full ${props.contentColor} font-medium text-center flex justify-center items-center ${props.border}`}`} 
        href={props.href}>
                {props.content}
        </Link>
    </div>
  );
};

export default Button;
