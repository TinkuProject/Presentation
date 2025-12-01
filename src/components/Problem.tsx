import { motion } from "framer-motion";

export default function Problem() {
  return (
    <section id="problema" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-extrabold text-white mb-10"
        >
          Problema y necesidad
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="p-10 bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20"
        >
          <p className="text-[#F8F9FA]/80 text-lg leading-relaxed">
            La información sobre negocios, servicios y eventos en Cochabamba está dispersa.
            Los usuarios deben consultar múltiples plataformas y los emprendedores tienen baja visibilidad.
            Esta desconexión limita el crecimiento económico y dificulta el acceso a información confiable.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
