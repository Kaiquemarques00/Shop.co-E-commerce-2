import Image from "next/image";

const Newsletter = () => {
    return (
        <article className="w-full bg-black text-white rounded-2xl p-6 md:p-12 flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-2xl md:text-4xl font-bold mb-6 md:mb-0 md:w-1/2">
            Stay up to date about our latest offers
          </h1>
          <form className="w-full md:w-1/3 space-y-2">
            <div className="flex items-center bg-white rounded-full px-4 h-11">
              <Image src="./assets/Email.svg" alt="Email icon" width={24} height={24} className="mr-3" />
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full outline-none text-sm text-black"
              />
            </div>
            <button
              type="submit"
              className="w-full h-11 bg-white text-black font-semibold rounded-full text-sm"
            >
              Subscribe to Newsletter
            </button>
          </form>
        </article>
    );
}
 
export default Newsletter;