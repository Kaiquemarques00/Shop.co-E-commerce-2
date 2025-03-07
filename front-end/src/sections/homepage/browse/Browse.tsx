import CategoryCard from "@/components/category_card/CategoryCard";

const Browse = () => {
    return (
        <div className="w-11/12 mx-auto mt-12 bg-gray-200 rounded-2xl py-2">
      <h1 className="text-center py-10 text-4xl sm:text-5xl md:text-6xl">
        Browse by dress style
      </h1>

      <article className="grid grid-cols-1 gap-y-5 md:gap-x-5 md:grid-cols-3 px-5 md-px-15">

        <CategoryCard  categoryImg="./assets/image1_category.png" alt="A person in casual clothing" title="Casual" containerStyle="md:col-span-1"/>
        <CategoryCard  categoryImg="./assets/image2_category.png" alt="A person in formal clothing" title="Formal" containerStyle="md:col-span-2"/>
        <CategoryCard  categoryImg="./assets/image3_category.png" alt="A person in party clothes" title="Party" containerStyle="md:col-span-2"/>
        <CategoryCard  categoryImg="./assets/image4_category.png" alt="A person in gym clothes" title="Gym" containerStyle="md:col-span-1 mb-5"/>

        {/* <article className="w-full sm:w-1/3 p-2">
          <figure className="relative w-11/12 mx-auto h-[210px] sm:h-[310px]">
            <img
              src="./assets/image1_category.png"
              alt="A person in casual clothing"
              className="w-full h-full object-cover rounded-xl"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 text-center font-bold text-xl sm:text-3xl text-white bg-black bg-opacity-50 p-4">
              Casual
            </figcaption>
          </figure>
        </article>

        <article className="w-full sm:w-1/2 p-2">
          <figure className="relative w-11/12 mx-auto h-[210px] sm:h-[310px]">
            <img
              src="./assets/image2_category.png"
              alt="A person in formal clothing"
              className="w-full h-full object-cover rounded-xl"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 text-center font-bold text-xl sm:text-3xl text-white bg-black bg-opacity-50 p-4">
              Formal
            </figcaption>
          </figure>
        </article>

        <article className="w-full sm:w-1/3 p-2">
          <figure className="relative w-11/12 mx-auto h-[210px] sm:h-[310px]">
            <img
              src="./assets/image3_category.png"
              alt="A person in party clothes"
              className="w-full h-full object-cover rounded-xl"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 text-center font-bold text-xl sm:text-3xl text-white bg-black bg-opacity-50 p-4">
              Party
            </figcaption>
          </figure>
        </article>

        <article className="w-full sm:w-1/3 p-2">
          <figure className="relative w-11/12 mx-auto h-[210px] sm:h-[310px]">
            <img
              src="./assets/image4_category.png"
              alt="A person in gym clothing"
              className="w-full h-full object-cover rounded-xl"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 text-center font-bold text-xl sm:text-3xl text-white bg-black bg-opacity-50 p-4">
              Gym
            </figcaption>
          </figure>
        </article> */}
      </article>
    </div>
    );
}
 
export default Browse;