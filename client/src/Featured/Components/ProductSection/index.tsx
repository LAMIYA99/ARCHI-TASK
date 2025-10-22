import HeadingText from "../../Common/HeadingText";
import ProductCard from "../../Common/ProductCard";
const ProductSection = () => {
  return (
  
      <section className="max-w-[1300px] mx-auto px-6 py-10 ">
        <div className="mt-20">
          <HeadingText
            title={"Top sale on this week"}
            desc={"Featured Collections"}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          <ProductCard />
      
        </div>
      </section>

  );
};

export default ProductSection;
