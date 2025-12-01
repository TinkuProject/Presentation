import { motion } from "framer-motion";

export default function Methodology() {
  const items = [
    {
      title: "Scrum",
      text: "Uso de sprints cortos, backlog priorizado, planificación y retrospectivas para mantener un desarrollo iterativo y flexible."
    },
    {
      title: "Kanban",
      text: "Tablero visual mediante Trello para controlar el flujo de trabajo, mejorar la organización y evitar cuellos de botella."
    },
    {
      title: "RUP + Scrum (modelo híbrido)",
      text: "Se tomaron lineamientos formales de RUP para la planificación y documentación inicial, combinados con Scrum y Kanban para la ejecución diaria. Esto equilibró estructura metodológica y flexibilidad ágil."
    },
    {
      title: "Proceso de desarrollo",
      text: "Inicio → Análisis → Diseño (mockups + UML) → Construcción (web, móvil y API) → Pruebas → Despliegue."
    }
  ];

  return (
    <section id="metodologia" className="py-28 px-6">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-4xl font-extrabold text-white mb-12">Metodología</h2>

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
