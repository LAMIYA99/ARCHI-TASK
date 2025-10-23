import { Facebook, Instagram, LocationEdit, LocationEditIcon, PhoneCall, Twitch, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-[1300px] mx-auto px-6 py-10 grid grid-cols-12 gap-20">
        <div className="col-span-4">
          <div className="w-[100px] h-[29px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 135.466 38.189"
            >
              <path
                d="M31.6,25.834V63.59H26.776V41.014H17.523L1.436,63.59H0L26.776,25.834ZM26.761,28.2l-8.376,11.54h8.376Zm19.768-2.365q9.528.647,9.528,7.57T46.529,41.02L62.45,63.59H61.017L45.428,41.977V63.59h-4.8V25.834Zm-.962,1.1V39.772q5.241,0,5.241-6.42T45.567,26.933Zm39.077-1.122a23.226,23.226,0,0,1,11.672,3.082v1.789a16.29,16.29,0,0,0-10.794-4.135c-9.435,0-17.083,8.232-17.083,18.386S76.087,63.32,85.522,63.32a16.29,16.29,0,0,0,10.794-4.135v1.732A23.226,23.226,0,0,1,84.644,64c-11.829,0-21.418-8.549-21.418-19.095S72.815,25.811,84.644,25.811Zm17.961,0h5.1V39.74h9.172V25.811h4.858V63.32h-4.858V40.961H107.7V63.32h-5.1Zm27.962,0h4.9V63.32h-4.9Z"
                transform="translate(0 -25.811)"
                fill-rule="evenodd"
              ></path>
            </svg>
          </div>
          <p className="mt-5 text-[20px] text-black">
            Sign up today and get $20 off <br /> your first order.
          </p>
          <div className="mt-4 flex rounded-3xl overflow-hidden bg-[#F9FAFB]">
            <input
              type="email"
              placeholder="Enter your email..."
              className="w-full  px-3 py-1.5 bg-transparent outline-none"
            />
            <button className="px-4 py-2 text-black font-medium hover:bg-black hover:text-white transition">
              →
            </button>
          </div>

          <div className="flex space-x-4 mt-8 items-center text-black">
            <Facebook size={20} fill="black" />
            <Instagram  size={20} />
            <Youtube size={20} />
            <Twitter size={20} fill="black" />
            <Twitch />
          </div>
        </div>

        <div className="col-span-8 grid grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4 text-[18px] ">Collection</h3>
            <ul className="space-y-3 text-gray-600">
              <li>Jackets</li>
              <li>Men</li>
              <li>Pants</li>
              <li>T-shirts</li>
              <li>Women</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[18px] mb-4">Company</h3>
            <ul className="space-y-3 text-gray-600">
              <li>Shop</li>
              <li>Contact Us</li>
              <li>Coming Soon</li>
              <li>FAQ & Help</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[18px] mb-4">Company</h3>
            <ul className="space-y-3 text-gray-600">
              <li>Shop</li>
              <li>Contact Us</li>
              <li>Coming Soon</li>
              <li>FAQ & Help</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[18px] mb-4">Exclusive Services</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-1.5"><PhoneCall size={18}/> +1 666 8888</li>
              <li className="flex items-center gap-1.5"><LocationEditIcon size={18}/>help@archi.com</li>
              <li className="flex items-center gap-1.5"><LocationEdit size={18}/> 2972 Westheimer Rd. <br /> Santa Ana, Illinois <br /> 85486</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 mt-6 py-4 text-gray-500 text-sm flex justify-between max-w-[1320px] mx-auto px-4">
        <span>© 2025 Archi. All Rights Reserved.</span>
        <div className="space-x-4">
          <span>Terms & Conditions</span>
          <span>Legal & Privacy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
