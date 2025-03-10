import Button from "@/components/button/Button";
import Color from "@/components/color/Color";
import Filter from "@/components/filter/Filter";
import Size from "@/components/size/Size";
import Slider from "@/components/slider/Slider";

import { useState } from "react";

const Filters = () => {
  const [price, setPrice] = useState([50, 200]);

  return (
    <section className="flex flex-col lg:w-3/12 lg:p-5 border border-black/20 rounded-2xl justify-between">
      <article className="border-b border-black/10 py-5">
        <div className="flex justify-between">
          <h1>Filters</h1>
          <img src="/assets/Filter.svg" alt="Filter icon" />
        </div>
        <Filter content="T-shirts" />
        <Filter content="Shorts" />
        <Filter content="Shirts" />
        <Filter content="Hoodie" />
        <Filter content="Jeans" />
      </article>

      <article className="border-b border-black/10 py-5">
        <div className="flex justify-between">
          <h1>Price</h1>
          <img src="/assets/Arrow_top.svg" alt="Arrow top icon" />
        </div>
        <Slider
          min={0}
          max={300}
          defaultMin={50}
          defaultMax={200}
          onChange={setPrice}
        />
        <div className="flex justify-between mt-3 text-sm text-gray-600">
          <span>${price[0]}</span>
          <span>${price[1]}</span>
        </div>
      </article>

      <article className="border-b border-black/10 py-5">
        <div className="flex justify-between">
          <h1>Price</h1>
          <img src="/assets/Arrow_top.svg" alt="Arrow top icon" />
        </div>
        <ul className="grid grid-cols-5 gap-2 place-items-center">
          <Color color="bg-[#00C12B]" />
          <Color color="bg-[#F50606]" />
          <Color color="bg-[#F5DD06]" />
          <Color color="bg-[#F57906]" />
          <Color color="bg-[#06CAF5]" />
          <Color color="bg-[#063AF5]" selected />
          <Color color="bg-[#7D06F5]" />
          <Color color="bg-[#F506A4]" />
          <Color color="bg-[#FFFFFF]" />
          <Color color="bg-[#000000]" />
        </ul>
      </article>

      <article className="border-b border-black/10 py-5">
        <div className="flex justify-between">
          <h1>Size</h1>
          <img src="/assets/Arrow_top.svg" alt="Arrow top icon" />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Size content="XX-Small" />
          <Size content="X-Small" />
          <Size content="Small" />
          <Size content="Medium" />
          <Size content="Large" selected />
          <Size content="X-Large" />
          <Size content="XX-Large" />
          <Size content="3X-Large" />
          <Size content="4X-Large" />
        </div>
      </article>

      <article className="py-5">
        <div className="flex justify-between">
          <h1>Dress Style</h1>
          <img src="/assets/Arrow_top.svg" alt="Arrow top icon" />
        </div>
        <Filter content="Casual" />
        <Filter content="Formal" />
        <Filter content="Party" />
        <Filter content="Gym" />
        <Button
            content="Apply Filter"
            bgColor="bg-black"
            contentColor="text-white h-[40px] md:h-[50px]"
            containerStyle="lg:mx-0"
          />
      </article>
    </section>
  );
};

export default Filters;
