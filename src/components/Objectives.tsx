import { motion } from "framer-motion";
import { FiTarget, FiCheckCircle } from "react-icons/fi";

export default function Objectives() {
  const goals = [
    "Implementar autenticación segura y gestión de usuarios.",
    "Desarrollar catálogos digitales para negocios y servicios.",
    "Integrar notificaciones automáticas personalizables.",
    "Implementar pagos, monedas digitales y suscripciones.",
    "Incorporar reportes, métricas y análisis de uso.",
    "Gestionar eventos con inscripción y recordatorios.",
    "Establecer calificaciones, reseñas y rankings."
  ];

  return (
    <section id="objetivos" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-extrabold text-white text-center mb-16">
          Objetivos del Proyecto
        </h2>

        {/* OBJETIVO GENERAL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.6 }}
          className="p-10 mb-16 bg-gradient-to-br from-[#316CB9]/30 to-[#0374AB]/30
                     backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <FiTarget className="text-white text-4xl drop-shadow-lg" />
            <h3 className="text-3xl font-bold text-white">Objetivo General</h3>
          </div>

          <p className="text-[#F8F9FA]/90 text-lg leading-relaxed text-center max-w-3xl mx-auto">
            Desarrollar un sistema multiplataforma para la difusión y posicionamiento
            de emprendimientos y servicios en Cochabamba.
          </p>
        </motion.div>

        {/* OBJETIVOS ESPECIFICOS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {goals.map((g, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className="p-6 bg-white/10 backdrop-blur-xl rounded-2xl
                         border border-white/10 shadow-xl cursor-pointer
                         hover:bg-white/20 transition-all"
            >
              <div className="flex items-start gap-3">
                <FiCheckCircle className="text-[#FFD700] text-2xl mt-1" />
                <p className="text-[#F8F9FA]/90 text-md leading-relaxed">
                  {g}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
