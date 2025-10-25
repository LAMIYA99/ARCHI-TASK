import { Search } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b border-[#e4e7ec] sticky top-0 z-999 bg-white">
      <div className="container mx-auto max-w-[1336px] px-[60px] py-8 ">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-1 ">
            <div className="logo w-[100px] h-auto max-w-[100px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 135.466 38.189"
              >
                <title>Archi</title>
                <path
                  d="M31.6,25.834V63.59H26.776V41.014H17.523L1.436,63.59H0L26.776,25.834ZM26.761,28.2l-8.376,11.54h8.376Zm19.768-2.365q9.528.647,9.528,7.57T46.529,41.02L62.45,63.59H61.017L45.428,41.977V63.59h-4.8V25.834Zm-.962,1.1V39.772q5.241,0,5.241-6.42T45.567,26.933Zm39.077-1.122a23.226,23.226,0,0,1,11.672,3.082v1.789a16.29,16.29,0,0,0-10.794-4.135c-9.435,0-17.083,8.232-17.083,18.386S76.087,63.32,85.522,63.32a16.29,16.29,0,0,0,10.794-4.135v1.732A23.226,23.226,0,0,1,84.644,64c-11.829,0-21.418-8.549-21.418-19.095S72.815,25.811,84.644,25.811Zm17.961,0h5.1V39.74h9.172V25.811h4.858V63.32h-4.858V40.961H107.7V63.32h-5.1Zm27.962,0h4.9V63.32h-4.9Z"
                  transform="translate(0 -25.811)"
                  fill-rule="evenodd"
                ></path>
              </svg>
     
            </div>
          </div>
          <div className="col-span-9 pl-10">
            <div className="bg-[#f9fafb] pl-[14px] w-[800px]  pr-[42px] text-[16px] rounded-[40px] flex items-center h-[38px] leading-[24px] text-black gap-3">
              <Search className="w-[20px] h-[20px]" />
              <input
                type="text"
                className=" outline-none w-full placeholder-gray-400 font-normal "
                placeholder="Search anything..."
              />
            </div>
          </div>
          <div className="col-span-2 flex items-center justify-end ">
            <div className="relative">
              <img
                src="https://cdn.prod.website-files.com/68519fc02007af8091e4b3e4/6851a0b797a80b8bd1927c35_Bag.webp"
                alt=""
                className="w-[21px] h-[22px] object-contain"
              />
              <div className="absolute bottom-[-9px] left-[-5px]">
                <span className="bg-[#c1f377] text-black  px-[4px]  py-px rounded-[9px]  text-[10px] min-w-[15px] font-bold">
                  0
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
