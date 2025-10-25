import BannerSection from "../Components/BannerSection";
import CollectionSection from "../Components/CollectionSection";
import ProductSection from "../Components/ProductSection";
import TestimonialSection from "../Components/TestimonialsSection";

const HomeTemp = () => {
  return (
    <div>
      <BannerSection />
      <ProductSection />
      <CollectionSection/>
      <TestimonialSection/> 
    </div>
  );
};

export default HomeTemp;
