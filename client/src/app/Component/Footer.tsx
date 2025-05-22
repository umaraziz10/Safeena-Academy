import React from "react";

export const Footer = (): JSX.Element => {
  return (
    <footer className="bg-transparent py-5 px-4 md:px-6 shadow-inner">
      {/* Top Section */}
      <div className="max-w-[1357px] mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-4 md:gap-0">
        {/* Logo and Name */}
        <div className="flex items-center">
          <img
            className="w-[40px] h-[40px] md:w-[49px] md:h-[49px] object-cover"
            alt="Blue logo"
            src="/footer.png"
          />
          <div className="ml-2 text-center md:text-left">
            <div className="font-bold text-[#337bbf] text-xl md:text-2xl">Safeena</div>
            <div className="font-light text-[#337bbf] text-[10px] md:text-[11px] tracking-widest">
              A C A D E M Y
            </div>
          </div>
        </div>

        {/* Contact Us */}
        <a
          href="https://wa.me/6282125041844"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-white text-lg md:text-xl text-center md:text-right"
        >
          Hubungi Kami
        </a>
      </div>

      {/* Bottom Section */}
      <div className="max-w-[1357px] mx-auto mt-6">
        <hr className="border-t border-gray-300" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 mt-4">
          {/* Copyright */}
          <div className="flex items-center">
            <img
              className="w-4 h-4 md:w-5 md:h-5"
              alt="Copyright"
              src="/copyright.png"
            />
            <span className="ml-2 font-normal text-black text-sm md:text-base text-center md:text-left">
              Safeena Academy, 2025. All rights reserved.
            </span>
          </div>

          {/* Instagram */}
          <a
            href="https://instagram.com/dylanamadeuss"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-4 h-4 md:w-5 md:h-5"
              alt="Instagram"
              src="/instagram.png"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};
