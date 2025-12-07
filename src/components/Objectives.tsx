import { motion } from "framer-motion";
import { FiTarget, FiCheckCircle } from "react-icons/fi";

export default function Objectives() {
  const goals = [
    "Implementar un sistema de autenticación segura, mediante mecanismos de registro, inicio de sesión y gestión de cuentas, que permita administrar el acceso de los distintos tipos de usuarios en la plataforma.",
    "Implementar funcionalidades de gestión de emprendimientos y servicios profesionales, mediante catálogos digitales con información visual y descriptiva que facilite la organización y visibilidad de cada negocio.",
    "Implementar un sistema de notificaciones, utilizando mecanismos automáticos que faciliten la comunicación entre la plataforma y los usuarios.",
    "Desarrollar un sistema de pagos que permita gestionar transacciones dentro de la plataforma, incluyendo el uso de monedas digitales, suscripciones y servicios adicionales.",
    "Implementar herramientas de análisis de datos que permitan generar reportes y métricas sobre el uso de la plataforma, apoyando la toma de decisiones estratégicas por parte de los administradores.",
    "Implementar un sistema de gestión de eventos que permitan a los usuarios crear, promocionar y participar en eventos.",
    "Establecer un sistema de posicionamiento basado en calificaciones y reseñas de usuarios para permitir destacar a los negocios y servicios mejor valorados dentro de la plataforma."
  ];

  return (
    <section id="objectives" className="py-20 px-6">
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
            Desarrollar un sistema multiplataforma, empleando una arquitectura modular, para la difusión y posicionamiento de emprendimientos comerciales y servicios profesionales en el departamento de Cochabamba.
          </p>
        </motion.div>

        {/* OBJETIVOS ESPECIFICOS */}
        <h3 className="text-3xl font-bold text-white mb-10 text-center flex items-center justify-center gap-3">
          <FiCheckCircle className="text-[#FFD700] text-3xl drop-shadow" />
          Objetivos Específicos
        </h3>

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
