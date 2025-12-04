import { motion } from "framer-motion";

export default function Methodology() {
  const items = [
    {
      title: "Metodología Ágil (Scrum)",
      text: "Se trabajó con sprints cortos, backlog priorizado, reuniones de planificación, revisión y retrospectivas para mantener un desarrollo iterativo, adaptable y centrado en entregables funcionales."
    },
    {
      title: "Kanban (gestión del flujo)",
      text: "Se utilizó un tablero Kanban en Trello para visualizar tareas, limitar trabajo en progreso y evitar cuellos de botella durante el desarrollo."
    },
    {
      title: "Modelo Híbrido (Scrum + lineamientos RUP)",
      text: "Se aplicaron prácticas ágiles para la ejecución diaria y lineamientos de RUP para la planificación, análisis, documentación (UML) y control de calidad, logrando equilibrio entre estructura y flexibilidad."
    },
    {
      title: "Proceso del Proyecto",
      text: "Análisis de requisitos → Diseño (mockups, arquitectura y UML) → Desarrollo (web, móvil y API) → Pruebas (rendimiento, seguridad y usabilidad) → Despliegue."
    }
  ];

  return (
    <section id="metodologia" className="py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-4xl font-extrabold text-white mb-12">
          Metodología
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {items.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-white/10 backdrop-blur-xl border border-white/20 
                         rounded-3xl shadow-xl"
            >
              <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-[#F8F9FA]/80">{item.text}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
