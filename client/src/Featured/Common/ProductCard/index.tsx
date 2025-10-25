import { ShoppingBag } from "lucide-react";
import type { ProductCardProps } from "../../../Types/global";

const ProductCard = ({ image, name, price, discount }: ProductCardProps) => {
  return (
    <div className="w-full">
      <div className="overflow-hidden rounded-[15px]">
        <img
          src={image}
          alt="Fleece Jacket"
          className="w-full h-full object-cover rounded-[15px] hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="mt-4 flex gap-10 items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-black">{name}</h3>
          <ul className="flex mt-1 gap-2 items-center">
            {discount ? (
              <li className="text-[16px] text-black">$ {discount} USD</li>
            ) : (
              ""
            )}
            {price ? (
              <li className="text-[14px] text-[#667085] line-through">
                $ {price} USD
              </li>
            ) : (
              ""
            )}
          </ul>
        </div>

        <div className="border py-4 px-4 rounded-full flex items-center justify-center hover:bg-[#C0F377] hover:border-white transition-all duration-300">
          <button>
            <ShoppingBag />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
