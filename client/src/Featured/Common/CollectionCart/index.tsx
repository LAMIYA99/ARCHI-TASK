import { Button } from "@mui/material";

type CollectionCartProps = {
  image?: string;
  title?: string;
  btnVariant?: string;
};

const CollectionCart = ({ image, title, btnVariant }: CollectionCartProps) => {
  return (
    <div className=" relative ">
      <img
        src={image}
        alt=""
        className="w-full h-[426px] object-cover  rounded-2xl"
      />
      <div className="absolute top-10 left-10 max-w-44">
        <h2 className="text-[36px] tracking-[-1px] font-semibold leading-[110%] mb-5 text-white">
          {title}
        </h2>
        <Button variant={btnVariant}>Shop Now</Button>
      </div>
    </div>
  );
};

export default CollectionCart;