import Image from "next/image";
import Promotion from "../../components/promotion/Promotion";

const Header = () => {
  return (
    <>
      <header>
        <Promotion />

        <article className="flex items-center justify-between py-4 px-4 md:mx-25 border-b-1 border-black/10">
          <article className="flex items-center gap-4">
            <figure className="md:hidden">
              <Image
                src="/assets/Menu_hamburguer.svg"
                alt="Menu icon"
                className="w-5 h-5"
              />
            </figure>

            <h1 className="text-xl font-bold">SHOP.CO</h1>
          </article>
          <nav className="hidden sm:block">
            <ul className="flex items-center gap-6 text-base">
              <li>
                <div className="flex items-center gap-1">
                  <a href="#" className="hover:underline">
                    Shop
                  </a>
                  <figure>
                    <Image
                      src="/assets/Down_arrow.svg"
                      alt="Down arrow icon"
                      className="w-3 h-3"
                    />
                  </figure>
                </div>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  On Sale
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  New Arrival
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Brands
                </a>
              </li>
            </ul>
          </nav>

          <form
            action="/search"
            className="hidden lg:block w-full max-w-md mx-8"
          >
            <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full md:h-[48px]">
              <figure>
                <Image
                  src="/assets/Search.svg"
                  alt="Search icon"
                  className="w-4 h-4"
                />
              </figure>
              <input
                type="text"
                name="q"
                placeholder="Search for products..."
                className="w-full bg-transparent outline-none text-sm"
              />
            </div>
          </form>

          {/* Ícones */}
          <aside className="flex items-center gap-4">
            {/* Ícone de busca (mobile) */}
            <figure className="lg:hidden">
              <Image
                src="/assets/Search_black.svg"
                alt="Search icon"
                className="w-5 h-5"
              />
            </figure>
            <figure>
              <Image src="/assets/Cart.svg" alt="Cart icon" className="w-5 h-5" />
            </figure>
            <figure>
              <Image
                src="/assets/Profile.svg"
                alt="Profile icon"
                className="w-5 h-5"
              />
            </figure>
          </aside>
        </article>
      </header>
    </>
  );
};

export default Header;
