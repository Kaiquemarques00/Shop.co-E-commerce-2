import Button from "@/components/button/Button";
import Color from "@/components/color/Color";
import Filter from "@/components/filter/Filter";
import Size from "@/components/size/Size";
import Slider from "@/components/slider/Slider";

import { useState } from "react";

interface PropsFiltersMobile {
  isOpen: boolean;
  onClose?: () => void;
}

const FiltersMobile = (props: PropsFiltersMobile) => {
  const [price, setPrice] = useState([50, 200]);

  return (
    <article className="fixed overflow-y-scroll z-10 inset-0 w-full bg-[rgba(0,0,0,0.3)] flex items-end">
      <article className="p-5 absolute top-21 bg-white w-full rounded-t-[20px]">
        <article className="border-b border-black/10 pb-4">
          <div className="flex justify-between border-b border-black/10 pb-4">
            <h1 className="">Filters</h1>
            <img src="/assets/Close_modal.svg" alt="Close icon" onClick={props.onClose}/>
          </div>
          <Filter content="T-shirts" />
          <Filter content="Shorts" />
          <Filter content="Shirts" />
          <Filter content="Hoodie" />
          <Filter content="Jeans" />
        </article>

        <article className="border-b border-black/10 py-4">
          <div className="flex justify-between pb-4">
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

        <article className="border-b border-black/10 py-4">
          <div className="flex justify-between pb-4">
            <h1>Colors</h1>
            <img src="/assets/Arrow_top.svg" alt="Arrow top icon" />
          </div>
          <ul className="grid grid-cols-7 gap-2">
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
          <div className="flex justify-between pb-4">
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
          <div className="flex justify-between pb-4">
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
            containerStyle="lg:mx-0 mt-5"
          />
        </article>
      </article>
    </article>
  );
};

export default FiltersMobile;
