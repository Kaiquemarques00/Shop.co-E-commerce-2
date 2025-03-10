interface PropsPageCard {
    content: string;   // O conteúdo que será exibido no PageCard (por exemplo, o número da página)
    onClick: () => void; // Função que será chamada quando o PageCard for clicado
    isActive: boolean;  // Indica se o PageCard é o ativo (se for a página atual)
  }

const PageCard = (props : PropsPageCard) => {
    return (
        <li
    onClick={props.onClick}
    className={`p-2 cursor-pointer ${props.isActive ? 'bg-gray-500 text-white' : 'bg-transparent'}`}
  >
    {props.content}
  </li>
    );
}
 
export default PageCard;