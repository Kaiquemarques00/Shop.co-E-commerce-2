import FooterCard from "@/components/footer_card/FooterCard";
import Newsletter from "@/components/newsletter/Newsletter";
import Payments from "@/components/payments/Payments";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full px-25 pb-12 footer-gradient">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">

        <Newsletter />

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
          <ul className="flex gap-3">
            <Payments imgSrc="/assets/Visa.svg" imgAlt="Visa Icon"/>
            <Payments imgSrc="/assets/Mastercard.svg" imgAlt="Mastercard Icon"/>
            <Payments imgSrc="/assets/Paypal.svg" imgAlt="Paypal Icon"/>
            <Payments imgSrc="/assets/Apple_pay.svg" imgAlt="Apple-pay Icon"/>
            <Payments imgSrc="/assets/Google_pay.svg" imgAlt="Google-pay Icon"/>
          </ul>
        </aside>
      </div>
    </footer>
  );
}