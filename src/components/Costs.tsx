import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function Costs() {
  const resumen = [
    ["Horas/Hombre Totales", "2.560 horas"],
    ["Costo de Personal", "Bs 75.976 (USD 10.916)"],
    ["Servicios en la Nube", "Bs 2.436 (USD 350)"],
    ["Costo Total del Proyecto", "Bs 78.412 (USD 11.266)"],
  ];

  const personal = [
    ["Análisis y Diseño", "Bs 8.004"],
    ["Implementación", "Bs 49.973"],
    ["Pruebas y Mantenimiento", "Bs 9.995"],
    ["Documentación", "Bs 8.004"],
  ];

  const infraestructura = [
    ["Supabase Cloud", "Bs 1.044"],
    ["Firebase Storage", "Bs 626"],
    ["Railway Cloud", "Bs 209"],
    ["Vercel Edge Network", "Bs 557"],
  ];

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

          {/* SLIDE 1 — RESUMEN GENERAL */}
          <SwiperSlide>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="h-[650px] p-10 rounded-3xl bg-white/10 backdrop-blur-xl 
                         shadow-2xl border border-white/20 max-w-3xl mx-auto"
            >
              <h3 className="text-3xl font-bold text-white mb-6">
                Resumen General del Proyecto
              </h3>

              <table className="w-full text-left text-[#F8F9FA]/90">
                <tbody>
                  {resumen.map((r, i) => (
                    <tr key={i} className="border-b border-white/20 hover:bg-white/5 transition">
                      <td className="py-5 px-4 font-semibold">{r[0]}</td>
                      <td className="py-5 px-4">{r[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </SwiperSlide>

          {/* SLIDE 2 — COSTO DEL PERSONAL */}
          <SwiperSlide>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="h-[650px] p-10 rounded-3xl bg-white/10 backdrop-blur-xl 
                         shadow-2xl border border-white/20 max-w-3xl mx-auto"
            >
              <h3 className="text-3xl font-bold text-white mb-6">
                Costo del Personal
              </h3>

              <table className="w-full text-left text-[#F8F9FA]/90">
                <tbody>
                  {personal.map((p, i) => (
                    <tr key={i} className="border-b border-white/10 hover:bg-white/5 transition">
                      <td className="py-5 px-4 font-semibold">{p[0]}</td>
                      <td className="py-5 px-4">{p[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <p className="mt-6 text-[#F8F9FA]/70 text-lg leading-relaxed">
                El costo de personal representa el componente principal del proyecto,
                basado en el método de horas/hombre y salarios promedio del sector tecnológico boliviano.
              </p>
            </motion.div>
          </SwiperSlide>

          {/* SLIDE 3 — INFRAESTRUCTURA */}
          <SwiperSlide>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="h-[650px] p-10 rounded-3xl bg-white/10 backdrop-blur-xl 
                         shadow-2xl border border-white/20 max-w-3xl mx-auto"
            >
              <h3 className="text-3xl font-bold text-white mb-6">
                Infraestructura Cloud
              </h3>

              <table className="w-full text-left text-[#F8F9FA]/90">
                <tbody>
                  {infraestructura.map((p, i) => (
                    <tr key={i} className="border-b border-white/10 hover:bg-white/5 transition">
                      <td className="py-5 px-4 font-semibold">{p[0]}</td>
                      <td className="py-5 px-4">{p[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

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
