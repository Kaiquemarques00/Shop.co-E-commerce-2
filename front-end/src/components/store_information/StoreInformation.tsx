interface PropsInformation {
    title: string;
    content: string;
    containerStyle?: string;
    titleStyle?: string;
    contentStyle?: string;
  }

const StoreInformation = (props: PropsInformation) => {
  return (
    <>
      <li className={`${props.containerStyle ? `p-3 ${props.containerStyle}` : "p-3"}`}>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">{props.title}</h2>
        <p className="text-sm sm:text-base md:text-md opacity-60">{props.content}</p>
      </li>
    </>
  );
};

export default StoreInformation;
