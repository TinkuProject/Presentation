import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { FaSwatchbook } from "react-icons/fa";
import { TbLayoutKanban } from "react-icons/tb";
import { GiCycle } from "react-icons/gi";
import { LuWorkflow } from "react-icons/lu";
import { LuTimer, LuRocket, LuCircleCheck } from "react-icons/lu";

import "swiper/css";
import "swiper/css/navigation";

export default function Methodology() {
  const items = [
    {
      title: "Metodología Ágil (Scrum)",
      icon: <FaSwatchbook className="text-[#4CC9F0] text-4xl mb-4" />,
      text: "Se trabajó con sprints cortos, backlog priorizado, reuniones de planificación, revisión y retrospectivas para mantener un desarrollo iterativo, adaptable y centrado en entregables funcionales."
    },
    {
      title: "Kanban (gestión del flujo)",
      icon: <TbLayoutKanban className="text-[#F9C74F] text-4xl mb-4" />,
      text: "Se utilizó un tablero Kanban en Trello para visualizar tareas, limitar trabajo en progreso y evitar cuellos de botella durante el desarrollo."
    },
    {
      title: "Modelo Híbrido (Scrum + lineamientos RUP)",
      icon: <GiCycle className="text-[#90BE6D] text-4xl mb-4" />,
      text: "Se aplicaron prácticas ágiles para la ejecución diaria y lineamientos de RUP para la planificación, análisis, documentación (UML) y control de calidad, logrando equilibrio entre estructura y flexibilidad."
    },
    {
      title: "Proceso del Proyecto",
      icon: <LuWorkflow className="text-[#F8961E] text-4xl mb-4" />,
      text: "Análisis de requisitos → Diseño (mockups, arquitectura y UML) → Desarrollo (web, móvil y API) → Pruebas (rendimiento, seguridad y usabilidad) → Despliegue."
    }
  ];

  const sprints = [
    {
      title: "Etapa 1 – Análisis y Diseño",
      duration: "1 mes",
      icon: <LuTimer className="text-[#4CC9F0] text-4xl" />,
      text: "Análisis, definición de requisitos, historias de usuario, arquitectura y diagramas UML."
    },
    {
      title: "Etapa 2 – Desarrollo Principal",
      duration: "5 meses",
      icon: <LuRocket className="text-[#F8961E] text-4xl" />,
      text: "Implementación completa: API, web, móvil, base de datos, multimedia, módulos y pruebas integrales."
    },
    {
      title: "Etapa 3 – Cierre y Despliegue",
      duration: "2 meses",
      icon: <LuCircleCheck className="text-[#90BE6D] text-4xl" />,
      text: "Pruebas finales, correcciones, despliegue y documentación técnica."
    }
  ];

  return (
    <section id="methodology" className="py-20 px-6">
      <div className="max-w-6xl mx-auto text-center relative">

        <h2 className="text-4xl font-extrabold text-white mb-12">
          Metodología
        </h2>

        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={60}
          slidesPerView={1}
          className="pb-16"
        >

          {/* SLIDE 1 – TARJETAS ORIGINALES */}
          <SwiperSlide>
            <div className="grid md:grid-cols-2 gap-12">
              {items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ scale: 1.06 }}
                  className="p-8 bg-white/10 backdrop-blur-xl 
                             border border-white/20 rounded-3xl shadow-xl
                             hover:shadow-[#4CC9F0]/30 hover:shadow-2xl 
                             transition-all duration-300"
                >
                  <div className="flex flex-col items-center mb-2">
                    {item.icon}
                    <h3 className="text-2xl font-bold text-white">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-[#F8F9FA]/80 text-justify">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </SwiperSlide>

          {/* SLIDE 2 – TARJETAS DE SPRINTS MEJORADAS */}
          <SwiperSlide>
            <div className="grid md:grid-cols-2 gap-12">
              {sprints.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  whileHover={{ scale: 1.07 }}
                  className={`p-8 bg-white/10 backdrop-blur-xl 
                            border border-white/20 rounded-3xl shadow-xl
                            hover:shadow-[#4CC9F0]/20 hover:shadow-2xl 
                            transition-all duration-300 relative overflow-hidden
                            max-w-md mx-auto
                            ${i === 2 ? "md:col-span-2 md:max-w-sm" : ""}`}
                >
                  {/* Header */}
                  <div className="flex flex-col items-center mb-4">
                    {s.icon}
                    <h3 className="text-xl font-bold text-white mt-3">
                      {s.title}
                    </h3>
                  </div>

                  {/* Duración */}
                  <p className="text-[#F9C74F] font-semibold mb-4 text-lg">
                    Duración: {s.duration}
                  </p>

                  {/* Texto */}
                  <p className="text-[#F8F9FA]/80 text-justify leading-relaxed">
                    {s.text}
                  </p>

                </motion.div>
              ))}
            </div>
          </SwiperSlide>

        </Swiper>

        {/* FLECHAS GLOW */}
        <style>{`
          .swiper-button-next,
          .swiper-button-prev {
            color: #4CC9F0 !important;
            filter: drop-shadow(0 0 14px rgba(76, 201, 240, 0.9));
            transition: 0.25s ease-in-out;
          }

          .swiper-button-next:hover,
          .swiper-button-prev:hover {
            transform: scale(1.2);
            filter: drop-shadow(0 0 20px rgba(76, 201, 240, 1));
          }
        `}</style>

      </div>
    </section>
  );
}
