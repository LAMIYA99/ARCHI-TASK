import ApiServices from "../../../Service/api";
import HeadingText from "../../Common/HeadingText";
import ProductCard from "../../Common/ProductCard";
import { useQuery } from "@tanstack/react-query";

const ProductSection = () => {
  const api = new ApiServices("http://localhost:1337/api/");
  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: () => api.getData("products?populate=*"),
  });
console.log(data)

  return (
    <section className="max-w-[1300px] mx-auto px-6 py-10 ">
      <div className="mt-20">
        <HeadingText
          title={"Top sale on this week"}
          desc={"Featured Collections"}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {data?.data?.map((item: any) => (
          <ProductCard
            key={item?.id}
            name={item?.name}
            price={item?.price}
            discount={item?.discountPrice}
            image={`http://localhost:1337${item?.image?.url}`}
          />
          
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
