import Image from "next/image";

const Brands = () => {
  return (
    <article className="brands bg-black flex relative justify-center gap-4 sm:gap-8 items-center flex-wrap py-10 z-10 lg:mt-38">
      <figure className="hidden lg:block">
        <Image src="./assets/Versace.svg" alt="Versace logo" />
      </figure>
      <figure className="hidden lg:block">
        <Image src="./assets/Zara.svg" alt="Zara logo" />
      </figure>
      <figure className="hidden lg:block">
        <Image src="./assets/Gucci.svg" alt="Gucci logo" />
      </figure>
      <figure className="hidden lg:block">
        <Image src="./assets/Prada.svg" alt="Prada logo" />
      </figure>
      <figure className="hidden lg:block">
        <Image src="./assets/Calvin_Klein.svg" alt="Calvin Klein logo" />
      </figure>
      <figure className="lg:hidden">
        <Image src="./assets/Versace_mobile.svg" alt="Versace logo" />
      </figure>
      <figure className="lg:hidden">
        <Image src="./assets/Zara_mobile.svg" alt="Zara logo" />
      </figure>
      <figure className="lg:hidden">
        <Image src="./assets/Gucci_mobile.svg" alt="Gucci logo" />
      </figure>
      <figure className="lg:hidden">
        <Image src="./assets/Prada_mobile.svg" alt="Prada logo" />
      </figure>
      <figure className="lg:hidden">
        <Image src="./assets/CK_mobile.svg" alt="Calvin Klein logo" />
      </figure>
    </article>
  );
};

export default Brands;
