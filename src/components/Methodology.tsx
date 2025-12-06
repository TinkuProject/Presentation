import { motion } from "framer-motion";
import { FaSwatchbook } from "react-icons/fa"; // Scrum-ish
import { TbLayoutKanban } from "react-icons/tb";
import { GiCycle } from "react-icons/gi"; // híbrido / RUP
import { LuWorkflow } from "react-icons/lu"; // proceso

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

  return (
    <section id="methodology" className="py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-4xl font-extrabold text-white mb-12">
          Metodología
        </h2>

        <div className="grid md:grid-cols-2 gap-12 ">
          {items.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-white/10 backdrop-blur-xl border border-white/20 
                         rounded-3xl shadow-xl"
            >
              <div className="flex flex-col items-center mb-2">
                {item.icon}
                <h3 className="text-2xl font-bold text-white">
                  {item.title}
                </h3>
              </div>

              <p className="text-[#F8F9FA]/80 text-justify">{item.text}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
