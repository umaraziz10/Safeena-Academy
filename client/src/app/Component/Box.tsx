import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../Component/accordion";
import { Card, CardContent } from "../Component/card";

export const Box = (): JSX.Element => {
  // Data for accordion items
  const accordionItems = [
    {
      id: "item-1",
      title: "Bersertifikasi Internasional",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: "item-2",
      title: "Lorem Ipsum dolor",
      content: "",
    },
    {
      id: "item-3",
      title: "Lorem Ipsum dolor",
      content: "",
    },
    {
      id: "item-4",
      title: "Lorem Ipsum dolor",
      content: "",
    },
    {
      id: "item-5",
      title: "Lorem Ipsum dolor",
      content: "",
    },
  ];

  return (
    <section className="relative w-full max-w-[899px] min-h-[633px] mx-auto px-4 py-8 md:py-12">
      <div className="w-full max-w-[915px] h-1/3">
        <header className="flex flex-col items-center mb-8 md:mb-16">
          <h1 className="w-full max-w-[843px] [font-family:'Outfit',Helvetica] text-4xl md:text-5xl lg:text-[64px] text-center tracking-[0] leading-[1.2]">
            <span className="font-light text-[#337bbf]">Kenapa </span>
            <span className="font-medium text-[#337bbf]">Safeena </span>
            <span className="font-medium text-[#ffee5a]">Academy</span>
            <span className="font-medium text-[#337bbf]">?</span>
          </h1>

          <p className="w-full max-w-[696px] [font-family:'Inter',Helvetica] text-sm md:text-base text-center text-[#337bbf] tracking-[0] leading-[1.6] mt-3 md:mt-5 px-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </header>

        <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-8 mt-4 md:mt-8">
          <Card className="w-full lg:max-w-[524px] bg-[#fffbda] rounded-[15px] shadow-[6px_7px_4px_#00000040] border-none">
            <CardContent className="p-4 md:p-5">
              <Accordion type="single" collapsible defaultValue="item-1">
                {accordionItems.map((item) => (
                  <AccordionItem key={item.id} value={item.id}>
                    <AccordionTrigger className="[font-family:'Outfit',Helvetica] font-bold text-[#337bbf] text-xl md:text-2xl lg:text-[26px] tracking-[0] leading-[1.2] text-left">
                      {item.title}
                    </AccordionTrigger>
                    {item.content && (
                      <AccordionContent className="[font-family:'Outfit',Helvetica] font-light text-[#337bbf] text-xs md:text-sm tracking-[0] leading-[1.6]">
                        {item.content}
                      </AccordionContent>
                    )}
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          <div className="relative w-full max-w-[326px] h-[355px] order-first lg:order-last">
            <img
              className="absolute w-[80%] md:w-[290px] h-auto top-[81px] left-0"
              alt="Background shape"
              src="/image-22.png"
            />
            <img
              className="absolute w-[60%] md:w-[204px] h-auto top-0 left-[35%] md:left-[122px]"
              alt="Yellow circle"
              src="/image-21.png"
            />
            <img
              className="absolute w-[50%] md:w-[182px] h-auto top-[124px] left-[15%] md:left-[54px] object-cover"
              alt="Smiley face"
              src="/image-23.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};