
import React, { useEffect, useState } from "react";

const ToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // güvende olmak için window kontrolü (SSR için)
    if (typeof window === "undefined") return;

    const onScroll = () => {
      setVisible(window.scrollY >= 300);
    };

    // initial check
    onScroll();

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScrollToTop = () => {
    if (typeof window === "undefined") return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-10 right-5 z-[99999]">
      <button
        onClick={handleScrollToTop}
        // tailwind sınıflarını state'e göre uygula
        className={`scroll bg-[#C0F377] text-white p-2 rotate-[270deg] w-[50px] h-[50px] items-center justify-center rounded-full hover:text-black hover:bg-[#e7f5d3]  duration-300 cursor-pointer ${
          visible ? "flex" : "hidden"
        }`}
        aria-label="Scroll to top"
      >
        <svg
          width="12px"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
        >
          <path
            fill="currentColor"
            d="M363.8 264.5L217 412.5c-4.7 4.7-12.3 4.7-17 0l-19.8-19.8c-4.7-4.7-4.7-12.3 0-17L298.7 256 180.2 136.3c-4.7-4.7-4.7-12.3 0-17L200 99.5c4.7 4.7 12.3-4.7 17 0l146.8 148c4.7 4.7 4.7 12.3 0 17zm-160-17L57 99.5c-4.7-4.7-12.3-4.7-17 0l-19.8 19.8c-4.7 4.7-4.7 12.3 0 17L138.7 256 20.2 375.7c-4.7 4.7-4.7 12.3 0 17L40 412.5c4.7 4.7 12.3 4.7 17 0l146.8-148c4.7 4.7 4.7 12.3 0 17z"
          />
        </svg>
      </button>
    </div>
  );
};

export default ToTop;
