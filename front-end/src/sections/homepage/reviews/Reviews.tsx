"use client";

import ReviewCard from "@/components/review_card/ReviewCard";
import Image from "next/image";

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="w-full flex flex-col lg:flex-row lg:flex-wrap mx-auto p-12 gap-10 overflow-hidden"
    >
      <article className="flex justify-between w-[90%] mx-auto">
        <h1 className="text-[clamp(32px,2vw,48px)] w-[80%]">
          Our happy customers
        </h1>
        <aside className="w-[70px] flex items-end justify-between">
          <figure>
            <Image
              src="/assets/Arrow_left.svg"
              alt="Left arrow"
              width={24}
              height={24}
              className="cursor-pointer"
            />
          </figure>
          <figure>
            <Image
              src="/assets/Arrow_right.svg"
              alt="Right arrow"
              width={24}
              height={24}
              className="cursor-pointer"
            />
          </figure>
        </aside>
      </article>

      <article
        id="carousel-container"
        className="mt-8 flex flex-wrap lg:flex-nowrap justify-center gap-5"
      >

        <ReviewCard name="Sarah M." 
        comment="I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations." 
        rating={5}
        blur="lg:filter lg:blur-[2.5px]"
        />
        <ReviewCard name="Sarah M." 
        comment="I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations." 
        rating={5}
        /><ReviewCard name="Alex K." 
        comment="Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions." 
        rating={5}
        /><ReviewCard name="James L." 
        comment="As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends." 
        rating={5}
        /><ReviewCard name="Mooen." 
        comment="As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends." 
        rating={5}
        blur="lg:filter lg:blur-[2.5px]"
        />
      </article>
    </section>
  );
}
