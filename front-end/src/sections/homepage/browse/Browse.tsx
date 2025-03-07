import CategoryCard from "@/components/category_card/CategoryCard";

const Browse = () => {
    return (
        <div className="w-11/12 mx-auto mt-12 bg-gray-200 rounded-2xl py-2">
      <h1 className="text-center py-10 text-4xl sm:text-5xl md:text-6xl">
        Browse by dress style
      </h1>

      <article className="grid grid-cols-1 gap-y-5 md:gap-x-5 md:grid-cols-3 pb-5 px-5 lg:px-12 md:pb-10">

        <CategoryCard  categoryImg="./assets/image1_category.png" alt="A person in casual clothing" title="Casual" containerStyle="md:col-span-1"/>
        <CategoryCard  categoryImg="./assets/image2_category.png" alt="A person in formal clothing" title="Formal" containerStyle="md:col-span-2"/>
        <CategoryCard  categoryImg="./assets/image3_category.png" alt="A person in party clothes" title="Party" containerStyle="md:col-span-2"/>
        <CategoryCard  categoryImg="./assets/image4_category.png" alt="A person in gym clothes" title="Gym" containerStyle="md:col-span-1"/>
      </article>
    </div>
    );
}
 
export default Browse;