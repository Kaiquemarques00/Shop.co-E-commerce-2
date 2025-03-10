import PageCard from "@/components/page_card/PageCard";
import ProductCard from "@/components/product_card/ProductCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Products = () => {
  const router = useRouter();
  const { category_name } = router.query;

  const [category, setCategory] = useState<any>([]);
  const [products, setProducts] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState<number>(1); // Página atual

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
    <section className="w-full">
      <article className="flex justify-between mb-5 items-end">
        <h2 className="text-[clamp(24px,3vw,32px)]">Casual</h2>
        <div className="flex gap-2 items-center">
          <p className="opacity-60">
            Showing {(currentPage - 1) * productsPerPage + 1}-{(currentPage * productsPerPage)} of {products.length} Products
          </p>
          <p className="opacity-60">Sort By:</p>
          <p className="font-bold">Most Popular</p>
          <img
            src="/assets/Down_arrow.svg"
            alt="Arrow Down icon"
            className="w-[16px] h-[16px]"
          />
        </div>
      </article>

      <article className="grid grid-cols-3 gap-5 gap-y-10 pb-10 border-b border-black/10">
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
          />
        ))}
      </article>

      <article className="flex justify-between py-5 items-center">
        {/* Botão Previous */}
        <div
          onClick={() => handlePageChange(currentPage - 1)}
          className="flex gap-3 p-2 border border-black/10 rounded-lg cursor-pointer"
        >
          <img src="/assets/Arrow_left.svg" alt="Arrow left" />
          <p>Previous</p>
        </div>

        {/* Navegação das Páginas */}
        <div>
          <ul className="flex gap-2">
            {/* Exibe as páginas até o número total de páginas */}
            {Array.from({ length: 10 }, (_, i) => i + 1).map((page) => (
              <PageCard
                key={page}
                content={page.toString()}
                onClick={() => handlePageChange(page)}
                isActive={page === currentPage}
              />
            ))}
          </ul>
        </div>

        {/* Botão Next */}
        <div
          onClick={() => handlePageChange(currentPage + 1)}
          className="flex gap-3 p-2 border border-black/10 rounded-lg cursor-pointer"
        >
          <p>Next</p>
          <img src="/assets/Arrow_right.svg" alt="Arrow right" />
        </div>
      </article>
    </section>
  );
};

export default Products;
