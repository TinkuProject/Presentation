import { motion } from "framer-motion";

export default function Summary() {

  return (
    <section id="resumen" className="py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">

        <h2 className="text-5xl font-extrabold text-white mb-12">
          Resumen del Proyecto
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl p-10 rounded-2xl
                     bg-white/5 backdrop-blur-xl 
                     border border-white/10 
                     shadow-[0_8px_35px_rgba(0,0,0,0.2)]"
        >
          <p className="text-[#F8F9FA]/90 text-xl font-light text-justify leading-relaxed">
            Tinku es un sistema multiplataforma para promover y gestionar emprendimientos,
            servicios y eventos en Cochabamba. Integra una aplicación web y una móvil,
            conectadas mediante una API en Node.js y una base de datos en Supabase,
            bajo una arquitectura modular y por capas.
            <br/><br/>

            El sistema fue validado mediante encuestas, pruebas de usabilidad y
            análisis de métricas reales, demostrando estabilidad, seguridad y
            efectividad para impulsar la digitalización del comercio local.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
