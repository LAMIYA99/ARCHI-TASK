import { ShoppingBag } from "lucide-react";

const ProductCard = () => {
  return (
    <div>
      <div className="overflow-hidden ">
        <img
          src="https://cdn.prod.website-files.com/6851a0c497a80b8bd19281ea/6851a33633ae460ef1af58e4_6825f7983a313add9546d2cc_Fleece%2520Jacket-Charcoal.webp"
          alt=""
          className="w-full h-full object-cover rounded-[15px] hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="mt-4 flex items-center justify-between ">
        <div>
          <h3 className="text-lg font-bold text-black">
          Fleece Jacket-Charcoal
          </h3>
          <ul className="flex mt-1 gap-2 items-center ">
            <li className="text-[16px] text-black">$ 68.00 USD</li>
            <li className="text-[14px] text-[#667085]">$ 68.00 USD</li>
          </ul>
        </div>
        <div className="border py-4.5 px-5 rounded-full items-center flex hover:bg-[#C0F377] hover:border-white transition-all duration-300">
          <button className="">
            <ShoppingBag />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
