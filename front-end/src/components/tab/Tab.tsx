interface PropsTab {
    content: string;
    selected?: boolean;
}

const Tab = (props: PropsTab) => {
    return props.selected ? (
        <article>
            <p className="font-bold border-b-2 border-black">{props.content}</p>
        </article>
    ) : (
        <article>
            <p className="">{props.content}</p>
        </article>
    );
}
 
export default Tab;