import Image from "next/image";

interface PropsPayments {
  imgSrc: string;
  imgAlt: string;
}

const Payments = (props: PropsPayments) => {
  return (
    <li>
      <figure className="h-6">
        <Image src={props.imgSrc} alt={props.imgAlt} width={40} height={26} />
      </figure>
    </li>
  );
};

export default Payments;
