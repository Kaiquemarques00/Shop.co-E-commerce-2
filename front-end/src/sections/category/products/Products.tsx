import PageCard from "@/components/page_card/PageCard";
import ProductCard from "@/components/product_card/ProductCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import FiltersMobile from "../filters_mobile/FiltersMobile";

const Products = () => {
  const router = useRouter();
  const { category_name } = router.query;

  const [category, setCategory] = useState<any>([]);
  const [products, setProducts] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState<number>(1); // Página atual
  const [isModalOpen, setIsModalOpen] = useState<boolean>();

  const productsPerPage = 9; // Número fixo de produtos por página

  // Função para carregar os produtos da página
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseCategory = await axios.get(
          `http://localhost:3001/categories/${category_name}`
        );

        setCategory(responseCategory.data);

        // Obter os produtos com base na página atual
        const responseProduct = await axios.get(
          `http://localhost:3001/products/category/${responseCategory.data[0].id}?page=${currentPage}`
        );

        setProducts(responseProduct.data); // Definindo os produtos na página atual
      } catch (error) {
        console.log(error);
      }
    };

    if (category_name) {
      fetchData();
    }
  }, [category_name, currentPage]);

  // Calcular o número de páginas
  const handlePageChange = (page: number) => {
    if (page < 1) return; // Impedir páginas negativas
    setCurrentPage(page);
  };

  return (
    <section className="w-full p-4">
      <article className="flex justify-between items-center mb-5 text-[clamp(14px,2vw,16px)]">
        <div className="flex gap-2 items-end">
          <h2 className="text-[24px] font-bold">Casual</h2>
          <div className="flex gap-2 items-center">
            <p className="opacity-60 h-[25px]">
              Showing {(currentPage - 1) * productsPerPage + 1}-
              {currentPage * productsPerPage} of {products.length} Products
            </p>
            <p className="hidden md:block opacity-60">Sort By:</p>
            <p className="hidden md:block font-bold">Most Popular</p>
            <img
              src="/assets/Down_arrow.svg"
              alt="Arrow Down icon"
              className="hidden md:block w-[16px] h-[16px]"
            />
          </div>
        </div>
        <div className="w-[32px] h-[32px] rounded-full flex justify-center items-center bg-[#F1F1F1]">
          <img
            src="/assets/Filter.svg"
            alt="Filter icon"
            className="w-[16px] h-[16px]"
            onClick={() => setIsModalOpen(true)}
          />
        </div>
      </article>

      {isModalOpen && (
            <FiltersMobile isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}/>
          )}

      <article className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-y-10 pb-10 border-b border-black/10">
        {products.map((product: any) => (
          <ProductCard
            key={product.id}
            href={`/product/${product.id}`}
            productImg={`http://localhost:3001/uploads${product.images[0].url}`}
            title={product.name_product}
            rating={product.rating}
            price={product.price}
            discount={product.discount}
            priceWithDiscount={product.price_discount}
            style="w-full !m-0"
            styleImg="!h-[175px]"
          />
        ))}
      </article>

      <article className="flex w-full justify-between gap-2 mt-5 mb-10 items-center h-[36px] md:h-[40px] text-[clamp(12px,3vw,14px)]">
        {/* Botão Previous */}
        <div
          onClick={() => handlePageChange(currentPage - 1)}
          className="flex gap-1 p-3 border border-black/10 rounded-lg cursor-pointer h-[36px] items-center"
        >
          <img
            src="/assets/Arrow_left.svg"
            alt="Arrow left"
            className="h-[16px] md:h-[20px] w-[16px] md:w-[20px]"
          />
          <p>Previous</p>
        </div>

        {/* Navegação das Páginas */}
        <ul className="flex gap-1 h-full">
          {/* Exibe as páginas até o número total de páginas */}
          {Array.from({ length: 5 }, (_, i) => i + 1).map((page) => (
            <PageCard
              key={page}
              content={page.toString()}
              onClick={() => handlePageChange(page)}
              isActive={page === currentPage}
            />
          ))}
        </ul>

        {/* Botão Next */}
        <div
          onClick={() => handlePageChange(currentPage + 1)}
          className="flex gap-1 p-3 border border-black/10 rounded-lg cursor-pointer h-[36px] items-center"
        >
          <p>Next</p>
          <img
            src="/assets/Arrow_right.svg"
            alt="Arrow right"
            className="h-[16px] md:h-[20px] w-[16px] md:w-[20px]"
          />
        </div>
      </article>
    </section>
  );
};

export default Products;
