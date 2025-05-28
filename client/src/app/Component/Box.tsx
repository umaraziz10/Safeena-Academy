import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../Component/accordion";
import { Card, CardContent } from "../Component/card";
import { motion } from "framer-motion";
import { fadeIn } from "../variant";

export const Box = (): JSX.Element => {
  // Data for accordion items
  const accordionItems = [
    {
      id: "item-1",
      title: "Sertifikasi Internasional",
      content: 
        "Setiap program di Safeena Academy dirancang untuk memenuhi standar global dan diakui secara internasional. Sertifikasi yang kami berikan tidak hanya memperkuat kompetensi, tetapi juga membuka peluang yang lebih luas di dunia profesional."
    },
    {
      id: "item-2",
      title: "Fokus pada Kesehatan Mental Holistik",
      content: "Kami tidak hanya mengajarkan teori; kami membekali peserta dengan pendekatan menyeluruh yang mencakup aspek psikologis, emosional, dan sosial — menjawab kebutuhan masyarakat masa kini."
    },
    {
      id: "item-3",
      title: "Belajar dari Praktisi Ahli",
      content: "Para mentor dan instruktur di Safeena Academy adalah psikolog, konselor, dan profesional kesehatan mental berpengalaman, siap membagikan pengetahuan serta praktik terbaik dari lapangan."
    },
    {
      id: "item-4",
      title: "Metode Pembelajaran Interaktif dan Berbasis Kasus",
      content: "Kami menggunakan metode pembelajaran aktif dan reflektif, termasuk studi kasus, role-playing, dan diskusi kelompok, sehingga peserta dapat langsung menerapkan pengetahuan dalam situasi nyata."
    },
    {
      id: "item-5",
      title: "Komunitas yang Mendukung dan Profesional",
      content: "Bergabung dengan Safeena Academy berarti menjadi bagian dari komunitas yang suportif, terbuka, dan profesional — tempat untuk tumbuh bersama, saling mendukung, dan membangun jaringan yang luas."
    },
  ];
  

  return (
    <section id="why" className="relative w-full max-w-[899px] min-h-[633px] mx-auto px-4 py-8 md:py-12 scroll-mt-10 mb-16">
      <div className="w-full max-w-[915px]">
        <motion.header 
          variants={fadeIn('down', 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="flex flex-col items-center mb-8 md:mb-16"
        >
          <h1 className="w-full max-w-[843px] font-outfit text-4xl md:text-5xl lg:text-[64px] text-center leading-tight">
            <span className="font-light text-[#337bbf]">Kenapa </span>
            <span className="font-semibold text-[#337bbf]">Safeena </span>
            <span className="font-bold text-[#ffee5a] drop-shadow-md">Academy</span>
            <span className="font-semibold text-[#337bbf]">?</span>
          </h1>
          <p className="w-full max-w-[696px] font-inter text-sm md:text-base text-center text-[#337bbf] leading-relaxed mt-4 md:mt-6 px-4">
            Safeena Academy hadir sebagai solusi terpercaya bagi siapa saja yang ingin memperdalam pengetahuan dan keterampilan dalam bidang kesehatan mental.
          </p>
        </motion.header>

        <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-10 mt-6 md:mt-10">
          <motion.div
            variants={fadeIn('right', 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
          >
            <Card className="w-full lg:max-w-[524px] bg-[#fffce6] rounded-xl shadow-lg hover:shadow-xl transition duration-300">
              <CardContent className="p-5">
                <Accordion type="single" collapsible defaultValue="item-1">
                  {accordionItems.map((item) => (
                    <AccordionItem key={item.id} value={item.id}>
                      <AccordionTrigger className="font-outfit font-bold text-[#337bbf] text-lg md:text-xl lg:text-2xl text-left">
                        {item.title}
                      </AccordionTrigger>
                      {item.content && (
                        <AccordionContent className="font-outfit font-light text-[#337bbf] text-sm md:text-base">
                          {item.content}
                        </AccordionContent>
                      )}
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            variants={fadeIn('left', 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="relative w-full max-w-[326px] h-[355px] order-first lg:order-last"
          >
            <img
              className="absolute w-[80%] md:w-[290px] h-auto top-[81px] left-0 drop-shadow-xl"
              alt="Background shape"
              src="/image-22.png"
            />
            <img
              className="absolute w-[60%] md:w-[204px] h-auto top-0 left-[35%] md:left-[122px] drop-shadow"
              alt="Yellow circle"
              src="/image-21.png"
            />
            <img
              className="absolute w-[50%] md:w-[182px] h-auto top-[124px] left-[15%] md:left-[54px] object-cover drop-shadow-md"
              alt="Smiley face"
              src="/image-23.png"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};