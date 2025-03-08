interface PropsSize {
    selected?: boolean;
    content: string;
}

const Size = (props: PropsSize) => {
  return props.selected ? (
    <li
      className={`flex justify-center items-center bg-black text-white rounded-full h-[40px] px-5`}
    >
      <p className="text-sm">{props.content}</p>
    </li>
  ) : (
    <li className={`flex justify-center items-center bg-[#F0F0F0] text-[rgba(0,0,0,0.6)] h-[40px] px-5 rounded-full`}>
        <p className="text-sm">{props.content}</p>
    </li>
  );
};

export default Size;
