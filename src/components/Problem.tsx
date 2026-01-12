import { motion } from "framer-motion";
import ZoomImage from "./ZoomImage";

export default function Problem() {
  return (
    <section id="problem" className="py-20 px-6 relative z-[1]">
      <div className="max-w-5xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-extrabold text-white mb-10"
        >
          Problemática
        </motion.h2>

        {/* CARD 1: ANÁLISIS DEL PROBLEMA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="p-10 mb-10 bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20"
        >
          <ZoomImage
            src="/diagrams/Ishikawa.png"
            alt="Diagrama de Ishikawa"
          />
        </motion.div>

        {/* CARD 2: FORMULACIÓN DEL PROBLEMA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="p-10 bg-gradient-to-br from-[#316CB9]/30 to-[#0374AB]/30
                 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Formulación del problema
          </h3>

          <p className="text-[#F8F9FA]/90 text-lg leading-relaxed text-left md:text-justify">
            ¿Cómo mejorar la difusión y el posicionamiento de los emprendimientos comerciales y servicios profesionales 
            en el departamento de Cochabamba para facilitar el acceso a información confiable y fortalecer la conexión 
            entre emprendedores, negocios y consumidores?
          </p>
        </motion.div>

      </div>
    </section>
  );
}
