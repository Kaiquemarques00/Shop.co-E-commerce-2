import axios from 'axios';
import { useEffect, useState } from 'react';

import CategoryCard from "@/components/category_card/CategoryCard";

const Browse = () => {

  const [categories, setCategories] = useState([]);

  console.log(categories)

  useEffect(() => {
    axios.get('https://shop-co-e-commerce-2.onrender.com/categories')
      .then(response => setCategories(response.data))
      .catch(error => console.error(error));
  }, []);

    return (
        <div className="w-11/12 mx-auto mt-12 bg-gray-200 rounded-2xl py-2">
      <h1 className="text-center py-10 text-4xl sm:text-5xl md:text-6xl">
        Browse by dress style
      </h1>

      <article className="grid grid-cols-1 gap-y-5 md:gap-x-5 md:grid-cols-3 pb-5 px-5 lg:px-12 md:pb-10">

      {categories.map((category: any, index) => (
          <CategoryCard key={category.id} href={category.name_category} categoryImg={`./assets/image${index + 1}_category.png`} alt="A person in casual clothing" title={category.name_category} containerStyle={index === 0 || index === 3 ? "md:col-span-1" : "md:col-span-2"}/>
      ))}
      </article>
    </div>
    );
}
 
export default Browse;