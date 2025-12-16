import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ZoomImage from "./ZoomImage";

import "swiper/css";
import "swiper/css/navigation";

export default function Diagrams() {
  const imgs = [
    { name: "Diagrama de Secuencia", img: "/diagrams/BussinesRequest.png" },
    { name: "Diagrama de Secuencia - Socio", img: "/diagrams/Socio.jpg" },
    { name: "Diagrama de Secuencia - Administrador", img: "/diagrams/Admin.jpg" },
    { name: "Diagrama de Componentes", img: "/diagrams/componentes.drawio.png" },
    { name: "Diagrama de Componentes - Simplificado", img: "/diagrams/Diagramadecomponentes.jpg" },
    { name: "Diagrama de Despliegue", img: "/diagrams/Despliegue.png" }
  ];

  return (
    <section id="diagrams" className="py-20 px-6">
      <div className="max-w-6xl mx-auto text-center relative">

        <h2 className="text-4xl font-extrabold text-white mb-12">
          Diagramas UML esenciales
        </h2>

        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={40}
          slidesPerView={1}
          className="pb-10"
        >
          {imgs.map((d, i) => (
            <SwiperSlide key={i}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="p-10 rounded-3xl bg-white/10 backdrop-blur-xl
                           shadow-xl border border-white/20 max-w-4xl mx-auto"
              >
                <h3 className="text-3xl font-bold text-[#F8F9FA] mb-6 drop-shadow">
                  {d.name}
                </h3>

                <ZoomImage
                  src={d.img}
                  alt={d.name}
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Flechas con glow azul */}
        <style>{`
          .swiper-button-next,
          .swiper-button-prev {
            color: #80A2CE !important;
            filter: drop-shadow(0 0 10px rgba(0, 119, 182, 0.8));
            transition: 0.3s ease-in-out;
          }

          .swiper-button-next:hover,
          .swiper-button-prev:hover {
            scale: 1.2;
            filter: drop-shadow(0 0 15px rgba(0, 119, 182, 1));
          }
        `}</style>

      </div>
    </section>
  );
}
