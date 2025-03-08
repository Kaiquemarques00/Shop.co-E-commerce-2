import Tab from "@/components/tab/Tab";

const Tabs = () => {
    return (
        <section className="w-7/8 px-4 mt-8 mb-4 mx-auto flex justify-between text-[clamp(16px,2vw,20px)] border-b-1 border-[rgba(0,0,0,0.1)] ">
            <Tab content="Product Details"/>
            <Tab content="Rating & Reviews" selected/>
            <Tab content="FAQs"/>
        </section>
    );
}
 
export default Tabs;