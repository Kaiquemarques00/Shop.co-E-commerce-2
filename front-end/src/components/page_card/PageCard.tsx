interface PropsPageCard {
    content: string;
}

const PageCard = (props : PropsPageCard) => {
    return (
        <li className="p-3 opacity-60">{props.content}</li>
    );
}
 
export default PageCard;