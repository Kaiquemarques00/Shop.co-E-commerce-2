const Promotion = () => {
  return (
    <article className="h-[34px] bg-black text-white flex justify-center items-center text-[clamp(0.8rem,2vw,0.9rem)]">
      <p>
        Sign up and get 20% off to your first order.{" "}
        <a href="#newsletter" className="underline text-white">
          Sign Up Now
        </a>
      </p>
      <figure className="hidden md:flex relative left-[25%] cursor-pointer ml-2">
        <img src="/assets/Close.svg" alt="Close icon" />
      </figure>
    </article>
  );
};

export default Promotion;