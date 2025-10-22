import type { headingTypes } from "../../../Types/global";

const HeadingText = ({ title, desc }: headingTypes) => {
  return (
    <div>
      <div className="mx-auto max-w-[1320px] px-[10px]">
        <div className="flex items-center justify-center text-center">
          <div className="flex flex-col items-center pt-[40px]">
            <h2 className="text-[14px] leading-[30px] rounded-[20px] font-semibold bg-[#C0F377] px-4 p-0.5 text-black ">
              {title}
            </h2>
            <p className="text-[48px] font-extrabold mt-1 text-black ">
              {desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadingText;
