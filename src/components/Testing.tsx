import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ZoomImage from "./ZoomImage";

import "swiper/css";
import "swiper/css/navigation";

export default function Testing() {
  const tests = [
    { title: "Pruebas de Seguridad (JWT)", img: "/testing/seguridad.png" },
    { title: "Pruebas de Rendimiento", img: "/testing/rendimiento.png" },
    { title: "Usabilidad (Likert 8.86)", img: "/testing/usabilidad.png" },
    { title: "Pruebas de Compatibilidad", img: "/testing/compatibilidad.png" },
    { title: "Mitigación de Riesgos OWASP", img: "/testing/owasp.png" }
  ];

  return (
    <section id="pruebas" className="py-20 px-6">
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

          {/* SLIDE 1 — LISTADO CON ESTILO */}
          <SwiperSlide>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="h-[650px] flex flex-col justify-start p-10 rounded-3xl 
               bg-white/10 backdrop-blur-xl shadow-xl border border-white/20 
               max-w-3xl mx-auto"
            >
              <h3 className="text-3xl font-extrabold text-[#F8F9FA] mb-8 drop-shadow">
                Conjunto de Pruebas Implementadas
              </h3>

              <div className="space-y-4 w-full">

                {[
                  { color: "bg-cyan-400", text: "Validación inicial" },
                  { color: "bg-blue-400", text: "Pruebas unitarias" },
                  { color: "bg-purple-400", text: "Pruebas de integración" },
                  { color: "bg-yellow-300", text: "Seguridad (JWT)" },
                  { color: "bg-green-300", text: "Rendimiento" },
                  { color: "bg-pink-300", text: "Usabilidad (Likert 8.86)" },
                  { color: "bg-red-300", text: "Mitigación OWASP Top 10" }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-4 p-4 rounded-2xl 
                     bg-white/5 border border-white/10 
                     shadow-[0_0_10px_rgba(0,0,0,0.2)]"
                  >
                    <span className={`w-4 h-4 ${item.color} rounded-full shadow-md`} />
                    <p className="text-[#F8F9FA]/90 text-lg">{item.text}</p>
                  </motion.div>
                ))}

              </div>

            </motion.div>
          </SwiperSlide>

          {/* SLIDES CON IMÁGENES */}
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

                <ZoomImage
                  src={t.img}
                  alt={t.title}
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* FLECHAS */}
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
