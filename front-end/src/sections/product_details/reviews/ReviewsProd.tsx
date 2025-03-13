import Button from "@/components/button/Button";
import ReviewCard from "@/components/review_card/ReviewCard";
import Image from "next/image";

const ReviewsProd = () => {
  return (
    <section className="p-4 md:px-25">
      <article className="flex justify-between items-center mb-5">
        <article className="flex gap-3">
          <h2 className="font-bold">All Reviews</h2>
          <p className="opacity-60">{`(451)`}</p>
        </article>
        <article className="flex gap-2 md:gap-3">
          <div className="flex items-center px-2 bg-[#F0F0F0] rounded-full md:px-4">
            <Image src="/assets/Filter.svg" alt="Filter Icons" className="w-10"/>
          </div>
          <div className="hidden items-center gap-5 bg-[#F0F0F0] rounded-full gap-5 px-5 w-6/12 md:flex ">
            <p>Latest</p>
            <Image src="/assets/Down_arrow.svg" alt="Down Arrow" />
          </div>
          <Button
            content="Write a Review"
            href="/"
            bgColor="bg-black"
            contentColor="text-white h-[40px] md:h-[50px] px-2 text-xs md:text-base md:px-4"
            containerStyle="lg:mx-0"
          />
        </article>
      </article>
      <article className="grid md:grid-cols-2 gap-5">
            <ReviewCard rating={4.5} name="Samantha D." comment="I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."/>
            <ReviewCard rating={4.0} name="Samantha D." comment="I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."/>
            <ReviewCard rating={3.5} name="Samantha D." blur="hidden md:block" comment="I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."/>
            <ReviewCard rating={4.0} name="Samantha D." blur="hidden md:block" comment="I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."/>
            <ReviewCard rating={5.0} name="Samantha D." blur="hidden md:block" comment="I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."/>
            <ReviewCard rating={2.5} name="Samantha D." comment="I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."/>
      </article>
      <article className="flex justify-center mt-8 w-7/12 lg:w-3/12 m-auto">
      <Button
            content="Load More Reviews"
            href="/"
            bgColor="bg-white"
            contentColor="text-black h-[50px] text-sm md:text-base"
            containerStyle="lg:mx-0"
            border="border-1 border-[rgba(0,0,0,0.1)]"
          />
      </article>
    </section>
  );
};

export default ReviewsProd;
