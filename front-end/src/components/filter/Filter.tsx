interface PropsFilter {
    content: string;
}

const Filter = (props: PropsFilter) => {
    return (
        <div className="flex justify-between py-1">
            <p className="opacity-60">{props.content}</p>
            <img src="/assets/Arrow_right2.svg" alt="Arrou right icon" />
        </div>
    );
}
 
export default Filter;