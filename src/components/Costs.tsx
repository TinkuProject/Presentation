import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ZoomImage from "./ZoomImage";

import "swiper/css";
import "swiper/css/navigation";

export default function Costs() {
  return (
    <section id="costos" className="py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-4xl font-extrabold text-white mb-12">
          Estimación de Costos
        </h2>

        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={40}
          slidesPerView={1}
          className="pb-10"
        >

          {/* SLIDE 1 */}
          <SwiperSlide className="!flex !justify-center !items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="p-10 rounded-3xl bg-white/10 backdrop-blur-xl
                         shadow-2xl border border-white/20 max-w-3xl w-full"
            >
              <h3 className="text-3xl font-bold text-white mb-6">
                Resumen General del Proyecto
              </h3>

              <div className="w-full flex justify-center items-center rounded-2xl 
                              overflow-hidden border border-white/20 p-4 bg-white/5">
                <ZoomImage
                  src="/costs/total.png"
                  alt="Tabla resumen de costos"
                />
              </div>
            </motion.div>
          </SwiperSlide>

          {/* SLIDE 2 */}
          <SwiperSlide className="!flex !justify-center !items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="p-10 rounded-3xl bg-white/10 backdrop-blur-xl
                         shadow-2xl border border-white/20 max-w-3xl w-full"
            >
              <h3 className="text-3xl font-bold text-white mb-6">
                Costo del Personal
              </h3>

              <div className="w-full flex justify-center items-center rounded-2xl 
                              overflow-hidden border border-white/20 p-4 bg-white/5">
                <ZoomImage
                  src="/costs/personal.png"
                  alt="Tabla costo del personal"
                />
              </div>

              <p className="mt-6 text-[#F8F9FA]/70 text-lg leading-relaxed">
                El costo de personal representa el componente principal del proyecto,
                basado en el método de horas/hombre y salarios promedio del sector tecnológico boliviano.
              </p>
            </motion.div>
          </SwiperSlide>

          {/* SLIDE 3 */}
          <SwiperSlide className="!flex !justify-center !items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="p-10 rounded-3xl bg-white/10 backdrop-blur-xl
                         shadow-2xl border border-white/20 max-w-3xl w-full"
            >
              <h3 className="text-3xl font-bold text-white mb-6">
                Infraestructura Cloud
              </h3>

              <div className="w-full flex justify-center items-center rounded-2xl 
                              overflow-hidden border border-white/20 p-4 bg-white/5">
                <ZoomImage
                  src="/costs/infraestructura.png"
                  alt="Tabla infraestructura cloud"
                />
              </div>

              <p className="mt-6 text-[#F8F9FA]/70 text-lg leading-relaxed">
                La arquitectura multi-proveedor reduce riesgos, mejora la flexibilidad 
                y optimiza los costos operativos sin comprometer el rendimiento.
              </p>
            </motion.div>
          </SwiperSlide>

        </Swiper>

        {/* Flechas Swiper */}
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
