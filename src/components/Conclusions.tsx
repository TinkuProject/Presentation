import { motion } from "framer-motion";
import { FaRegLightbulb, FaRegCheckCircle } from "react-icons/fa";
import { FiChevronsRight } from "react-icons/fi";

export default function Conclusions() {
  return (
    <section id="conclusions" className="py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-4xl font-extrabold text-white mb-10 flex items-center justify-center gap-3">
          <FaRegLightbulb className="text-[#F9C74F] text-4xl drop-shadow" />
          Conclusiones
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-10 shadow-xl text-left"
        >
          <p className="text-[#F8F9FA]/85 text-lg leading-relaxed text-justify">
            El sistema desarrollado cumple el objetivo general y los objetivos específicos,
            integrando una aplicación web, móvil y API bajo una arquitectura modular que
            garantiza escalabilidad, mantenibilidad y seguridad. Los módulos de autenticación,
            gestión de emprendimientos, servicios, eventos, notificaciones, pagos y métricas
            fueron implementados correctamente.
            <br /><br />
            Las pruebas funcionales, técnicas y de usabilidad confirmaron la estabilidad y
            eficiencia de la plataforma, consolidando una solución tecnológica pertinente para
            fortalecer la digitalización y el posicionamiento de los emprendimientos en la región.
          </p>
        </motion.div>

        <h2 className="text-3xl font-bold text-white mt-16 mb-8 flex items-center justify-center gap-3">
          <FaRegCheckCircle className="text-[#4CC9F0] text-3xl drop-shadow" />
          Recomendaciones
        </h2>

        <div className="grid md:grid-cols-2 gap-6 text-left">
          {[
            "Realizar mantenimientos y auditorías técnicas periódicas para asegurar la continuidad del sistema.",
            "Mantener actualizadas las dependencias, especialmente las relacionadas con autenticación y seguridad.",
            "Implementar mecanismos de retroalimentación continua para orientar nuevas mejoras.",
            "Ampliar métodos de pago y optimizar los procesos de suscripción.",
            "Extender gradualmente el alcance del sistema hacia otros departamentos."
          ].map((rec, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="p-6 bg-white/10 backdrop-blur-xl rounded-xl border border-white/10 shadow-lg"
            >
              <div className="flex items-start gap-3">
                <FiChevronsRight className="text-[#FFD700] text-2xl mt-1" />
                <p className="text-[#F8F9FA]/85 leading-relaxed">{rec}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
