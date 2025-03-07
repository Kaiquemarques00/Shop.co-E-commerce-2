import Socials from "../socials/Socials";

interface PropsFooterCard {
  title: string;
  content: string | any;
  first?: boolean;
}

const FooterCard = (props: PropsFooterCard) => {
  return props.first ? (
    <div className="w-full md:w-1/5 md:mr-8 flex flex-col gap-3">
      <h1 className="text-3xl font-bold">{props.title}</h1>
      <p className="text-sm opacity-60">{props.content}</p>
      <ul className="flex gap-3 mt-4">
        <Socials href="#" imgSrc="./assets/Twitter.svg" imgAlt="Twitter logo" />
        <Socials
          href="#"
          imgSrc="./assets/Facebook.svg"
          imgAlt="Facebook logo"
          status="bg-black"
          height="h-[20px]"
        />
        <Socials
          href="#"
          imgSrc="./assets/Instagram.svg"
          imgAlt="Instragram logo"
        />
        <Socials href="#" imgSrc="./assets/Github.svg" imgAlt="Github logo" />
      </ul>
    </div>
  ) : (
    <div className="w-1/2 md:w-[18%] space-y-4">
      <h2 className="uppercase text-sm font-medium">{props.title}</h2>
      <nav>
        <ul className="space-y-4 text-sm opacity-60">
          {props.content.map((link: any) => (
            <li key={link}>
                <a href={`/${link}`}>{link}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default FooterCard;
