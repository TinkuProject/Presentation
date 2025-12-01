import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function Testing() {
  const tests = [
    { title: "Pruebas Unitarias", img: "/testing/unitarias.png" },
    { title: "Pruebas de Integración", img: "/testing/integracion.png" },
    { title: "Pruebas de Rendimiento", img: "/testing/rendimiento.png" },
    { title: "Pruebas de Seguridad", img: "/testing/seguridad.png" },
    { title: "Pruebas de Usabilidad", img: "/testing/usabilidad.png" },
  ];

  return (
    <section id="pruebas" className="py-28 px-6">
      <div className="max-w-6xl mx-auto text-center relative">

        <h2 className="text-4xl font-extrabold text-white mb-12">
          Pruebas del Sistema
        </h2>

        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={40}
          slidesPerView={1}
          className="pb-10"
        >
          {tests.map((t, i) => (
            <SwiperSlide key={i}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="p-10 rounded-3xl bg-white/10 backdrop-blur-xl 
                           shadow-xl border border-white/20 max-w-3xl mx-auto"
              >
                <h3 className="text-3xl font-bold text-[#F8F9FA] mb-6 drop-shadow">
                  {t.title}
                </h3>

                <img
                  src={t.img}
                  alt={t.title}
                  className="rounded-xl border border-white/20 
                             shadow-[0_0_20px_rgba(0,100,200,0.4)]"
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Estilo de flechas AZUL NEÓN */}
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
