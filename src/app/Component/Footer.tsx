import React from "react";

export const Footer = (): JSX.Element => {
  return (
    <footer className="mt-[40px] md:mt-[80px] py-[20px] z-50 px-4 md:px-6">
      <div className="max-w-[1357px] mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-6 md:gap-0 z-50">
        <div className="flex items-center">
          <img
            className="w-[40px] h-[40px] md:w-[49px] md:h-[49px] object-cover"
            alt="Blue logo"
            src="/footer.png"
          />
          <div className="ml-2">
            <div className="font-bold text-[#337bbf] text-xl md:text-2xl">Safeena</div>
            <div className="font-light text-[#337bbf] text-[10px] md:text-[11px]">
              A C A D E M Y
            </div>
          </div>
        </div>
        <div className="font-medium text-white text-lg md:text-xl text-center md:text-right">
          Contact Us
        </div>
      </div>

      <div className="max-w-[1357px] mx-auto mt-4">
        <hr className="border-t border-gray-300" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 mt-4">
          <div className="flex items-center">
            <img
              className="w-5 h-5 md:w-6 md:h-6"
              alt="Copyright"
              src="/copyright.png"
            />
            <span className="ml-2 font-normal text-black text-base md:text-lg text-center md:text-left">
              Safeena Academy, 2025. All rights reserved.
            </span>
          </div>
          <img
            className="w-4 h-4 md:w-5 md:h-5"
            alt="Instagram"
            src="/instagram.png"
          />
        </div>
      </div>
    </footer>
  );
};