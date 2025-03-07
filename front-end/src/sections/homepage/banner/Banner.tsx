import Brands from "@/components/brands/Brands";
import Button from "@/components/button/Button";
import StoreInformation from "@/components/store_information/StoreInformation";

const Banner = () => {
  return (
    <section id="presentation" className="bg-[#F2F0F1] relative flex flex-col">
      <article className="text-presentation w-full md:max-w-2/3 flex flex-col justify-center h-[300px]  lg:max-w-2/4 px-5 sm:px-15 z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl py-3">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h1>
        <p className="text-sm sm:text-base opacity-60">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
      </article>

      <Button content="Shop now" href="/shop" bgColor="bg-black" contentColor="text-white" containerStyle="lg:mx-0 lg:ml-15"/>

      <ul className="grid grid-cols-2 gap-x-3 sm:gap-x-5 sm:grid-cols-3 lg:grid-cols-3 lg:h-[150px] sm:w-full lg:w-6/12 p-4 mt-3 px-6 z-10 lg:ml-6">
        <StoreInformation title="200+" content="International Brands" containerStyle="border-r-1 border-gray-300"/>
        <StoreInformation title="2,000+" content="High-Quality Products" containerStyle="sm:border-r-1 sm:border-gray-300"/>
        <StoreInformation title="30,000+" content="Happy Customers" containerStyle="p-4 col-span-2 sm:col-span-1 align-center flex flex-col items-center sm:block"/>
      </ul>

      <article className="banner relative max-h-[448px] z-1 lg:absolute lg:w-full lg:min-h-[663px]">
        <figure className="figure-banner relative h-[448px] w-full lg:min-h-[663px]">
          <img
            className="background-img object-cover object-[89%] w-full h-full"
            src="./assets/2_people.png"
            alt="2 models"
          />
        </figure>
        <div className="stars flex justify-between items-start max-w-[95%] min-h-[150px] relative sm:gap-15 top-[-400px] z-10 justify-end lg:top-[-550px] lg:gap-45">
          <figure className="mr-[225px] self-end">
            <img
              className="max-w-[44px] lg:max-w-[56px]"
              src="./assets/Minor_star.svg"
              alt="Minor star"
            />
          </figure>
          <figure>
            <img
              className="max-w-[76px] lg:max-w-[104px]"
              src="./assets/Biggest_star.svg"
              alt="Biggest star"
            />
          </figure>
        </div>
      </article>

      <Brands />
    </section>
  );
};

export default Banner;
