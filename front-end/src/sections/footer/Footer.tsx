import FooterCard from "@/components/footer_card/FooterCard";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full px-25 pb-12 footer-gradient">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">

        {/* Newsletter */}
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

        {/* Informations */}
        <article className="w-full flex flex-wrap gap-y-8 border-b md:justify-between border-black/10 pb-8">
          <FooterCard title="Shop.co" content="We have clothes that suit your style and that you're proud to wear. From women to men." first/>
          <FooterCard title="Company" content={["About", "Features", "Works", "Career"]}/>
          <FooterCard title="Help" content={["Customer Support", "Delivery Details", "Terms & Conditions", "Privacy Policy"]}/>
          <FooterCard title="FAQ" content={["Account", "Manage Deliveries", "Orders", "Payments"]}/>
          <FooterCard title="Resources" content={["Free eBooks", "Development Tutorial", "How to - Blog", "Youtube Playlist"]}/>
        </article>

        {/* Final Footer */}
        <aside className="w-full flex flex-col md:flex-row items-center justify-between gap-4 pt-4">
          <p className="text-sm opacity-60 text-center md:text-left">
            Shop.co &copy; 2000-2023, All Rights Reserved
          </p>
          <div className="flex gap-3">
            {["Visa", "Mastercard", "Paypal", "Apple_pay", "Google_pay"].map((payment) => (
              <figure key={payment} className="h-6">
                <Image src={`./assets/${payment}.svg`} alt={`${payment} icon`} width={40} height={26} />
              </figure>
            ))}
          </div>
        </aside>
      </div>
    </footer>
  );
}