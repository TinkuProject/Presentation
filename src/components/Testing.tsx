import { motion } from "framer-motion";

export default function Testing() {
  const tests = [
    { title: "Pruebas unitarias", text: "Validación de funciones críticas y lógica del sistema." },
    { title: "Integración", text: "Comunicación entre API, BD y aplicaciones." },
    { title: "Rendimiento", text: "Tiempos de carga y respuesta bajo uso real." },
    { title: "Seguridad", text: "Verificación de JWT, roles y validaciones." },
    { title: "Usabilidad", text: "Evaluación del prototipo por usuarios reales." }
  ];

  return (
    <section id="pruebas" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-extrabold text-white mb-10">Pruebas</h2>

        <div className="flex gap-6 overflow-x-auto scrollbar-hidden pb-6">
          {tests.map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.06 }}
              className="min-w-[320px] p-8 bg-white/10 backdrop-blur-xl 
              rounded-3xl shadow-xl border border-white/20"
            >
              <h3 className="text-2xl font-bold text-white mb-4">{t.title}</h3>
              <p className="text-[#F8F9FA]/80">{t.text}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
