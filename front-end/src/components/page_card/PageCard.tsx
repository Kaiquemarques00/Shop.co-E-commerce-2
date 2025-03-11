interface PropsPageCard {
    content: string;   // O conteúdo que será exibido no PageCard (por exemplo, o número da página)
    onClick: () => void; // Função que será chamada quando o PageCard for clicado
    isActive: boolean;  // Indica se o PageCard é o ativo (se for a página atual)
  }

const PageCard = (props : PropsPageCard) => {
    return (
        <li
    onClick={props.onClick}
    className={`p-2 cursor-pointer w-[36px] md:w-[40px] flex justify-center items-center rounded-[10px] ${props.isActive ? 'bg-[#F1F1F1] font-bold' : 'bg-transparent opacity-60'}`}
  >
    {props.content}
  </li>
    );
}
 
export default PageCard;